function validarDatos2() {
  nombre2 = document.getElementById("nombre2").value
  apellido2 = document.getElementById("apellido2").value
  email2 = document.getElementById("email2").value
  celular2 = document.getElementById("celular2").value
  pasw = document.getElementById("pasw").value
  pasw2 = document.getElementById("pasw2").value
  mensaje = "nombre2" + nombre2 + "apellido2" + apellido2 + "email2" + email2 + "celular2" + celular2 + "pasw" + pasw + "pasw2" + pasw2
  errores = 0
  alert(mensaje)
  if(nombre2.length <3) {
    document.getElementById("errorNombre2").style.display="block"
    errores++
  } else {
    document.getElementById("errorNombre2").style.display="none"
  }
  if(apellido2.length <5){
    document.getElementById("errorApellido2").style.display="block"
    errores++
  }else{
    document.getElementById("errorApellido2").style.display="none"
  }
  if(celular2.length <9){
    document.getElementById("errorcelular2").style.display="block"
    errores++
  }else{
    document.getElementById("errorcelular2").style.display="none"
  }
  if(pasw.length <8){
    document.getElementById("errorpasw").style.display="block"
    errores++
  }else{
    document.getElementById("errorpasw").style.display="none"
  }
  if(pasw2.length = pasw.length){
    document.getElementById("errorpasw2").style.display="block"
    errores++
  }else{
    document.getElementById("errorpasw2").style.display="none"
  }
  if(errores>0){
    document.getElementById("box-send2").append("Uno de los campos es invalido")
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Campos invalidos errores detectados: '+errores,
      footer: '<a href="">Por qué no estan correctos?</a>'
  })
  return false
  }else{
    var form = document.querySelector('.pageclip-form')
    Pageclip.form(form, {
    onSubmit: function (event) { },
    onResponse: function (error, response) { },
    successTemplate: '<span>Thank you!</span>'
    })
    var data = {
        name: 'Billy Jean',
        email: 'billy@example.com'
      }
      Pageclip.send('KROHShNYpz4mUkB2Na3Dj2V8n7BHvR3H', 'RegistroUsuarios', data, function (error, response) {
        console.log('saved?', !!error, '; response:', error || response)
      })
    return true    
  }
}