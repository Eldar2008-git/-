/*const validate=(hasAccempt)=>{
    if (hasAccempt){
        return ()=>console.log('Veri Good')
    }else {
        return ()=> console.log('Not')
    }
}

const logMessegt=validate(true)
logMessegt()*/

//               Задачи
//№1 сравнить числа и вывести а также матиматическое вычисления +++
//№2 условия приминением и или зделать фунсцию ++
//№3 ввывод тексста или слово сплываюше окно и придумать условия +++
//№4 функсия словов добавить i и вывод слово конце ++
//№5 добавка и вычитание с при помоши => ++
//1

/*const user1={name:'Misha'}
const user2={name:'Edo'}

function logInfo(){
    console.log(this)
    console.log(this.name)
}
logInfo()
user1.logName=logInfo
user2.logName=logInfo

user1.logName()
user2.logName()*/

/*const canculator={
    read(){
        this.a=Number(prompt('Введите первок число',0))
        this.b=Number(prompt('Введите второе число',0))
    },
    sum(){
        return this.a+this.b
    },
    nul(){
        return this.a*this.b
    }
}

canculator.read()
console.log('Сумма',canculator.sum())
console.log('Промежуток',canculator.nul())
// уже из-зи решать эту задачу
/*
/*const canculator={
    read(){
        this.a=Number(prompt('Введите первок число',0))
        this.b=Number(prompt('Введите второе число',0))
    },
    sum(){
        return this.a+this.b
    },
    nul(){
        return this.a*this.b
    }
}

canculator.read()
console.log('Сумма',canculator.sum())
console.log('Промежуток',canculator.nul())*/
/*console.log('Случайное число:',Math.random())*/

/*const name='Alecseu'
const emptyStr=''
const strWisht=' '

console.log(`Длина строки '${name}': `, name.length)
console.log(`Длина строки '${emptyStr}': `, emptyStr.length)
console.log(`Длина строки '${strWisht}': `, strWisht.length)*/
/*const name='Alecsey'
//console.log(name[name.length-1])
//console.log(name.at(1))
//console.log(name.at(-1))*/

/*const mart=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(mart[2][1])*/

/*const edo=[
    'Aman',
    100,
    true,
]
console.log(`edo befor:`,edo)

edo[0]='Eldiar'
edo[1]=200
edo[2]=false
edo[3]='1000

console.log(`edo after:`,edo)*/

/*let table=parseInt(prompt('Введиет число'));
for(let i=1;i<=10;i++){
    console.log(table+'x'+i+'='+table*i);
}*/
 
/*const number=prompt('Введите число')
for(let i=2; i<=number/2; i++){
    if(number <=1){
        console.log('Число не является простым')
    }else{
        let isPrime=true
    }
    for(let i=2; i<=number/2;i++){
        isPrime=false
        break
    }
}
if(isPrime){
    console.log('Число простое')
}else{
    console.log('Число не является')
}*/

/*const data=['Eldiar', 17]
const[name,age]=data
console.log('name:',name)
console.log('age:',age)*/

/*const letter=['A','B','S','D','F']

letter.forEach((letter,index,arrey)=>{
    console.log(`По индексу [${index}] на ходим элемент "${letter}"`)
})*/

/*const prices=[100,200,300,444,500,600,500,777,8900]
console.log(prices.lastIndexOf(500,3))*/

/*const users=[
    {name:'Eldiar',
        age:17
    },
{
    name:'Aman',
    age:17
},
{
    name:'Darmm',
    age:16
},
]
console.log(
    users.findLaIndex((user)=>user.name==='Darmm')
)*/

/*const prris=[100,200,300,444,500,444,777]
console.log(prris.includes(500,4))*/

/*const users=[
    {
        name:'Edo',
        age:40
    },
    {
        name:'Lakri',
        age:28,
    },
    {
        name:'Darmm',
        age:29,
    },
    {
        name:'SelickXion',
        age:30,
    },
]
const revuis=users.reverse()
console.log(
    'Массив users в обратном порядке:',
    revuis
)*/

/*const ageSum=users.reduceRight((sum,{age})=>{
    console.log('age',age)
    return sum+age
})*/

/*debugger
const ageSum=users.reduce((sum,{age})=>sum+age,0)


console.log(
    'Средний возраст',
    ageSum/users.length
)*/

/*const names=['Тимофей','Васила','Коля','Темирлан','Дияна']
const sortirovca=names.sort()
console.log(
    'Отсортированние имен:',
    //Построение в алфавитном порядке
    sortirovca
)*/

/*const numbers=[4,8,9,20,500]
const sortirovca=[...numbers].sort((a,b)=>b-a)

console.log(
    'Отсортировка чисел:',
    sortirovca
)*/

/*const numberr=[0,9,8,7,6,5,10,4,3,2,1]

const sortirovcas=[...numberr].sort((a,b)=>a-b)

console.log(
    'По возрастанию',
    sortirovcas
)*/

