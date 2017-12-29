ace.define('ace/worker/mirror', function (require, exports, module) {
    "use strict";

    var Range = require("../range").Range;
    var Document = require("../document").Document;
    var lang = require("../lib/lang");

    var Mirror = exports.Mirror = function (sender) {
        this.sender = sender;
        var doc = this.doc = new Document("");

        var deferredUpdate = this.deferredUpdate = lang.delayedCall(this.onUpdate.bind(this));

        var _self = this;
        sender.on("change", function (e) {
            var data = e.data;
            if (data[0].start) {
                doc.applyDeltas(data);
            } else {
                for (var i = 0; i < data.length; i += 2) {
                    if (Array.isArray(data[i + 1])) {
                        var d = {action: "insert", start: data[i], lines: data[i + 1]};
                    } else {
                        var d = {action: "remove", start: data[i], end: data[i + 1]};
                    }
                    doc.applyDelta(d, true);
                }
            }
            if (_self.$timeout)
                return deferredUpdate.schedule(_self.$timeout);
            _self.onUpdate();
        });
    };

    (function () {

        this.$timeout = 500;

        this.setTimeout = function (timeout) {
            this.$timeout = timeout;
        };

        this.setValue = function (value) {
            this.doc.setValue(value);
            this.deferredUpdate.schedule(this.$timeout);
        };

        this.getValue = function (callbackId) {
            this.sender.callback(this.doc.getValue(), callbackId);
        };

        this.onUpdate = function () {
            // abstract method
        };

        this.isPending = function () {
            return this.deferredUpdate.isPending();
        };

    }).call(Mirror.prototype);

});
ace.define('ace/worker/trd-worker',
    ["require", 'exports', 'module', 'ace/lib/oop', 'ace/worker/mirror'],
    function (acequire, exports, module) {
        console.log('worker start')
        var oop = acequire('ace/lib/oop');
        var Mirror = acequire('ace/worker/mirror').Mirror;
        var TrdWorker = function (sender) {
            Mirror.call(this, sender);
            this.setTimeout(200);
        };

        oop.inherits(TrdWorker, Mirror);

        (function () {
            this.$id = 'ace/worker/trd-worker';
            this.onUpdate = function () {
                console.log(this.doc);
                var value = this.doc.getValue();
                var annotations = validate(value);
                this.sender.emit('annotate', annotations);
            };
        }).call(TrdWorker.prototype);
        console.log('worker end')
        exports.TrdWorker = TrdWorker;
    });