# Workflow

This document defines the standard workflow for managing tasks and development in the **Forte** project. It establishes a structured process to ensure tasks are completed effectively from start to finish.

## 1. **Backlog**

Create a task in the **Backlog** using GitHub Projects. This serves as the collection point for all new tasks to be tracked and prioritized.

## 2. **Ready**

Once the task is well-defined, including its microtasks in a checklist, move it to the **Ready** column. This indicates that the task is prepared and awaiting to be worked on.

## 3. **In Progress**

### a. Move the task to "In Progress"

When you begin working on a task, move it to the **In Progress** column. This indicates that work on the task has started.

### b. Create a new branch from `dev`

Create a new branch from `dev` using a descriptive name, such as `task/initial-project-setup`. This isolates the task, ensuring that the `dev` branch remains stable while work continues on this specific task.

### c. Develop the task

Start developing the task according to its checklist. Make **frequent commits** aligned with each step, ensuring the commit messages are clear and descriptive. For example `git commit -m "Create docs folder"`

This maintains a well-documented history of changes throughout the task.

### d. Test locally

After completing the task, perform **local tests** to ensure that everything works as expected before considering the task ready for integration.

## 4. **In Review**

### a. Merge task branch into `dev`

Once the task is complete and tested locally, push and merge the task branch into `dev`.

### b. Move the task to "In Review"

After the merge, move the task to the **In Review** column. Take time to review the changes to ensure everything functions correctly.

### c. Perform integration tests in `dev`

After merging the task into `dev`, run **integration tests** to ensure that all changes from different tasks are compatible and do not conflict with each other.

## 5. **Done**

### a. Merge `dev` into `main`

Once all tasks in `dev` are tested and confirmed working, merge the `dev` branch into `main`. This reflects a stable, production-ready version of the project.

### b. Move the task to "Done"

Once the merge into `main` is complete, move the task to the **Done** column in GitHub Projects, marking it as fully completed and deployed.

---

### Summary

This workflow establishes a clear process for managing tasks and development in the **Forte** project. By following these stages, tasks are tracked from creation to completion, ensuring that all work is documented and integrated efficiently. This approach provides a solid foundation for managing development efforts.

---