/*console.log(
    users.find((user)=>user.name==='Darmm') находит только 1похожый
)*/
/*console.log(
    users.every((user)=>user.age>= 18) ишет не совершеналетних
)*/
/*console.log(
    users.some((user)=>user.name==='Darmm') ишет имена похожы на ведденфх
)*/
/*const ageSum=names.reduce((sum,{age})=>sum+age,0) 
console.log(ageSum/names.length)*/
/*const users=[
    {
        name:'Edo',
        age:19,
        city:'Моссква'
    },
    {
        name:'Lakri',
        age:28,
        city:'Екатеренбург'
    },
    {
        name:'Darmm',
        age:30,
        city:'Моссква'
    },
    {
        name:'Darmm',
        age:16,
        city:'Санкт-Петеребург'
    },
]

const crediSum=users.reduce((sum,{age})=>sum+age,0)
console.log('Средний возраст:',
    crediSum/users.length
)*/
/*const user={
    name:'Alexsey',
    age:28,
    city:'Moscva'
}
const userEnter=Object.entries(user)

console.log(userEnter)

userEnter.forEach(([key,valye])=>{
    console.log('имя',key)
    console.log('Значение свойства', valye)
})*/
/*const userEnter=Object.entries(user)
const userEnterPoprafca=userEnter.map(([Key,value])=>{
    return [Key.toUpperCase(), `~~~${value}~~~`]
})
console.log(userEnterPoprafca)*/

/*const data=new Map()
data.set(1,'как число')
data.set('1', 'как строка')


console.log(data.get(1))
console.log(data.get('1'))*/
/*console.log(
    info.filter((info)=>info.name==='Eldiar')
)*/
/*console.log(
    info.find((info)=>info.name==='Eldiar')
)*/
/*console.log(  
    info.some((info)=>info.name==='Eldiar')
)*?
/*console.log(
    info.every((info)=>info.age>=17,'Не совешеналетний')
)*/
/*const userFilter=info.filter(({age})=>{
    return age<18
})
console.log(userFilter)*/
/*const gooog=info.map((info)=>{
    return `${info.name} ему столько ${info.age}лет он прожыл в городе ${info.city}`
})
console.log(gooog)*/
/*const revir=info.reverse()
console.log(revir)*/
 /*const reducSum=info.reduce((sum,{age})=>sum+age,0)
 console.log('Средний возраст',
    reducSum/info.length
 )*/
/*console.log(
    info.some((info)=>info.name==='Eldiar')
)*/

/*const user={
    name:'edo',
    age: 18,
    city: 'Moscva',
    aaddres: {
        street:"улитса Пушкина д1 кв1",
        zipcode:123455678 ,
},
    todos:['slet','eat','work'],
    HasCat:true,
    yecht:null,
}
const userandefay=JSON.stringify(user)
//console.log(userandefay)
const parestJSON=JSON.parse(userandefay)
console.log(parestJSON)*/
// now student создание и передачи даных чепез передаваймый от материнского
/*class Student{
  constructor(name,age){
    this.name=name
    this.age=age
  }  
}

const firtStudent=new Student('Eldiar', 17)
const secontStusent=new Student('Aman', 17)

console.log('first', firtStudent)
console.log('secont', secontStusent)*/

//now structura
//учить прям все не надо но базу должен знать

/*class Student{
    constructor(name,age,hasExpres){
        this.name=name
        this.age=age
        this.hasExpres=hasExpres
    }
    logName() {
        console.log(this.name)
    }
    isAbu(){
        return this.age>=18   
    }
    isReady(){
        return this.hasExpres
    }
}*/
/*class person{
    countor='Россия'

    constructor(name,age){
    this.name=name
    this.age=age
    }
    eat(){console.log('Ем....')}
    sleep(){console.log('Сплю....')}
}

const exzample=new person('Aman',20)

class Developer extends person {
    writCode(){console.log('Пишу код...')}

    sleep(){
        console.log('Не хочу спать, пойду ешо попишу код...')
        this.writCode()
    }
}


const exzampleDeveleper=new Developer('Михаил', 30)
exzampleDeveleper.sleep()*/


/*Tim Врея
//setInterval-Ввызваная слова примеру будет выполнятса бесконечно или будет 
 до оприделеного функсий*/

/*const logMessegt=(name,age)=>{
    alert(`Привет меня завут ${name},мне ${age}`)
}
setTimeout(logMessegt,2000,'Eldiar',29)*/

/*const logMessegt=()=>{
    alert('Какойто сообшение')
}

const timeId= setTimeout(logMessegt,3000)
clearTimeout(timeId)*/

/*const intervalId= setInterval(()=>{
    console.log('Hello')
}, 1000)

setTimeout(()=>{
    clearInterval(intervalId)
},5000)*/
//clearInterval(intervalId)
/*setTimeout( function logMessegt(){
    alert('Сообщение раз в 1 секунду')

    setTimeout(logMessegt,1000)
},1000)
*/

/*console.log('Сообшение №1')
setTimeout(()=>{
    console.log('Сообшение №2 с задержкой 0 (?) миллисекундах')
})
console.log('Сообшение №3')*/

//now tru catch finally, throw проверка ошыбок

/*console.log('Start')
try{
    const name=undefined

    name.forEach((name)=>{
        console.log('Name',name)
    })
} catch (error){
    console.log('Ошыбка',error)
}

console.log('end')*/

//now Event Loop 
/*const wait=(ms,calloback)=>{
    setTimeout(calloback,ms)
}
console.log(1)
wait(5000,()=>console.log(2))
console.log(3)*/
/*
//Синхронный код выполняюший сразу
console.log('Start program')
//Асихроность операций с использоавнием setTimeout
setTimeout(()=>{
    console.log('Асихроность')
},2000)
//Сихроный код, выполняюший сразу
console.log('end Program')*/

