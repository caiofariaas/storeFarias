import { handleClick, mostrarProducts, searchBar } from "./funcoes.js";

const indexProd = document.getElementById("indexProd")

mostrarProducts(indexProd, true);
handleClick();
searchBar();