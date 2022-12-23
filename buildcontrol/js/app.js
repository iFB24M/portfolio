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







new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
    autoplay: {
        delay: 5000
    }
});

