# 🌱 Seeds Frontend

This is the frontend project of **Seeds**, built with [Angular](https://angular.dev/) and [Taiga UI](https://taiga.family/).  
The repository follows a **Kanban-driven workflow** with backlog-based branches to keep Development consistent and scalable.  

---

## 🚀 Development Setup

### Local Development server
Run:

```bash
ng serve
```

Navigate to `http://localhost:4200/`.  
The app will reload automatically on file changes.  

---

## 🛠️ Contribution Workflow

We follow a **Backlog (BL)-based workflow**.  
All features, fixes, and improvements must start with a **BL task** on the Kanban board.

### Branching strategy
- **`main`** → production branch (always stable, deployed).  
- **`dev`** → integration branch (merge of BL branches).  
- **`BLXX-short-description`** → one branch per backlog item.  

🔖 Examples:
```
BL03-graduation-component
BL07-navbar-responsive
BL12-questionnaire-form
```

Always create a new branch from `dev`:

### Commit messages
- Written in **English**.  

### Pull requests
- Target branch: `dev`.  
- Description must include:
  - BL number + title  
  - Summary of changes  

At least **one review** is required before merging.  

### Release process
- After validation, `dev` is merged into `main`.  
- **Only `main` is deployed to production.**  

---

## 📄 Example Backlog (BL)

**BL03 – Graduation Component**  

**Objective:**  
Create a new Angular component for the "Graduation Teaching" page, available at `ensino/graduacao`.  

**Acceptance Criteria:**  
- Component accessible at `ensino/graduacao`.  
- Work products and Bizagi diagrams displayed correctly.  
- Project portfolio includes title, objective, client, and members.  
- Layout responsive and consistent with Seeds design.  
- PR created and reviewed before merging.  

---

## 📚 Additional Resources

- [Angular CLI Docs](https://angular.dev/tools/cli)  
- [Taiga UI Docs](https://taiga.family/)  
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)  
