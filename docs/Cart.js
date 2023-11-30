import { productCart, totalCart, remover_cart, searchBar, gerarPedido} from "./funcoes.js";

let carrinho_compras = JSON.parse(localStorage.getItem('Cart'))

if (carrinho_compras == null){
    carrinho_compras = []
}

productCart(carrinho_compras)

remover_cart(carrinho_compras)

totalCart(carrinho_compras)

gerarPedido(carrinho_compras);
searchBar();
