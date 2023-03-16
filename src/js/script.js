



const section = document.querySelectorAll('.accardion')
let cardHeight = '140px'
let cardOpacity = '1'
let cardDisplay = 'block'
console.log(document.title === 'History')
const cardProps = {title:'Новый проект SKIlllINE',owner:  'Коцюбинский Дмитрий',date:'14.02.2023',projTitle:'Доступ к сайту по SSH',link:'access.html'}
const rowProps = {name:'Доступ к сайту по SSH',desc:  'Изменение доступа к сайту',login:'admin',password:'qwerty123gh',url:'https://lk.skillline.ru',date:'07.11.2022',svg:`<svg width="47" class='btns tableBtn' height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 7.34375C14.5771 7.34375 7.34375 14.5771 7.34375 23.5C7.34375 32.4229 14.5771 39.6562 23.5 39.6562C32.4229 39.6562 39.6562 32.4229 39.6562 23.5C39.6562 14.5771 32.4229 7.34375 23.5 7.34375ZM4.40625 23.5C4.40625 12.9548 12.9548 4.40625 23.5 4.40625C34.0452 4.40625 42.5938 12.9548 42.5938 23.5C42.5938 34.0452 34.0452 42.5938 23.5 42.5938C12.9548 42.5938 4.40625 34.0452 4.40625 23.5Z" fill="black"/>
<path d="M23.5 25.7031C24.7168 25.7031 25.7031 24.7168 25.7031 23.5C25.7031 22.2832 24.7168 21.2969 23.5 21.2969C22.2832 21.2969 21.2969 22.2832 21.2969 23.5C21.2969 24.7168 22.2832 25.7031 23.5 25.7031Z" fill="black"/>
<path d="M23.5 16.8906C24.7168 16.8906 25.7031 15.9043 25.7031 14.6875C25.7031 13.4707 24.7168 12.4844 23.5 12.4844C22.2832 12.4844 21.2969 13.4707 21.2969 14.6875C21.2969 15.9043 22.2832 16.8906 23.5 16.8906Z" fill="black"/>
<path d="M23.5 34.5156C24.7168 34.5156 25.7031 33.5293 25.7031 32.3125C25.7031 31.0957 24.7168 30.1094 23.5 30.1094C22.2832 30.1094 21.2969 31.0957 21.2969 32.3125C21.2969 33.5293 22.2832 34.5156 23.5 34.5156Z" fill="black"/>
</svg>`}
const historyProps = {name:'Изменение доступа к сайту',changed:'Коцюбинский Дмитрий',date:'07.11.2022'}
const row = ` <div class="table-row"><div><span id="name" >${document.title === 'History' ?  historyProps.name : rowProps.name  }</span><span id="about" >${document.title === 'History' ?    historyProps.changed : rowProps.desc}</span><span id="login">${document.title === 'History' ? historyProps.date  : rowProps.login   }</span><span id="password">${document.title === 'History' ?    '' : rowProps.password}</span><span id="url">${document.title === 'History' ?    '' : rowProps.url}</span><span id="founding_date">${document.title === 'History' ?  '' : rowProps.date}</span>
${document.title === 'History' ?    '' : rowProps.svg}
</div></div>`

const Card = `<a href=${document.title === 'Projects' ?  cardProps.link : 'projects.html' }><div class="card">
<div class="card-title">
     <div class="card-title__box">

     </div>
     <h3 class="card-title__h3">${document.title === 'Projects' ? cardProps.projTitle : cardProps.title}</h3>
        <svg class='cardSettings +btn' width="16" height="16" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 7.34375C14.5771 7.34375 7.34375 14.5771 7.34375 23.5C7.34375 32.4229 14.5771 39.6562 23.5 39.6562C32.4229 39.6562 39.6562 32.4229 39.6562 23.5C39.6562 14.5771 32.4229 7.34375 23.5 7.34375ZM4.40625 23.5C4.40625 12.9548 12.9548 4.40625 23.5 4.40625C34.0452 4.40625 42.5938 12.9548 42.5938 23.5C42.5938 34.0452 34.0452 42.5938 23.5 42.5938C12.9548 42.5938 4.40625 34.0452 4.40625 23.5Z" fill="#C6CDD3"/>
            <path d="M23.5 25.7031C24.7168 25.7031 25.7031 24.7168 25.7031 23.5C25.7031 22.2832 24.7168 21.2969 23.5 21.2969C22.2832 21.2969 21.2969 22.2832 21.2969 23.5C21.2969 24.7168 22.2832 25.7031 23.5 25.7031Z" fill="#C6CDD3"/>
            <path d="M23.5 16.8906C24.7168 16.8906 25.7031 15.9043 25.7031 14.6875C25.7031 13.4707 24.7168 12.4844 23.5 12.4844C22.2832 12.4844 21.2969 13.4707 21.2969 14.6875C21.2969 15.9043 22.2832 16.8906 23.5 16.8906Z" fill="#C6CDD3"/>
            <path d="M23.5 34.5156C24.7168 34.5156 25.7031 33.5293 25.7031 32.3125C25.7031 31.0957 24.7168 30.1094 23.5 30.1094C22.2832 30.1094 21.2969 31.0957 21.2969 32.3125C21.2969 33.5293 22.2832 34.5156 23.5 34.5156Z" fill="#C6CDD3"/>
            </svg>
</div>
<div class="card-owner">
    <h2>
        Владелец
    </h2>
    <p class="card-owner__name">${cardProps.owner}</p>
</div>
<div class="card-date">
    <h2>
        Дата создания
    </h2>
    <p class="card-date__time">${cardProps.date}</p>
</div>

       
</div></a>`

                    
              




