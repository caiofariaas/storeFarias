import { catalogo } from "./script.js";
import { carregarProduto, findProduct,} from "./funcoes.js";
let ID = localStorage.getItem('prodID')
console.log(ID)

let item = findProduct(catalogo,ID)


const prods = document.querySelector(".flex-box")

carregarProduto(item, prods)

