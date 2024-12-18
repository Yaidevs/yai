/*remove class*/
$(".close").click(function(){
  $("body").removeClass("modal-open");
});

$(".close").click(function(){
  $("body").removeClass("video-modal-open");
});

$(".android-btn").click(function(){
  $("body").addClass("modal-open");
});

/*flag*/
$(document).ready(function () {
     $('.flag-container').click(function () {
         $('#countary').val($(this).children('.selected-flag').attr('title'));
         $('#countary2').val($(this).children('.selected-flag').attr('title'));
 
         $('.countary').val($(this).children('.selected-flag').attr('title'));
 
     });
 });
/*Menu Toggel*/
$(document).ready(function () {
  $(".navbar-toggle").click(function () {
    $(".desktopMenu").animate({
      width: "toggle",
    });
  });
});

/*bottom share button*/
$(".share").click(function () {
  $(".share").toggleClass("active");
  $(".share li").toggleClass("active");
});

/*Request-popup*/
$("#get-quote,.get-quote").click(function () {
  $("#req-pop-bg").show();
});

$(".close-btn").click(function () {
  $("#req-pop-bg").hide();
});

/*Request-popup*/
$("#franchis-bg").click(function () {
  $("#franchis-box").show();
});

$(".close-btn").click(function () {
  $("#franchis-box").hide();
});


