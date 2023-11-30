let data = JSON.parse(localStorage.getItem("pedidos"));

const resultadoDiv = document.getElementById('resultado');
const tbodyTable = document.querySelector('.tbodyTable');

data.forEach(pedido => {
    // Concatena os nomes dos itens em uma string separada por vírgula
    const nomesItens = pedido.itens.map(item => item.nomeProd).join(', ');

    // Cria um elemento de tabela para cada pedido
    let pedidoRow = document.createElement('tr');
    pedidoRow.innerHTML = `<th scope="row">${pedido.id}</th>
                           <td>${nomesItens}</td>
                           <td>R$${calcularTotalPedido(pedido.itens).toFixed(2).replace('.', ',')}</td>`;

    // Adiciona o elemento do pedido à tabela
    tbodyTable.appendChild(pedidoRow);
});

function calcularTotalPedido(itens) {
    return itens.reduce((total, item) => total + item.precoProd, 0);
}
