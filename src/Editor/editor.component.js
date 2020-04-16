import html from './editor.component.html';

class RoutineEditor extends HTMLElement {
  connectedCallback(){
    this.innerHTML = html;
  }
}

customElements.define('routine-editor', RoutineEditor);
