document.querySelector('.login-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevents the default action (navigation)
    
    // Show a greeting message
    alert("We're glad you're here! Proceeding to the login page.");
    
    // Redirect to the login page after a short delay
    setTimeout(function() {
        window.location.href = 'login.html';  // Redirect to login page
    }, 1000); // Wait 1 second before redirecting
});




document.querySelector('form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        event.preventDefault(); // Prevent form submission
        alert("Please fill in both fields!");
    } else {
        alert("Logging in...");
    }
});




const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const seekbar = document.getElementById("seekbar");
const currentTimeSpan = document.getElementById("current-time");
const durationSpan = document.getElementById("duration");
const albumArt = document.getElementById("albumArt");
const trackName = document.getElementById("trackName");
const downloadBtn = document.getElementById("downloadBtn");

// Define an array of tracks with their associated audio file, album cover, title, and download link
const tracks = [
  {
    src: "https://www.youtube.com/",
    image: "shiva.jpg", // replace with actual image URL for track1
    title: "Track 1 Title",
    downloadLink: "https://youtu.be/vxDbz3zHwbA?si=y0BvGvVCcvmwbdXe" // link to the audio file for download
  },
  {
    src: "https://www.youtube.com/",
    image: "pind.jpg", // replace with actual image URL for track2
    title: "Track 2 Title",
    downloadLink: "https://youtu.be/DXSDe1HF1VU?si=_Ab_zTleYpcmH2JV" // link to the audio file for download
  },
  {
    src: "https://www.youtube.com/",
    image: "hazur.jpg", // replace with actual image URL for track3
    title: "Track 3 Title",
    downloadLink: "https://youtu.be/xh_4jogs4zM?si=3QkexEsgY5t1DMIw" // link to the audio file for download
  }
];

// Start by setting the first track
let currentTrackIndex = 0;
loadTrack(currentTrackIndex);

// Play/Pause button functionality
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
});

// Update seekbar and time on audio play
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  // Update the seekbar
  const progress = (currentTime / duration) * 100;
  seekbar.value = progress;

  // Format the time
  currentTimeSpan.textContent = formatTime(currentTime);
  durationSpan.textContent = formatTime(duration);
});

// Update seekbar position when clicked
seekbar.addEventListener("input", () => {
  const seekTime = (seekbar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Function to format time (mm:ss)
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
}

// When audio metadata (duration) is loaded, set duration
audio.addEventListener("loadedmetadata", () => {
  durationSpan.textContent = formatTime(audio.duration);
});

// Change track function
function loadTrack(trackIndex) {
  const track = tracks[trackIndex];
  audio.src = track.src;
  albumArt.src = track.image;
  trackName.textContent = track.title;
  downloadBtn.href = track.downloadLink; // Set the download link to the current track
  audio.load();
}

// To change track 
// Here we're just cycling through the tracks for demonstration

let nextButton = document.createElement("button");
nextButton.textContent = "Next Track";
nextButton.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  audio.play();
});

document.body.appendChild(nextButton);