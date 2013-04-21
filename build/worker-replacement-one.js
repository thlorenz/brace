var workerSrc = {{src}};
var blob = new Blob([workderSrc]);
var blobUrl = window.URL.createObjectURL(blob);

this.$worker = new Worker(blobUrl);
