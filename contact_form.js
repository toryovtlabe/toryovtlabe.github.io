let snackbar = document.getElementById("formAlert");
document.getElementById('formButton').addEventListener("click", showSnackbar)

function showSnackbar() {
    let Form = document.forms[0];
    let Phone = Form.elements.telnumber;
    let Name = Form.elements.username;
    if(Phone.value!=0 & Name.value!=0) {
        snackbar.className = 'show';
        document.getElementById('userName').innerHTML=Name.value;
        document.getElementById('userPhone').innerHTML=Phone.value;
        setTimeout(hideSnackbar, 5400);
}
    else{
        alert('Уважаемый пользователь, пожалуйста заполните поля "ФИО" и "Телефон" для отправления заявления..');
    }
}

function hideSnackbar() {
    snackbar.classList.remove('show');
}