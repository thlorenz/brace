    var blob;
    var workerSrc = mod.src;
    window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

    try {
      blob = new BlobBuilder();
      blob.append(workerSrc);
      blob = blob.getBlob('application/javascript');
    } catch (e) {
      blob = new Blob([ workerSrc ], { type: 'application/javascript' });
    }

    var blobUrl = (window.URL || window.webkitURL).createObjectURL(blob);

    this.$worker = new Worker(blobUrl);
