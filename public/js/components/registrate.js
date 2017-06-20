'use strict';
const Registrate = () => {
	
  	
  const header = $('<header></header>');
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>')
  const col = $('<div class="col-xs-12"></div>')
  const	imgRegister = $('<img src="img/icons/phone.png" alt="" id="" class="icon-phone">');
  const tituloRegister = $('<h1>Para comenzar validemos tu número</h1>');
  const msgRegister = $('<p>Recibirás un sms con un código de validación</p>');
  const form = $('<form></form>');
  const telefono = $('<input type="tel" id="telefono" placeholder="telefono" value =" " required/>');
  const terms = $('<input type="checkbox" id="check">');
  const msgTerm = $('<span>Acepto los terminos y condiciones</span>');
  const loginButton = $('<button type="submit" disabled>Continuar</button>');
 container.append(row);
 row.append(col);
 col.append(imgRegister);
 col.append(tituloRegister);
 col.append(msgRegister);
 form.append(telefono);
 form.append(terms);
 form.append(loginButton);
 col.append(form);
 header.append(container);





form.on("change","input",function(e){
	


	console.log($(this).val());

})
 






	return header;
}



