let variable = localStorage.getItem('miVariable');

document.getElementById('parrafo').innerHTML = `A confirmation email has been sent to <strong>${variable}</strong> Please open it and click the button inside to confirm your subscription`

function volver(){
    window.location.href ="../index.html";
}
