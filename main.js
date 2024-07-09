/*var swiper = new Swiper(".coming-container",{
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:55000,
        disableOnInteraction: false,

    },
    centeredSlides: true,
    breakpoints:{
        0: {
            slidesPerView: 2,
        },
        568:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 4,
        },
        968:{
            slidesPerView: 5,
        },
    },
})*/

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const  close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}
/*
window.alert = function(message, timeout=null){
  const alert = document.createdElemnt('div');
  const alertButton = document.createElement('button');
  alertButton.innerText = "OK";
  alert.classList.add('alert');
  alert.setAttribute('style',`
    position: fixed;
    top: 100px;
    left: 50%;
    padding:20px;
    border-radius:10px;
    box-shadow: 0 10px 5px 0 #00000022;
    display:flex;
    flex-direction:column;
     border: 1px solid #333;
     transform: translateX(-50%)

  `);
  alertButton.setAttribute('style',`
    border: 1px solid #333;
    background:white;
    border-radius: 5px;
    padding: 5px;
    `)
  alert.innerHTML = `<span style="padding:10px">${message}</span>`;
  alert.appendChild(alertButton);
  alertButton.addEventListener('click',(e)=>{
    alert.remove();
  });
  if(timeout != null){
    setTimeout(()=>{
        alert.remove();
    }, Number(timeout))
  }
  document.body.appendChild(alert);
}
*/
  