$(document).ready(function () {
  $(".CareerApplyBox .accordion-list > li > .answer").hide();
  $(".CareerApplyBox .accordion-list > li > .answer:first").show();
  $(".CareerApplyBox .accordion-list > li:first").addClass("active");

  $(".CareerApplyBox .accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".CareerApplyBox .accordion-list > li.active .answer").slideUp();
      $(".CareerApplyBox .accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});


$(document).ready(function () {
  $(".accordion-list > li > .answer").hide();
  $(".accordion-list > li:first > .answer").show();
  $(".accordion-list > li:first").addClass("active");

  $(".accordion-list > li .panel-title").click(function () {
    var $parent = $(this).parent();
    if ($parent.hasClass("active")) {
      $parent.removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $parent.addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});

//newsletter form SUbmit script
$("#news-form").on("submit", function (e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  if (window.location.href.indexOf("devtechnosys-2021") > -1) {
    var path = "/devtechnosys-2021/controls/newsletter-submit.php";
  } else {
    var path = "/controls/newsletter-submit.php";
  }

  // $("#newsSubmit").text("Please wait..");
  // $("#newsSubmit").prop("disabled", true);

        $("#newsSubmit").val("Please wait..");
        $("#newsSubmit").prop("disabled", true);
        // Make the Ajax call here
        //   var formdata = new FormData(this);
        $.ajax({
          url: path,
          type: "POST",
          cache: false,
          data: $("#news-form").serialize(),
          beforeSend: function () {
            $("#newsSubmit").text("Please wait..");
            $("#newsSubmit").prop("disabled", true);
          },
          success: function (data) {
            var jsonData = JSON.parse(data);

            if (jsonData.code == "200") {
              $("#newsSubmit").val("Send Message");
              $("#newsSubmit").prop("disabled", false);
              $("#news-form").trigger("reset");
              //window.location.href = "thanks.php";

              $(".display-success").css("display", "block").fadeOut(3000);
              

            } else {
              // $("#req-pop-bg").show();
              $("#newsSubmit").val("Send Message");
              $("#newsSubmit").prop("disabled", false);
              $(".display-success").css("display", "none");

              $(".display-error").css("display", "block");
              if ($.trim(jsonData.captcha)) {
                alert(jsonData.captcha);
              }
              
              if ($.trim(jsonData.email)) {
                $("#emailNewsError").html("<ul>" + jsonData.email + "</ul>");
              } else {
                $("#emailNewsError").hide();
              }

              
            }
          },
          complete: function () {
           $("#newsSubmit").text("Subscribe now");
          },
        });
      });

//ends here

//newsletter form SUbmit script
$("#news-form1").on("submit", function (e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  if (window.location.href.indexOf("devtechnosys-2021") > -1) {
    var path = "/devtechnosys-2021/controls/offer-submission.php";
  } else {
    var path = "/controls/offer-submission.php";
  }

  // $("#newsSubmit").text("Please wait..");
  // $("#newsSubmit").prop("disabled", true);

  $("#offerSubmit1").val("Please wait..");
  $("#offerSubmit1").prop("disabled", true);
  // Make the Ajax call here
  //   var formdata = new FormData(this);
  $.ajax({
    url: path,
    type: "POST",
    cache: false,
    data: $("#news-form1").serialize(),
    beforeSend: function () {
      $("#offerSubmit1").text("Please wait..");
      $("#offerSubmit1").prop("disabled", true);
    },
    success: function (data) {
      var jsonData = JSON.parse(data);

      if (jsonData.code == "200") {
        $("#offerSubmit1").val("Send Message");
        $("#offerSubmit1").prop("disabled", false);
        $("#news-form1").trigger("reset");
        //window.location.href = "thanks.php";

        $(".display-success").css("display", "block").fadeOut(3000);
      } else {
        // $("#req-pop-bg").show();
        $("#offerSubmit1").val("Send Message");
        $("#offerSubmit1").prop("disabled", false);
        $(".display-success").css("display", "none");

        $(".display-error").css("display", "block");
        if ($.trim(jsonData.captcha)) {
          alert(jsonData.captcha);
        }

        if ($.trim(jsonData.email)) {
          $("#emailOfferError1").html("<ul>" + jsonData.email + "</ul>");
        } else {
          $("#emailOfferError1").hide();
        }
      }
    },
    complete: function () {
      $("#offerSubmit1").text("Register For Offers");
    },
  });
});

//ends here

//newsletter form SUbmit script
$("#news-form2").on("submit", function (e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  if (window.location.href.indexOf("devtechnosys-2021") > -1) {
    var path = "/devtechnosys-2021/controls/offer-submission.php";
  } else {
    var path = "/controls/offer-submission.php";
  }

  // $("#newsSubmit").text("Please wait..");
  // $("#newsSubmit").prop("disabled", true);

  $("#offerSubmit2").val("Please wait..");
  $("#offerSubmit2").prop("disabled", true);
  // Make the Ajax call here
  //   var formdata = new FormData(this);
  $.ajax({
    url: path,
    type: "POST",
    cache: false,
    data: $("#news-form2").serialize(),
    beforeSend: function () {
      $("#offerSubmit2").text("Please wait..");
      $("#offerSubmit2").prop("disabled", true);
    },
    success: function (data) {
      var jsonData = JSON.parse(data);

      if (jsonData.code == "200") {
        $("#offerSubmit2").val("Send Message");
        $("#offerSubmit2").prop("disabled", false);
        $("#news-form2").trigger("reset");
        //window.location.href = "thanks.php";

        $(".display-success").css("display", "block").fadeOut(3000);
      } else {
        // $("#req-pop-bg").show();
        $("#offerSubmit2").val("Send Message");
        $("#offerSubmit2").prop("disabled", false);
        $(".display-success").css("display", "none");

        $(".display-error").css("display", "block");
        if ($.trim(jsonData.captcha)) {
          alert(jsonData.captcha);
        }

        if ($.trim(jsonData.email)) {
          $("#emailOfferError2").html("<ul>" + jsonData.email + "</ul>");
        } else {
          $("#emailOfferError2").hide();
        }
      }
    },
    complete: function () {
      $("#offerSubmit2").text("Get Offer");
    },
  });
});

setTimeout(() => {
  
    var referrer = document.referrer;
    // console.log('jh',referrer);
    $('#referrer-cost').val(referrer);     
  
}, 3000);



$.getJSON("https://api.ipify.org/?format=json", function (e) {
    $('#ipAddress-cost').val(e.ip);        
  });

function contactForm(id){
  $('.contact-form').remove()
  
  
  let ipAdd = $('#ipAddress-cost').val();
  let reff = $('#referrer-cost').val();


  let html = `<form class="footer-form sample-form contact-form" method="post" enctype="multipart/form-data">
   <div submit-success>
   </div>
   <div class="row">
      <div class="col-md-12">
         <div class="form-group input-group">
            <input type="text" minlength="3" maxlength="55" name="fullName" id="fullName" class="input form-control"  placeholder="Full Name">
            <div class="display-error" id="nameError" style="display: none; color: red;"></div>
         </div>
      </div>
      <div class="col-md-12">
         <div class="form-group input-group">
            <input type="email" name="email" id="email" class="input form-control" placeholder="Email">
            <div class="display-error" id="emailError" style="display: none; color: red;"></div>
         </div>
      </div>
      <div class="form-group input-group margin0">
         <input type="hidden" name="ipAddress" id="ipAddress" class="input form-control" placeholder="IP" value="${ipAdd}">
         <input type="hidden" name="referrer" id="referrer" class="input form-control" placeholder="referrer" value="${reff}">
         <input type="hidden" name="countary" id="countary" class="input form-control" placeholder="referrer" value="">
         <input type="hidden" name="code" id="code"  class="input form-control" placeholder="referrer" value="">         
         <!-- <input type="hidden" name="referrer" id="referrer"  class="input form-control" placeholder="referrer" value=""> -->
      </div>
   </div>
   <div class="row">
      <div class="col-md-12">
         <div class="form-group input-group">
            <!-- <input style="width: 50px; padding-right: 0;" type="text" name="phoneNocode" placeholder="Dial Code"  class="input form-control phoneNocode"> -->
            <input type="tel" id="phoneNo" name="phoneNo" id="phoneNo"   class="input form-control phoneFlag" placeholder="Phone Number">
            <div class="display-error" id="phoneError" style="display: none; color: red;"></div>
            <!-- <input type="tel" id="phoneNo" name="phoneNo" id="phoneNo" class="input form-control" placeholder="+91-">
               <input type="hidden" id="phoneNocode" name="phoneNocode" id="phoneNocode"> -->
         </div>
      </div>
   </div>
   <div class="form-group input-group">
      <textarea  class="input form-control" name="allabout" id="allabout" placeholder="Whats your project all about ?"></textarea>
      <div class="display-error" id="contentError" style="display: none; color: red;"></div>
   </div>
   <div class="col-md-12">
      <div id="fileuploader" style="display:none;">Upload</div>
   </div>
   <div class="ReqBtn captchSendBg col-md-12 text-center margin-top0">
    <!-- <amp-recaptcha-input layout="nodisplay" name="reCAPTCHA_token" data-sitekey="6Lcoe-AUAAAAAJZbVWD3meLIhxKfeA-JgffdEXPq" data-action="reCAPTCHA_example_action">
         </amp-recaptcha-input> -->
      <!-- <div class="g-recaptcha" data-sitekey="6LfdgocUAAAAAKM8UETl-gRPf9nWpGYDYmlD-mfG"></div>
         <div class="sumitError" submit-error>
            <template type="amp-mustache">
               Oops! Error # {{message}}.
            </template>
         </div> -->
   </div>
   <div class="ReqBtn captchSendBg text-center d-flex">
      <div class="send-btn-form">
         <input type="hidden" name="recaptcha_response" id="recaptchaResponse">
         <input id="btnSubmit" type="submit" class="" value="Send Your Inquiry" />
      </div>
   </div>   
  <div class="display-success"  style="display: none; color: green;">Success</div>
  <div id="loader" class="lds-dual-ring display-none overlay"></div>
</form>`;

  // html.insertAfter(".hire-modal-box-form");
  // console.log(html,'html')
  $('#'+id).html(html);
}

var newArr = []; // this array also defined in calculate price file also

//form.php SUbmit script
// $(".contact-form").on("submit", function (e) {
$(document).on("submit",".contact-form", function (e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  if (window.location.href.indexOf("devtechnosys-2021") > -1) {
    var path = "/devtechnosys-2021/controls/form-submission.php";
  } else {
    var path = "/controls/form-submission.php";
  }

  let cal = '';
  if(newArr.length){
    cal = JSON.stringify(newArr) 
  } 
  
  $("#btnSubmit").text("Please wait..");
  $("#btnSubmit").prop("disabled", true);

  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LfnyL0eAAAAAA0B6oBY0pHD5_Bbe2x8WgF0MZbM", {
        action: "contact_form",
      })
      .then(function (token) {
        var recaptchaResponse = document.getElementById("recaptchaResponse");

        recaptchaResponse.value = token;
        $("#btnSubmit").val("Please wait..");
        $("#btnSubmit").prop("disabled", true);
        // Make the Ajax call here
        //   var formdata = new FormData(this);
        let formData = $("form.contact-form").serialize();

        $.ajax({
          url: path,
          type: "POST",
          cache: false,
          data: formData+'&&calculations='+cal,
          beforeSend: function () {
            $("#loader").removeClass("display-none");
          },
          success: function (data) {
            var jsonData = JSON.parse(data);

            if (jsonData.code == "200") {
              $("#btnSubmit").val("Send Message");
              $("#btnSubmit").prop("disabled", false);
              $("#footer-form").trigger("reset");

              window.location.href = "thanks.php";
              $(".display-error").css("display", "none");
            } else {
              // $("#req-pop-bg").show();
              $("#btnSubmit").val("Send Message");
              $("#btnSubmit").prop("disabled", false);
              $(".display-success").css("display", "none");

              $(".display-error").css("display", "block");
              if ($.trim(jsonData.captcha)) {
                alert(jsonData.captcha);
              }
              if ($.trim(jsonData.mail)) {
                alert(jsonData.mail);
              }
              if ($.trim(jsonData.name)) {
                $("#nameError").html("<ul>" + jsonData.name + "</ul>");
              } else {
                $("#nameError").hide();
              }
              if ($.trim(jsonData.phone)) {
                $("#phoneError").html("<ul>" + jsonData.phone + "</ul>");
              } else {
                $("#phoneError").hide();
              }
              if ($.trim(jsonData.email)) {
                $("#emailError").html("<ul>" + jsonData.email + "</ul>");
              } else {
                $("#emailError").hide();
              }

              if ($.trim(jsonData.content)) {
                $("#contentError").html("<ul>" + jsonData.content + "</ul>");
              } else {
                $("#contentError").hide();
              }

              if ($.trim(jsonData.year)) {
                $("#yearError").html("<ul>" + jsonData.content + "</ul>");
              } else {
                $("#yearError").hide();
              }
              if ($.trim(jsonData.month)) {
                $("#monthError").html("<ul>" + jsonData.content + "</ul>");
              } else {
                $("#monthError").hide();
              }
              if ($.trim(jsonData.job)) {
                $("#jobError").html("<ul>" + jsonData.content + "</ul>");
              } else {
                $("#jobError").hide();
              }
              if ($.trim(jsonData.file)) {
                $("#fileError").html("<ul>" + jsonData.content + "</ul>");
              } else {
                $("#fileError").hide();
              }
            }
          },
          complete: function () {
            $("#loader").addClass("display-none");
          },
        });
      });
  });
});
//ends here

//career form submit script
$("#CareerForm").on("submit", function (e) {
  if (window.location.href.indexOf("devtechnosys-2021") > -1) {
    var path = "/devtechnosys-2021/controls/career-form-submit.php";
  } else {
    var path = "/controls/career-form-submit.php";
  }
  e.preventDefault();

  $("#btnSubmit").text("Please wait..");
  $("#btnSubmit").prop("disabled", true);

  var file_data = $("#sortpicture").prop("files")[0];
  var form_data = new FormData(this);
  form_data.append("file", file_data);

  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LfnyL0eAAAAAA0B6oBY0pHD5_Bbe2x8WgF0MZbM", {
        action: "career_form",
      })
      .then(function (token) {
        var recaptchaResponse = document.getElementById("recaptchaResponse");
        recaptchaResponse.value = token;
        //alert(recaptchaResponse.value);
        $("#btnSubmit").val("Please wait..");
        $("#btnSubmit").prop("disabled", true);
        // Make the Ajax call here
        //   var formdata = new FormData(this);
        $.ajax({
          url: path,
          cache: false,
          contentType: false,
          processData: false,
          data: form_data,
          type: "post",
          beforeSend: function () {
            $("#loader").removeClass("display-none");
          },
          success: function (data) {
            var jsonData = JSON.parse(data);            
            if (jsonData.code == "200") {
              $("#btnSubmit").val("Send Message");
              $("#btnSubmit").prop("disabled", false);
              $("#footer-form").trigger("reset");

              window.location.href = "thanks.php";
              $(".display-success").css("display", "block");
              $(".display-error").css("display", "none");
            } else {
              $("#btnSubmit").val("Send Message");
              $("#btnSubmit").prop("disabled", false);
              $(".display-success").css("display", "none");

              $(".display-error").css("display", "block");
              if ($.trim(jsonData.captcha)) {
                alert(jsonData.captcha);
              }
              if ($.trim(jsonData.mail)) {
                alert(jsonData.mail);
              }
              if ($.trim(jsonData.name)) {
                $("#nameError").html("<ul>" + jsonData.name + "</ul>");
              } else {
                $("#nameError").hide();
              }
              if ($.trim(jsonData.phone)) {
                $("#phoneError").html("<ul>" + jsonData.phone + "</ul>");
              } else {
                $("#phoneError").hide();
              }
              if ($.trim(jsonData.email)) {
                $("#emailError").html("<ul>" + jsonData.email + "</ul>");
              } else {
                $("#emailError").hide();
              }
              if ($.trim(jsonData.job)) {
                $("#jobError").html("<ul>" + jsonData.job + "</ul>");
              } else {
                $("#jobError").hide();
              }
              if ($.trim(jsonData.content)) {
                $("#contentError").html("<ul>" + jsonData.content + "</ul>");
              } else {
                $("#contentError").hide();
              }
              if ($.trim(jsonData.year)) {
                $("#yearError").html("<ul>" + jsonData.year + "</ul>");
              } else {
                $("#yearError").hide();
              }
              if ($.trim(jsonData.month)) {
                $("#monthError").html("<ul>" + jsonData.month + "</ul>");
              } else {
                $("#contentError").hide();
              }
              if ($.trim(jsonData.file)) {
                $("#fileError").html("<ul>" + jsonData.file + "</ul>");
              } else {
                $("#fileError").hide();
              }
            }
          },
          complete: function () {
            $("#loader").addClass("display-none");
          },
        });
      });
  });
});

