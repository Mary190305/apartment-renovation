//Табы

let tabs = document.querySelectorAll(".tabs p");
let tabContents = document.querySelectorAll(".tab-block");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});


/*
//Работаем со всем списком кнопок
let tabBtn = document.querySelectorAll(".tabs p");

//Работаем с нашей коллекцией кнопок и на каждую вешаем обработчик события клика
//item - конретная кнопка
tabBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        //Сохраняем в переменную текущую кнопку
        let currentBtn = item;

        //Убираем со всех кнопок активность, чтобы активность была только
        //на кнопках, по которым кликнули
        tabBtn.forEach(function(item) {
            item.classList.remove("active");
        });

        //Вешаем на текущую кнопку новый класс, чтобы она стала активной
        currentBtn.classList.add("active");
    });
});*/

















//Слайдер

const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');
const els = document.querySelectorAll('.slider_block')
// Создадим массив всех изображений
const imgArr = ['style/pictures/Квартира 5.png','style/pictures/Квартира2.png','style/pictures/Квартира3.png'];
// Создаем текущий индекс
let currentIndex = 0;

// Функция смены индекса у dots
function changeIndex(ind) {
    //Получаем индекс 
    currentIndex = ind;
    // Произвести процесс смены слайдов
    slide(currentIndex);
}

function nextIndex(direction){
    currentIndex +=direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if(currentIndex >= imgArr.length){
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex<0) {
        // Получаем последний элемент
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);    
}

function slide(index){
    img.style.display = 'none';
    setTimeout(()=>{
        img.style.display = 'block';
    }, 0);
    //меняем атрибут src
    img.src = imgArr[index];
    //Обновляем точки
    updateDots(index);
    updateContent(index);
}

// Смена точек 
function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('activ');
    }
    dots[index].classList.add('activ');
}

function updateContent(index){
    for (let cont of els){
        cont.classList.remove('active');
    }
    els[index].classList.add('active');
}

//Саму функцию нужно повесить на кнопки при событии клика
const btnLeft = document.querySelector('.slider__nav-left');
const btnRight = document.querySelector('.slider__nav-right');

btnLeft.addEventListener('click', ()=>{
    nextIndex(-1)
});
btnRight.addEventListener('click', ()=>{
    nextIndex(1)
});





/*const foward = document.querySelector('.slider__nav-right')
const back = document.querySelector('.slider__nav-left')
const els = document.querySelectorAll('.slider_block')
let chess = 0
function reDraw(){
    for (let i = 0; i < 3 ; i++ ){
        if (chess === i){
            els[i].classList.add('active')
        }
        else{
            els[i].classList.remove('active')
        }
    }
}
foward.addEventListener('click' , () => {
    if (chess != 2){
        chess += 1
        reDraw()
    }
})
back.addEventListener('click' , () => {
    if (chess != 0){
        chess -= 1
        reDraw()
    }
})*/




















//Модальное окно

    let modal = document.getElementById('modal');
    let btn = document.getElementById("open-modal__btn");
    let span = document.getElementsByClassName("modal__close")[0]
    let bodyOne = document.querySelector('body');
    let closeBtn = document.getElementsByClassName("send")[0]

    btn.addEventListener("click", function(){
        modal.style.display = "block";
        bodyOne.classList.toggle('lock');
    });

    span.addEventListener("click", function(){
        modal.style.display = "none";
        bodyOne.classList.remove('lock');
    });

    window.addEventListener("click", function(event){
        if (event.target == modal){
            modal.style.display = "none";
            bodyOne.classList.remove('lock');
        }
    });

    closeBtn.addEventListener('click', function(){
        modal.style.display = "none";
        bodyOne.classList.remove('lock');
    });























//Аккордеон

const accordion = document.getElementsByClassName('contentBx');

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    });
}

let tabBtnThree = document.querySelectorAll(".label");

tabBtnThree.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtnThree = item;

        tabBtnThree.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtnThree.classList.add("active");
    });
});





















//Фильтрация элементов по категориям
const list = document.querySelector('.list'), 
        items = document.querySelectorAll('.blocks__item')

function filter(){
    list.addEventListener("click", event => {
        const targetId = event.target.dataset.id
        
        switch(targetId){
            case 'all':
                getItems('blocks__item')
                break

            case 'kosm':
                getItems(targetId)
                break

            case 'kap':
                getItems(targetId)
                break

            case 'euro':
                getItems(targetId)
                break

            case 'dis':
                getItems(targetId)
                break         
        }
    })
}

filter()

function getItems(className){
    items.forEach(item => {
        if (item.classList.contains(className)){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
}

let costBtnFour = document.querySelectorAll(".list p");

costBtnFour.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtnFour = item;

        costBtnFour.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtnFour.classList.add("active");
    });
});




















//Бургер-меню

let burgerIcon = document.querySelector('.burger__icon');
let menu = document.querySelector('.menu_big');
let body = document.querySelector('body');
burgerIcon.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');

    
});

menu.addEventListener('click', function(){
    if (burgerIcon.classList.contains('active')) {
        burgerIcon.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
    }
});

document.getElementById('main').addEventListener('click', function() {
    burgerIcon.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
});























// Мои хотелки

//Переключатель комнат в квартире
let costBtnOne = document.querySelectorAll(".cost_content_elem3 p");

costBtnOne.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtnOne = item;

        costBtnOne.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtnOne.classList.add("active");
    });
});

//Переключатель типа квартиры
let costBtnTwo = document.querySelectorAll(".cost_content_elem5 p");

costBtnTwo.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtnTwo = item;

        costBtnTwo.forEach(function(item) {
            item.classList.remove("active");
        });
        
        currentBtnTwo.classList.add("active");
    });
});