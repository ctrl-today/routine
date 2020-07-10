import "./task-item.sass";
import html from './task-item.html';

import { PlayerState } from "Player/player";

export class TaskItem extends HTMLElement {
  constructor(step){
    super();
    this.step = step;
  }
  connectedCallback(){
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    this.elm = {
      label:         template.content.querySelector('.TaskItem__label'),
      inputCheckbox: template.content.querySelector('.TaskItem__inputCheckbox'),
    };

    this.elm.label.innerHTML = this.step.label;
    this.elm.inputCheckbox.addEventListener('change', this.toggleStep.bind(this));

    PlayerState.subscribe('set-active-step', this.checkActive.bind(this));

    this.appendChild(template.content);
  }

  toggleStep(e) {
    this.step.complete = e.target.checked;
    PlayerState.publish('toggle-step', this.step);
  }

  checkActive(step){
    if(step === this.step)  this.classList.add('TaskItem--active');
    else if (this.classList.contains('TaskItem--active')) this.classList.remove('TaskItem--active');
  }
}

customElements.define('task-item', TaskItem);
