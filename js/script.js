//=========== menu burger ===================
"use strict"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const headerMenu = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener("click", function(){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
        
    });
}
//============================================

// ============================ ПРОКРУТКА ================
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            
            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                headerMenu.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// ==================== BTN-HOME ====================
$(document).ready(function(){
    $("#btn-home").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
                    top = $(id).offset().top;
            
            //анимируем переход на расстояние - top за 400 мс
            $('body,html').animate({scrollTop: top}, 400);
    });
});

jQuery(function(f){
    var element = f('#btn-home');
    f(window).scroll(function(){
            element['fade'+ (f(this).scrollTop() > 230 ? 'In': 'Out')](0);           
    });
});
// const package = document.querySelector('.package');
// if (package) {
//     package.addEventListener("click", function(){
//         document.body.classList.toggle('_lock2');
//         // iconMenu.classList.toggle('_active');
//         // menuBody.classList.toggle('_active');
//     });
// }
//===================================================

//==================== ЗМІНА ФУРНІТУРИ =====================
const changeElemBtns = document.querySelectorAll('.change-elem__btn');
const changeElementColors = document.querySelectorAll('.change__element-color');

// console.log(showCheckedElem);

if (changeElemBtns){
    for (let index = 0; index < changeElemBtns.length; index++) {
        const changeElemBtn = changeElemBtns[index];

        changeElemBtn.addEventListener("click", function(e) {
            const changeElemShow = changeElemBtn.getAttribute('class').replace('change-elem__btn ', '');
            var changeElemTarger = document.getElementById(changeElemShow);
            changeElemTarger.classList.toggle('_active');
            var changeColorBtns = document.getElementsByClassName('change__elements-btns _active');
            if (changeColorBtns) {
                for (let i = 0; i < changeColorBtns.length; i++) {
                    let changeColorBtn = changeColorBtns[i];
                    changeColorBtn.classList.remove('_active');
                    changeElemTarger.classList.add('_active');
                }
            }
            e.preventDefault();
        });
    }
}

if (changeElementColors){
    for (let color = 0; color < changeElementColors.length; color++) {
        const changeElementColor = changeElementColors[color];
        changeElementColor.addEventListener("click", function(e) {
                    const changeColorShow = changeElementColor.getAttribute('class')
                    .replace('change__element-color ', '');
                    var changeColorTarget = document.getElementById(changeColorShow);
                    var elem4ChangeSrc = changeColorTarget.getAttribute('data-src');
                    changeColorTarget.setAttribute('src', elem4ChangeSrc);
                    var showCheckedElem = 'url(./images/icons/arrow.svg),';
                    let getObjectsSrc = changeColorTarget.getAttribute("object-atr");
                    let getElems = document.getElementsByClassName(getObjectsSrc);
                            for (let index = 0; index < getElems.length; index++) {
                                const getElem = getElems[index];
                                if (getElem.classList.contains('_active')) {
                                    // changeElementColor.style("background:`showCheckedElem` ");
                                    getElem.classList.remove('_active');
                                    changeColorTarget.classList.add('_active');
                                }
                            }
            e.preventDefault();
        });
    }
}


//====================== ЗАВАНТАЖЕННЯ SRC ==============================

// var viewBlocks = document.querySelectorAll('.view__blocks');
// if (viewBlocks){
//     for (let index = 0; index < viewBlocks.length; index++) {
//         const viewBlock = viewBlocks[index];
//         viewBlock.addEventListener("click", function(e) {
//             var viewBlockShows = viewBlock.getAttribute('class').replace('image view__blocks view', 'block');
//             var viewImgShows = 'img' + viewBlockShows;
//             // console.log(viewBlockShows);
//             // var caruselBlockShows = viewBlock.getAttribute('class').replace('image view__blocks ', '');
//             // var viewBlockHides = viewBlock.getAttribute('class').replace('image view__blocks ', '');
//             var viewBlockShow = document.getElementById(viewBlockShows);
//             var showImages = document.querySelectorAll('.' + viewImgShows);
//             // console.log(showImages);
//             for (let i = 0; i < showImages.length; i++) {
//                 const showImage = showImages[i];
//                 // console.log(showImage);
//                 var showDataSrcImage = showImage.getAttribute('data-src');
//                 // console.log(showDataSrcImage);
//                 showImage.setAttribute('src', showDataSrcImage);

