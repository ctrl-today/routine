import "./TaskList/task-list.js";
import "./ControlPanel/control-panel.js";

import "./player.sass";
import { FireService } from "utils/FireService.js"
import html from './player.html';

class RoutinePlayer extends HTMLElement {
  connectedCallback(){
    this.innerHTML = html;
  }
}

customElements.define('routine-player', RoutinePlayer);
