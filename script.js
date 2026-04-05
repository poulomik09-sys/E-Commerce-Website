function addToCart(){
     let qty=document.getElementById("qty").value;
     let product={name:"Smart Watch", price:2999, quantity:qty};
     localStorage.setItem("cart", JSON.stringify(product));
     window.location.href = "cart.html";
     alert("Product added to cart!");
}
function buyNow(){
     let qty=document.getElementById("qty").value;
     let product={name:"Smart Watch", price:2999, quantity:qty};
     localStorage.setItem("cart", JSON.stringify(product));
     alert("Proceeding to checkout!");
     localStorage.setItem("cart", JSON.stringify(product));
     window.location.href = "payment.html";
}
 document.querySelector('form').addEventListener('submit', function(event) {
     event.preventDefault();
     alert('Payment successful!');
 });