//career form ends here

//body add class fixed

$(window).scroll(function () {
  var body = $("body"),
    scroll = $(window).scrollTop();

  if (scroll >= 5) body.addClass("fixed");
  else body.removeClass("fixed");
});

$(function () {
  $("#home-port1-btm").click(function () {
    $("#home-port1").addClass("active");
  });
  $("#home-port2-btm").click(function () {
    $("#home-port2").addClass("active");
  });
  $("#home-port3-btm").click(function () {
    $("#home-port3").addClass("active");
  });
  $("#home-port4-btm").click(function () {
    $("#home-port4").addClass("active");
  });
});

$(function () {
  $(".portfolio-close").click(function () {
    $("#home-port1").removeClass("active");
    $("#home-port2").removeClass("active");
    $("#home-port3").removeClass("active");
    $("#home-port4").removeClass("active");
  });
});

function goBack() {

  window.history.back();

};

jQuery(document).ready(function($) {
var alterClass = function() {
var ww = document.body.clientWidth;
if (ww < 767) {
$('.awards-recognition,.portfolio-modal,.connect-with-sec,.blog-home,.case-home,.cta-1,.cta-animation,.cta-pink,.our-services,.portfolio-home,.request-form,.statistics,.testimonial-home,bootstrap.min.js,.client_reviews_sec,.development_process_sec,.benefits-section .benefits-sec-img,.why-hire-section .col-md-5,.prodomain-tabs-content .col-md-4.ml-auto,.cta-color.sm-cts-sec').remove();
} else if (ww >= 601) {
$('.test').addClass('blue');
};
};
$(window).resize(function(){
alterClass();
});
//Fire it when the page first loads:
alterClass();
});

