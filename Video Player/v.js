document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("videoPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const stopBtn = document.getElementById("stopBtn");
  const muteBtn = document.getElementById("muteBtn");
  const fullScreenBtn = document.getElementById("fullScreenBtn");

  playPauseBtn.addEventListener("click", function() {
      if (video.paused) {
          video.play();
          playPauseBtn.textContent = "Pause";
      } else {
          video.pause();
          playPauseBtn.textContent = "Play";
      }
  });

  stopBtn.addEventListener("click", function() {
      video.pause();
      video.currentTime = 0;
      playPauseBtn.textContent = "Play";
  });

  muteBtn.addEventListener("click", function() {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? "Unmute" : "Mute";
  });

  fullScreenBtn.addEventListener("click", function() {
      if (video.requestFullscreen) {
          video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
          video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
          video.msRequestFullscreen();
      }
  });
});