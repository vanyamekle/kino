const swiper = new Swiper('.swiper-container', {
        slidesPerView:1,
        loop:true,
        navigation: {
            nextEl: '.arrow',
          },
          breakpoints: {
            540: {
              slidesPerView: 2
            }
          }
      });

        var menuButton = document.querySelector('.menu-button');
        var menu = document.querySelector('.links_header');
        menuButton.addEventListener('click', function () {
                menuButton.classList.toggle ('menu-button-active');
                menu.classList.toggle('links_header-active');
        })