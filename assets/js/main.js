// Register & Login
var registerBtn = document.querySelectorAll('.register-btn');
var loginBtn = document.querySelectorAll('.login-btn');
var modal = document.querySelector('.modal');
var authForm = document.querySelector('.auth-form');
var formContainer = document.querySelector('.auth-form__form');
function renderForm(checkValue){
    let formContent = ``;
    let authHeading = document.querySelector('.auth-form__heading');
    let authBtn = document.querySelector('.auth-form__btn');
    modal.style.display = 'flex';
    if(checkValue){
        formContent =  `<div class="auth-form__item">
                            <input type="email" name="" id="" class="auth-form__input" placeholder="Email của bạn">
                        </div>
                        <div class="auth-form__item">
                            <input type="password" name="" id="" class="auth-form__input" placeholder="Mật khẩu">
                        </div>
                        
                        <div class="auth-form__rules">
                            <div class="auth-form__help">
                                <a href="" class="auth-form__help-link auth-form__help--primary">Quên mật khẩu</a>
                                <span class="auth-form__help-sep"></span>
                                <a href="" class="auth-form__help-link">Cần trợ giúp</a>
                            </div>
                        </div>`;
        if(formContainer.classList.contains('register-form')){
            formContainer.classList.remove('register-form');
        }
        switchBtn.innerHTML = 'Đăng ký';
        authHeading.innerHTML = 'Đăng nhập';
    }else{
        formContent =  `<div class="auth-form__item">
                            <input type="email" name="" id="" class="auth-form__input" placeholder="Email của bạn">
                        </div>
                        <div class="auth-form__item">
                            <input type="password" name="" id="" class="auth-form__input" placeholder="Mật khẩu">
                        </div>
                        <div class="auth-form__item">
                            <input type="password" name="" id="" class="auth-form__input" placeholder="Nhập lại mật khẩu">
                        </div>

                        <div class="auth-form__rules">
                            <p class="auth-form__content">
                                <span class="auth-form__rules-text">Bằng việc đăng ký bạn đã đồng ý với Shopee về</span>
                                <a href="" class="auth-form__text-link">Điều khoản dịch vụ</a> & 
                                <a href="" class="auth-form__text-link">Chính sách bảo mật</a>
                            </p>
                        </div>`;
        formContainer.classList.add('register-form');
        switchBtn.innerHTML = 'Đăng nhập';
        authHeading.innerHTML = 'Đăng ký';
    }
    formContainer.innerHTML = formContent;
    authBtn.innerHTML = authHeading.innerText;
}


registerBtn.forEach(item => {
    item.addEventListener('click', function(){
        renderForm(false);
    })
})

loginBtn.forEach(item => {
    item.addEventListener('click', function(){
        renderForm(true);
    })
})

// change auth form
var switchBtn = document.querySelector('.auth-form__switch-btn');
switchBtn.addEventListener('click',switchForm);
function switchForm(){
    if(formContainer.classList.contains('register-form')){
        renderForm(true);
    }else{
        renderForm(false);
    }
}
//add event to back button
var backBtn = document.querySelector('.btn--back');
backBtn.onclick = function(){
    // lay value cua bien duoc dat trong class
    // var styleContainer = getComputedStyle(formContainer);
    // console.log(a.getPropertyValue('--growth-from'));
    // authForm.style.setProperty('--growth-from',1);
    // authForm.style.setProperty('--growth-to',0.7);
    modal.style.display = 'none';
    if(formContainer.classList.contains('register-form')){
        formContainer.classList.remove('register-form');
    }
}

// Render history search
var inputSearch = document.querySelector('.search__input');
var searchHistory = document.querySelector('.search__history');
var historyItem = document.querySelectorAll('.search__history-item');

searchHistory.addEventListener('mousedown', function helo(e) {
    e.preventDefault();
})

historyItem.forEach(item =>{
    item.addEventListener('click',function(){
        inputSearch.value = item.textContent;
    })
})

// like and rating products
var likeWrap = document.querySelector('.home-products-item__like');
var likeBtn = document.querySelectorAll('.like-btn');

likeBtn.forEach( item =>{
    item.addEventListener('click',()=>{
        if(likeWrap.classList.contains('home-products-item__like--checked')){
            likeWrap.classList.remove('home-products-item__like--checked');
        }else{
            likeWrap.classList.add('home-products-item__like--checked');
        }
    })
})

