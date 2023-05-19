let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50)
        })
    },2000);

    setTimeout(()=>{
        intro.style.top = '-100vh';
    }, 2300)


// $(document).ready(function(){
//     $(".preloader").slideUp(6000);
//     })
    
//     $("#banner").addClass("shrink");


    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 1200,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2.3,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
    
    

    // Jquerry form

    
$(document).ready(function() {
    $('#submitBtn').click(function() {
      // get the values of the name and email fields
      var name = $('#name').val();
      var email = $('#email').val();
      

      if (!email.includes("@")) {
        $('#notification').text('Please enter a valid email address.');
        return;
      }

      // display a pop-up message with the submitted values
      if (name && email) { // check that the name and email fields are not empty
        alert('Thank you, ' + name + ' for send your ideas!');
      } else {
        alert('Please fill out all fields.'); // display an error message if the fields are empty
      }

      
      
      // reset the form fields
      $('#name').val('');
      $('#email').val('');


        
