const headerSwiper1 = new Swiper('.swiperHeader', { 
  slidesPerView: 2,
  breakpoints: {
    600: {
      slidesPerView: 4,
    },
  },
});
headerSwiper1.on('slideChange', function () {
  if (headerSwiper1.isEnd){
    console.log("isEnd");
  }
})

var moykaswiper = undefined;

$(document).ready(function() {
  
  $('.swiperHeader .swiper-wrapper a').click(function(){

    $('main').hide();
    $('.swiperHeader .swiper-wrapper .swiper-slide a.active').removeClass('active');
    $(this).addClass('active');    
    var panel = $(this).attr('href');
    $(panel).fadeTo(0, 1)
    var sel = panel + " .moyka"
    if (moykaswiper !=undefined){
      moykaswiper.destroy()
      moykaswiper = undefined
    }
    
    moykaswiper = new Swiper(sel, {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,

      pagination: {
        el: `${panel} .swiper-pagination`,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  
    })

    setInitialState(`${panel} section .contentWrapper > div`)
    setInitialState(`${panel} .needs .content ul`)
    setInitialState(`${panel} .instructions ul li`)



    $(`${panel} .instructions ul li`).click(function() {
      console.log(`${panel} .instructions ul li`);
      var id = $(this).attr('id');
      let res = id.substr(-1);
      moykaswiper.slideTo(Number(res))
    });

    const getNeedsEl = $(`${panel} .needs`)
    getNeedsEl.removeClass('closed')

    const getInstrEl = $(`${panel} .instructions`)
    getInstrEl.removeClass('closed')

    const getNeedsCloseButton = $(`${panel} .needs .shevron_wrapper img`)
    getNeedsCloseButton.on('click', function(e){
      getNeedsEl.toggleClass('closed')
      e.stopImmediatePropagation();
    })
    
    const getNeedsOpenButton = $(`${panel} .needsOpenButton `)
    getNeedsOpenButton.on('click', function(e){
      getNeedsEl.toggleClass('closed')
      e.stopImmediatePropagation();
    })
    
    const getInstrCloseButton = $(`${panel} .instructions .shevron_wrapper img`)
    getInstrCloseButton.on('click', function(e){
      console.log(`getInstrEl.classList.toggle('closed')`);
      getInstrEl.toggleClass('closed')
      e.stopImmediatePropagation();
    })
    
    
    const getInstrOpenButton = $(`${panel} .instructionOpenButton`)
    getInstrOpenButton.on('click', function(e){
      getInstrEl.toggleClass('closed')
      e.stopImmediatePropagation();
    })

    moykaswiper.on('slideChange', function () {
      // Центральный сегмент
      getEl=document.querySelectorAll(`${panel} section .contentWrapper > div`)
      arr = Array.from(getEl)
      arr.forEach(el => {
        if (el.classList.contains("active")) {
          el.classList.remove("active")
        }      
      });
      getTargetEl = document.querySelector(`${panel} section .contentWrapper > div#moyka-${moykaswiper.realIndex}`)
      getTargetEl.classList.add("active") 
      
      // Инструкция
      getElInst=document.querySelectorAll(`${panel} .instructions ul li`)
      arr = Array.from(getElInst)
      arr.forEach(el => {
        if (el.classList.contains("active")) {
          el.classList.remove("active")
        }      
      });
      getTargetElInstr = document.querySelector(`${panel} .instructions ul li#moykaInstr-${moykaswiper.realIndex}`)
      getTargetElInstr.classList.add("active")

      // Нужно
      getElNeed=document.querySelectorAll(`${panel} .needs .content ul`)
      arr = Array.from(getElNeed)
      arr.forEach(el => {
        if (el.classList.contains("active")) {
          el.classList.remove("active")
        }      
      });
      getTargetElneed = document.querySelector(`${panel} .needs .content ul#moykaNeeds-${moykaswiper.realIndex}`)
      getTargetElneed.classList.add("active") 

      // console.log(">>isBeginning>> ", moykaswiper.isBeginning);
      // console.log(">>isEnd>> ", moykaswiper.isEnd);
    });
    return false;
    
  });

  $('.swiperHeader .swiper-wrapper .swiper-slide:first a').click();
  
  function setInitialState(par1){
    const getAllEl = document.querySelectorAll(par1)
    const getTab = par1.substring(par1.lastIndexOf(' ') + 1)
 
    arr = Array.from(getAllEl)
    arr.forEach((el, ind) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active")  
      } 
      if(ind == 0 && getTab != "li"){
        el.classList.add("active")
      }     
    });
  }
 
});
