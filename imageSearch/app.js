const accessKey = 'HgTJDCSmkbc4rXS7h4bp2s-jMDtH0kmgNV6gnjqwXWo';
const secretKey = 'UDSMBdFRv8dvZC0IXaYWch8W_mm--AajGskOsT6Xk6g';

const formElement = document.querySelector('form');
const inputElement = document.querySelector('.input__search-box');
const imageContainer = document.querySelector('.container');
const btnLoadMore = document.querySelector('.load-more');

let inputData = '';
let page = 1;

async function searchImage() {
  inputData = inputElement.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  console.log(url);

  const response = await fetch(url);
  console.log(response, 'response');

  const data = await response.json();
  console.log(data, 'data');

  const results = data.results;
  console.log(results, 'results');

  if (page === 1) {
    imageContainer.innerHTML = '';
  }
  results.map((result) => {
    const imageWarpper = document.createElement('div');
    imageWarpper.classList.add('search__results');

    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';
    imageLink.textContent = results.alt_description;

    imageWarpper.appendChild(image);
    imageWarpper.appendChild(imageLink);
    imageContainer.appendChild(imageWarpper);
  });
  page++;
  if (page > 1) {
    btnLoadMore.style.display = 'block';
  }
}

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

btnLoadMore.addEventListener('click', () => {
  searchImage();
});