/**
 * promise-специальная обукт-настроект
 * для работы с всихроным кодом
 */
/**
 * promist имеет 3 состояния:
 * pending-ожыдание исходного состояния 
 * fulfilled- выполнено успешно получение результатат
 * rejected-выполнено с ошыбкой
 */
/**
 * Основные методы promise
 * then()-обрабатывает fulfilled состояние
 * catch()-обрабвтывает rejected состояние 
 */

/*const promise=new Promise((fulfil,reject)=>{
    console.log('Начало, состояние pending...')

    setTimeout(()=>{
        if(Math.random()>0.5){
        fulfil('Ура, состояние fulfil')
        }else{
            reject('Ура, состояние reject')
        }
    },3000)
})

promise
.then((succsesData)=>{
    console.log('Успешно! Получены даные:', succsesData)
})
.catch((errorData)=>{
    console.log('Ошыбка  Получуны данные:',errorData)
})
.finally(()=>{
    console.log('Код выполняюший в самом конце,независимо от рез')
})*/
/*const makedRequer=(Url,onSuccess)=>{
    return new Promise((fulfill)=>{
        fulfill('Ура состояние fulfill')
    })
}
const sellerdId=154

makedRequer(`/api/sellers/${sellerdId}`)
.then((seller)=>{
    const firstProductId=seller.productId[0]

    return makedRequer(`/api/product/${firstProductId}`)
})
.then((product)=>{
    const firstReviewId=product.reviewIds[0]

    return makedRequer(`/api/reviews/${firstReviewId}`)
})
.then((review)=>{
    const authorName=review.author.name
})
.catch((error)=>{
    console.log(error)
})*/

//async function getSomethin(){}
//const getSomethin=async()=>{}

/*async function getSomethin() {
    return new Promise((fulfill)=>{
        setTimeout(()=>{
            fulfill('Hello')
        },3000)
    })
}
console.log('Start')
const something=await getSomethin()
console.log(something)

console.log('End')*/

/*const valiName=prompt('Введите совой имя')
const valiage=Number(prompt('Введите свой возраст'))
const valiCity=prompt('Где ты жывеш')
const constructor= alert(`Тибе завут ${valiName} и тебе${valiage}лет ты живёж в городе ${valiCity}`)
console.log(constructor)

const Agetip=()=>{
    if(valiage<1 || valiage>125 ){
        console.log('Такого не мжет быть')
    }
    if(valiage<18){
        console.log('Не совершеналетний')
        setTimeout(()=>{
            alert('Доступ Запришён')
        },3000)
    }else{
        console.log('Взрослый')
        setTimeout(()=>{
            alert('Доступ разрешён')
        },3000) 
    }
}
Agetip()*/

//now import and export
/*import initTabs, {selectors} from "./tabs.js";
import { initModals } from "./models.js";
import { initSliders } from "./sliders.js";


initTabs()
initModals()
initSliders()
*/

/*const numbers=Array.from({length:5},(_,i)=>i)
console.log(numbers)*/
// DoM
/*
console.log(window)

//Основной JavaScirip
console.log(window.Math)
console.log(window.Object.keys({name:'Eldiar',age:17}))
console.log(window.Number('123'))
console.log(window.Boolean(0))

//DOM (Browser Object Modem)

console.log(window.navigator)
console.log(window.screen)
console.log(window.location)
console.log(window.history)
console.log(window.frames)
console.log(window.XMLHttpRequest)
/* DOM (DOcument Object MOdem)*/

/**
 * BOM (Browser Object Modem)
 */
/*
console.log('Информатция о браузере', window.navigator)
console.log('Информатция об экране ', window.screen)
console.log('Информатция об URL', window.location)
console.log('Информатция об историй текушей сети', window.history)
//сохраняет данные в LocalStorage
window.localStorage.setItem('id', JSON.stringify({id:123}))

const id=JSON.parse(
    //Полученные данные из LocalStorage 
    window.localStorage.getItem('key-name')
)
*/


/**
 * Dom(Document Object Model)
 * console.dir(window.document)
 */
/*
const fn=()=>{
    const location='Moscow'//🚫
}

console.log(
    'Текуший полный URL-Адрец',
    location.href//❌
)

console.log(
    'Текуший полный URL-Адруц',
    window.location.href//✅ 
)

fn()
*/
// DOM asyns and defer

/*console.dir(document)
console.log(document.documentElement)
console.log(document.head)*/

/*console.log('Элемент <body>:',
    document.body)

console.log('Родительский элемент над <body:>',
    document.body.parentElement
)

console.log('Соседний элемент перед <body>:',
    document.body.previousElementSibling
)

console.log('Соседний элемент после <body>',
    document.body.nextElementSibling
)

console.log('Дочерний элемент <body>:',
    document.body.children
)*/

/*const divElement=document.body.children[0]

console.log(
    'Элемент <div>',
    divElement
)

console.log(
    'Первый дочерний элемент внутри <div>',
    divElement.firstElementChild
)

console.log(
    'Последний  дочерний элемент внутри <div>',
    divElement.lastElementChild
)*/

/*const divElement=document.body.children[0]

console.log(
    'Элемент <div>',
    divElement
)

console.log('Родительский элемент над <div>',
    divElement.parentElement
)
console.log('Родительский элемент над <div>',
    divElement.parentNode
)*/

// now getElement and querySelector

/*const buttonElenemt= 
document
.body
.children[0]
.children[0]
.children[0]
.children[0]

console.log('Кнопка', buttonElenemt)*/


