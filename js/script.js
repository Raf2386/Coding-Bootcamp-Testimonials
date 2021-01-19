'use strict';

const data = [
  {
    id: 1,
    img: './images/image-tanya.jpg',
    text:
      '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    author: 'Tanya Sinclair',
    job: 'UX Engineer',
  },
  {
    id: 2,
    img: './images/image-john.jpg',
    text:
      '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    author: 'John Tarkpor',
    job: 'Junior Frontend Developer',
  },
];

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const image = document.querySelector('.carousel__img');
const user = document.querySelector('.card__quote');
const quoteText = document.querySelector('.card__quote-text');
const authorName = document.querySelector('.card__quote-author-name');
const authorJob = document.querySelector('.card__quote-author-job');

const changeContent = () => {
  for (let usr of data) {
    if (+user.dataset.id !== usr.id) {
      quoteText.textContent = usr.text;
      authorName.textContent = usr.author;
      authorJob.textContent = usr.job;
      image.src = usr.img;
      user.dataset.id = `${usr.id}`;
      return;
    }
  }
};

prevBtn.addEventListener('click', changeContent);
nextBtn.addEventListener('click', changeContent);

document.addEventListener('keyup', e => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    changeContent();
  }
});
