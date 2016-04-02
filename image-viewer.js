(function(document) {
	'use strict';

	var imageViewerElement;
	var imageViewerContentElement;
	var viewerTemplate = '' +
		'<style>' +
			'#imageViewer { background: rgba(255, 255, 255, .95); bottom: 0; cursor: pointer; display: none; left: 0; position: fixed; right: 0; top: 0; z-index: 9999; }' +
			'#imageViewer.active { display: block; }' +
			'#imageViewerContent { left: 50%; max-height: calc(100% - 40px); max-width: calc(100% - 40px); position: absolute; top: 50%; transform: translate(-50%, -50%); }' +
		'</style>' +
		'<div id="imageViewer"><img id="imageViewerContent"></div>';

	// Insert template before </body>
	document.body.insertAdjacentHTML('beforeend', viewerTemplate);

	// Get elements
	imageViewerElement = document.getElementById('imageViewer');
	imageViewerContentElement = document.getElementById('imageViewerContent')

	// Add closing function to viewer
	document.getElementById('imageViewer').addEventListener('click', function() {
		document.body.style.overflow = 'auto';
		imageViewerElement.classList.remove('active');
	});

	// Add click event listeners to image links
	Array.prototype.slice
		.call(document.querySelectorAll('[data-image-viewer]'))
		.forEach(function(imageLink) {
			imageLink.addEventListener('click', function(e) {
				e.preventDefault();
				imageViewerContentElement.src = this.href;
				imageViewerElement.classList.add('active');
				document.body.style.overflow = 'hidden';
			});
		});
})(document);
