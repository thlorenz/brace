var workersDic = {
  {{name1}}: {{src1}},
  {{name2}}: {{src2}}
};

var language = classname.slice(0, classname.length - 'Worker'.length).toLowerCase();
var workerSrc = workersDic[language];
var blob = new Blob([workerSrc]);
var blobUrl = window.URL.createObjectURL(blob);

this.$worker = new Worker(blobUrl);
