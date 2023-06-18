



//Copy this. Change .addClass animation and #elementId    


//Section 2 Why become a web developer?
$(window).scroll(function () {
    $('#whywebdev').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideRight');
        }else{
        $(this).removeClass('slideRight');
        }
    });
   });

//Section 2 Computer svg
$(window).scroll(function () {
    $('#svg1').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideRight');
        }else{
        $(this).removeClass('slideRight');
        }
    });
   });

//Section 2 Learning to code
$(window).scroll(function () {
    $('#learntocode').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideLeft');
        }else{
        $(this).removeClass('slideLeft');
        }
    });
   });

   


// Section 3 bar Skillboxes (individual)
$(window).scroll(function () {
    $('#skillbox1').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideRight');
        }else{
        $(this).removeClass('slideRight');
        }
    });
   });

   // Section 3 bar Skillboxes (individual)
$(window).scroll(function () {
    $('#skillbox2').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideRight');
        }else{
        $(this).removeClass('slideRight');
        }
    });
   });

   // Section 3 bar Skillboxes (individual)
$(window).scroll(function () {
    $('#skillbox3').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideLeft');
        }else{
        $(this).removeClass('slideLeft');
        }
    });
   });

   // Section 3 bar Skillboxes (individual)
$(window).scroll(function () {
    $('#skillbox4').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideLeft');
        }else{
        $(this).removeClass('slideLeft');
        }
    });
   });

//section 3b Title
$(window).scroll(function () {
    $('#section3b-title').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideRight');
        }else{
        $(this).removeClass('slideRight');
        }
    });
   });

// Section 3b Text paragraph
   $(window).scroll(function () {
    $('#section3b-text').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideRight');
        }else{
        $(this).removeClass('slideRight');
        }
    });
   });

//phone image
$(window).scroll(function () {
    $('#phoneicon').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideLeft');
        }else{
        $(this).removeClass('slideLeft');
        }
    });
   });
   
//Title bar text animation
$(window).scroll(function () {
    $('#titleText').each(function () {
    var topOfWindow = $(window).scrollTop(),
    bottomOfWindow = topOfWindow + $(window).height();
   
      var imagePos = $(this).offset().top;
   
      if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
        $(this).addClass('slideExpandUp');
        }else{
        $(this).removeClass('slideExpandUp');
        }
    });
   });


