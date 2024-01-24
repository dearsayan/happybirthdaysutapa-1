// script.js
const slider = document.getElementById('slider');
const prevButton = document.querySelector('.btn.prev');
const nextButton = document.querySelector('.btn.next');

const audioElements = [
  'audio1.mp3',
  'audio2.mp3',
  'audio3.mp3',
  'audio4.mp3',
  'audio5.mp3',
  'audio6.mp3'
  // Add more audio filenames as needed
];

function createSliderItems() {
  audioElements.forEach((audioFilename, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.style.backgroundImage = `url('image${index + 1}.jpeg')`;

    const audio = document.createElement('audio');
    audio.src = audioFilename;
    audio.loop = true;
    listItem.appendChild(audio);

    const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = `
      <h2 class='title'>Title ${index + 1}</h2>
      <p class='description'>Description for image ${index + 1}.</p>
      <button>Read More</button>
    `;

    listItem.appendChild(content);
    slider.appendChild(listItem);
  });
}

function handleNavigation(direction) {
  const items = document.querySelectorAll('.item');
  const currentItem = document.querySelector('.item');

  const currentAudio = currentItem.querySelector('audio');
  currentAudio.pause();

  if (direction === 'next') {
    slider.appendChild(items[0]);
  } else if (direction === 'prev') {
    slider.prepend(items[items.length - 1]);
  }

  const newCurrentItem = document.querySelector('.item');
  const audio = newCurrentItem.querySelector('audio');
  audio.play();
}

document.addEventListener('DOMContentLoaded', function () {
  createSliderItems();
});

prevButton.addEventListener('click', function () {
  handleNavigation('prev');
});

nextButton.addEventListener('click', function () {
  handleNavigation('next');
});
