import testimonials from './testimonialsDetails.js';


// header nav menu toggle 
const headerNav = document.querySelector('.header__nav');
const headerNavIcon = document.querySelector('.header__nav__icon');

headerNavIcon.addEventListener('click', () => {
    headerNav.classList.toggle('active');
})



// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Get the product container
    const testimonialContainer = document.querySelector('.testimonials .section__cards');
    console.log(testimonialContainer);
  
        testimonials.forEach((testimonial,index) => {

          console.log(index);
          const delay = 250 * (index + 1)

          const testimonialElement = document.createElement('section');
          testimonialElement.classList.add('testimonial__card');
          testimonialElement.setAttribute('data-aos','fade-down-left')
          testimonialElement.setAttribute('data-aos-offest','400')
          testimonialElement.setAttribute('data-aos-delay', delay)

          const cardTop = document.createElement('div');
          cardTop.classList.add('card__top','anim');

          const cardImg = document.createElement('img');
          cardImg.setAttribute('src', testimonial.userImg)

          const cardInfo = document.createElement('div');
          cardInfo.classList.add('card__info');

          const userName = document.createElement('h1');
          userName.classList.add('user__name');
          userName.textContent = testimonial.userName;
          
          const userInfo = document.createElement('p');
          userInfo.classList.add('user__info');
          userInfo.textContent = testimonial.userInfo;

          const userReview = document.createElement('div');
          userReview.classList.add('user__review');

          const review = document.createElement('span');
          review.classList.add('review__count');
          review.textContent = testimonial.userReview;

          const starIcon = document.createElement('i');
          starIcon.classList.add('bx',testimonial.starIcon);

          const cardContent = document.createElement('p');
          cardContent.classList.add('user__message','anim');
          cardContent.textContent = testimonial.userMessage;

          userReview.append(review);
          userReview.append(starIcon);

          cardInfo.appendChild(userName);
          cardInfo.appendChild(userInfo);

          cardTop.appendChild(cardImg);
          cardTop.appendChild(cardInfo);
          cardTop.appendChild(userReview);
          
          testimonialElement.appendChild(cardTop);
          testimonialElement.appendChild(cardContent);

          testimonialContainer.appendChild(testimonialElement);
        });
})


// email popup 
const emailPopup = document.querySelector('.email-popup');
const newsLetter = document.querySelector('.news-letter');
const bgOverlay = document.querySelector('.bg-overlay')
const popupBtn = document.querySelector('.subscribe__btn');

popupBtn.addEventListener('click', () => {
  bgOverlay.classList.toggle('popup__active');
  newsLetter.classList.toggle('popup__active');
})


