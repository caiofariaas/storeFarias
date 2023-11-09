import { catalogo } from "./script.js";
import { carregarProduto, findProduct, add_carrinho} from "./funcoes.js";

let carrinho_compras = JSON.parse(localStorage.getItem('Cart'))

let ID = localStorage.getItem('prodID')
let item = findProduct(catalogo,ID)
const prods = document.querySelector(".flex-box")

carregarProduto(item, prods)
add_carrinho(item)