//const buttonElenemt=document.getElementById('myButton')
/*const buttonElenemt=document.querySelector('button','#myButton')
console.log(buttonElenemt)*/

/*const listItemElement=document.querySelectorAll('.list .items')
console.log(listItemElement)*/

/*
// поиск элемента сверху вниз
const wrapperElement=document.querySelector('#wrapper')
console.log('wrapperElement',wrapperElement)

const listElement=wrapperElement.querySelector('.list')
console.log('listElelement',listElement)

const listItemElement=listElement.querySelectorAll('.items')
console.log('listItemElement',listItemElement)*/

/*
// поиск нужного classa
const thisBoxElement=document.querySelector('.box-3')

const firstBoxElement=thisBoxElement.closest('.box-1')

console.log(firstBoxElement)*/


/*const fromElement=document.getElementsByTagName('from')
const radioGroupElement=document.getElementsByClassName('radio-group')
const inputElement=document.getElementsByName('specialization')
console.log(fromElement)
console.log(radioGroupElement)
console.log(inputElement)*/
/**
 * <div class="box-1"> 
    <div class="box-2">
        <div class="box-3"></div>
    </div>
</div>
 */

/*const link=document.querySelector('a')
const list=document.querySelector('ul')
const listitem=document.querySelector('li')
const form=document.querySelector('form')
const input=document.querySelector('input')
const buttom=document.querySelector('button')*/
/*
// для DOM елементов
const linkElement=document.querySelector('a')
const listElement=document.querySelector('ul')
const listitemElement=document.querySelector('li')
const formElement=document.querySelector('form')
const inputElement=document.querySelector('input')
const buttomElement=document.querySelector('button')
// если их много то нужно добовлять s в конце
*/
/**
 *   <div class="slider" data-js-slider>
    <ul class="slider__list" data-js-list>
        <li class="slider__slider" data-js-slider>...</li>
        <li class="slider__slider" data-js-slider>...</li>
        <li class="slider__slider" data-js-slider>...</li>
    </ul>
</div>
 */
/*const sliderElement=document.querySelector('[data-js-slider]')
const sliderListElement=document.querySelector('[data-js-slider-list]')
const sliderSliderElement=document.querySelectorAll('[data-js-slider-slider]')


console.log(sliderElement)
console.log(sliderListElement)
console.log(sliderSliderElement)*/

//now data-атрибуты
/**
 *     <form class="from" action="/login">
        <input class="from__input" name="login" placeholder="Логин" >
        <input class="from__input" name="password" type="password" placeholder="Пороль">
        <button class="from__button" type="submit">Войти</button>
    </form>
 */
/*const fromElement=document.querySelector('.from')
const fromInputElement=document.querySelector('.from__input[name="login"]')
const passwordInputElement=document.querySelector('.from__input[name="password"]')
const submitButtonElement=document.querySelector('.from__button')

console.log(fromElement)
console.log(fromInputElement)
console.log(passwordInputElement)
console.log(submitButtonElement)*/

//для получение значение любого атрибут элемента есть getAttribute 
/**
 *  <form class="from" action="/login" qwerty="!!!" 
    data-some-value="123">
        <input class="from__input" name="login" placeholder="Логин" >
        <input class="from__input" name="password" type="password" placeholder="Пороль">
        <button class="from__button" type="submit">Войти</button>
    </form>
 */
/*const formElement=document.querySelector('.from')
console.dir(formElement)

console.log('formElement has qwerty:',
    formElement.hasAttribute('qwerty')
)

console.log('formElement has data-some-value:',
    formElement.hasAttribute('data-some-value')
)*/

/*const formElement=document.querySelector('.from')
console.dir(formElement)
formElement.action='/register'
console.log('formelement action', formElement.getAttribute('action'))*/

/*const loginInputElement=document.querySelector('.from__input[name="login"]')
console.dir(loginInputElement)
// value нету
//const NemElement=document.getElementById('from__id') находить тольок через id

//✅ синхроно работает
loginInputElement.setAttribute('value','admin')
console.log('input  value:',loginInputElement.value)

//❌ Синхроность Не сработает
loginInputElement.value='Vasya'
console.log('input value:', loginInputElement.getAttribute('value'))
*/


// now Css-class  style and classlist 

/*перезаписывает style который был дан к стили и убирает налаженную ране стиль
boxElement.style.cssText=`
position:absolute;
top:40px;
left:80px;
width:80px;
borderWidth: 10px;
border: 2px solid green;`*/
/* это добовляет свойства без удаление прежднеге налаженого свойства
boxElement.style.cssText+=`
position:absolute;
top:40px;
left:80px;
width:80px;
borderWidth: 10px;
`*/

/*const boxElement=document.querySelector('.box')

console.log(boxElement)

console.log(boxElement.style)

console.log('значение width у boxElement',
    boxElement.style.width
)

console.log('Вычисление значения стилей boxElement',
    getComputedStyle(boxElement).width
    // getComputedStyle,(bpxElement '::after').textDecoration
)*/

// манипулятция с js в css классы
//const boxElement=document.querySelector('.box')
/*
boxElement.className +=' red' доюавление класс красный

console.log(boxElement.classList)
boxElement.classList.add('red', 'big') добовляет классы 
boxElement.classList.remove('red','big') убирает классы 
*/

