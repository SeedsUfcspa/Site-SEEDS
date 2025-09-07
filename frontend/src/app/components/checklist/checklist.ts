import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuiCheckbox } from '@taiga-ui/kit';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';

// Modelo básico de item de checklist (fácil de extender depois)
interface ChecklistItem {
  id: string;
  label: string;
  done: boolean;
  // Se marcar este item, pode revelar filhos (sub-perguntas / fase seguinte)
  children?: ChecklistItem[];
  // Campo opcional para guardar dica / ajuda
  hint?: string;
}

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiCheckbox, TuiAvatar, TuiButton],
  templateUrl: './checklist.html',
  styleUrl: './checklist.scss'
})
export class ChecklistComponent {
  // Estrutura inicial (placeholder). Cada "fase" é um item de topo do accordion conectado
  phases = signal<ChecklistItem[]>([
    {
      id: 'fase1',
      label: 'Fase 1: Preparação',
      done: false,
      children: [
        { id: 'f1-item1', label: 'Definir objetivo', done: false, hint: 'Descreva claramente o objetivo.' },
        { id: 'f1-item2', label: 'Mapear stakeholders', done: false },
        { id: 'f1-item3', label: 'Validar escopo inicial', done: false }
      ]
    },
    {
      id: 'fase2',
      label: 'Fase 2: Execução',
      done: false,
      children: [
        { id: 'f2-item1', label: 'Coletar dados', done: false },
        { id: 'f2-item2', label: 'Revisar dados coletados', done: false },
        { id: 'f2-item3', label: 'Conferir conformidade', done: false }
      ]
    },
    {
      id: 'fase3',
      label: 'Fase 3: Encerramento',
      done: false,
      children: [
        { id: 'f3-item1', label: 'Relatório final', done: false },
        { id: 'f3-item2', label: 'Reunião de lições aprendidas', done: false },
        { id: 'f3-item3', label: 'Checklist de entrega', done: false }
      ]
    }
  ]);

  // Controla qual fase está expandida (accordion conectado)
  // Começa tudo fechado; usuário precisa clicar para abrir a 1ª fase
  activePhaseIndex = signal<number | null>(null);

  // Ao marcar um item filho, recalcula status da fase
  toggleItem(phaseIdx: number, item: ChecklistItem) {
    item.done = !item.done;
    this.updatePhaseDone(phaseIdx);
  }

  // Marca todos dentro de uma fase
  markPhase(phaseIdx: number, value: boolean) {
    const cloned = [...this.phases()];
    const phase = cloned[phaseIdx];
    phase.done = value;
    phase.children?.forEach(c => (c.done = value));
    this.phases.set(cloned);
    if (value) {
      this.openNextIfAllowed(phaseIdx);
    } else {
      this.ensureActiveVisible();
    }
  }

  // Atualiza estado done da fase se todos filhos estiverem concluidos
  private updatePhaseDone(phaseIdx: number) {
    const cloned = [...this.phases()];
    const phase = cloned[phaseIdx];
    if (phase.children?.length) {
      phase.done = phase.children.every(c => c.done);
    }
    this.phases.set(cloned);
    if (phase.done) {
      this.openNextIfAllowed(phaseIdx);
    } else {
      this.ensureActiveVisible();
    }
  }

  // Avança para próxima fase automaticamente quando atual completa
  autoAdvance(phaseIdx: number) {
    const phases = this.phases();
    if (phases[phaseIdx].done && phaseIdx < phases.length - 1) {
      this.activePhaseIndex.set(phaseIdx + 1);
    }
  }

  // Percentual geral concluído (exemplo de computado simples)
  get progressPercent(): number {
    const all = this.phases().flatMap(p => p.children ?? []);
    const done = all.filter(i => i.done).length;
    return all.length ? Math.round((done / all.length) * 100) : 0;
  }

  // Retorna quantos itens concluídos em uma fase (usado no template)
  countDone(phase: ChecklistItem): number {
    return phase.children ? phase.children.filter(c => c.done).length : 0;
  }

  // Verifica se há pelo menos um item concluído na fase
  hasAnyDone(phase: ChecklistItem): boolean {
    return !!phase.children?.some(c => c.done);
  }

  // Total de itens na fase (helper simples)
  countTotal(phase: ChecklistItem): number {
    return phase.children?.length ?? 0;
  }

  isPhaseDone(phase: ChecklistItem): boolean {
    return phase.done || this.countDone(phase) === this.countTotal(phase);
  }

  setActive(i: number) {
    if (!this.canShowPhase(i)) return;
    this.activePhaseIndex.set(i);
  }

  togglePhase(i: number) {
    if (!this.canShowPhase(i)) return;
    const current = this.activePhaseIndex();
    this.activePhaseIndex.set(current === i ? null : i);
  }

  // Exibir somente a primeira fase ou fases cujas anteriores estejam concluídas
  canShowPhase(index: number): boolean {
    if (index === 0) return true;
    const prev = this.phases()[index - 1];
    return !!prev?.done;
  }

  private openNextIfAllowed(current: number) {
    const next = current + 1;
    if (this.canShowPhase(next)) {
      this.activePhaseIndex.set(next);
    }
  }

  private ensureActiveVisible() {
    const active = this.activePhaseIndex();
    if (active === null) return;
    if (!this.canShowPhase(active)) {
      for (let i = active; i >= 0; i--) {
        if (this.canShowPhase(i)) {
          this.activePhaseIndex.set(i);
          return;
        }
      }
      this.activePhaseIndex.set(0);
    }
  }

  get activePhase(): ChecklistItem | null {
    const idx = this.activePhaseIndex();
    if (idx === null) return null;
    return this.phases()[idx] ?? null;
  }
}

