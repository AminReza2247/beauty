let $ = document

let [langFlag , curFlag , startCounter] = [false,false,false]

let products_1 = [
    {id:1 ,title: 'محصول شماره 1' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:893_000,newPrice:721_000 , off: '10%', src:'../images/product-1.jpg' },
    {id:2 ,title: 'محصول شماره 2' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:969_000,newPrice:756_000 , off: '12%', src:'../images/product-2.jpg' },
    {id:3 ,title: 'محصول شماره 3' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:979_000,newPrice:734_000 , off: '16%', src:'../images/product-3.jpg' },
    {id:4 ,title: 'محصول شماره 4' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:969_000,newPrice:720_000 , off: '8%', src:'../images/product-4.jpg' },
    {id:5 ,title: 'محصول شماره 5' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:569_000,newPrice:453_000 , off: '20%', src:'../images/product-5.jpg' },
    {id:6 ,title: 'محصول شماره 6' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:599_000,newPrice:569_000 , off: '12%', src:'../images/product-6.jpg' },
    {id:7 ,title: 'محصول شماره 7' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:999_000,newPrice:965_000 , off: '10%', src:'../images/product-7.jpg' },
    {id:8 ,title: 'محصول شماره 8' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:899_000,newPrice:699_000 , off: '16%', src:'../images/product-8.jpg' },
    {id:9 ,title: 'محصول شماره 9' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:569_000,newPrice:332_000 , off: '18%', src:'../images/product-9.jpg' },
    {id:10,title: 'محصول شماره 10' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', lastPrice:569_000,newPrice:369_000 , off: '5%', src:'../images/product-5.jpg' },
    {id:11,title: 'محصول شماره 11' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:889_000,newPrice:721_000 , off: '20%', src:'../images/product-2.jpg' },
    {id:12,title: 'محصول شماره 12' ,name : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , lastPrice:929_000,newPrice:789_000 , off: '10%', src:'../images/product-1.jpg' },
]

let basketArray = []

//Language and Currency Buttons//

const languageBtn = $.querySelector('.language')
const currencyBtn = $.querySelector('.currency')
const languageMenu = $.querySelector('.language-menu')
const currencyMenu = $.querySelector('.currency-menu')
const currencyarrow = $.querySelector('.currency__arrow')
const languagearrow = $.querySelector('.language__arrow')

languageBtn.addEventListener('click', () => {
    if(!langFlag){
        languageMenu.classList.add('active-menu')
        languagearrow.classList.add('active-arrow')
        langFlag = true
    }else{
        languageMenu.classList.remove('active-menu')
        languagearrow.classList.remove('active-arrow')
        langFlag = false
    }
})
currencyBtn.addEventListener('click', () => {
    if(!curFlag){
        currencyMenu.classList.add('active-menu')
        currencyarrow.classList.add('active-arrow')
        curFlag = true
    }else{
        currencyMenu.classList.remove('active-menu')
        currencyarrow.classList.remove('active-arrow')
        curFlag = false
    }
})

// Address Tab //

const addressTab = $.querySelector('.address-tab')
const searchAddress = $.querySelector('.search-address')
const cover = $.querySelector('.cover')
const closeaddressTabBtn = $.querySelector('.closebtn')

searchAddress.addEventListener('click',()=>{
    addressTab.classList.add('address-tab--active')
    cover.classList.add('cover--active')
})

closeaddressTabBtn.addEventListener('click',()=>{
    addressTab.classList.remove('address-tab--active')
    cover.classList.remove('cover--active')
})

// Nav Menu //

const menuBtn = $.querySelector('.menu-btn')
const navMenuBtn = $.querySelector('.nav-menu-icon-wrapper')
const navMenu = $.querySelector('.nav-menu')
const navMenuCloseBtn = $.querySelector('.nav-menu__closebtn')

navMenuBtn.addEventListener('click',() => {
    navMenu.classList.add('nav-menu--active')
    cover.classList.add('cover--active')
})

navMenuCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu--active')
    cover.classList.remove('cover--active')
})

// Account //

const accountBtn = $.querySelector('#account')
const signInTab = $.querySelector('.sign-in-tab')
const signCloseBtn = $.querySelector('.sign-closebtn')
const signInWrapper = $.querySelector('.sign-in-wrapper')
const signUpWrapper = $.querySelector('.sign-up-wrapper')
const signIn = $.querySelector('.sign-in__link')
const signUp = $.querySelector('.sign-up__link')

accountBtn.addEventListener('click',()=>{
    signInTab.classList.add('sign-in-tab--active')
    cover.classList.add('cover--active')
})

signCloseBtn.addEventListener('click',()=> {
    signInTab.classList.remove('sign-in-tab--active')
    cover.classList.remove('cover--active')
})

signIn.addEventListener('click',()=>{
    signUpWrapper.classList.remove('sign-up-wrapper--active')
    signInWrapper.classList.add('sign-in-wrapper--active')
})

