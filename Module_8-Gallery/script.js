const loadButton = document.getElementById('loadButton');
const imageContainer = document.getElementById('imageContainer');
const loader = document.getElementById('loader');

// Функция для загрузки изображений
async function loadImages() {

  loader.classList.remove('hidden');

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
    if (!response.ok) {
      throw new Error('Ошибка при загрузке изображений');
    }

    const data = await response.json();

    imageContainer.innerHTML = '';

    // Добавляем картинки в галерею
    data.message.forEach(imageUrl => {
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.alt = 'Изображение собаки';
      imgElement.classList.add('gallery__image');
      imageContainer.appendChild(imgElement);
    });
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    loader.classList.add('hidden');
  }
}

loadButton.addEventListener('click', (event) => {
  event.preventDefault();
  loadImages();
});
