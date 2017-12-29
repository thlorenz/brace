ace.define("ace/worker/mirror",["require","exports","module","ace/range","ace/document","ace/lib/lang"], function(require, exports, module) {
  "use strict";

  var Range = require("../range").Range;
  var Document = require("../document").Document;
  var lang = require("../lib/lang");

  var Mirror = exports.Mirror = function(sender) {
    this.sender = sender;
    var doc = this.doc = new Document("");

    var deferredUpdate = this.deferredUpdate = lang.delayedCall(this.onUpdate.bind(this));

    var _self = this;
    sender.on("change", function(e) {
      var data = e.data;
      if (data[0].start) {
        doc.applyDeltas(data);
      } else {
        for (var i = 0; i < data.length; i += 2) {
          if (Array.isArray(data[i+1])) {
            var d = {action: "insert", start: data[i], lines: data[i+1]};
          } else {
            var d = {action: "remove", start: data[i], end: data[i+1]};
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
ace.define('ace/mode/trd',
    function (acequire, exports, module) {
        'use strict';
        const oop = acequire('../lib/oop');
        var TextMode = acequire('./text').Mode;
        var TrdHighLightRules = acequire('./trd_highlight_rules').TrdHighLightRules;
        var WorkerClient = acequire('../worker/worker_client').WorkerClient;
        var TrdHighlights = function () {
            this.HighlightRules = TrdHighLightRules;
        };
        oop.inherits(TrdHighlights, TextMode);
        (function () {
            this.$id = 'ace/mode/trd';
            this.createWorker = function (session) {
                this.$worker = new WorkerClient(["ace"], acequire("ace/worker/trd-worker"), "TrdWorker", "../js/trd-worker.js");
                this.$worker.attachToDocument(session.getDocument());

                this.$worker.on('errors', function (e) {
                    session.setAnnotations(e.data);
                });

                this.$worker.on('annotate', function (e) {
                    console.log('annotate');
                    console.log(e);
                    session.setAnnotations(e.data);
                });

                this.$worker.on('terminate', function () {
                    session.clearAnnotations();
                });

                return this.$worker;

            };
        }).call(TrdHighlights.prototype);
        exports.Mode = TrdHighlights;
    });
