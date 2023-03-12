
const Img=document.querySelector('.dice')
let side=1

document.addEventListener('keypress', () => {
    let ImgSrc=Img.getAttribute('src')
    let ImageNumber=ImgSrc.slice(8,9)
    if (side===6) {
        side=1
    } else {
        side=side+1
    }
    Img.src="img/side" + side + ".svg"
})

