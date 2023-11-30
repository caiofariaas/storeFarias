let data = JSON.parse(localStorage.getItem("Pedidos")) || [];
const resultadoDiv = document.getElementById('resultado');

console.log(data);

data.forEach((pedido, index) => {
    const pedidoDiv = document.createElement('div');
    pedidoDiv.innerHTML = `<h2 style="color: #c7c7c7;">Detalhes do Pedido ${pedido.id}:</h2><ul></ul>`;

    const itemDiv = document.createElement('li');
    itemDiv.innerHTML = `<p style="color: #fff;">Título: ${pedido.nomeProd}</p><p style="color: #c7c7c7;">Preço: $${pedido.precoProd.toFixed(2)}</p>`;
    
    pedidoDiv.querySelector('ul').appendChild(itemDiv);

    resultadoDiv.appendChild(pedidoDiv);
});