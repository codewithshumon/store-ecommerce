//copy menu for mobile

function copyMenu() {
  //copy inside desk dpt to mobile dpt
  let dptCategory = document.querySelector(".dpt-cart");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //copy inside desk nav to mobile nav
  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //copy inside desk topnav to mobile topnav
  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();




//show mobile menu
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const addClass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});





//show sub menu on mobile
const subMenu = document.querySelectorAll(".has-chaild .icon-small");

subMenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  subMenu.forEach((iitem) =>
    iitem != this
      ? iitem.closest(".has-chaild").classList.remove("expand")
      : null
  );
  if (this.closest(".has-chaild").classList != "expand") {
    this.closest(".has-chaild").classList.toggle("expand");
  }
}



// Initialize Swiper
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});





// show search bottom
const searchButton = document.querySelector('.t-search');
const tClose = document.querySelector('.search-close');
const showClass = document.querySelector('.site')


searchButton.addEventListener('click', function () {
  showClass.classList.toggle('showsearch')
});

tClose.addEventListener('click', function (e) {
  e.preventDefault()
  showClass.classList.remove('showsearch')
});



//stikey header
const stickeyHeader = document.querySelector('.header-nav');
const scrollWather = document.createElement('div');

scrollWather.setAttribute('watcher', '');
stickeyHeader.before(scrollWather);

const headerObserver = new IntersectionObserver((entrise) => { 
  stickeyHeader.classList.toggle('stickey', !entrise[0].isIntersecting)
}, {rootMargin: "400px 0px 0px 0px"});


headerObserver.observe(scrollWather)



//show dpt menu
const dptButton = document.querySelector('.dpt-cart .dpt-trigger'),
      dptClass = document.querySelector('.site');

dptButton.addEventListener('click', () => {
  dptClass.classList.toggle('showdpt')
});



//product image slider
const productThumb = new Swiper ('.small-image', {
  loop: true,
  speaceBetween: 10,
  slidesPerView: 3,
  freeMood: true,
  watchSlidesProgress: true,
  breakpoints: {
    590: {
      speaceBetween: 10
    }
  }

});

const productBig = new Swiper ('.big-image', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: productThumb
  }
})


//stock product bar with percentage
const stocks = document.querySelectorAll('.products .stock');

for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock, //let stock = stocks[x].getAttribute('data-stock'),
  available = stocks[x].querySelector('.qty-available').innerHTML,
  sold = stocks[x].querySelector('.qty-sold').innerHTML,
  percent = sold*100/stock;

  stocks[x].querySelector('.available').style.width = percent + '%';
}



// show mobile cart on click
const divPopup = document.querySelector('.mini-cart');
const divTrigger = document.querySelector('.cart-trigger')
 
divTrigger.addEventListener('click', () => {
  setTimeout(() => {
    if(!divPopup.classList.contains('show')) {
      divPopup.classList.add('show');
    }
  }, 100)
});

document.addEventListener('click', () => {
  if(divPopup.classList.contains('show')) {
    divPopup.classList.remove('show')
  }
});
//another way
// const filter = '.filter' "if you add this line"
// const ftrShow = document.querySelector('.filter');
// const ftrTrigger = document.querySelector('.filter-trigger');


//"you need to add those line"
// document.addEventListener('click', (e) => {
//   const isClosest = e.target.closest(filter)
//   if(!isClosest && ftrShow.classList.contains('show')) {
//     ftrShow.classList.remove('show')
//   }
// })





// show modal on window load
// window.onload = () => {
//   document.querySelector('.site').classList.toggle('showmodal')
// };
// document.querySelector('.modalclose').addEventListener('click', () => {
//   document.querySelector('.site').classList.remove('showmodal')
// });
