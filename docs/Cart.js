import { productCart, totalCart } from "./funcoes.js";

let carrinho_compras = JSON.parse(localStorage.getItem('Cart'))

if (carrinho_compras == null){
    carrinho_compras = []
}

productCart(carrinho_compras)
totalCart(carrinho_compras)
