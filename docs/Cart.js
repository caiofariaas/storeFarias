import { productCart, totalCart, remover_cart} from "./funcoes.js";

let carrinho_compras = JSON.parse(localStorage.getItem('Cart'))
let ID = localStorage.getItem('prodID')

if (carrinho_compras == null){
    carrinho_compras = []
}

productCart(carrinho_compras)
totalCart(carrinho_compras)
remover_cart(carrinho_compras)