$(function () {
    $(".modal-show-btn").click(function () {
     //alert('test'+ $(this).attr('data-attr'));
      $("body").addClass("modal-open");
      //$('input[name="calldate"]').trigger("focus");
      $("input[name='domain']").val($(this).attr('data-attr'));
      $(".basicDetail").css("display","none");
      $(".select-date-box").css("display","block");
     
      
    });
  
    $("#offer-modal-show-btn").click(function () {
      $("body").addClass("offer-modal-open");
    });

    $(".close").click(function () {
      $("body").removeClass("offer-modal-open");
    });

    
  
    $(".offer-box-close").click(function () {
      $(".offer-modal-btn").addClass("hide-modal");
    });
  
  });

(function () {

  var canvas, ctx;
  var points = [];
  var maxDist = 100;

  function init() {
    //Add on load scripts
    canvas = document.getElementById("snow");
    ctx = canvas.getContext("2d");
    resizeCanvas();
    pointFun();
    setInterval(pointFun, 20);
    window.addEventListener('resize', resizeCanvas, false);
  }
  //Particle constructor
  function point() {
    this.x = Math.random() * (canvas.width + maxDist) - (maxDist / 2);
    this.y = Math.random() * (canvas.height + maxDist) - (maxDist / 2);
    this.z = (Math.random() * 0.5) + 0.5;
    this.vx = ((Math.random() * 2) - 0.5) * this.z;
    this.vy = ((Math.random() * 1.5) + 1.5) * this.z;
    this.fill = "rgba(255,255,255," + ((0.4 * Math.random()) + 0.5) + ")";
    this.dia = ((Math.random() * 2.5) + 1.5) * this.z;
    points.push(this);
  }
  //Point generator
  function generatePoints(amount) {
    var temp;
    for (var i = 0; i < amount; i++) {
      temp = new point();
    };
    // console.log(points);
  }
  //Point drawer
  function draw(obj) {
    ctx.beginPath();
    ctx.strokeStyle = "transparent";
    ctx.fillStyle = obj.fill;
    ctx.arc(obj.x, obj.y, obj.dia, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
  //Updates point position values
  function update(obj) {
    obj.x += obj.vx;
    obj.y += obj.vy;
    if (obj.x > canvas.width + (maxDist / 2)) {
      obj.x = -(maxDist / 2);
    }
    else if (obj.xpos < -(maxDist / 2)) {
      obj.x = canvas.width + (maxDist / 2);
    }
    if (obj.y > canvas.height + (maxDist / 2)) {
      obj.y = -(maxDist / 2);
    }
    else if (obj.y < -(maxDist / 2)) {
      obj.y = canvas.height + (maxDist / 2);
    }
  }
  //
  function pointFun() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < points.length; i++) {
      draw(points[i]);
      update(points[i]);
    };
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    points = [];
    generatePoints(window.innerWidth / 3);
    pointFun();
  }

  //Execute when DOM has loaded
  document.addEventListener('DOMContentLoaded', init, false);
})();




         $(".tab_content").hide();
         $(".tab_content:first").show();
         
         /* if in tab mode */
         $("ul.tabs li").click(function() {
         
         $(".tab_content").hide();
         var activeTab = $(this).attr("rel"); 
         $("#"+activeTab).fadeIn();    
         
         $("ul.tabs li").removeClass("active");
         $(this).addClass("active");
         
         
         
         });
         
         
         $('ul.tabs li').last().addClass("tab_last");
         
 
  
         $(".tab_content-box").hide();
         $(".tab_content-box:first").show();
         $(".tab_content-box.active").show();
         
         /* if in tab mode */
         $(".tabs-list li").click(function() {
         
         $(".tab_content-box").hide();
         var activeTab = $(this).attr("rel"); 
         $("#"+activeTab).fadeIn();    
         
         $(".tabs-list li").removeClass("active");
         $(this).addClass("active");
         
         
         
         });
         
         
         $('.tabs-list li').last().addClass("tab_last");


         
         $('.tab-menu li').on('click', function(){
            var target = $(this).attr('data-rel');
         $('.tab-menu li').removeClass('active');
            $(this).addClass('active');
            $("#"+target).fadeIn('slow').siblings(".tab-box").hide();
            return false;
         });


         // Quick link function
          $(".quick-btn").click(function(){
            $(".quick-content").slideToggle(700);
            $(".quick-content").toggleClass("show");
          });
          
          $(".close-box").click(function(){
            $(".quick-content").slideToggle(700);
            $(".quick-content").toggleClass("hide");
          });
         
          $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
     
             if (scroll >= 500) {
                 $(".quick-content-box").addClass("show");
              } else {
                 $(".quick-content-box").removeClass("show");
             }
         });

