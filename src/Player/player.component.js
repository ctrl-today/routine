import { data } from 'mockData';
import "./player.component.sass";
import html from './player.component.html';

class RoutinePlayer extends HTMLElement {

 attributeChangedCallback(name, oldV, newV) {
    if (name === 'progress') {
      this.setProgress(newV);
    }
  }

  connectedCallback(){
    const stroke = 10;
    const radius = 140;
    //const normalizedRadius = radius - stroke*2;

    this.currentStep = 0;
    this.numberOfSteps = data.steps.length;

    this.circumference = radius * 2 * Math.PI;

    this.innerHTML = html;

    this.svg    = this.querySelector('.RoutinePlayer__svg');
    this.circle = this.querySelector('.RoutinePlayer__circle');
    this.button = this.querySelector('.RoutinePlayer__nextStep');

    this.setProgress(0);

    this.button.addEventListener('click', this.nextStep.bind(this));

    //this.circle.style.r  = radius;
    //this.circle.style.cx = radius;
    //this.circle.style.cy = radius;

    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
  }

  nextStep(){
    this.currentStep++;
    this.setProgress( (100/this.numberOfSteps) * this.currentStep);
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
