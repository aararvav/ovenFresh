// const cart = [];

// function updateCart() {
//     const cartBody = document.getElementById("cart-body");
//     const cartTotal = document.getElementById("cart-total");
//     cartBody.innerHTML = "";
//     let totalAmount = 0;

//     cart.forEach((item, index) => {
//         const row = document.createElement("tr");

//         row.innerHTML = `
//             <td>${item.name}</td>
//             <td>
//                 <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index}, -1)">-1</button>
//                 ${item.quantity}
//                 <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index}, 1)">+1</button>
//             </td>
//             <td>₹${item.price.toFixed(2)}</td>
//             <td>₹${(item.price * item.quantity).toFixed(2)}</td>
//             <td>
//                 <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
//             </td>
//         `;


//         cartBody.appendChild(row);
//         totalAmount += item.price * item.quantity;
//     });

//     cartTotal.textContent = totalAmount.toFixed(2);
// }

// function addToCart(name, price) {
//     const existingItem = cart.find(item => item.name === name);
//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         cart.push({ name, price, quantity: 1 });
//     }
//     updateCart();
// }

// window.onload = updateCart;

// function addToCart(name, price) {
//     console.log(`Adding ${name} with price ${price} to cart`);
// }

// function changeQuantity(index, amount) {
//     cart[index].quantity += amount;
//     if (cart[index].quantity <= 0) {
//         cart.splice(index, 1);
//     }
//     updateCart();
// }

// function removeItem(index) {
//     cart.splice(index, 1);
//     updateCart();
// }

// document.querySelectorAll(".btn").forEach(button => {
//     button.addEventListener("click", () => {
//         const itemName = button.previousElementSibling.innerText;
//         const itemPrice = Math.floor(Math.random() * 20) + 5;
//         addToCart(itemName, itemPrice);
//     });
// });


// NEW 

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartBody = document.getElementById("cart-body");
    const cartTotal = document.getElementById("cart-total");
    cartBody.innerHTML = "";
    let totalAmount = 0;

    cart.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index}, -1)">-</button>
                ${item.quantity}
                <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index}, 1)">+</button>
            </td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>₹${(item.price * item.quantity).toFixed(2)}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
            </td>
        `;
        cartBody.appendChild(row);
        totalAmount += item.price * item.quantity;
    });

    cartTotal.textContent = totalAmount.toFixed(2);
}

function changeQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

document.addEventListener("DOMContentLoaded", updateCart);


// let cart = [];

// function addToCart(name, price) {
//     const existingItem = cart.find(item => item.name === name);
//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         cart.push({ name, price, quantity: 1 });
//     }
//     updateCart();
// }

// function updateCart() {
//     let totalAmount = 0;
//     console.clear();
//     console.log("Cart Contents:");

//     cart.forEach((item, index) => {
//         const itemTotal = item.price * item.quantity;
//         console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity}, Price: ₹${item.price.toFixed(2)}, Total: ₹${itemTotal.toFixed(2)}`);
//         totalAmount += itemTotal;
//     });

//     console.log(`\nTotal Amount: ₹${totalAmount.toFixed(2)}`);
// }

// function changeQuantity(index, change) {
//     if (index < cart.length && cart[index].quantity + change > 0) {
//         cart[index].quantity += change;
//         updateCart();
//     } else {
//         console.log("Invalid operation: quantity cannot be zero or negative.");
//     }
// }

// function removeItem(index) {
//     if (index < cart.length) {
//         cart.splice(index, 1);
//         updateCart();
//     } else {
//         console.log("Invalid index: Item does not exist in the cart.");
//     }
// }

// addToCart("Club Sandwich", 210);
// addToCart("Chicken Ham", 290);
// addToCart("Club Sandwich", 210);
// changeQuantity(0, -1);
// removeItem(1);