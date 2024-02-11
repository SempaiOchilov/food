

let btns = document.querySelectorAll('#btns')






let first_modal = document.querySelector('.modal')
let close_modal = document.querySelector('.modal__close')
let body = document.querySelector("body")

btns.forEach(btn => {

    btn.onclick = () => {
        first_modal.style.display = 'flex'

        body.style.overflow = "hidden"

    }

})

close_modal.onclick = () => {

    first_modal.style.display = 'none'
    body.style.overflow = "scroll"

}







const slides = document.querySelectorAll('.offer__slide');
let slidesindex = 0;
let numcurr = document.querySelector('#current')

let totalnum = document.querySelector('#total')

slides.forEach(slide => slide.classList.add('hide', 'fade'));
slides[slidesindex].classList.remove('hide');

const next_btn = document.querySelector('.offer__slider-next');
const prev_btn = document.querySelector('.offer__slider-prev');

// function slidesshow(n) {
//     slides.forEach(slide => slide.classList.add('hide', 'fade'));
//     slides[slidesindex].classList.add('hide');

//     slidesindex = (slidesindex + n) % slides.length;
//     slides[slidesindex].classList.remove('hide');



// }


function slidesshow(n) {
    slides.forEach(slide => {


        slide.classList.add('hide', 'fade')


    });

    slidesindex = (slides.length + slidesindex + n) % slides.length;

    slides[slidesindex].classList.remove('hide');
}

next_btn.onclick = () => {
    slidesshow(1);
    numcurr.innerText =  "0" + slidesindex
};

prev_btn.onclick = () => {
    slidesshow(-1);
    numcurr.innerText =  "0" + slidesindex

};


