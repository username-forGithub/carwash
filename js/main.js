var ind=0
var url = window.location.href
url = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
if (url == "protirka"){
  ind = 1
} 
if (url == "suxaya"){
  ind = 2
} 
if (url == "vlajnaya"){
  ind = 3
}
const headerSwiper1 = new Swiper('.swiperHeader', { 
  slidesPerView: 2,
  breakpoints: {
    600: {
      slidesPerView: 4,
    },
  },
});

headerSwiper1.slideTo(ind)

const moykaswiper = new Swiper('.moyka', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
  });

moykaswiper.on('slideChange', function () {
    // Центральный сегмент
    getEl=document.querySelectorAll("section .contentWrapper > div")
    arr = Array.from(getEl)
    arr.forEach(el => {
      if (el.classList.contains("active")) {
        el.classList.remove("active")
      }      
    });
    getTargetEl = document.querySelector(`section .contentWrapper > div#moyka-${moykaswiper.realIndex}`)
    getTargetEl.classList.add("active") 
    
    // Инструкция
    getElInst=document.querySelectorAll(".instructions ul li")
    arr = Array.from(getElInst)
    arr.forEach(el => {
      if (el.classList.contains("active")) {
        el.classList.remove("active")
      }      
    });
    getTargetElInstr = document.querySelector(`.instructions ul li#moykaInstr-${moykaswiper.realIndex}`)
    getTargetElInstr.classList.add("active")

    // Нужно
    getElNeed=document.querySelectorAll(".needs .content ul")
    arr = Array.from(getElNeed)
    arr.forEach(el => {
      if (el.classList.contains("active")) {
        el.classList.remove("active")
      }      
    });
    getTargetElneed = document.querySelector(`.needs .content ul#moykaNeeds-${moykaswiper.realIndex}`)
    getTargetElneed.classList.add("active") 
});

  $('.instructions ul li').click(function() {
    var id = $(this).attr('id');
    let res = id.substr(-1);
    moykaswiper.slideTo(Number(res))
  });

 
const getNeedsCloseButton = document.querySelector(".needs .shevron_wrapper img")
getNeedsCloseButton.addEventListener('click', function(){
  const getNeedsEl = document.querySelector('.needs')
  getNeedsEl.classList.toggle('closed')
})

const getNeedsOpenButton = document.querySelector(".needsOpenButton")
getNeedsOpenButton.addEventListener('click', function(){
  const getNeedsEl = document.querySelector('.needs')
  getNeedsEl.classList.toggle('closed')
})

const getInstrCloseButton = document.querySelector(".instructions .shevron_wrapper img")
getInstrCloseButton.addEventListener('click', function(){
  const getInstrEl = document.querySelector('.instructions')
  getInstrEl.classList.toggle('closed')
})

const getInstrOpenButton = document.querySelector(".instructionOpenButton")
getInstrOpenButton.addEventListener('click', function(){
  const getInstEl = document.querySelector('.instructions')
  getInstEl.classList.toggle('closed')
})
