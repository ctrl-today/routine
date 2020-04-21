import html from './card.component.html';
import "./card.component.sass";

class RoutineEditorCard extends HTMLElement {
  connectedCallback(){
    this.innerHTML = html;
  }
}

customElements.define('routine-editor-card', RoutineEditorCard);
