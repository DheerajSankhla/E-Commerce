// type js hero section 
document.addEventListener("DOMContentLoaded", function() {
  let typingeffect = new Typed("#textt", {
      strings: ["New Session"], // lowercase "strings"
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000
  });
});


// filter the card according to the button 

let selectedCategory = 'all';

document.getElementById('searchInput').addEventListener('keyup', () => {
  filterCards(); // only runs when you type in the search box
});

function filterCards(category = selectedCategory) {
  // console.log("filterCards function triggered");
  const searchbox = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.cardbox')

  selectedCategory = category;

  cards.forEach(card => {
    const matchCategory = selectedCategory === 'all' || card.classList.contains(category)
    const matchBox = card.textContent.toLowerCase().includes(searchbox)

    if (matchCategory && matchBox) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// function updateCategory(category) {
//   selectedCategory = category;
//   filterCards(); // filters by category and search input together
// }


// add to cart 
document.getElementById('cart').style.display = "none";
let cart = [];
let TotalAmount = 0;


function addtocart(productName, productPrice, productImage) {
  const item = { name: productName, price: productPrice, image: productImage }
  cart.push(item);
  TotalAmount += productPrice;
  updatecart();
  updateItemCount();
  // toggleCart();
}

function updatecart() {
  const cartContainer = document.getElementById('cartItems');
  cartContainer.innerHTML = ""

  cart.forEach((item , index) => {
    cartContainer.innerHTML += `
                                <div class="cart-item d-flex align-items-center mb-2"> 
                                    <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; margin-right: 10px;">
                                    <h5>${item.name}</h5>
                                    <h5> $${item.price}</h5>
                                    <button class="btn btn-brand btn-sm")">Buy Now</button>
                                     <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
                                </div>
                               `;

   document.getElementById("totalAmount").innerText = TotalAmount.toFixed(2);
  })
}

function removeFromCart(index){
  TotalAmount -= cart[index].price
  cart.splice(index,1)
  updatecart();
  updateItemCount()
   // If the cart is empty, reset the total amount to 0
   if (cart.length === 0) {
    TotalAmount = 0;
    document.getElementById("totalAmount").innerText = TotalAmount.toFixed(2);
    document.getElementById('cart').style.display = "none"
} 

}

function toggleCart() {
  const cartElement = document.getElementById("cart");
  cartElement.style.display = cartElement.style.display === "none" ? "block" : "none";
}

function updateItemCount(){
  const itemcount = document.getElementById('itemCount')
  itemcount.innerText = cart.length
  if(cart.length==0){
    itemcount.classList.add('hidden')
  }
  else{
    itemcount.classList.remove('hidden')
  }
}



// Blog section 

const imagecontainer = document.querySelector('.image-container')
const prevbtn = document.querySelector('#prev');
const nextbtn = document.querySelector('#next');
let x =0;
let timer;

prevbtn.addEventListener('click',()=>{
  console.log("clickedx")
  x = x+45;
  clearTimeout(timer)
  updateGallery();
});

nextbtn.addEventListener('click',()=>{
  x = x-45;
  console.log("clickedy")
  clearTimeout(timer)
  updateGallery();
});

 function updateGallery(){
  
  imagecontainer.style.transform =`perspective(1000px) rotateY(${x}deg)`

  timer = setTimeout(()=>{
    x=x-45;
    updateGallery();
  },3000)
 }
 updateGallery();


//  about section clock 

const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#second')


let countdown =
parseInt(hours.innerText) * 3600 + 
parseInt(minutes.innerText) * 60 + 
parseInt(seconds.innerText);         


function updateTime(){
 let h= Math.floor(countdown/3600);
 let m = Math.floor((countdown%3600)/60)
 let s = countdown%60;


  h = h<10?"0"+h : h;
  m = m<10?"0"+m : m;
  s = s<10?"0"+s : s;
   
  hours.innerText = h;
  minutes.innerText= m;
  seconds.innerText= s;

  if (countdown > 0) {
    countdown--;
  } else {
   
    clearTimeout(timerr); 
    alert("Countdown finished!");
  }
}

// Call updateTime every second
const timerr = setInterval(updateTime, 1000);

updateTime();

