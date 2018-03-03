var jsonexport = require('jsonexport/dist');

function downloadFile(content, fileName, mimeType) {
  var a = document.createElement('a');
  mimeType = mimeType || 'application/octet-stream';

  if (navigator.msSaveBlob) { // IE10
    navigator.msSaveBlob(new Blob([content], {
      type: mimeType
    }), fileName);
  } else if (URL && 'download' in a) { //html5 A[download]
    a.href = URL.createObjectURL(new Blob([content], {
      type: mimeType
    }));
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
  }
}

export async function download(fileName, data,rowDelimiter = '|'){
  return new Promise((resolve, reject)=>{
    console.log(data,'DATA')
    jsonexport(data, {rowDelimiter}, function(err, csv){
      if(err){
        console.error(err);
        reject(err);
      }else{
        downloadFile(csv, fileName, 'text/csv;encoding:utf-8');  
      }
    });
  });
}