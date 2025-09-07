import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuiCheckbox, TuiAvatar } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';

interface ChecklistItem {
  id: string;
  label: string;
  done: boolean;
  children?: ChecklistItem[];
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
  readonly phases = signal<ChecklistItem[]>([
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

  activePhaseIndex = signal<number | null>(null);

  readonly progressPercent = computed(() => {
    const all = this.phases().flatMap(p => p.children ?? []);
    const done = all.filter(i => i.done).length;
    return all.length ? Math.round((done / all.length) * 100) : 0;
  });

  trackByPhase(_i: number, p: ChecklistItem) { return p.id; }
  trackByItem(_i: number, it: ChecklistItem) { return it.id; }

  toggleItem(phaseIdx: number, item: ChecklistItem) {
    item.done = !item.done;
    this.syncPhaseDone(phaseIdx);
  }

  markPhase(phaseIdx: number, value: boolean) {
    const phases = [...this.phases()];
    const phase = phases[phaseIdx];
    phase.done = value;
    phase.children?.forEach(c => (c.done = value));
    this.phases.set(phases);
    if (value) this.openNextIfAllowed(phaseIdx);
  }

  countDone(phase: ChecklistItem): number {
    return phase.children ? phase.children.filter(c => c.done).length : 0;
  }

  countTotal(phase: ChecklistItem): number {
    return phase.children?.length ?? 0;
  }

  hasAnyDone(phase: ChecklistItem): boolean {
    return !!phase.children?.some(c => c.done);
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

  canShowPhase(index: number): boolean {
    if (index === 0) return true;
    const prev = this.phases()[index - 1];
    return !!prev?.done;
  }

  private syncPhaseDone(phaseIdx: number) {
    const phases = [...this.phases()];
    const phase = phases[phaseIdx];
    if (phase.children?.length) {
      phase.done = phase.children.every(c => c.done);
    }
    this.phases.set(phases);
    if (phase.done) this.openNextIfAllowed(phaseIdx);
  }

  private openNextIfAllowed(current: number) {
    const phases = this.phases();
    if (current < phases.length - 1 && phases[current].done) {
      this.activePhaseIndex.set(current + 1);
    }
  }
}

