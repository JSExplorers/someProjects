const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const section = document.querySelector('.container');
const article = document.createElement('article');
const img = document.createElement('img');
const imageContainer = document.createElement('div');
const author = document.createElement('h4');
const job = document.createElement('p');
const info = document.createElement('p');
const nextBtn = document.createElement('button');
const nextIcon = document.createElement('i');
const prevBtn = document.createElement('button');
const prevIcon = document.createElement('i');
const randomBtn = document.createElement('button');
const buttonContainer = document.createElement('div')

let aa = 0;

article.classList = 'review';
imageContainer.classList = 'img-container';
img.id = 'person-img';
img.alt = 'some test';
author.id = 'author';
job.id = 'job';
info.id = 'info';

buttonContainer.classList='button-container'

nextBtn.classList = 'next-btn';
nextIcon.classList = 'fas fa-chevron-right';

prevBtn.classList = 'prev-btn';
prevIcon.classList = 'fas fa-chevron-left';

prevBtn.appendChild(prevIcon);
nextBtn.appendChild(nextIcon);

buttonContainer.appendChild(prevBtn)
buttonContainer.appendChild(nextBtn)

randomBtn.classList = 'random-btn';
randomBtn.textContent = 'surprise me';

imageContainer.appendChild(img);
article.appendChild(imageContainer);
article.append(author);
article.appendChild(job);
article.appendChild(info);
article.appendChild(buttonContainer);

article.appendChild(randomBtn)
section.appendChild(article);

updateRevew();

function updateRevew() {
  author.textContent = reviews[aa].name;
  img.src = reviews[aa].img;
  job.textContent = reviews[aa].job;
  info.textContent = reviews[aa].text;
}

nextBtn.addEventListener('click', function () {
  aa++;
  if (aa > reviews.length - 1) {
    aa = 0;
  }
  updateRevew();
  console.log(aa);
});

prevBtn.addEventListener('click', function () {
  aa--;
  if (aa < 0) {
    aa = reviews.length - 1;
  }
  updateRevew();
  console.log(aa);
});

randomBtn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * reviews.length);
  aa = randomNumber;
  console.log(aa);
  updateRevew();
});
