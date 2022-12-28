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



spoilers = document.querySelectorAll('.spoiler');

spoilers.forEach(spoiler => {
    spoiler.addEventListener('click', e => {
        spoiler.classList.toggle('_spoiler-opened');
    });
});




new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination"
    },
    centeredSlides: true
});

