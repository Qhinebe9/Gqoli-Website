       // to handle progress bar animation
       function animateProgressBar(progressBarId, targetValue) {
        const progressBarElement = document.getElementById(progressBarId);
        progressBarElement.style.width = `${targetValue}%`;  // Animate to target value
        progressBarElement.setAttribute('aria-valuenow', targetValue);  // Update aria value
        progressBarElement.textContent = `${targetValue}%`;  // Update text content

    }
    // Function to check if an element is in the viewport
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return rect.top >= 0 && rect.top <= window.innerHeight;
}

    // Handle scroll event to trigger progress bar animations
window.addEventListener('scroll', function() {
	const progressBars = document.querySelectorAll('.progress-bar');

	
	progressBars.forEach(progressBar => {
		if (isInViewport(progressBar)) {
			// Assign target values
			let targetValue;
			if (progressBar.id === 'progressBar1') {
				targetValue = 70;
			} else if (progressBar.id === 'progressBar2') {
				targetValue = 60;
			} else if (progressBar.id === 'progressBar3') {
				targetValue = 60;
			} else if (progressBar.id === 'progressBar4') {
				targetValue = 80;
			} else if (progressBar.id === 'progressBar5') {
				targetValue = 60;
			} else if (progressBar.id === 'progressBar6') {
				targetValue = 70;
			}

			// Animate the progress bar
			animateProgressBar(progressBar.id, targetValue);
			progressBar.classList.add('animated');  // Prevent animation from running again
		}
	});
});