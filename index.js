console.log('index js file ')
const mainContainer = document.getElementById('main__container')


const missionContainer = document.querySelector('.mission__container')
const animateLeftImage = document.querySelector('.animate-leftimage')
const animateRightImage = document.querySelector('.animate-rightimage')
const animateCenterImage = document.querySelector('.animate-centerimage')

const detailContainer = document.querySelectorAll('.detail__container')

window.onscroll = () => {
    const scroll = window.scrollY
    if (scroll + 550 > missionContainer.offsetTop && missionContainer.offsetTop + missionContainer.offsetHeight > scroll + 200) {
        console.log('true')
        animateLeftImage.classList.add('animate')
        animateRightImage.classList.add('animate')
        animateCenterImage.classList.add('centeranimate')
    }
    else {
        animateLeftImage.classList.remove('animate')
        animateRightImage.classList.remove('animate')
        animateCenterImage.classList.remove('centeranimate')
    }

    detailContainer.forEach((elm, index) => {
        if (scroll + 650 > elm.offsetTop && elm.offsetTop + elm.offsetHeight > scroll) {
            let img = elm.querySelector('.animate-leftimage, .animate-rightimage')
            img.classList.add('animate')
        }

        else {
            let img = elm.querySelector('.animate-leftimage, .animate-rightimage')
            img.classList.remove('animate')
        }
    })
}



const headLine = document.querySelector('.main__container h1')

let i = 0
let isRight = true
setInterval(() => {
    if (isRight) i = i + 1
    else i = i - 1
    if (i == 100) isRight = false
    else if (i == -100) isRight = true

    headLine.style.background = `linear-gradient(90deg,white ${i}%, black)`
    headLine.style['-webkit-background-clip'] = 'text';
    headLine.style['-webkit-text-fill-color'] = 'transparent';
}, 30)