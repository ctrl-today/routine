import "./control-panel.sass";
import html from './control-panel.html';

import '../ProgressWheel/progress-wheel.js';

class ControlPanel extends HTMLElement {
  connectedCallback(){
    this.innerHTML = html;
  }
}

customElements.define('control-panel', ControlPanel);
