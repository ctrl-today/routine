import "./progress-wheel.sass";
import html from './progress-wheel.html';

class ProgressWheel extends HTMLElement {
  connectedCallback(){
    this.innerHTML = html;
  }
}

customElements.define('progress-wheel', ProgressWheel);