signUp.addEventListener('click',()=>{
    signInWrapper.classList.remove('sign-in-wrapper--active')
    signUpWrapper.classList.add('sign-up-wrapper--active')
})

// Shopping Basket //

const shoppingBasketBtn = $.querySelector('#shopping-basket')
const shoppingCart = $.querySelector('.shopping-cart')
const shoppingCartCloseBtn = $.querySelector('.shopping-closebtn')

shoppingBasketBtn.addEventListener('click',() => {
    shoppingCart.classList.add('shopping-cart--active')
    cover.classList.add('cover--active')
})

shoppingCartCloseBtn.addEventListener('click',()=>{
    shoppingCart.classList.remove('shopping-cart--active')
    cover.classList.remove('cover--active')
})

// Products Counter //

const countdownElement = $.querySelector('.countdown');
const body = $.querySelector('body')
const productCounterSection = $.querySelector('.products-counter')
const counterNums = $.querySelectorAll('.counter-num')

function productsCounter() {
    counterNums.forEach((item)=>{
        let count = item.dataset.count
        let counter = setInterval(()=>{
            if(item.textContent === count){
                clearInterval(counter)
            }

            item.textContent++

        },10)
    })
}

window.addEventListener('scroll',()=>{
    if (window.scrollY >= productCounterSection.offsetTop - 400){
        if (!startCounter){
            productsCounter()
        }
        startCounter = true
    }
})

function countdown() {
    const endDate = new Date('2024-08-01 00:00:00').getTime();

    const intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(intervalId);
            countdownElement.innerHTML = 'Countdown expired';
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days} روز... ${hours} ساعت... ${minutes} دقیقه... ${seconds} ثانیه`
        }
    }, 1000);
}

// shopping cart functions

function addToBasket(event){
    // console.log(event.target.parentElement.parentElement.dataset.id)
    
    let chosenItemId = event.target.parentElement.parentElement.dataset.id
    let chosenItem = products_1.find((product) => {
        return product.id == chosenItemId
    })
    
    if (!basketArray.includes(chosenItem)){
        basketArray.push(chosenItem)
        chosenItem.count = 1
        basketItemGenerator(basketArray)
    }else{
        chosenItem.count ++
        document.querySelector('.shopping-item__count').innerHTML ++
    }
    document.querySelector('.basket-count span').innerHTML = basketArray.length
    totalPrice(basketArray)
}

function totalPrice (basket) {
    let total = 0
    basket.forEach((product)=>{
        total += product.newPrice * product.count
    })
    
    document.querySelector('.total-price__price').innerHTML = `${total}  تومان`
}

function removeItem(event){
    
    let mainId = event.target.dataset.id
    console.log(mainId)

    basketArray.splice([mainId-1],1)
    console.log(basketArray)
    totalPrice(basketArray)
    event.target.parentElement.parentElement.parentElement.remove()
}

function basketItemGenerator(basket){
    console.log(basket)

    let cardElem = null

    basket.forEach((product) => {
        cardElem = `<div class="shopping-item">
                                <img class="shopping-item__picture" src="${product.src}" alt="">
                                <div class="shopping-item__info">
                                    <h6 class="shopping-item__title">${product.title}</h6>
                                    <div class="shopping-item__cal">
                                        <span class="shopping-item__count">${product.count}</span>
                                        <span class="x">
                                            <svg  height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                                        </span>
                                        <span class="shopping-item__price">${product.newPrice} تومان</span>
                                        <button class="removeItem-basket" onclick="removeItem(event)" data-id="${product.id}">حذف آیتم </button>
                                    </div>
                                </div>
                            </div>`
    })

    document.querySelector('.shopping-basket').insertAdjacentHTML('afterbegin',cardElem)
    
}

// bestselling products

function productCartGenerator(){
    let newProducts_1_carts = []
    let productsCartWrapper = document.querySelector('.bestselling__products-wrapper')
    let newProducts_1_elems
    products_1.forEach((item) =>{
        let newElem = `<div class="bestselling__product flex-align" data-id="${item.id}">
        <span class="bestselling__product-off">${item.off}</span>
        <div class="bestselling__product-img">
            <img src=${item.src} alt="product-1">
        </div>
        <p class="bestselling__product-caption">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        <div class="bestselling__product-price flex-align">
            <span class="last-price">${item.lastPrice}</span>
            <span class="new-price">${item.newPrice}</span>
        </div>
        <div class="add-product flex-align">
            <span class="add-product-text">اضافه کردن</span>
            <span onclick="addToBasket(event)" class="add-product-btn">+</span>
        </div>
    </div>`

        newProducts_1_carts.push(newElem)
        
    })
    newProducts_1_elems = newProducts_1_carts.join('')

    // console.log(newProducts_1_carts)
    // console.log(newProducts_1_elems)
    productsCartWrapper.innerHTML = newProducts_1_elems
}



countdown();
productCartGenerator()

