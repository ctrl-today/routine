import "./task-item.sass";
import html from './task-item.html';

import { PlayerState } from "Player/player";

export class TaskItem extends HTMLElement {
  constructor(task){
    super();
    this.task = task;
  }
  connectedCallback(){
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    this.elm = {
      label:         template.content.querySelector('.TaskItem__label'),
      inputCheckbox: template.content.querySelector('.TaskItem__inputCheckbox'),
    };

    this.elm.label.innerHTML  = this.task.label;
    this.elm.inputCheckbox.addEventListener('change', this.toggleStep.bind(this));

    this.appendChild(template.content);
  }

  toggleStep(){
    PlayerState.publish('set-current-step', this.task.label);
  }
}

customElements.define('task-item', TaskItem);
