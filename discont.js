var discount = 0.1; // 10% de desconto
var minimumSubtotal = 18000; // Valor mínimo de 180,00 em centavos

if (LS.cart.subtotal >= minimumSubtotal) {
  // Aplica desconto de 10% no carrinho
  var newSubtotal = Math.round(LS.cart.subtotal * (1 - discount));
  
  // Atualiza o subtotal do carrinho
  LS.cart.subtotal = newSubtotal;
  
  // Exibe uma mensagem informando o desconto aplicado
  alert('Você ganhou um desconto de 10% na sua compra!');
}
