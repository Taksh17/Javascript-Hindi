const randomcolour=function(){
    const hexval="0123456789ABCDEF"
    let colour="#"
    for(let i=0;i<6;i++){
        colour+=hexval[Math.floor(Math.random()*16)]

    }
    return colour;
}
let setcolour
const startchangingcolour=function(){
    setcolour= setInterval(changebgcolor,1000)
    function changebgcolor(){
document.body.style.backgroundColor=randomcolour();
    }
}
document.querySelector("#start").addEventListener('click',startchangingcolour)
const stopchangingcolour=function(){
    clearInterval(setcolour)
    
}
document.querySelector("#stop").addEventListener('click',stopchangingcolour)