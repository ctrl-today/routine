import "./TaskList/task-list.js";
import "./ControlPanel/control-panel.js";

import "./player.sass";
import html from './player.html';

class RoutinePlayer extends HTMLElement {
  connectedCallback(){
    this.innerHTML = html;
  }
}

customElements.define('routine-player', RoutinePlayer);