let cardPop = {
        
    cardSvg:`   <div class=" cardSet side set">
    <ul class="menu">
        <li><div class="triangle"></div></li>
        <li><a href="#" class="side-link redact "><img src="img/settings.svg" alt="img/icon-drag.svg">Редактировать</a></li>
        ${document.title === 'Projects' ?  '' : `  <li class="menu__list"><a href="#" class="side-link move "><img src="img/Icon-a.svg" alt="img/icon-drag.svg">Переместить</a>
         
        </li>` }
      
        <li><a href="#" class="side-link dlt "><img src="img/icon-bin.svg" alt="img/icon-drag.svg">Удалить</a></li>
       
    </ul>

</div>`,
dltCard:`      <div class="dlt-title set">
    
<button class="modal__close" type="button" data-close>
    <img src="img/Icon-cross.svg" alt="">
</button>


<div class="modall-chapter__content">
    <div class="modal-chapter__header">
        <div class="modal-add__title modal-add__title--bg">${document.title === 'Projects' ?  'Вы уверены, что хотите удалить категорию?': 'Вы уверены, что хотите удалить проект?' }</div>
    </div>

    <div class="btn">
        <button class="btn__a btn__a--ma" type="submit">Подтвердить</button>
        <button class="btn__b btn__b--mb" type="button" data-close>Отменить</button>
    </div>
</div>
</div>`,
    redact:`<div class="redact-pop set">
    
    <button class="modal__close" type="button" data-close>
        <img src="img/Icon-cross.svg" alt="">
    </button>
    
    <div class="modal-add">
    
        <div class="modall-add__content">
            <div class="modal-add__header">
                <div class="modal-add__title">${document.title === 'Projects' ?  'Редактироват категорию': 'Редактировать проект' }</div>
            </div>
    
            <form class="form" action="/" method="post">
                <div class="form__group">
                    <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
                    <input class="form__input" name="name" type="text" id="name">
                </div>
    
                <div class="form__group">
                    <div class="label__counter">
                        <div class="form__label-word">
                            <label class="form__label" for="input-name">Описание</label>
                        </div>
                        <span class="counter" id="char_count">0/100</span>
                    </div>
                    <textarea class="form__textarea" name="input-text" id="textbox" maxlength="100"></textarea>
                </div>
    
                <div class="form__group">
                    <label class="form__label" for="input-name">Пригласить</label>
                    <div class="select__wrapper">
                        <select class="form__select" name="select-name">
                            <option>+ Добавить сотрудника</option>
                        </select>
                    </div>
                </div>
    
                <div class="upload-container" id="upload-container" method="post">
                    <img src="img/Vector.svg" alt="" width="30px" height="30px">
                    <div class="upload__item"> 
                        <input class="file-input" type="file" name="file" multiple>
                        <label class="file-label" for="file-input"></label>
                        <span class="file__label">Вы можете просто перетащить файл сюда</span>
                    </div>
                </div>
    
                <div class="line"></div>
    
                <div class="btn">
                    <button class="btn__a" type="submit">Изменить</button>
                    <button class="btn__b" type="button" data-close>Отменить</button>
                </div>
            </form>
        </div>
    
    
    </div>`,
    move:`    <div class=" settings-drop side move set">
            
    <ul class="menu">
        <li><div class="triangle"></div></li>
        <li><a href="#" class="side-link ">Мои разделы</a></li>
        <li><a href="#" class="side-link ">Без раздела</a></li>
    </ul>
    
    </div>`,
    
    
    }
    let cardMain = document.createElement("div")
    cardMain.innerHTML = cardPop.cardSvg
    let cardRedact = document.createElement("div")
    cardRedact.innerHTML = cardPop.redact
    let cardMove = document.createElement("div")
    cardMove.innerHTML = cardPop.move
    let cardDlt = document.createElement("div")
    cardDlt.innerHTML = cardPop.dltCard
