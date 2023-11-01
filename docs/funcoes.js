import { catalogo } from "./script.js";

// Produtos Home e ProdPage  home.js & produtos.js

export function mostrarProducts(targetElement, home) {
    catalogo.forEach((prod, i) => {
        if (home && !prod.home) {
            return;
        }

        let cardProd = `
            <div class="row">
                <a href="produto${i + 1}.html"><img src="${prod.img}"></a>
                <div class="product-text">
                    <h5>New</h5>
                </div>
                <div class="preco">
                    <h4>${prod.nomeProd}</h4>
                    <p>R$${prod.precoProd.toFixed(2).replace('.', ',')}</p>
                </div>
            </div>`;

        targetElement.innerHTML += cardProd;
    });
}

// Cart - Cart.js

let n = 3;

export function productCart(){
    for(let i = 0; i < n; i++){
        let prod = catalogo[i]

        let cartProd = `<div class="box">
        <img src="${prod.img}" alt="Fotos">
        <div class="content">
            <h3>${prod.nomeProd}</h3>
            <h4>R$${prod.precoProd.toFixed(2).replace('.', ',')}</h4>
            <div class= "plusplus"> 
                <p class="unit">Quantidade: <input type= "number" min="1" max="${prod.stock}" value="1"></p>
                <button id="remove_cart">Remover</button>
            </div>
            <p class="btn-area">
                <i class="stock"></i>
                <span class="btn2">Disponíveis: ${prod.stock} </span>
            </p>
        </div>
    </div>`

    box_Products.innerHTML += cartProd;
    }
}

// Total Carrinhos - Cart.js

export function totalCart(){
    let total = 0; 

    for (let i = 0; i < n; i++) {
        total += catalogo[i].precoProd;
    }
    let right_bar = document.getElementById('right_bar');

    let cart_total = `
        <div class="cart_total">
            <p><span>Subtotal:</span> <span>R$${total.toFixed(2).replace('.', ',')}</span></p>
            <hr>
            <p><span>Entrega:</span> <span>R$0,00</span></p>
            <hr>
            <p><span>Descontos:</span> <span>R$0,00</span></p>
            <hr>
            <p><span>Total:</span><span>R$${total.toFixed(2).replace('.', ',')}</span></p>
            <button class="btn_area">Finalizar Compra</button>
        </div>`;

    right_bar.innerHTML += cart_total;
}

// Mostrar seleção de tamanhos - prodOnly.js
