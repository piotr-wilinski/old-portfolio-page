//menu icon, menu slide, inactive background
const hamburger = document.querySelector('div.icon');
const menu = document.querySelector('div.menu');
const blank = document.querySelector('div.blank');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('change');
  menu.classList.toggle('change');
  blank.classList.toggle('change');
})

blank.addEventListener('click', function () {
  hamburger.classList.remove('change');
  menu.classList.remove('change');
  blank.classList.remove('change');
})

//scroll animation
function scrollAnimation() {
  //zmienne główne
  const windowHeight = window.innerHeight;
  const scrollValue = window.scrollY;

  //zmienne dla pierwszej sekcji w main
  const firstHeader = document.querySelector(".first-header");
  const firstHeaderFromTop = firstHeader.offsetTop;
  const firstHeaderHeight = firstHeader.offsetHeight;

  const firstSpan = document.querySelector(".one");
  const firstSpanFromTop = firstSpan.getBoundingClientRect().top;
  const firstSpanHeight = firstSpan.offsetHeight;

  const secondSpan = document.querySelector(".two");
  const secondSpanFromTop = secondSpan.getBoundingClientRect().top + scrollValue;
  const secondSpanHeight = secondSpan.offsetHeight;

  const thirdSpan = document.querySelector(".three");
  const thirdSpanFromTop = thirdSpan.getBoundingClientRect().top + scrollValue;
  const thirdSpanHeight = thirdSpan.offsetHeight;

  const fourthSpan = document.querySelector(".four");
  const fourthSpanFromTop = fourthSpan.getBoundingClientRect().top + scrollValue;
  const fourthSpanHeight = fourthSpan.offsetHeight;

  const firstText = document.querySelector(".text-one");
  const secondText = document.querySelector(".text-two");
  const thirdText = document.querySelector(".text-three");
  const fourthText = document.querySelector(".text-four");

  //zmienne do drugiej sekcji w main
  const secondHeader = document.querySelector(".second-header");
  const secondHeaderFromTop = secondHeader.offsetTop;
  const secondHeaderHeight = secondHeader.offsetHeight;

  const offerOne = document.querySelector(".item1");
  const offerOneFromTop = offerOne.getBoundingClientRect().top + scrollValue;
  const offerOneHeight = offerOne.offsetHeight;

  const offerTwo = document.querySelector(".item2");
  const offerTwoFromTop = offerTwo.getBoundingClientRect().top + scrollValue;
  const offerTwoHeight = offerTwo.offsetHeight;

  const offerThree = document.querySelector(".item3");
  const offerThreeFromTop = offerThree.getBoundingClientRect().top + scrollValue;
  const offerThreeHeight = offerThree.offsetHeight;

  const offerFour = document.querySelector(".item4");
  const offerFourFromTop = offerFour.getBoundingClientRect().top + scrollValue;
  const offerFourHeight = offerFour.offsetHeight;

  const offerFive = document.querySelector(".item5");
  const offerFiveFromTop = offerFive.getBoundingClientRect().top + scrollValue;
  const offerFiveHeight = offerFive.offsetHeight;

  const offerSix = document.querySelector(".item6");
  const offerSixFromTop = offerSix.getBoundingClientRect().top + scrollValue;
  const offerSixHeight = offerSix.offsetHeight;

  //zmienne do trzeciej sekcji w main
  const thirdHeader = document.querySelector(".third-header");
  const thirdHeaderFromTop = thirdHeader.offsetTop;
  const thirdHeaderHeight = thirdHeader.offsetHeight;

  const img0 = document.querySelector(".img0");
  const img0FromTop = img0.getBoundingClientRect().top + scrollValue / 2;
  const img0Height = img0.offsetHeight;

  //zmienne do form
  const formHeader = document.querySelector('.form-header');
  const formHeaderFromTop = formHeader.offsetTop;
  const formHeaderHeight = formHeader.offsetHeight;

  //warunki do pierwszej sekcji w main
  if (scrollValue > firstHeaderFromTop + firstHeaderHeight - windowHeight) {
    firstHeader.classList.add('active');
  }
  if (scrollValue > firstSpanFromTop + firstSpanHeight - windowHeight) {
    firstSpan.classList.add('active');
    firstText.classList.add('active');
  }
  if (scrollValue > secondSpanFromTop + secondSpanHeight - windowHeight) {
    secondSpan.classList.add('active');
    secondText.classList.add('active');
  }
  if (scrollValue > thirdSpanFromTop + thirdSpanHeight - windowHeight) {
    thirdSpan.classList.add('active');
    thirdText.classList.add('active');
  }
  if (scrollValue > fourthSpanFromTop + fourthSpanHeight - windowHeight) {
    fourthSpan.classList.add('active');
    fourthText.classList.add('active');
  }

  //warunki do drugiej sekcji w main
  if (scrollValue > secondHeaderFromTop + secondHeaderHeight - windowHeight) {
    secondHeader.classList.add('active');
  }
  if (scrollValue > offerOneFromTop + offerOneHeight - windowHeight) {
    offerOne.classList.add('active');
  }
  if (scrollValue > offerTwoFromTop + offerTwoHeight - windowHeight) {
    offerTwo.classList.add('active');
  }
  if (scrollValue > offerThreeFromTop + offerThreeHeight - windowHeight) {
    offerThree.classList.add('active');
  }
  if (scrollValue > offerFourFromTop + offerFourHeight - windowHeight) {
    offerFour.classList.add('active');
  }
  if (scrollValue > offerFiveFromTop + offerFiveHeight - windowHeight) {
    offerFive.classList.add('active');
  }
  if (scrollValue > offerSixFromTop + offerSixHeight - windowHeight) {
    offerSix.classList.add('active');
  }

  //warunki do trzeciej sekcji w main
  if (scrollValue > thirdHeaderFromTop + thirdHeaderHeight - windowHeight) {
    thirdHeader.classList.add('active');
  }
  if (scrollValue > img0FromTop + img0Height - windowHeight) {
    img0.classList.add('active');
  }

  //warunki do form
  if (scrollValue > formHeaderFromTop + formHeaderHeight - windowHeight) {
    formHeader.classList.add('active');
  }
}

document.addEventListener('scroll', scrollAnimation)

//przewijane menu
$('a').on('click', function () {
  const goToSection = '#' + $(this).attr('class');
  $('body, html').animate({
    scrollTop: $(goToSection).offset().top - 65
  }, 800)
})

//form
$(document).ready(function () {
  $('html').on('submit', '#contact-form', function (e) {
    e.preventDefault();
    $('#send-form-status').html('').hide();
    var data = $('#contact-form').serialize();
    $.post('/send-form.php', data, function (res) {
      $('#send-form-status').html(res.msg).show();
      if (res.status == 1) {
        $('#contact-form')[0].reset();
      }
    })
  })
})

//projekty
const modal = document.querySelector('.modal');

const imgOne = document.querySelector(".img0");
const modalImg = document.querySelector('.modal-img');
const captionText = document.querySelector('.caption');

imgOne.addEventListener('click', function () {
  modal.style.display = 'block';
  modalImg.src = imgOne.src;
  captionText.textContent = this.alt;
})

const span = document.querySelector('.close');

span.addEventListener('click', function () {
  modal.style.display = 'none';
})