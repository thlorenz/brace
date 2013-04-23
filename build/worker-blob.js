var blob;

var workerSrc = mod.src;
try { 
  window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
  blob = new BlobBuilder();
  blob.append(workerSrc);
  blob = blob.getBlob();
} catch(e) {
  blob = new Blob([workerSrc]);
}
var blobUrl = (window.URL || window.webkitURL).createObjectURL(blob);

this.$worker = new Worker(blobUrl);
