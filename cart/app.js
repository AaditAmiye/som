let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];

// Your product data embedded directly (copied from products.json)
products = [
    {
        "id": 1,
        "name":"TOBLERONE<br>BAR",
        "price": 308, 
        "image": "image/choco1.png"
    },
    {
        "id": 2,
        "name":" <br><br><br><br>TWIX<BR>BAR",
        "price": 66,
        "image": "image/choco2.png"
    },
    {
        "id": 3,
        "name":" CACTI FRACTAL<BR>BRACELET",
        "price": "213,500",
        "image": "image/brc.png"
    },
    {
        "id": 4,
        "name":"INFINITE<BR>PENDANT",
        "price": "25,000",
        "image": "image/pnd.png"
    },
    {
        "id": 5,
        "name":"OWEN<BR>RING",
        "price": "42,932",
        "image": "image/rng.png"
    },
    {
        "id": 6,
        "name":"CALPLUSH CUTIE<BR>TEDDY",
        "price": "1,199",
        "image": "image/ted1.png"
    },
    {
        "id": 7,
        "name":"PINK RABBIT<BR>DOLL",
        "price": 699,
        "image": "image/ted2.png"
    },
    {
        "id": 8,
        "name":" LD08 LOUNGE CHAIR",
        "price": "♾️",
        "image": "image/8tp.png"
    }
];

// Event listeners
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

// Render products to HTML
const addDataToHTML = () => {
    if (products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name ? product.name : 'No Name'}</h2>
                <div class="price">${product.price ? '₹' + product.price : '₹0'}</div>
                <button class="addCart">Add To Cart</button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
}

// Add product to cart
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let id_product = positionClick.parentElement.dataset.id;
        addToCart(id_product);
    }
})

const addToCart = (product_id) => {
    let position = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{ product_id, quantity: 1 }];
    } else if(position < 0){
        cart.push({ product_id, quantity: 1 });
    } else {
        cart[position].quantity += 1;
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity += item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let product = products.find(p => p.id == item.product_id);
            newItem.innerHTML = `
                <div class="image"><img src="${product.image}"></div>
                <div class="name">${product.name}</div>
                <div class="totalPrice">₹${product.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
            listCartHTML.appendChild(newItem);
        });
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let el = event.target;
    if(el.classList.contains('minus') || el.classList.contains('plus')){
        let id = el.closest('.item').dataset.id;
        changeQuantityCart(id, el.classList.contains('plus') ? 'plus' : 'minus');
    }
})

const changeQuantityCart = (product_id, type) => {
    let position = cart.findIndex((val) => val.product_id == product_id);
    if(position >= 0){
        if(type === 'plus'){
            cart[position].quantity += 1;
        } else {
            if(cart[position].quantity > 1){
                cart[position].quantity -= 1;
            } else {
                cart.splice(position, 1);
            }
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    addDataToHTML();
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
        addCartToHTML();
    }
}
initApp();

function applyblur() {
    document.querySelectorAll('.blur, .listProduct .item img, .listProduct .item button, .listProduct .item .price, .listProduct .item h2').forEach(el => {
        el.style.filter = "blur(10px)";
        el.style.transition="1s ease";
    });
    document.querySelectorAll('.listProduct .item:nth-child(8) img').forEach(el => {
        el.style.animation="rotate 1s forwards";
    });
 setTimeout(() => {
    const target = document.querySelector(".listProduct .item:nth-child(8) img");
    if (target) {
        hrtanimate();
    }
}, 1500);

}

function hrtanimate(){
    document.getElementById('inshrt').style.visibility="visible";
    document.querySelectorAll('.listProduct .item:nth-child(8) img').forEach(el => {
        el.style.animation="inside 1s forwards";
    });
    document.body.style.scale="6";
     setTimeout(function () {
          window.location.href = "hrt/i.html"
               
        }, 2000);
}

document.querySelector(".listProduct").addEventListener("click", function (e) {
    if (
        e.target.tagName === "BUTTON" &&
        e.target.closest(".item")?.matches(":nth-child(8)")
    ) {
        applyblur();
    }
   
    
    
});

