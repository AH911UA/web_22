document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.container')) {
        document.querySelector('.container').style.display = 'grid';
    }

})
document.forms.login?.addEventListener('submit', function(event) {
    event.preventDefault();

    const loginElem = this.elements.userLogin;
    loginElem.value = loginElem.value.trim();

    const phoneElem = this.elements.userPhone;
    const passwordElem = this.elements.userPassword;

    if (!/^[a-z]+$/gi.test(loginElem.value)) {
        return loginElem.classList.add('invalidInput');
    } else {
        loginElem.classList.remove('invalidInput');
    }
    // +380(97)-77-77-77
    // /^\+?\d{3}\(?\d{2}\)?-?\d{2}-?\d{2}-?\d{2}$/
    // if (!/^\d{2}(-| )\d{2}(-| )\d{2}$/g.test(phoneElem.value)) {
    //     return phoneElem.classList.add('invalidInput');
    // } else {
    //     phoneElem.classList.remove('invalidInput');
    // }

    // (?=.*[^A-Za-z0-9])
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^;#])/g.test(passwordElem.value)) {
        return passwordElem.classList.add('invalidInput');
    } else {
        passwordElem.classList.remove('invalidInput');
    }
    // if (loginElem.value.length < 3 || loginElem.value.length > 20) {
    //     return loginElem.classList.add('invalidInput');
    // } 
    //     else if(/superadmin/.test(loginElem.value)) {
    //         loginElem.classList.remove('invalidInput');
    //     }

    // else {
    //     loginElem.classList.remove('invalidInput');
    // }
});
// /^.{5,}@.{2,10}\.[a-zA-Z]{2,}[^ru]$/.test('mwwww@email.com')
/\d/.test('Lorem ipsum dolor 2 sit amet consectetur 2 adipisicing  elit. Ea, sit?');
/\w/.test('Lorem ipsum dolor 2 sit amet consectetur 2 adipisicing  elit. Ea, sit?');
/\s/.test('Lorem ipsum dolor 2 sit amet consectetur 2 adipisicing  elit. Ea, sit?');

/\D/.test('Lorem ipsum dolor 2 sit amet consectetur 2 adipisicing  elit. Ea, sit?');
/\W/.test('Lorem ipsum dolor 2 sit amet consectetur 2 adipisicing  elit. Ea, sit?');
/\S/.test('Lorem ipsum dolor 2 sit amet consectetur 2 adipisicing  elit. Ea, sit?');

'Lorem ipsum dolor 2 sit amet consectetur 2 adipisicing  elit. Ea, sit?'.replace(/[dolor ]\d/g, '*')

const inputLogin = new InputCompunent();
inputLogin.error = 'Wrong Login';
inputLogin.onInput = function ({ target }) {
    console.log('on input : ', target.value);
}
inputLogin.regex = !/^[a-z]+$/gi;
document.forms.login2.append(inputLogin.input);
 






























