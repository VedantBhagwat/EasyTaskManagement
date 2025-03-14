import { afterNextRender, Injectable, signal } from '@angular/core';
import { NewTaskData } from '../interfaces/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  allTasks = this.tasks.asReadonly();

  constructor() {
    afterNextRender(() => {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        // this.tasks = JSON.parse(tasks);
        this.tasks.set(JSON.parse(tasks));
      }
    });
  }

  addTask(data: NewTaskData, userId: string) {
    // add the new task at the start of the list
    /* this.tasks().unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: data.title,
      summary: data.summary,
      dueDate: data.date,
    }); */

    this.tasks.update((prevTasks) => [
      {
        id: new Date().getTime().toString(),
        userId: userId,
        title: data.title,
        summary: data.summary,
        dueDate: data.date,
      },
      ...prevTasks,
    ]);
    this.saveTasks();
  }

  completeTask(id: string) {
    this.tasks.update((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
