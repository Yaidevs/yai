$('.btn').click(function() {
  $('.modal#'+$(this).data('dialog')).addClass('modal--active');
});
$('.modal-dialog__close').click(function() {
  $('.modal').removeClass('modal--active');
});



$(".menu-icon").click(function(){
 
  $(".navlist-main").toggleClass("show");
});


 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	

$('.owl-carousel.keyfetures-owl').owlCarousel({
    
    loop:true,
    margin:30,
    nav:false,
   responsive:{
             0:{
                stagePadding: 0,
                 items:1
             },
            481:{
                stagePadding: 10,
                 items:2
             },
             576:{
                stagePadding: 10,
                 items:2
             },
            992:{
                  stagePadding: 10,
                 items:3
             
             },
             1000:{
                  stagePadding: 50,
                 items:4
             },
              1400:{
                  stagePadding: 50,
                 items:5
             }
    }
})


$('.owl-carousel.our-industries').owlCarousel({
     
    loop:true,
    margin:30,
    nav:false,
      responsive:{
             0:{ stagePadding: 0,
                 items:1
             },
            481:{
               stagePadding: 10,
                 items:2
             },
             576:{
               stagePadding: 10,
                 items:2
             },
            992:{
               stagePadding: 90,
                 items:3
             
             },
             1000:{
                  stagePadding: 190,
                 items:3
             },
              1400:{
                  stagePadding: 290,
                 items:4
             }
    }
})


$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
   
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 8,
    dots: false,
    nav: false,
    margin: 3,
     smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100,
    responsive:{
             0:{
                 items:3
             },
            481:{
                 items:4
             },
             576:{
              
                 items:4
             },
            992:{
             
                 items:6
             
             },
             1000:{
                 
                 items:8
             }
  
   
   }
})

    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});




$('.blog-box .btn-group-box .common-btn').click(function(){
  $('body').addClass('hidescroll');
});

$('.modal-dialog__close').click(function(){
  $('body').removeClass('hidescroll');
});




