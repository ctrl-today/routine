import { data } from 'mockData';
import html from './editor.component.html';
import "./editor.component.sass";

import "./Card/card.component.js";

class RoutineEditor extends HTMLElement {
  connectedCallback(){
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    this.playerPreview = template.content.querySelector('routine-player');
    this.stepsElm = template.content.querySelector('.RoutineEditor__steps');

    for(const [i, step] of data.steps.entries()) {
      console.log(i);
      let cardElm = document.createElement('routine-editor-card');
      cardElm.addEventListener('click', ()=> this.previewStep(i), false);
      this.stepsElm.appendChild(cardElm);
    }

    this.appendChild(template.content);
  }

  previewStep(num){
    this.playerPreview.step(num);
  }
}

customElements.define('routine-editor', RoutineEditor);
