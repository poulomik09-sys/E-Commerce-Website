let data = JSON.parse(localStorage.getItem("cart"));
if (data) {
    document.getElementById("item").innerText =
        data.name + " x " + data.quantity;
    let total = data.price * data.quantity;
    document.getElementById("total").innerText =
        "Total: ₹" + total;
}
function checkout() {
    window.location.href = "payment.html";
}