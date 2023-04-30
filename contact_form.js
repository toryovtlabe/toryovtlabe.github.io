let snackbar = document.getElementById("formAlert");
document.getElementById('send').addEventListener("click", showSnackbar)

function showSnackbar() {
    snackbar.className = 'show';
    let Form = document.forms[0];
    let Phone = Form.elements.telnumber;
    let Name = Form.elements.username;
    document.getElementById('user').innerHTML=Name.value;
    document.getElementById('userPhone').innerHTML=Phone.value;
    setTimeout(hideSnackbar, 2950);
}

function hideSnackbar() {
    snackbar.classList.remove('show');
}
