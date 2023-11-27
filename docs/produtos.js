import { handleClick, mostrarProducts, searchBar } from "./funcoes.js";

const products_grid = document.getElementById("products_grid");

mostrarProducts(products_grid, false);
handleClick();
searchBar();
