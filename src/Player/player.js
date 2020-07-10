import "./ControlPanel/control-panel.js";
import { TaskList } from "./TaskList/task-list.js";

import { FireService } from "utils/FireService.js"
import { Pubsub } from 'utils/Pubsub.js';

import "./player.sass";
import html from './player.html';

export const PlayerState = new Pubsub();

class RoutinePlayer extends HTMLElement {

  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    this.elm = {
      taskList: template.content.querySelector('task-list')
    };

    document.addEventListener('DOMContentLoaded', async event => {
      const fs = new FireService();
      this.routine = await fs.getRoutines();

      this.appendChild(template.content);
      this.elm.taskList.steps = this.routine.steps;
      this.setActiveStep(this.routine.steps[0]);
    });

    PlayerState.subscribe('toggle-step', this.toggleStep.bind(this));
  }

  toggleStep(step) {
    if(this.activeStep === step || this.isStepBeforeActiveStep(step)) this.findActiveStep();
  }

  setActiveStep(step){
    this.activeStep = step;
    if (step) {
      PlayerState.publish('set-active-step', step);
    }
  }

  isStepBeforeActiveStep(step){
    for(let i = 0; i<this.routine.steps.length; i++){
      let s = this.routine.steps[i];
      if (s === step) return true;
      else if (s === this.activeStep) return false;
      else continue;
    }
  }

  findActiveStep(){
    let i;
    for(i = 0; i<this.routine.steps.length; i++)
      if (!this.routine.steps[i].complete) break;

    if(i !== this.routine.steps.length){
      this.setActiveStep(this.routine.steps[i]);
    } else {
      console.log("Routine Complete");
      // ROUTINE COMPLETE

    }

  }

}

customElements.define('routine-player', RoutinePlayer);
