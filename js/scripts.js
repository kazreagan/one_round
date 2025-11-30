// Year
document.getElementById('year').textContent = new Date().getFullYear();


// Slider
const slides = Array.from(document.querySelectorAll('.slide'));
let idx = 0;
const setActive = (i) => {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
};
document.getElementById('prev').addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length; setActive(idx);
});
document.getElementById('next').addEventListener('click', () => {
    idx = (idx + 1) % slides.length; setActive(idx);
});
setInterval(() => { idx = (idx + 1) % slides.length; setActive(idx); }, 6000);

// MENU TOGGLER
const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    menuToggle.classList.remove("active");
  });
});


// Play Video
const playButtons = document.querySelectorAll('.card .play');
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const videoPlayer = document.getElementById('videoPlayer');
const closeModal = document.getElementById('closeModal');

function closeVideoModal() {
  videoModal.style.display = "none";
  videoFrame.src = "";
  videoPlayer.pause();
  videoPlayer.src = "";
}

playButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const card = btn.closest('.card');
    const videoUrl = card.getAttribute('data-video');

    if (videoUrl.endsWith(".mp4")) {
      videoPlayer.src = videoUrl;
      videoPlayer.style.display = "block";
      videoFrame.style.display = "none";
      videoPlayer.play();
    } else {
      videoFrame.src = videoUrl + "?autoplay=1";
      videoFrame.style.display = "block";
      videoPlayer.style.display = "none";
    }

    videoModal.style.display = "flex";
  });
});

closeModal.addEventListener('click', closeVideoModal);

window.addEventListener('click', e => {
  if (e.target === videoModal) {
    closeVideoModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === "Escape" && videoModal.style.display === "flex") {
    closeVideoModal();
  }
});