/*const hasError=false
boxElement.classList.toggle('red', hasError) если есть такой клас то удаляет если нет то добовляет*/
/*
Найдет если такой клас если есть то true если нет false
console.log('Если ли класс "box" у элемента boxElement',
    boxElement.classList.contains('box')
)
console.log('Есть ли класс "red" у элемента boxElement',
    boxElement.classList.contains('red')
)*/
//boxElement.style.setProperty('--border-color','blue')

// практика с чат GPT
/*const paragraph=document.getElementById("text")
const button=document.getElementById("btn")

button.addEventListener("click",()=>{
    const randomColor=`rgb(${Math.random()*255}, ${Math.random()*255},
     ${Math.random()*255})`
     const randomBacgrauntColor=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
     paragraph.style.color=randomColor
     paragraph.style.backgroundColor=randomBacgrauntColor
})*/

/*let Massif=[1,2,3,4,5,6,7,8,9,10]

const Even=Massif.filter((Massif)=>Massif%2===0)
console.log(Even)

const odd=Massif.filter((Massif)=>Massif%2===1)
console.log(odd)

let SumEven=Even.reduce((acc,current)=>acc+current,0)
console.log(SumEven)

let SumOdd=odd.reduce((acc,current)=>acc+current,0)
console.log(SumOdd)*/

/*let Massif=[]
for(let i=1; i<=20; i++){
    Massif.push(i)
}
const result=Massif.reduce((acc,num)=>{
    if(num%3===0){
        acc.sumDivBy3 += num
        acc.numbersDivBy3.push(num)
    }
    if(num%5===0){
        acc.sumDivBy5 += num
        acc.numbersDivBy5.push(num)
    }
    return acc;
},{sumDivBy3:0,sumDivBy5:0,numbersDivBy3: [],numbersDivBy5: []})

console.log(result.sumDivBy3)
console.log(result.sumDivBy5)*/

// DOM-Элемент понятие кординат и размеров 

/*const boxElement=document.querySelector('.box')
const boxElementReactParams=boxElement.getBoundingClientRect()
console.log(boxElementReactParams)*/

//console.log('Вычелений из свойств heidht высота элемента', getComputedStyle(boxElement).height)
// scc *{box-sizent:1}
/*console.log('Полная ширина:', boxElement.offsetWidth)
console.log('Полна высота:', boxElement.offsetHeight)

console.log('Растояние от левой гранитцы элемента до внутренности:'
    ,boxElement.clientLeft)
console.log('Растояние от верхней гранитцы элемента до внутренности'
    ,boxElement.clientHeight)

console.log('Ширина без учёта рмаки и скроллбара:', boxElement.clientWidth)
console.log('Высота без учёта и скроллбара:', boxElement.clientHeight)

console.log('Ширина без учёта рамки включая прокручиваемую область:'
    ,boxElement.scrollWidth
)
console.log('Высота без учёта рамки включая прокручиваемую область:'
    ,boxElement.scrollHeight
)*/

/**
 * прокрутка содержимого элемента
 * на 10px вправо на 50px вниз, boxElement.scroll(10,50)
 * относительно начального полоения
 * можно менятьь тольео у scroll left Top
*/
/*
boxElement.scrollLeft=10
boxElement.scrollTop=50
console.log('Ширина невидимой уже покрученой по горизонтали область:',
    boxElement.scrollLeft
)
console.log('Ввысота невидимой уже покрученой по вертикальной область',
    boxElement.scrollTop
)*/

/*const paragraf1=document.getElementById('text__1')
const paragraf2=document.getElementById('text__2')
const paragraf3=document.getElementById('text__3')
const paragraf4=document.getElementById('text__4')
const paragraf5=document.getElementById('text__5')
const button=document.getElementById('btn')

button.addEventListener("click", ()=>{
    const randomcolor1=`rgb(${Math.random()*255}
    ,${Math.random()*255},${Math.random()*255})`
     const randomcolor2=`rgb(${Math.random()*255},
     ${Math.random()*255},${Math.random()*255})`
      const randomcolor3=`rgb(${Math.random()*255},
      ${Math.random()*255},${Math.random()*255})`
       const randomcolor4=`rgb(${Math.random()*255},
       ${Math.random()*255},${Math.random()*255})`
        const randomcolor5=`rgb(${Math.random()*255},
        ${Math.random()*255},${Math.random()*255})`
         const randomcolorButton=`rgb(${Math.random()*255},
         ${Math.random()*255},${Math.random()*255})`

         paragraf1.style.color=randomcolor1
         paragraf2.style.color=randomcolor2
         paragraf3.style.color=randomcolor3
         paragraf4.style.color=randomcolor4
         paragraf5.style.color=randomcolor5
         button.style.color=randomcolorButton
})*/

