import { catalogo } from "./script.js";

// Produtos Home e ProdPage  home.js & produtos.js

export function mostrarProducts(targetElement, home) {
    catalogo.forEach((prod) => {
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
                <option class= "tamanhoos" value="35">35</option>
                <option class= "tamanhoos" value="36">36</option>
                <option class= "tamanhoos" value="37">37</option>
                <option class= "tamanhoos" value="38">38</option>
                <option class= "tamanhoos" value="39">39</option>
                <option class= "tamanhoos" value="40">40</option>
                <option class= "tamanhoos" value="41">41</option>
                <option class= "tamanhoos" value="42">42</option>
                <option class= "tamanhoos" value="43">43</option>
                <option class= "tamanhoos" value="44">44</option>
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

// Função para adicionar ao array 'Cart'!

export function add_carrinho(item, id){

    let carrinho_compras = JSON.parse(localStorage.getItem('Cart'))

    if (carrinho_compras == null){
        carrinho_compras = []
    }

    const botaoComprar = document.querySelector('.button');

    botaoComprar.addEventListener('click', () => {

        let tamanhoSelect = document.getElementById('tamanho');
        let tamanho = parseInt(tamanhoSelect.value);


        let newItem = { ...item, tamanho};

        console.log(newItem);
        console.log(tamanho);
        
        carrinho_compras.push(newItem);
        console.log(carrinho_compras);

        localStorage.setItem('Cart', JSON.stringify(carrinho_compras))

    });
}

// Adiciona o produto ao carrinho de compras visualmente

export function productCart(carrinho_compras){

    carrinho_compras.forEach(item => {

    let cartProd = `
    <div class="box">
        <img src="${item.img}" alt="Fotos">
        <div class="content">
            <h3>${item.nomeProd}</h3>
            <h4>R$${item.precoProd.toFixed(2).replace('.', ',')}</h4>
            <h5>Tamanho: ${item.tamanho}</h5>
            <div class= "plusplus"> 
                <p class="unit">Quantidade: <input type="number" min="1" max="${item.stock}" value="1"></p>
                <button class="remove_cart">Remover</button>
            </div>
            <p class="btn-area">
                <i class="stock"></i>
                <span class="btn2">Disponíveis: ${item.stock} </span>
            </p>
        </div>
    </div>`;

    box_Products.innerHTML += cartProd;

    })
}

// Remover do carrinho

export function remover_cart(carrinho_compras) {

    let delbtns = document.querySelectorAll(".remove_cart ");

    delbtns.forEach(botao => botao.addEventListener('click', (event)=> {

        let item = event.target.parentElement.parentElement.parentElement

        box_Products.removeChild(item)

        let index = carrinho_compras.findIndex(produto => produto.id == item.id)

        carrinho_compras.splice(index, 1)

        localStorage.setItem('Cart', JSON.stringify(carrinho_compras))

        totalCart(carrinho_compras)
    }))
}

// Total Carrinhos - Cart.js

export function totalCart(carrinho_compras) {
    let total = 0;

    carrinho_compras.forEach(item => {
        total += item.precoProd;
    });

    let right_bar = document.getElementById('right_bar');

    right_bar.innerHTML = '';

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
