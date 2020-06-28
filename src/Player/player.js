import "./TaskList/task-list.js";
import "./ControlPanel/control-panel.js";

import { Pubsub } from 'utils/Pubsub.js';

import "./player.sass";
import html from './player.html';

export const PlayerState = new Pubsub();

class RoutinePlayer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;

    PlayerState.subscribe('set-current-step', this.setStep);
  }

  setStep(step) {
    console.log(step);
  }
}

customElements.define('routine-player', RoutinePlayer);
