import './mirror';
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