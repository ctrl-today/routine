import "./task-item.sass";
import html from './task-item.html';

export class TaskItem extends HTMLElement {
  connectedCallback(){
    this.innerHTML = html;
  }
}

customElements.define('task-item', TaskItem);
