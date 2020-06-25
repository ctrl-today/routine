import { data } from 'mockData';
import "./player.component.sass";
import html from './player.component.html';

class RoutinePlayer extends HTMLElement {

  connectedCallback(){
    const radius = 46;
    window.pd = data;

    this.currentStep = 0;

    this.circumference = radius * 2 * Math.PI;

    this.innerHTML = html;

    this.label       = this.querySelector('.RoutinePlayer__label');
    this.svg         = this.querySelector('.RoutinePlayer__svg');
    this.circle      = this.querySelector('.RoutinePlayer__circle');
    this.button      = this.querySelector('.RoutinePlayer__nextButton');
    this.stepLabel   = this.querySelector('.RoutinePlayer__stepLabel');
    this.stepDetails = this.querySelector('.RoutinePlayer__stepDetails');

    this.button.addEventListener('click', this.nextStep.bind(this));

    this.label.innerText = data.name;

    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;

    this.step(0);
  }

  step(num){
    let stepslength = data.steps.length;
    num = Math.max(0, Math.min(stepslength, num));

    if (num === stepslength){
      this.stepLabel.innerText = "COMPLETE!";
      this.stepDetails.innerText = "";
    } else {
      this.stepLabel.innerText = data.steps[num].label;
      this.stepDetails.innerText = data.steps[num].details;
    }

    this.currentStep = num;
    this.setProgress( (100/stepslength) * num);
  }

  nextStep(){
    this.step(++this.currentStep);
  }

  static get observedAttributes(){
    return [ 'progress' ];
  }

  setProgress(percent){
    this.percent = percent;
    var offset = this.circumference - percent / 100 * this.circumference;
    if(this.circle) this.circle.style.strokeDashoffset = offset;
  }
}

customElements.define('routine-player', RoutinePlayer);
