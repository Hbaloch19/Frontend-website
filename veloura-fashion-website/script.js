let cart=JSON.parse(localStorage.getItem('velouraCart')||'[]');
function updateCart(){document.querySelectorAll('#cartCount').forEach(e=>e.textContent=cart.length);localStorage.setItem('velouraCart',JSON.stringify(cart));}
function addToCart(name){cart.push(name);updateCart();alert(name+' added to your bag.');}
function openCart(){let m=document.getElementById('cartModal');if(!m)return;document.getElementById('cartText').textContent=cart.length?cart.join(' • '):'Your bag is empty.';m.classList.add('show')}
function closeCart(){document.getElementById('cartModal')?.classList.remove('show')}
function subscribe(e){e.preventDefault();document.getElementById('formMsg').textContent='Thank you — you’re on the list.';e.target.reset()}
document.addEventListener('DOMContentLoaded',()=>{updateCart();document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));document.getElementById('cartModal')?.addEventListener('click',e=>{if(e.target.id==='cartModal')closeCart()})});
