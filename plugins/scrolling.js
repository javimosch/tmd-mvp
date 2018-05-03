import $ from 'jquery'
var globalAnchorSmoothScrollEnabled = false;
export function setGlobalAnchorSmoothScroll() {
	if(process.server) return;
	if (globalAnchorSmoothScrollEnabled) return;
	globalAnchorSmoothScrollEnabled = true;
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();

			

			 $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 500);

		});
	});
}