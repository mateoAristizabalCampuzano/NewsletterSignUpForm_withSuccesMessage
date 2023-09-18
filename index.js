
let correoElement = document.getElementById("inputEmail");
let expr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validarForm(event){
    event.preventDefault(); 
    let correo = correoElement.value;
    if (!expr.test(correo)){                                                          
        document.getElementById("error-message").style.display = "block";
        correoElement.style.borderColor = "red";
        correoElement.style.backgroundColor = "#FFE9E6"; // Un rojo claro
        return false;
    } else {
        document.getElementById("error-message").style.display = "none";
        correoElement.style.borderColor = "";
        correoElement.style.backgroundColor = "";
        localStorage.setItem('miVariable', correo);
        window.location.href = "Thanks/Thanks.html";  // "_self" abre en la misma ventana/tab, "_blank" abre en una nueva ventana/tab
    }
}
