"use strict";


const CreateUser = () => {
  const $form = $('<form></form>');
  const container = $('<div class="container"></div>');
  const divImgCell =$('<div class="logo-form"></div>');
  const imgLogo = $('<img src="assets/img/icons/lockone.png"></img>');
  const titulo = $('<h1>Crea tu usuario Yape</h1>');
  const msg = $('<p>Ingresa un nombre email y clave de usuario</p>');
  /*Grupo form Nombre */
  const divFormGroupNombre = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIconNombre = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegisterNombre = $('<img src="assets/img/icons/user.png" alt="" id="" class="icon">');
  const name = $('<input type="text" id="name" class="form-control text-center" placeholder="Ingresa tu nombre"  required maxlength="30"/>');
  const msgValidaFailNombre = $('<span class="help-block">Ingresa tu nombre</span>')
  const msgValidaSuccessNombre = $('<span class="help-block">Nombre validado correctamente!!</span>')
  const msgOkNombre = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok
  /*Grupo form Email */
  const divFormGroupEmail = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIconEmail = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegisterEmail = $('<img src="assets/img/icons/message-gray.png" alt="" id="" class="icon">');
  const email = $('<input type="email" id="email" class="form-control text-center" placeholder="correo@ejemplo.com" required/>');
  const msgValidaFailEmail = $('<span class="help-block">Ingresa un correo válido,Por favor</span>')
  const msgValidaSuccessEmail = $('<span class="help-block">Correo validado correctamente!!</span>')
  const msgOkEmail = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok

  /*Grupo form pass */
  const divFormGroupPass = $('<div class="form-group"></div>'); //agregar las clases  has-success has-feedback cuando haya ingresado ok
  const divImgIconPass = $('<div class="icon-phone-form"></div>');//poner en absoluto 
  const imgRegisterPass = $('<img src="assets/img/icons/lock.png" alt="" id="" class="icon">');
  const pass = $('<input type="password" id="password" class="form-control text-center" placeholder="Ingresa Clave de 6 digitos" required maxlength="6"/>');
  const msgValidaFailPass = $('<span class="help-block">Ingresa el número de tu celular,Por favor</span>')
  const msgValidaSuccessPass = $('<span class="help-block">Número validado correctamente!!</span>') //cambiar el mensaje cuando sea ok, cuida esta clave como oro, es tu acceso a yape.
  const msgOkPass = $('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');//solo aparece cuando todo ok

  const loginButton = $('<button type="submit" class="btn btn-default" disabled="true">Continuar</button>');
 
 $form.append(container);
 container.append(divImgCell);
 divImgCell.append(imgLogo);
 container.append(titulo);
 container.append(msg);

 container.append(divFormGroupNombre);
 divFormGroupNombre.append(divImgIconNombre);
 divImgIconNombre.append(imgRegisterNombre);
 divFormGroupNombre.append(name);
 divFormGroupNombre.append(msgValidaFailNombre);
 divFormGroupNombre.append(msgValidaSuccessNombre);
 divFormGroupNombre.append(msgOkNombre);

 container.append(divFormGroupEmail);
 divFormGroupEmail.append(divImgIconEmail);
 divImgIconEmail.append(imgRegisterEmail);
 divFormGroupEmail.append(email);
 divFormGroupEmail.append(msgValidaFailEmail);
 divFormGroupEmail.append(msgValidaSuccessEmail);
 divFormGroupEmail.append(msgOkEmail);


 container.append(divFormGroupPass);
 divFormGroupPass.append(divImgIconPass);
 divImgIconPass.append(imgRegisterPass);
 divFormGroupPass.append(pass);
 divFormGroupPass.append(msgValidaFailPass);
 divFormGroupPass.append(msgValidaSuccessPass);
 divFormGroupPass.append(msgOkPass);



 container.append(loginButton);




//Seteamos clases para los mensajes de alerta
msgValidaFailNombre.css("color","red").hide();
msgValidaFailEmail.css("color","red").hide();
msgValidaFailPass.css("color","red").hide();

msgValidaSuccessNombre.hide();
msgValidaSuccessEmail.hide();
msgValidaSuccessPass.hide();

msgOkNombre.hide();
msgOkEmail.hide();
msgOkPass.hide();


//Patron de regex para validar el nombre 
const patron = /^[a-zA-Z_áéíóúñ]*$/;




name.on("focusin",function(){
  msgValidaFailNombre.show();  
})


name.on("keyup",function(e){
  console.log(e.which); 

  if($(this).val() == null || $(this).val().length == 0 || $(this).val().search(patron) || $(this).val().toString().trim().substring(0,1) !== $(this).val().toString().trim().substring(0,1).toUpperCase())
  {
    alert("no numeros");
    console.log($(this).val());
  }



  /*

  else if($(this).val().toString().trim().length==9 && $(this).val().toString().trim().substring(0,1)=="9" && $(this).val() !== 0){
    msgValidaFailNombre.hide();
    divFormGroup.addClass("has-success has-feedback");
    msgOkNombre.show();
    msgValidaSuccessNombre.show();
    state.id = $(this).val();
    }

  console.log(state.id);*/

})





function activarButton(){
  if(state.id !== null && state.check == true){
    loginButton.attr('disabled',false);   
  }else {
     loginButton.attr('disabled',true); 
  }
}


$form.on("submit",function(e){
  e.preventDefault();


         $.ajax({
            url: 'api/registerNumber',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({phone: state.id, terms:state.check}),
            success: function(response) {
                console.log(response.data);
                alert("Por favor registre el siguiente codigo : " + response.data.code);
                 state.code = response.data.code;
                  
                }
        });


   state.window = 2;
   state.doRender();


})



return $form



}



