// var d_time = new Date()
// window.alert("Giriş Tarihi:\n" + d_time + '\nHoşgeldiniz')


const formDOM = document.querySelector('#formSet');
formDOM.addEventListener('submit', myfunc);
const alertDom = document.querySelector('#alert');

let ALERT = (title, message) =>
    `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="info-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
    </svg>
    <div class="alert alert-warning d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        ${title} : ${message}
      </div>
    </div>
    `


function myfunc(event) {
    event.preventDefault()
    let USER_NAME = document.getElementById('username');
    let PASS = document.getElementById('password');
    let E_MAİL = document.getElementById('email');
    let GENDER = document.getElementById('gender');
    // addList(USER_NAME.value,PASS.value,E_MAİL.value,GENDER.value)
    if (USER_NAME.value && PASS.value && E_MAİL.value && GENDER.value) {
        addList(USER_NAME.value, PASS.value, E_MAİL.value, GENDER.value)
        USER_NAME.value = "";
        PASS.value = "";
        E_MAİL.value = "";
        GENDER.value = "";
    } else {

        alertDom.innerHTML = ALERT(
            'Hata',
            'Lütfen tüm alanları doldurunuz'
        );
    }
}

/*

 <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
     <div class="d-flex w-100 justify-content-between">
         <h5 class="mb-1">List group item heading</h5>
         <small>3 days ago</small>
     </div>
     <p class="mb-1">Some placeholder content in a paragraph.</p>
     <small>And some small print.</small>
 </a>
*/

const listDom = document.querySelector('#list-group');

const addList = (username, password, email, gender) => {

    let alist = document.createElement('a');
    alist.setAttribute('href', '#');
    alist.setAttribute('aria-current', 'true');
    alist.classList.add('list-group-item');
    alist.innerHTML = ` 
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">${username}</h5>
    <small>${email}</small>
    </div>
    <p class="mb-1">Some placeholder content${email}.</p>
    <small>${gender} print.</small> 
    `

    listDom.appendChild(alist)

}


