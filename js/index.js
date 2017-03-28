function calculateTotal(operation) {
  var total;
   
  operators = operation.split(/\d+\.\d+|\d+/);
  operands = operation.split(/[+\-/*]/);
  console.log(operands);
  
  for (var i in operands) {
    switch (operators[i]) {
      case '+':
        total += Number(operands[i]);
        break;
        
      case '-':
        total -= Number(operands[i]);
        break;
        
      case '*':
        total *= Number(operands[i]);
        break;
        
      case '/':
        total /= Number(operands[i]);
        break;
                
      default:
        total = Number(operands[i]);
        break;
    }
  }
  
  return total;
}

$('.key').click(function() {
  var screen = $('#screen');
  
  switch($(this).val()) {
    case 'ac':
      screen.val('');
      break;
      
    case 'ce':
      screen.val(screen.val().replace(/(\d+$|[-+*/]$)/, ''));
      break;
    
    case '=':
      screen.val(calculateTotal(screen.val()));
      break;
      
    case '.':
      if (!/\./.test(screen.val())) {
        screen.val(screen.val() + $(this).val());
      }
      break;
      
    default:
      screen.val(screen.val() + $(this).val());
      break;
  }
  
});