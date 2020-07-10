import { data } from 'mockData';
import "./task-list.sass";
import html from './task-list.html';

import { TaskItem } from './TaskItem/task-item.js';

export class TaskList extends HTMLElement {

  constructor(){
    super();
    this.template = document.createElement('template');
    this.template.innerHTML = html.trim();

    this.listElm = this.template.content.querySelector('.TaskList__list');
  }

  connectedCallback(){
    this.appendChild(this.template.content);
  }

  set steps(steps) {
    this._steps = steps;
    // TODO: MOVE THIS TO A BLUK DOM OPERATION issue#14
    for(const [i, step] of steps.entries()) this.addStep(step, i);
  }

  addStep(step, i){
    step.id = i;
    let taskItem = new TaskItem(step);
    this.listElm.appendChild(taskItem);
  }

}

customElements.define('task-list', TaskList);
