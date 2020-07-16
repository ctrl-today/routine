import "./progress-wheel.sass";
import html from './progress-wheel.html';

import { PlayerState } from "Player/player";

var data = {steps: [1,2,3,4,5,6]}

class ProgressWheel extends HTMLElement {

  connectedCallback() {
    const radius = 46;

    this.currentStep = 0;

    this.circumference = radius * 2 * Math.PI;

    this.innerHTML = html;

    //this.label       = this.querySelector('.progress-wheel__label');
    this.svg         = this.querySelector('.progress-wheel__svg');
    this.circle      = this.querySelector('.progress-wheel__circle');
    //this.button      = this.querySelector('.progress-wheel__nextButton');

    PlayerState.subscribe('set-percent-complete', this.setProgress.bind(this));
    this.svg.addEventListener('click', this.handleButtonPress.bind(this));

    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;

    this.setProgress(0);
  }

  handleButtonPress(){
    PlayerState.publish('complete-active-step');
  }

  setProgress(percent){
    var offset = this.circumference - Math.min(percent, 100) / 100 * this.circumference;
    if(this.circle) this.circle.style.strokeDashoffset = offset;
  }

}

customElements.define('progress-wheel', ProgressWheel);
