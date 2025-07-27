const slider = document.getElementById('score-slider');
const scoreValue = document.getElementById('score-value');
const image = document.getElementById('feedback-image');

slider.addEventListener('input', () => {
  const value = parseInt(slider.value);
  scoreValue.textContent = value;

  // Пример замены изображений в зависимости от балла
  if (value < 50) {
    image.src = 'lowq.jpg';
  } else if (value < 90) {
    image.src = 'mid.jpg';
  } else if (value < 120) {
    image.src = 'high.jpg';
  } else {
    image.src = 'god.jpg';
  }
});


