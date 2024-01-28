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
  'audio6.mp3',
];

function changeContent(index) {
    let title, description;
  
    switch (index) {
      case 0:
        title = "🎉 Happy Birthday Sutapa 🎂";
        description = "Wishing you a fantastic birthday filled with joy and laughter! May your day be as sweet as cake!";
        break;
      case 1:
        title = "🌟 Cheers to You, Sutapa! 🎈";
        description = "May your day be as special as you are. Here's to another year of amazing memories and lots of cake!";
        break;
      case 2:
        title = "🎂 Time for Celebration! 🎉";
        description = "Happy Birthday! Wishing you a day filled with love, laughter, and of course, delicious cake!";
        break;
      case 3:
        title = "🎁 Best Wishes on Your Birthday! 🎊";
        description = "Sending you lots of love and good vibes on your special day. Enjoy every moment and every slice of cake!";
        break;
      case 4:
        title = "🎂 Another Year, Another Cake! 🥳";
        description = "As you blow out the candles, may all your wishes come true. Here's to a year filled with joy, success, and more cake!";
        break;
      case 5:
        title = "🍰 Happy Birthday, Sutapa! 🎉";
        description = "Wishing you a year ahead filled with happiness, prosperity, and lots of cake! Cheers to you!";
        break;
      default:
        title = `🎉 Happy Birthday Sutapa ${index + 1} 🎂`;
        description = "Wishing you a day as fabulous as you are! Happy Birthday! Enjoy the celebration and the cake!";
        break;
    }
  
    return `
      <h2 class='title'>${title}</h2>
      <p class='description'>${description}</p>
    `;
  }

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
    content.innerHTML = changeContent(index);

    listItem.appendChild(content);
    slider.appendChild(listItem);

    // Start playing the audio of the first item
    if (index === 0) {
      audio.play();
    }
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
