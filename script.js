
const buyerServices=["Ownership Verification","Registry Verification","RERA Verification","Legal Due Diligence","Site Inspection","Drone Survey","ROI Assessment","NRI Property Assistance"];
const sellerServices=["Property Photography","Drone Videography","Facebook Marketing","Instagram Marketing","Lead Generation","Buyer Screening","Negotiation Support","Deal Management"];
let cart=[];

function renderServices(id,list){
 document.getElementById(id).innerHTML=list.map(s=>`<div class='card'><h3>${s}</h3><p>Professional service.</p><button onclick="addCart('${s}')">Add To Cart</button></div>`).join('');
}
function addCart(s){cart.push(s);renderCart();}
function removeItem(i){cart.splice(i,1);renderCart();}
function renderCart(){
 document.getElementById('cartCount').textContent=cart.length;
 document.getElementById('cartItems').innerHTML=cart.map((x,i)=>`<div>${x} <button onclick="removeItem(${i})">Remove</button></div>`).join('');
}
function checkoutWhatsApp(){
 let msg=`Name: ${cname.value}%0APhone: ${cphone.value}%0AServices: ${cart.join(', ')}%0ALocation: ${plocation.value}%0ARequirements: ${req.value}`;
 window.open(`https://wa.me/919575957549?text=${msg}`);
}
renderServices("buyer-services",buyerServices);
renderServices("seller-services",sellerServices);

document.querySelectorAll('.counter').forEach(c=>{
 let t=+c.dataset.target,n=0;
 let i=setInterval(()=>{n++;c.textContent=n;if(n>=t)clearInterval(i)},10);
});

document.getElementById('leadForm').addEventListener('submit',e=>{
 e.preventDefault();
 const data=Object.fromEntries(new FormData(e.target).entries());
 localStorage.setItem('lead_'+Date.now(),JSON.stringify(data));
 alert('Lead saved locally');
});
