window.addEventListener('load', function() {
    new Glider(document.querySelector('.carousel__list'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: 'true',
        scrollLock: true,
        arrows: {
            prev: '.carousel__prev',
            next: '.carousel__next'
        },
        responsive: [
            {
                breakpoint: 375,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4
                }
            },{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            }
        ]
    })
})