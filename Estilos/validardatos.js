function validarDatos() {
  nombre = document.getElementById("nombre").value
  apellido = document.getElementById("apellido").value
  email = document.getElementById("email").value
  celular = document.getElementById("celular").value
  mensaje = "nombre:" + nombre + "apellido:" + apellido + "email" + email + "celular" + celular
  errores = 0
  alert(mensaje)
  if(nombre.length <3) {
    document.getElementById("errorNombre").style.display="block"
    errores++
  } else {
    document.getElementById("errorNombre").style.display="none"
  }
  if(apellido.length <5){
    document.getElementById("errorApellido").style.display="block"
    errores++
  }else{
    document.getElementById("errorApellido").style.display="none"
  }
  if(celular.length <9){
    document.getElementById("errorcelular").style.display="block"
    errores++
  }else{
    document.getElementById("errorcelular").style.display="none"
  }
  if(errores>0){
    document.getElementById("box-send").append("Uno de los campos es invalido")
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