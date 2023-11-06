import { catalogo } from "./script.js";

// Produtos Home e ProdPage  home.js & produtos.js

export function mostrarProducts(targetElement, home) {
    catalogo.forEach((prod, i) => {
        if (home && !prod.home) {
            return;
        }

        let cardProd = `
            <div class="row" id="${prod.id}">
                <a href="produtoUnic.html"><img src="${prod.img}" id="${prod.id}"></a>
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

// Produto único JS

export function handleClick(){
    let produtos = document.querySelectorAll("div.row")
    console.log(produtos)
 
    produtos.forEach(produto => produto.addEventListener('click', (evento)=>{
 
        let idProduto = evento.target.id
        localStorage.setItem('prodID', idProduto)
    }))
}

export function findProduct(produtos, prodID){
    let produto = produtos.find(prod => prod.id == prodID)
    console.log(produto)
    return produto
}

//função para mostrar a pág do produto escolhido

export function carregarProduto(item){
    console.log(item)
    const container = document.querySelector("#flex-boxx")

    let html = `<div class="left">
    <div class="big-img">
        <img src="${item.img}" alt="">
    </div>
    <div class="imagess">
        <div class="small-img">
            <img src="${item.img}" onclick="showImg(this.src)" alt="">
        </div>
        <div class="small-img">
            <img src="${item.img3}" onclick="showImg(this.src)" alt="">
        </div>
        <div class="small-img">
            <img src="${item.img4}" onclick="showImg(this.src)" alt="">
        </div>
        <div class="small-img">
            <img src="${item.img2}" onclick="showImg(this.src)" alt="">
        </div>
    </div>
</div>
<div class="right">
    <div class="name-prod">
        <h3>${item.nomeProd}</h3>
        <div class="price-prod">
            <p>R$${item.precoProd}</p>
        </div>
        <div class="tamanhos">
            <select id="tamanho">
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
              </select>
        </div>
        <div class="comprarr">
            <a href="#" class="button">Comprar</a>
        </div>  
        <div class="text-product">
            <p>${item.descProd}</p>
        </div>
    </div>

</div>`
    container.innerHTML = html
}