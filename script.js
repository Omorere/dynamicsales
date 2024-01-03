$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Digital Marketer", "Developer", "Shopify Expert", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Digital Marketer", "Developer", "Shopify Expert", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

<!-- Add this script to your HTML file -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

  $(document).ready(function() {
    const apiKey = 'org-BCLOYKqCYMdDxt0JTbxAuCdQ'; // Replace with your API key

    // Function to send a message to ChatGPT
    function sendMessage(message) {
      $.ajax({
        type: 'POST',
        url: 'https://api.openai.com/v1/chat/completions',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        data: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
        }),
        success: function(response) {
          const reply = response.choices[0].message.content;
          displayMessage('bot', reply);
        },
        error: function(error) {
          console.error('Error sending message:', error);
        },
      });
    }

    // Function to display messages in the chat box
    function displayMessage(role, content) {
      $('#chat').append(`<div class="${role}">${content}</div>`);
      $('#inputMessage').val(''); // Clear the input field
    }

    // Event listener for the form submission
    $('#chatForm').submit(function(event) {
      event.preventDefault();
      const userMessage = $('#inputMessage').val();
      displayMessage('user', userMessage);
      sendMessage(userMessage);
    });
  });
