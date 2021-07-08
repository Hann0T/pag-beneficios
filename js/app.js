const config = {
    type: 'carousel',
    startAt: 0,
    perView: 6,
    gap: 20,
    autoplay: 1800,
    hoverpause: true,
    perTouch: 2,
    breakpoints: {
        1024: {
            perView: 4
        },
        625: {
            perView: 2
        }
    }
}
new Glide('.glide',config).mount()