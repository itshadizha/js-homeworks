const product = [
    {
      id: 0,
      image: "images/vegan.png",
      title: "Vegetarian",
      price: 6,
    },
    {
      id: 1,
      image: "images/italic.png",
      title: "Italian",
      price: 8,
    },
    {
      id: 2,
      image: "images/four-cheese.png",
      title: "4 cheese",
      price: 5,
    },
    {
      id: 3,
      image: "images/caesar.png",
      title: "Caesar",
      price: 5,
    },
  ];
  
  let html = "";
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  product.forEach(({ id, image, title, price }) => {
    html += `
      <div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>$ ${price}.00</h2>
          <button class="add-to-cart" data-product-id="${id}" >Add to cart</button>
        </div>
      </div>
    `;
  });
  
  document.getElementById("root").innerHTML = html;
  
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
  
      let matchingItem = cart.find(item => item.productId === productId);
  
      if (matchingItem) {
        matchingItem.quantity++;
      } else {
        cart.push({
          productId,
          quantity: 1,
        });
      }
  
      saveToLocalStorage();
      updateCartDisplay();
    });
  });
  
  function updateCartDisplay() {
    let totalQuantity = 0;
    let orderHtml = "";
    let total = 0;
  
    cart.forEach((cartItem) => {
      const matchingObj = product.find(productElem => productElem.id === parseInt(cartItem.productId));
      totalQuantity += cartItem.quantity;
  
      orderHtml += `
        <div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src=${matchingObj.image}>
          </div>
          <p style='font-size:12px;'>${matchingObj.title}</p>
          <p style='font-size:12px;'>${cartItem.quantity}</p>
          <h2 style='font-size: 15px;'>$ ${matchingObj.price * cartItem.quantity}.00</h2>
        </div>
      `;
  
      total += matchingObj.price * cartItem.quantity;
    });
  
    document.querySelector("#count").innerHTML = totalQuantity;
    document.querySelector("#total").innerHTML = `$ ${total}.00`;
    document.querySelector("#cartItem").innerHTML = orderHtml;
  }
  
  function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  updateCartDisplay();
  