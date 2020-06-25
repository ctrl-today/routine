import { data } from 'mockData';
import html from './editor.html';
import "./editor.sass";
import "../Player/player.js";

import { RoutineEditorCard } from "./Card/card.js";

class Step {
  constructor(){
    this.label = "";
    this.details = "";
  }
}

class RoutineEditor extends HTMLElement {
  connectedCallback(){
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    this.playerPreview = template.content.querySelector('routine-player');
    this.stepsElm      = template.content.querySelector('.RoutineEditor__steps');
    this.addStepBtn    = template.content.querySelector('.RoutineEditor__addBtn');

    this.addStepBtn.addEventListener('click', this.newStep.bind(this), false);

    for(const [i, step] of data.steps.entries()) this.addStep(step, i);

    this.appendChild(template.content);
  }

  previewStep(num){
    this.playerPreview.step(num);
  }

  newStep(){
    const newStep = new Step();
    this.addStep(newStep, data.steps.push(newStep)-1);
    console.log(data.steps);
  }

  addStep(step, i){
    let card = new RoutineEditorCard(step);
    card.addEventListener('click', ()=> this.previewStep(i), false);
    this.stepsElm.appendChild(card);
  }
}

customElements.define('routine-editor', RoutineEditor);