function loadContent(){
  
    for(sec of section){
       
      
        if(sec.className.includes('_project')){
            const proj = sec.querySelector('.acc-con')
           
          
         
            const elChildren = sec.dataset.el
            for(i = 0;i < elChildren;i++){
                proj.innerHTML += Card
            }
            function addingCardHeight(){
                proj.style.height = `${proj.getBoundingClientRect().height}px`
            }
            addingCardHeight()
         
           
      
        }

            const cards = sec.querySelectorAll('.card')
            cards.forEach(card => {
                card.addEventListener('click',function(e){
                   
               
                 
                    if(e.target.classList.contains('cardSettings')){
                        e.target.classList.toggle('btn-active')
                        e.preventDefault()
                        card.append(cardMain)
                         const cardMenu = card.querySelector('.cardSet')
                      
                        console.log(e.target.classList)
                         if(e.target.classList.contains('btn-active') ){
                            e.preventDefault()
                         }
                       
                        console.log('facts')
                        e.target.classList.contains('btn-active') ? cardMenu.style.visibility = 'visible' : cardMenu.style.visibility = 'hidden'
                        e.target.classList.contains('btn-active') ? cardMenu.style.opacity = '1' : cardMenu.style.opacity = '0'
                        const links = cardMenu.querySelectorAll('.side-link ')
                        links.forEach(link => {
                            link.addEventListener('click',function(e){
                               
                                if(this.classList.contains('redact')){
                                    
                                    document.body.append(cardRedact)
                                    this.classList.toggle('btn-active')
                                    body.append(cover)
                                    body.style.overflow = 'hidden'
                                    if( this.classList.contains('btn-active')){
                                        cardRedact.style.visibility = 'visible'
                                        cover.style.visibility = 'visible'
                                    }
                                    const X = cardRedact.querySelector('.modal__close')
                                    console.log(X)
                                    X.addEventListener('click',function(){
                                        cardRedact.style.visibility = 'hidden'
                                        cover.style.visibility = 'hidden'
                                        body.style.overflow = 'unset'
                                       
                                    })
                                    const Xbtn = checkUsers.querySelector('.btn__b')
                                    console.log(Xbtn)
                                    Xbtn.addEventListener('click',function(){
                                        checkUsers.style.visibility = 'hidden'
                                        
                                  
                                       
                                    })
                                }else if(this.classList.contains('dlt')){
                                    document.body.append( cardDlt)
                                    this.classList.toggle('btn-active')
                                    body.append(cover)
                                    body.style.overflow = 'hidden'
                                    if( this.classList.contains('btn-active')){
                                         cardDlt.style.visibility = 'visible'
                                        cover.style.visibility = 'visible'
                                    }
                                    const X =  cardDlt.querySelector('.modal__close')
                                    console.log(X)
                                    X.addEventListener('click',function(){
                                         cardDlt.style.visibility = 'hidden'
                                        cover.style.visibility = 'hidden'
                                        body.style.overflow = 'unset'
                                       
                                    })
                                    const Xbtn = checkUsers.querySelector('.btn__b')
                                    console.log(Xbtn)
                                    Xbtn.addEventListener('click',function(){
                                        checkUsers.style.visibility = 'hidden'
                                        
                                  
                                       
                                    })

                                }else if(this.classList.contains('move')){
                                    this.parentElement.append(cardMove)
                                    this.classList.toggle('btn-active')
                                    this.classList.contains('btn-active') ? cardMove.style.visibility = 'visible' : cardMove.style.visibility = 'hidden'
                                }
                               
                            })
                        })
                       
                       
                    }
                       
                  
                })
            })
       
   
        
    }
 
    for(sec of section){
      
        if(sec.className.includes('_table')){
            const tables= sec.querySelector('.table-rows')
            const accCon = sec.querySelector('.acc-con')
           
            const elChildren = sec.dataset.el
            for(i = 0;i < elChildren;i++){
                tables.innerHTML +=  row
            }
            function addingTableHeight(){
                accCon.style.height = `${accCon.getBoundingClientRect().height}px`
            }
            addingTableHeight()
         
          
          
        }
        
    }
    const acc = document.querySelectorAll('.accardion')
for(e of acc){
  
   
    const  btn = e.querySelector('.acc-btn')
    const con = e.querySelector('.acc-con')
    // const card = e.querySelector('.card')
    // console.log(card)
  
        btn.addEventListener('click',removesBlock)
    
    function removesBlock(e){
   
    
            btn.classList.toggle('accBtn-active')
        
    
        if(!con.classList.contains('acc-closed')){
            con.classList.add('acc-closed')
            setTimeout(()=>{
                con.style.display = "none"
              },500)
        }else{
            con.classList.remove('acc-closed')
            setTimeout(()=>{
                con.classList.add('acc-open')
              },500)
        }
     
     
        // con.style.height = 0;
     
        // con.style.opacity = 0;




}
}
   
}

window.addEventListener('DOMContentLoaded',loadContent)
window.addEventListener('resize',addingTableHeight)
window.addEventListener('resize',addingCardHeight)