//now JS в браузере: размер окна и странитцы скроля scrollIntoView,
// srollTo, scrollBy
/**
 *     <section id="about">
        <h2>О нас</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem vero veritatis aperiam, doloremque rerum neque porro quod ad aliquid harum vitae numquam libero quo animi quam! Rerum exercitationem perferendis perspiciatis eaque maxime maiores necessitatibus esse nemo voluptatum? Aliquid, laudantium eos quas aliquam voluptatem inventore, nesciunt nobis unde magni perferendis magnam laborum? Tempore quasi nisi quibusdam consequatur labore vitae reprehenderit harum? Ad quisquam iste reiciendis. Dolores facere, corporis alias laborum ipsa earum aut, eum in ratione maxime delectus non repellat id nobis dolorum ullam ad et vero, qui sapiente! Culpa laudantium eaque necessitatibus ratione possimus ea a in? Cum, qui eos.</p>
    </section>
    <section id="catalog">
        <h2>Каталог</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellat libero voluptatibus nam est, corporis aut saepe ut. Illo sed nulla cupiditate soluta, quibusdam autem expedita quos minus, facere officiis sapiente deleniti sequi delectus, distinctio dolor nisi corporis labore error magnam possimus. Eligendi corporis facilis dolorum neque dicta mollitia, eaque velit optio veniam, inventore enim quos amet omnis consequuntur, non quia deleniti? Natus perspiciatis dicta ullam qui, vero, amet excepturi, obcaecati hic quibusdam quidem esse deserunt at error. Facere quam eaque magnam iste rerum porro corporis similique? Molestiae sed explicabo fugiat adipisci eius, magni facere, quam incidunt, nobis maiores illo.</p>
    </section>
    <section id="reviews">
        <h2>Отзывы</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam libero laboriosam rem dolores expedita! Voluptatibus mollitia repudiandae nisi dolores? Corporis error quod ea blanditiis culpa illum quae consectetur vel vero obcaecati, asperiores fuga officiis ab assumenda, harum porro. Atque id sequi quibusdam maiores corrupti architecto omnis amet sit vitae. Magnam, totam asperiores, recusandae non voluptatum neque repellendus eveniet nulla quod cumque eos animi autem praesentium officiis omnis voluptate, incidunt sunt provident. Reprehenderit libero eum neque modi rerum labore, eveniet dignissimos natus doloremque nisi, obcaecati, cum eius qui odit enim deleniti quidem molestiae. Quod quisquam excepturi accusantium, aperiam architecto asperiores non.</p>
    </section>
    <section id="contacts">
        <h2>Контакты</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit repudiandae laboriosam facere. Eveniet veniam illo veritatis dolorem, eaque hic molestiae enim quas dolores quidem facere at sunt ipsa aliquid illum dolorum dolor similique laboriosam, quaerat a id nisi minima. Esse voluptates accusamus non sapiente velit sit ipsum quisquam ratione aperiam vero optio quae, fugiat quas. Ipsum, veniam. In blanditiis quo fuga, eaque optio animi deleniti exercitationem dignissimos eveniet odit non sint. Distinctio vero tempora laudantium in quidem voluptas accusantium hic suscipit neque iusto, nulla quaerat sunt, cum ut, vitae autem ratione nesciunt culpa vel sequi ducimus explicabo! Ab, asperiores!</p>

    </section>
 */
//const htmlElement=document.documentElement
// правильно использовать clientWithd and Heigtht так ты не запутаешся
//console.log('Ширина окна через document.documentElement:', htmlElement.clientWidth)
//console.log('Высота окна: через document.documentElement', htmlElement.clientHeight)
/* не учитывает скролы(тоесть то чем можно лисать внииз вправо влево)
console.log('Ширина окна через windows;', window.innerWidth)
console.log('Высота окна через windows;', window.innerHeight)*/
/*console.log('Ширина странитцы:', htmlElement.scrollWidth)
console.log('Высота стронитцы:', htmlElement.scrollHeight)*/
/*console.log('Кординаты позиции скролла странитцы:',
    window.scrollX,
    window.scrollY
)*/
// практика !!! scrollIntozview block: end center nearest-рандом
/*window.scroll({
    top:200,
    behavior:'smooth'
})
// scroll-листает обрат до 0 0 кордов  scrollBy-листает дальше тоесть продолжает листать
setTimeout(()=>{
    window.scrollBy({
        top:100,
        behavior:'smooth'
    })
},2000)*/
/*const reviewSelectorElement=document.querySelector('#reviews')
setTimeout(()=>{
    reviewSelectorElement.scrollIntoView({
        behavior:'smooth',
        block:'nearest',
    })
},300)*/

/**
 * Создание элементов,вставска,перемещение,удаление, 
 * и клонирование
 */

//const boxElement=document.querySelector('.box')
/*console.log('Тукстовый содержание boxElement:',
    boxElement.textContent)*/
//const firstParagraphElement=document.querySelector('.paragraph-1')
/*console.log('Текстовый содержимое firsParagraphElement;',
    firstParagraphElement.textContent)*/
//firstParagraphElement.textContent +=' Обновления параграфа' переименование параграфа
/*console.log('HTML-содержимое boxElement;',
    boxElement.innerHTML)
console.log('HTML-содержимое firstParagraphElemetn;',
    firstParagra.innerHTML)*/
/*boxElement.innerHTML +=`
Обновленый текст
<p>Ноый параграфт</p>`*/
/*console.log('HTML-содержание boxElement:',
    boxElement.innerHTML)
console.log('HTML-содержимое boxElement, включая сам элемент:',
    boxElement.outerHTML)*/
/*boxElement.outerHTML=`
<article>123</article>`*/
/*const newParagraphElement=document.createElement('p')
newParagraphElement.textContent='Четвертый параграфт'
newParagraphElement.classList.add('paragraph-4')
console.log(newParagraphElement)
const boxElement=document.querySelector('.box')
// append в конец строки prapend-в начала строки beffor after 
boxElement.append(newParagraphElement)*/

