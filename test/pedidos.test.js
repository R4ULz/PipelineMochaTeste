const assert  = require('assert')
const Pedido = require('../pedido')

describe('Sistema de Pedidos', () => {
    let pedido;

    beforeEach(() => {
        pedido = new Pedido();
    });

    it('deve adicionar um item ao pedido', () => {
        pedido.adicionarItem('Pizza', 20.0, 2);
        pedido.adicionarItem('Batata Frita', 15.0, 1);
        pedido.adicionarItem('Refrigerante', 10.0, 1);
        assert.strictEqual(pedido.itens.length, 3);
    });

    it('deve calcular o total do pedido corretamente', () => {
        pedido.adicionarItem('Pizza', 20.0, 2);
        pedido.adicionarItem('Batata Frita', 15.0, 1);
        const total = pedido.calcularTotal();
        assert.strictEqual(total, 60.0);
        //o valor é maior pois existem 5 reais de taxa de entrega
    });

    it('deve aplicar desconto corretamente', () => {
        pedido.adicionarItem('Pizza', 10.0, 2);
        pedido.aplicarDesconto('PROMO20');
        const totalComDesconto = pedido.calcularTotal();
        assert.strictEqual(totalComDesconto, 21.0);
    });

})
