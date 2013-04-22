var workerSrc = {{src}};
var blob = new Blob([workerSrc]);
var blobUrl = window.URL.createObjectURL(blob);

this.$worker = new Worker(blobUrl);
