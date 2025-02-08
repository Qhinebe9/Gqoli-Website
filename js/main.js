//about me video handling
const video = document.getElementById('video');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressBar = document.getElementById('video-progress');
  const progressBarFilled = document.getElementById('video-done');
  const volumeSlider = document.getElementById('volumeSlider');

  // Play/Pause Button Toggle
  playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playPauseBtn.textContent = 'Pause';
    } else {
      video.pause();
      playPauseBtn.textContent = 'Play';
    }
  });

  // Update Progress Bar
  video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBarFilled.style.width = progress + '%';
  });

  // Seek Video Progress
  progressBar.addEventListener('click', (e) => {
    const progress = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = progress;
  });

  // Volume Control
  volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
  });
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
				targetValue = 80;
			} else if (progressBar.id === 'progressBar2') {
				targetValue = 75;
			} else if (progressBar.id === 'progressBar3') {
				targetValue = 70;
			} else if (progressBar.id === 'progressBar4') {
				targetValue = 75;
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

//handling navigation link clicks to trigger the fade-in effect
const navl= document.querySelectorAll('#nav-section a');
navl.forEach(link=>{
	link.addEventListener('click',function(e){
		e.preventDefault();
		const targetSectionId =e.target.getAttribute('href').substring(1);
		document.getElementById(targetSectionId).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

