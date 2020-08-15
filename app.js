

function error() {
    var eMail = document.getElementById('email');
    var passWord = document.getElementById('pass');

    if (eMail.value == '' || passWord.value == '') {
        alert("All fields are required!");
    } else {
        alert("Your account was hacked")
    }
}