export class Pubsub {

  constructor(target){
    if (target) {
      target.subscribe  = this.subscribe;
      target.unsubscribe = this.unsubscribe;
      target.publish = this.publish;
    }
  }

  subscribe(e,f){
    this._events    = this._events    || {};
    this._events[e] = this._events[e]	|| [];
    if (typeof f === 'function') this._events[e].push(f);
  }

  unsubscribe(e,f){
		if(this._events || this._events[e]) this._events[event].splice(this._events[event].indexOf(f), 1);
  }

  publish(e, ...a){
		if(this._events || this._events[e]) for (let i=0; i<this._events[e].length; i++) this._events[e][i](...a)
  }
}