//             }
//             // var showImage = showImages.getAttribute('data-set');

            
//             viewBlockShow.classList.add('_active');
//             // caruselBlockShow.classList.add('_active');
//             var carusel = document.getElementsByClassName('test-view _active');
//         if (carusel) {
//             viewBlockShow.addEventListener("click", function(e){
//                 viewBlockShow.classList.remove('_active');
//                 // caruselBlockShow.classList.remove('_active');
//                 e.preventDefault();
//             });
//         }
//         e.preventDefault();
//     });
// }
// }



            // const objects3Imgs = document.getElementsByClassName('objects__img _show3');
            // for (let c = 0; c < objects3Imgs.length; c++) {
            //     const objects3Img = objects3Imgs[c];
            //     if (objects3Img) {
            //         objects3Img.classList.remove('_active3', '_show3');
            //     } else {
            //         // closeImg(objectsImg);
            //         return;

            //     }
                
            //     console.log(objects3Imgs);
            //     const changeColorShow = changeElementColor.getAttribute('class').replace('change__element-color ', '');
            //     const changeColorTarget = document.getElementById(changeColorShow);
            //         objects3Img.classList.remove('_active3')
            //         changeColorTarget.classList.add('_active3', '_show3');
            //         console.log(changeColorTarget);
            // }
            // e.preventDefault();



// ======================== SLIDER =====================
$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow:4,
        slidesToScroll:2,
        speed: 800,
        // easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnFocus: true,
        draggable: false,
        // swipe: true,
        // touchThreshold: 7,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        focusOnSelect: false,
        // asNavFor: ".slider__text",
        // centerPadding: '60px',
        // variableWidth: true,
        // vertical: false,
        // verticalSwiping: false,
        responsive:[
            {
                breakpoint: 1309.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992.98,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // centerMode: true,
                
                }
            },
            {
                breakpoint: 558.98,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                
                }
            }
        ]
        
    });

    // $('.slider__text').slick({
    //     arrows: false,
    //     fade: true,
    //     dots: false,
    //     infinite: true,
    //     asNavFor:".slider"
    // });
});
$(document).ready(function(){
    $('.slider2').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow:3,
        slidesToScroll:1,
        speed: 800,
        // easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnFocus: true,
        draggable: false,
        // swipe: true,
        // touchThreshold: 7,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        focusOnSelect: false,
        // asNavFor: ".slider__text",
        // centerPadding: '60px',
        // variableWidth: true,
        // vertical: false,
        // verticalSwiping: false,
        responsive:[
            // {
            //     breakpoint: 1309.98,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //     }
            // },
            {
                breakpoint: 992.98,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                
                }
            },
            {
                breakpoint: 558.98,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                
                }
            }
        ]
        
    });

    // $('.slider__text').slick({
    //     arrows: false,
    //     fade: true,
    //     dots: false,
    //     infinite: true,
    //     asNavFor:".slider"
    // });
});
// ================== SALLING FURNITURE change =============

const sliderButtons = document.getElementsByClassName('slider__checked');
// console.log(sliderButtons);
if (sliderButtons.length > 0) {
    initChanges();
}
    
function initChanges() {
    for (let index = 0; index < sliderButtons.length; index++) {
        const sliderButton = sliderButtons[index];
        initChange(sliderButton)
        // console.log(sliderButton);
    }
}
function initChange(sliderButton) {
    // .addEventListener
    sliderButton.addEventListener("click", function (e) {
        // if (sliderButton.checked = true) {
            
            var hideSliders = document.getElementsByClassName('slider');
            if (hideSliders) {
                for (let i = 0; i < hideSliders.length; i++) {
                    const hideSlider = hideSliders[i];
                    console.log(hideSlider);
                    hideSlider.classList.remove('_active');
                }
            }
            var getId = sliderButton.getAttribute("for");
            console.log(getId);
            var showSliders = document.getElementsByClassName(getId);
            console.log(showSliders);
            for (let index = 0; index < showSliders.length; index++) {
                const showSlider = showSliders[index];
                console.log(showSlider);
                showSlider.classList.add('_active');
            }
            // e.preventDefault();
        // }
    });
} 
// }
// =========================== RATING =======================

const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    var ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating__set')) {
            setRating(rating);
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }
    function setRatingActiveWidth (index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    // можливість користувачу вказувати рейтинг
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseenter", function(e) {
                initRatingVars(rating);
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleave", function (e) {
                setRatingActiveWidth(); 
            });
            ratingItem.addEventListener("click", function (e) {
                initRatingVars(rating);
                // відправити на сервер
                if (rating.dataset.ajax) {
                    setRatingValue(ratingItem.value, rating);
                } else {
                    // просто відобразити оцінку
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                }
            });
            
        }
    }
    async function setRatingValue(value, rating) {
        if (!rating.classList.contains('rating_sending')) {
            rating.classList.add('rating_sending');
            let response = await fetch('rating.json', {
                method: 'GET',

                // body: JSON.stringify({
                //     userRating: value
                // }),
                // headers: {
                //     'content-type': 'application/json'
                // }

            });
            if (response.ok) {
                const result = await response.json();
                const newRating = result.newRating;
                ratingValue.innerHTML = newRating;
                setRatingActiveWidth();
                // rating.classList.remove('rating_sending');
                
            } else {
                alert("Виникла помилка з відправкою оцінки");
                rating.classList.remove('rating_sending');
            }
        }
    }
}
