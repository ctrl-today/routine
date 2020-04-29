import html from './card.component.html';
import "./card.component.sass";

export class RoutineEditorCard extends HTMLElement {
  constructor(step){
    super();
    this.step = step || {};
  }
  connectedCallback(){
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    this.label   = template.content.querySelector('.RoutineCard__label');
    this.details = template.content.querySelector('.RoutineCard__details');

    this.label.value   = this.step.label || "";
    this.details.value = this.step.details || "";

    this.appendChild(template.content);
  }
}

customElements.define('routine-editor-card', RoutineEditorCard);
