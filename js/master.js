var swiper = new Swiper('.swiper-container',{
// Optional parameters
direction: 'horizontal',
// autoHeight: true, //enable auto height
 loop: true,
 //slidesPerView: 3,
 //spaceBetween: 10,
 effect:"slide",
 speed:5000,
// autoplay:true,
 initialSlide:0,

 //onlyExternal:true,
 //noSwiping:true,
 //allowSlidePrev:false,
   autoplay:
    {
      delay: 1000,
      disableOnInteraction:false,
    }
  });
