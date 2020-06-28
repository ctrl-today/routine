import { data } from 'mockData';
import "./task-list.sass";
import html from './task-list.html';

import { TaskItem } from './TaskItem/task-item.js';
import { FireService } from "utils/FireService.js"

class TaskList extends HTMLElement {
  connectedCallback(){
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    this.listElm = template.content.querySelector('.TaskList__list');


    document.addEventListener('DOMContentLoaded', async event => {
      const fs = new FireService();
      let routine = await fs.getRoutines();

      for(const [i, step] of routine.steps.entries()) this.addStep(step, i);

      this.appendChild(template.content);
    });
  }

  addStep(step, i){
    step.id = i;
    let taskItem = new TaskItem(step);
    this.listElm.appendChild(taskItem);
  }
}

customElements.define('task-list', TaskList);
