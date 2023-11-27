
const tableBody = document.getElementById('table-body')
const searchInput = document.getElementById('search')
const userForm = document.getElementById('user-form')
const submitBtn = userForm.querySelector('button[type=submit]')

userForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    const el = evt.target.elements
    const emailExists = usersArray.find((user) => {
        if (user.email === el.email.value) {
            return true
        }
    })

    if (emailExists && el.id.value !== emailExists.id) {
        Swal.fire({
            title: "El Correo ya existe",
            icon: 'error'
        })
        return
    }
    const id = el.id.value ? el.id.value : crypto.randomUUID();


    user = {
        fullname: el.fullname.value,
        age:calcularEdad(el.bornDate.value),
        email: el.email.value,
        password: el.password.value,
        bornDate: new Date(el.bornDate.value).getTime(),
        location: el.location.value,
        id: id,
        image: el.image.value,
        role: el.role.value
    }

    // pregunto si estoy editando
    if (el.id.value) {
        // editando
        const indice = usersArray.findIndex(usuario => {
            if (usuario.id === el.id.value) {
                return true
            }
        })

        usersArray[indice] = user;
        //Swal.fire('Usuario Editado', 'El usuario se Edito correctamente')

        Swal.fire({
            title: 'Usuario Editado',
            text: 'El usuario se Edito correctamente',
            icon: 'success',
            timer: 1000
        })
    } else {
        // agregando un usuaruo nuevo   
        usersArray.push(user)
        // Swal.fire('Usuario Agregado', 'El usuario se Agrego correctamente')

        Swal.fire({
            title: 'Usuario Agregado',
            text: 'El usuario se Agrego correctamente',
            icon: 'success',
            timer: 1000
        })
    }

    actualizarLocalStorage()
    resetearFormulario();

})

function resetearFormulario() {
    userForm.reset();
    userForm.elements.password.disabled = false
    userForm.elements.password2.disabled = false
    submitBtn.classList.remove('btn-edit')
    submitBtn.innerHTML = "Agregar Usuario"
    userForm.fullname.focus()
}


function actualizarLocalStorage() {
    localStorage.setItem("users", JSON.stringify(usersArray));
}


