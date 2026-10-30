// Carrusel automático con movimiento
let idx=0;
const slides=document.querySelectorAll('.slide');
const dotsContainer=document.querySelector('.carrusel-dots');

slides.forEach((_,i)=>{
  const dot=document.createElement('span');
  dot.style.cssText='width:10px;height:10px;border-radius:50%;background:white;opacity:.5;display:block;cursor:pointer';
  dot.onclick=()=>showSlide(i);
  dotsContainer.appendChild(dot);
});

function showSlide(n){
  slides[idx].classList.remove('active');
  dotsContainer.children[idx].style.opacity='.5';
  idx=(n+slides.length)%slides.length;
  slides[idx].classList.add('active');
  dotsContainer.children[idx].style.opacity='1';
}
setInterval(()=>showSlide(idx+1), 4000);
showSlide(0);

// Animación al hacer scroll 
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.2});
document.querySelectorAll('.timeline-item').forEach(item=>observer.observe(item));

 