import {EventEmitter} from 'events';

class Counter extends EventEmitter {
    constructor() {
        super();
        this.number = 0;
    }

    increase() {
        this.number++;
        this.emit('increase', this.number);
        this._checkThresholds();
    }

    decrease() {
        this.number--;
        this.emit('decrease', this.number);
        this._checkThresholds();
    }

    _checkThresholds() {
        if (this.number === 0) {
            this.emit('zero');
        } else if (this.number > 0) {
            this.emit('positive', this.number);
        } else {
            this.emit('negative', this.number);
        }
    }
}

const counter = new Counter();

counter.on('increase', num => console.log(`Number increased to: ${num}`));
counter.on('decrease', num => console.log(`Number decreased to: ${num}`));
counter.on('zero', () => console.log('Counter is zero!'));
counter.on('positive', num => console.log(`Counter is positive: ${num}`));
counter.on('negative', num => console.log(`Counter is negative: ${num}`));

counter.increase();
counter.increase();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.increase();
counter.increase();