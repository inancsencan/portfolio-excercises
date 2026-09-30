console.log("JavaScript is connected.");

const slides = document.getElementById("slides");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentRoom = 0;

const totalRooms = 3;

function updateRoom() {
  slides.style.transform = `translateX(-${currentRoom * 100}vw)`;
}

nextBtn.addEventListener("click", function () {
  currentRoom = currentRoom + 1;

  if (currentRoom >= totalRooms) {
    currentRoom = 0;
  }

  updateRoom();
});

prevBtn.addEventListener("click", function () {
  currentRoom = currentRoom - 1;

  if (currentRoom < 0) {
    currentRoom = totalRooms - 1;
  }

  updateRoom();
});
