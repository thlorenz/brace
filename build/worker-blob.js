    var workerSrc = mod.src;
    var Blob = require('w3c-blob');
    var blob = new Blob([ workerSrc ], { type: 'application/javascript' });
    var blobUrl = (window.URL || window.webkitURL).createObjectURL(blob);

    this.$worker = new Worker(blobUrl);