/*const firstBoxElement=document.querySelector('.box-1')
const secondBoxElement=document.querySelector('.box-2')
const thirdParagraphElement=document.querySelector('.box-3')
const fourthParagraphElement=document.querySelector('.box-4')
const fifthParagraphElement=document.querySelector('.box-5')

const getNewParagraphElement = () => {
const newParagraphElement = document.createElement('p')
newParagraphElement.textContent = 'Новый параграфт'
return newParagraphElement
}

// вставска элемента <p> в начало box-1
firstBoxElement.append(getNewParagraphElement())
secondBoxElement.prepend(getNewParagraphElement())
thirdParagraphElement.before(getNewParagraphElement())
fourthParagraphElement.after(getNewParagraphElement())
fifthParagraphElement.replaceWith(getNewParagraphElement())
//append===after,prepend===before,,replaceWith===удаление*/

/*const aboutSelectionElement=document.querySelector('#about')
const catalogSelectionElement=document.querySelector('#catalog')
const saytSelectionElement=document.querySelector('#sayt')
const reviewsSelectionElement=document.querySelector('#reviews')
const contactsSelectionElement=document.querySelector('#contacts')
    setTimeout(()=>{
        catalogSelectionElement.scrollIntoView({
            behavior:'smooth',
            block:'center'
        })
        setTimeout(()=>{
            saytSelectionElement.scrollIntoView({
                behavior:'smooth',
                block:'center'
            })
            setTimeout(()=>{
                reviewsSelectionElement.scrollIntoView({
                    behavior:'smooth',
                    block:'center'
                })
                setTimeout(()=>{
                    contactsSelectionElement.scrollIntoView({
                        behavior:'smooth',
                        block:'center'
                    })
                    setTimeout(()=>{
                        aboutSelectionElement.scrollIntoView({
                            behavior:'smooth',
                            block:'center'
                        })
                    },3000)
                },2000)
            },1500)
        },1000)
    },500)*/

//now js делегирование поведение браузера генератция собственых событий
/**
 * <div class="todo">
        <ul class="todo__list">
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
            <li class="todo__item">Todo item...</li>
        </ul>
    </div>
    js
    /*const todoItemElements=document.querySelectorAll('.todo__item')
todoItemElements.forEach((todoItemElements)=>{
    todoItemElements.addEventListener('click',()=>{
        todoItemElements.classList.add('is-completed')
    })
})*/

//new Событие мыши и указателя Drag and Drop компоненты

/**<div class="box">
        <button class="button" type="button">Нажми на меня</button>
    </div>
 * const buttonElement=document.querySelector('.button')
/*buttonElement.addEventListener('mouseout',()=>{
    console.log('работает при наведение и убрание курсора')
})*/
/*buttonElement.addEventListener('mousedown',(event)=>{
    console.log('1 mousedown', event.target , event.currentTarget)
})
buttonElement.addEventListener('mouseup', (event)=>{
    console.log('2 mouseup', event.target, event.currentTarget)
})
buttonElement.addEventListener('click', (event)=>{
    console.log('3 click', event.target, event.currentTarget)
})*/
/**
 * События мышы   Событие указателя
 * mousemove      *pointermove
 * mousedown      *pointerdown
 * mouseup        *pointerup
 * mouseover      *pointerover
 * mouseout       *pointerout
 * mouseenter     *pointerenter
 * mouseleave     *pointerleave
 *                *pointercansel
 *                *pointercapture
 *                *lostpointercapture
 */            
/*const boxElement=document.querySelector('.box')

boxElement.addEventListener('click',()=>{
    console.log('click')
})
boxElement.addEventListener('dblclick', ()=>{
    console.log('dblclick')
})
boxElement.addEventListener('contextmenu',()=>{
    console.log('contextnemu')
})*/

// dregen drop работа
/**
 * <div class="chicken draggable" data-js-dnd>
        <img src="/my-channel.jpeg">
    </div>
    <div class="fish draggable" data-ja-dnd>
        <img src="/foto/channel-5.jpeg">
    </div>
    <div class="shrimp draggable" data-ja-dnd>
        <img src="/foto/channel-4.jpeg">
    </div>
    <div class="cat" data-ja-dnd>
        <img src="/foto/channel-6.jpeg">
    </div>
 */
/*class DragAndDrop{
    selection={
        root:'[data-js-dnd]',
    }

    stateClasses={
        isDragginf:'is-dragging',
    }

    initiaStarte={
        offsetX:null,
        offsetY:null,
        isDragging:false,
        currentDraggingElement:null,
    }
    constructor(){
        this.state={...this.initiaStarte}
        this.bindEvent()
    }
    onPointerDown(event){
        const {target,x,y}=event
        const isDraggable=target.matches(this.selection.root)
        if(!isDraggable){
            return
        }
        target.classList.add(this.stateClasses.isDragginf)
        const {left,top}=target.getBoundingClientReact()
        this.state={
            offsetX: x-left,
            offsetY: y-top,
            isDragging:true,
            currentDraggingElement:target,
        }
    }

    onPointerMove(event){
        if(!this.state.isDragging){
            return
        }
        const x=event.pageX-this.state.offsetX
        const y=event.pageY-this.state.offsetY
        this.state.currentDraggingElement.style.left=`${x}px`
        this.state.currentDraggingElement.style.top=`${y}px`
    }

    onPointerUp(){
        if(!this.state.isDragging){
            return
        }
        this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging)
        this.state={...this.initiaStarte}
    }

    bindEvent(){
        document.addEventListener('pointerdown', (event)=>this.onPointerDown(event))
        document.addEventListener('pointermove',(event)=>this.onPointerMove(event))
        document.addEventListener('pointerout',(event)=>this.onPointerUp(event))
    }
}*/


