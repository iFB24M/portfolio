class FqueryObject {
    constructor (objects) {
        self.objects = document.querySelectorAll(objects);
    }
    event (event, func) {
        self.objects.forEach(object => {
            object.addEventListener(event, (e) => {
                func(object, e);
            });
        });
    }
    addClass(Class) {
        self.objects.forEach(object => {
            object.classList.add(Class);
        })
    }
    remClass(Class) {
        self.objects.forEach(object => {
            object.classList.remove(Class);
        })
    }
    togClass(Class) {
        self.objects.forEach(object => {
            object.classList.toggle(Class);
        })
    }
    doFun(fun) {
        self.objects.forEach(object => {
            fun(object);
        });
    }
}

let $ = (selector) => {
    return new FqueryObject(selector)
}


$('#menu-icon').event('click', () => {
    $('html').togClass('_menu-opened')
});



const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      centeredSlides: true,
      breakpoints: {
        768: {
          slidesPerView: 2.2,
        }
      }
});

