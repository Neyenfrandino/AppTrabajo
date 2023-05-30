const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); 
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion y guion bajo
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,    //Letras, espacios, y pueden llevar espacios
    password: /^.{4,12}$/,              //4 a 12 digitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/              //7 a 14 digitos 
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__usuario i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__usuario i').classList.add('fa-check-circle');
            } else{
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__usuario i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__usuario i').classList.add('fa-times-circle');
            }
        
        break;
        case "nombre":

        break;
        case "password":

        break;
        case "password2":

        break;
        case "correo":

        break;
        case "telefono":

        break;
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

