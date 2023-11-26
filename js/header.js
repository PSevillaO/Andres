const headerNav = document.getElementById('nav-list');
const usuarioShop = document.getElementById("usuario-shop")
const userInfoHeader = document.getElementById('user-menu');

//veo si tengo un usuario Logueado
const loguedUser = JSON.parse(localStorage.getItem("currentUser"))

if (loguedUser) {
    //tengo un usuario logueado

    if (loguedUser.role === 'ADMIN_ROLE') {

        const adminProductLink = document.createElement("li");  // crea una etiqueta li vacia para producto
        const adminProductLinkA = document.createElement("a"); // creo un link a vacio para producto
        const adminUserLink = document.createElement("li");  // crea una etiqueta li vacia para producto
        const adminUserLinkA = document.createElement("a"); // creo un link a vacio para producto


        // Productos
        adminProductLinkA.href = '/pages/products/products.html';
        adminProductLinkA.innerHTML = "Productos";
        adminProductLinkA.classList.add("nav-link");
        adminProductLink.classList.add("nav-item");
        //Usuarios 
        adminUserLinkA.href = '/pages/users/users.html';
        adminUserLinkA.innerHTML = "Usuarios";
        adminUserLinkA.classList.add("nav-link");
        adminUserLink.classList.add("nav-item");
        // creo los hijos
        headerNav.appendChild(adminProductLink);
        headerNav.appendChild(adminUserLink);
        adminProductLink.appendChild(adminProductLinkA);
        adminUserLink.appendChild(adminUserLinkA);


    }
        // link de logout
        const linkLogout = document.createElement("a");
        linkLogout.href = '/index.html'
        linkLogout.innerHTML = 'Salir'
        linkLogout.classList.add("nav-link");
        // linkLogout.classList.add("navtem");
        linkLogout.onclick = function () {
            localStorage.removeItem('currentUser')
            window.location.href = '/index.html'
        }
        usuarioShop.appendChild(linkLogout);
    
    // nombre de usuario
    const userNameHTML = document.createElement("a");
    userNameHTML.innerHTML = loguedUser.fullname;
    userNameHTML.classList.add("nav-link");
    userNameHTML.classList.add("nav-item");
    usuarioShop.appendChild(userNameHTML);
    // imagen
    const userImg = document.createElement('img')
    userImg.src = loguedUser.image;
    userImg.alt = `${loguedUser.fullname} profile picture`
    userImg.classList.add('user-profile-picture')
    usuarioShop.appendChild(userImg)

    // creo el carrito
    const carritoCompras = document.createElement('i');
    carritoCompras.classList.add("fa");
    carritoCompras.classList.add("fa-shopping-cart");
    usuarioShop.appendChild(carritoCompras);



} else {
    // no tengo un usuario logueado
    // creo el link ingresar
    const linkLogin = document.createElement("a");
    linkLogin.href = '/pages/login/login.html';
    linkLogin.innerHTML = "Ingresar";
    linkLogin.classList.add("nav-link");
    linkLogin.classList.add("nav-item");
    usuarioShop.appendChild(linkLogin);

    // creo el carrito
    const carritoCompras = document.createElement('i');
    carritoCompras.classList.add("fa");
    carritoCompras.classList.add("fa-shopping-cart");
    usuarioShop.appendChild(carritoCompras);

}