var html2pdf, html2canvas, jsPDF;
if (isClient()) {
	html2pdf = require('html2pdf.js');
	html2canvas = require('html2canvas');
	jsPDF = require('jspdf');
}

function isClient() {
	return typeof window !== 'undefined';
}

export function renderPdfFromHtml(html) {
	return new Promise((resolve, reject) => {
		if (!isClient()) {
			return console.log('fromHTML disabled (no browser)');
		}
		html2pdf.makePDF = overwriteMakePDF();
		html2pdf(html, {
			margin: 1,
			image: {
				type: 'jpeg',
				quality: 0.98
			},
			html2canvas: {
				dpi: 192,
				letterRendering: true
			},
			jsPDF: {
				unit: 'in',
				format: 'letter',
				orientation: 'portrait'
			},
			then: function(pdf) {
				resolve(pdf);
				//iframe.src = pdf.output('datauristring');
				//pdf.save('filename');
			}
		});
	});
}

function overwriteMakePDF() {
	return function(canvas, pageSize, opt) {
		var ctx = canvas.getContext('2d');
		var pxFullHeight = canvas.height;
		var pxPageHeight = Math.floor(canvas.width * pageSize.inner.ratio);
		var nPages = Math.ceil(pxFullHeight / pxPageHeight);
		var pageCanvas = document.createElement('canvas');
		var pageCtx = pageCanvas.getContext('2d');
		var pageHeight = pageSize.inner.height;
		pageCanvas.width = canvas.width;
		pageCanvas.height = pxPageHeight;
		var pdf = new jsPDF(opt.jsPDF);
		for (var page = 0; page < nPages; page++) {
			if (page === nPages - 1) {
				pageCanvas.height = pxFullHeight % pxPageHeight;
				pageHeight = pageCanvas.height * pageSize.inner.width / pageCanvas.width;
			}
			var w = pageCanvas.width;
			var h = pageCanvas.height;
			pageCtx.fillStyle = 'white';
			pageCtx.fillRect(0, 0, w, h);
			pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);
			if (page) pdf.addPage();
			var imgData = pageCanvas.toDataURL('image/' + opt.image.type, opt.image.quality);
			pdf.addImage(imgData, opt.image.type, opt.margin[1], opt.margin[0],
				pageSize.inner.width, pageHeight);
			if (opt.enableLinks) {
				var pageTop = page * pageSize.inner.height;
				opt.links.forEach(function(link) {
					if (link.clientRect.top > pageTop && link.clientRect.top < pageTop + pageSize.inner.height) {
						var left = opt.margin[1] + link.clientRect.left;
						var top = opt.margin[0] + link.clientRect.top - pageTop;
						pdf.link(left, top, link.clientRect.width, link.clientRect.height, {
							url: link.el.href
						});
					}
				});
			}
		}
		if (opt.then) {
			opt.then(pdf);
			return;
		}
		pdf.save(opt.filename);
	}
}