/**
 * body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #222;
}
.box{
    width: 150px;
    height: 150px;
    background:linear-gradient(135deg,#ff73be,#ff758c);
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    transition: transform 0.1s ease-out;
    perspective: 1000px;
    transform-style:preserve-3d;
    box-shadow: 0px 0px 30px rgba(0,0,0, 0.5);
 */
/*const boxElement=document.querySelector('.box')
boxElement.addEventListener('mousemove',(e)=>{
    const {left,top,width,height}=boxElement.getBoundingClientRect();
    const x=e.clientX-left
    const y=e.clientY-top

    const rotateX=(y/height-0.5)*-40;
    const rotateY=(x/width-0.5)*40

    const shadowX=(x/width-0.5)*-20;
    const shadowY=(y/height-0.5)*20;
    boxElement.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    boxElement.style.boxShadow=`${shadowX}px ${shadowY}px 30px rgba(0,0,0, 0.5)`

})
boxElement.addEventListener("mouseleave",()=>{
    boxElement.style.transform="rotateX(0deg) rotateY(0deg)";
    boxElement.style.boxShadow="0px 0px 30px rgba(212, 79, 181, 0.5)"
})*/
/**
 * <div class="font">
        <div>
        <input class="input1" type="number">
        <input class="input2" type="number"> 
    </div>
    <div class="fiig">
        <button class="plus">+</button>
        <button class="minus">-</button>
        <button class="delenie">:</button>
        <button class="umnojenie">*</button>
    </div>
    <p class="otvet">:15</p>
    </div>
 */
/*const input1Element=document.querySelector('.input1')
const input2Element=document.querySelector('.input2')

const plusDivByElement=document.querySelector('.plus')
const minusDivByElement=document.querySelector('.minus')
const delenieDivByElement=document.querySelector('.delenie')
const umnojenieDivByElement=document.querySelector('.umnojenie')
const otvetDivByElement=document.querySelector('.otvet')
const getValues=()=>{
    const inp1=Number(input1Element.value)
    const inp2=Number(input2Element.value)
    return[inp1,inp2]
}
const updateAnswer=(result)=>{
    otvetDivByElement.textContent=`Ответ${result}`
}
plusDivByElement.addEventListener('click',()=>{
    const [inp1,inp2]=getValues()
    updateAnswer(inp1+inp2)
})
minusDivByElement.addEventListener('click',()=>{
    const [inp1,inp2]=getValues()
    updateAnswer(inp1-inp2)
})
delenieDivByElement.addEventListener('click',()=>{
    const [inp1,inp2]=getValues()
    if(inp2===0){
        updateAnswer('Ошыбка деление на ноль нельзя')
    }else{
        updateAnswer(inp1/inp2)
    }
})
umnojenieDivByElement.addEventListener('click',()=>{
    const [inp1,inp2]=getValues()
    updateAnswer(inp1*inp2)
})*/

/*const display=document.querySelector('.otvet');
const currentInput=''
let operator=null
let previousInput=''

function appendNumber(number){
    currentInput+=number;
    display.value=currentInput;
}
function appendOperator(or){
    if(currentInput==='') return
    if(previousInput!==''){
        calculete()
    }
    operator=or;
    previousInput=currentInput;
    currentInput='';
}
function clearDisplay(){
    currentInput='';
    previousInput='';
    operator=null;
    display.value='';
}
const result='';
    let prev=parseFloat(previousInput);
    let current=parseFloat(currentInput);

    switch(operator){
        case '+',
        result=prev+current:
        break
        case '-',
        result= prev-current:
        break;
        case '*',
        result= prev*current:  
        break
        case ':',
        result= prev/current:
        break;
    }
    {if(current===0){
        alert('Ошыбка: Деление на 0!')
        clearDisplay()
        return
    }
    result=prev/current.
    break
}
    display.value=result
    previousInput=result.toString()
    current=''
    operator=null*/


let screen=document.querySelector('.displey')
let currentNumber=""
let previousNumber=""
let operator=null
// Функсия для ввода чисел
function numClick(num){
    if(currentNumber==="0") currentNumber=""
    currentNumber +=num
    screen.textContent=currentNumber;
}
// Функсия для установки оператора
function setOperator(op){
    if(currentNumber=="") return;
    previousNumber=currentNumber;
    currentNumber=""
    operator=op
}
// Функсия для очишения экрана 
function clearScreen(){
    screen.textContent="0"
    currentNumber=""
    previousNumber=""
    operator=null;
}
// Функсия для вычисления результата
function calculate(){
    if(previousNumber==="" || currentNumber==="" || operator===null)return;

    let a=parseFloat(previousNumber);
    let b=parseFloat(currentNumber);
    let result=0;

    switch (operator){
        case "+":
        result=a+b;
        break;
        case "-":
        result=a-b;
        break;
        case "*":
        result=a*b;
        break;
        case "/":
        result=b !==0? a/b: "Ошыбка";
        break
        case "²":
            result=a**2
        break;
          return 'Ошыбка: не верный оператор'
    }
    screen.textContent=result;
    currentNumber=result.toString();
    previousNumber=""
    operator=null;

}





































