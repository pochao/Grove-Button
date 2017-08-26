var b = require('bonescript');
var events = require('events'); 
var util = require('util');

module.exports = function Button(pin) {
    events.EventEmitter.call(this);
    b.pinMode(pin, b.INPUT);
    b.attachInterrupt(pin, true, b.CHANGE, interruptCallback);
    
    var self = this;
    function interruptCallback(x) {
        if (x.value) {
            self.emit('click');
        }
    }
}

util.inherits(module.exports, events.EventEmitter);
