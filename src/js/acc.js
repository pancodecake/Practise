

// // for(sec of section){
// //     const accBtn = sec.querySelectorAll('.acc-btn')
// //     const accCon =  sec.querySelector('.acc-con')
// //     for(btn of accBtn){
// //         btn.addEventListener('click',accardeon)
// //     }
// //    function accardeon(){
// //     console.log(accCon)
// //     if( accCon.classList.contains('accOpen')){
// //         accCon.classList.add('accClosed')
// //         accCon.classList.remove('accOpen')
// //         accCon.style.height = 0;
       
        
// //         setTimeout(()=>{
// //             accCon.style.display = "grid"
// //           },200)
// //     }else{
// //         accCon.classList.remove('accClosed')
// //         accCon.classList.add('accOpen')
// //         accCon.style.height = '140px';
// //         setTimeout(()=>{
// //             accCon.style.display  = "none"
// //           },200)
// //     }
    
// //    }
// // }


// const settingsPop= {
// Create:`   <div class="modall-add__content">

// <div class="modall-add__content">
//     <div class="modal-add__header">
//         <div class="modal-add__title">Создать раздел</div>
//     </div>

//     <form class="form" action="/" method="post" id="form-add2">
//         <div class="form__group">
//             <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
//             <input class="form__input-chapter" name="input-name" type="text" id="name2">
//         </div>

//         <div class="form__group">
//             <label class="form__label" for="input-name">Проекты</label>
//             <div class="select__wrapper">
//                 <select class="form__select form__select--h" name="select-name">
//                 </select>
//             </div>
//         </div>

//         <div class="line-chapter"></div>

//         <div class="btn">
//             <button class="btn__a btn__a--l" type="submit">Создать</button>
//         </div>
//     </form>
// </div>

// </div>`,
// arrange:`<div class=" arrange side">
    
// <ul class="menu">
// <li><div class="triangle"></div></li>
// <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Активные проекты</a></li>
// <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Мои проекты</a></li>
// <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Не активные проекты</a></li>
// </ul>
// </div>`
// }
// const cardPop = {
    
// cardSvg:`<div class=" arrange side">
        
// <ul class="menu">
//     <li><div class="triangle"></div></li>
//     <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Активные проекты</a></li>
//     <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Мои проекты</a></li>
//     <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Не активные проекты</a></li>
// </ul>
// </div>`,
// dltCard:` <div class="modal__dialog modal__dialog--item">

// <button class="modal__close" type="button" data-close>
//     <img src="img/Icon-cross.svg" alt="">
// </button>


// <div class="modall-chapter__content">
//     <div class="modal-chapter__header">
//         <div class="modal-add__title modal-add__title--bg">Вы уверены, что хотите удалить раздел?</div>
//     </div>

//     <div class="btn">
//         <button class="btn__a btn__a--ma" type="submit">Подтвердить</button>
//         <button class="btn__b btn__b--mb" type="submit" data-close>Отменить</button>
//     </div>
// </div>
// </div>`,
// redact:`<div class="modal__dialog">

// <button class="modal__close" type="button" data-close>
//     <img src="img/Icon-cross.svg" alt="">
// </button>

// <div class="modal-add">

//     <div class="modall-add__content">
//         <div class="modal-add__header">
//             <div class="modal-add__title">Редактировать проект</div>
//         </div>

//         <form class="form" action="/" method="post">
//             <div class="form__group">
//                 <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
//                 <input class="form__input" name="name" type="text" id="name">
//             </div>

//             <div class="form__group">
//                 <div class="label__counter">
//                     <div class="form__label-word">
//                         <label class="form__label" for="input-name">Описание</label>
//                     </div>
//                     <span class="counter" id="char_count">0/100</span>
//                 </div>
//                 <textarea class="form__textarea" name="input-text" id="textbox" maxlength="100"></textarea>
//             </div>

//             <div class="form__group">
//                 <label class="form__label" for="input-name">Пригласить</label>
//                 <div class="select__wrapper">
//                     <select class="form__select" name="select-name">
//                         <option>+ Добавить сотрудника</option>
//                     </select>
//                 </div>
//             </div>

//             <div class="upload-container" id="upload-container" method="post">
//                 <img src="img/Vector.svg" alt="" width="30px" height="30px">
//                 <div class="upload__item"> 
//                     <input class="file-input" type="file" name="file" multiple>
//                     <label class="file-label" for="file-input"></label>
//                     <span class="file__label">Вы можете просто перетащить файл сюда</span>
//                 </div>
//             </div>

//             <div class="line"></div>

//             <div class="btn">
//                 <button class="btn__a" type="submit">Изменить</button>
//                 <button class="btn__b" type="submit" data-close>Отменить</button>
//             </div>
//         </form>
//     </div>


// </div>`,
// move:`    <div class=" settings-drop side">
        
// <ul class="menu">
//     <li><div class="triangle"></div></li>
//     <li><a href="#" class="side-link ">Мои разделы</a></li>
//     <li><a href="#" class="side-link ">Без раздела</a></li>
// </ul>

// </div>`,
// }
// const titlePop = {
//     add:` <div class="modal__dialog">

//     <button class="modal__close" type="button" data-close>
//         <img src="img/icon-cross.svg" alt="">
//     </button>

//     <div class="modal-add">

//         <div class="modall-add__content">
//             <div class="modal-add__header">
//                 <div class="modal-add__title">Добавить проект</div>
//             </div>

//             <form class="form" action="/" method="post" id="form-add">
//                 <div class="form__group">
//                     <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
//                     <input class="form__input" name="name" type="text" id="name1">
//                 </div>

//                 <div class="form__group">
//                     <div class="label__counter">
//                         <div class="form__label-word">
//                             <label class="form__label" for="input-name">Описание</label>
//                         </div>
//                         <span class="counter" id="char_count1">0/100</span>
//                     </div>
//                     <textarea class="form__textarea" name="input-text" id="textbox1" maxlength="100"></textarea>
//                 </div>


//                 <div class="form__group">
//                     <label class="form__label" for="input-name">Пригласить</label>
//                     <div class="select__wrapper">
//                         <select class="form__select" name="select-name">
//                             <option>+ Добавить сотрудника</option>
//                         </select>
//                     </div>
//                 </div>

                
//                 <div class="form__group">
//                     <div class="upload-container">
//                         <img src="img/Vector.svg" alt="">
//                         <div class="upload__item">
//                             <input class="file-input" type="file" name="file" multiple>
//                             <label class="file-label" for="file-input">Вы можете просто перетащить файл сюда</label>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="line"></div>

//                 <div class="btn">
//                     <button class="btn__a" type="submit">Добавить</button>
//                     <button class="btn__b" type="submit" data-close>Отменить</button>
//                 </div>
//             </form>
//         </div>


//     </div>

// </div>`,
// dlt:`      <div class="modal__dialog modal__dialog--item">

// <button class="modal__close" type="button" data-close>
//     <img src="img/Icon-cross.svg" alt="">
// </button>


// <div class="modall-chapter__content">
//     <div class="modal-chapter__header">
//         <div class="modal-add__title modal-add__title--bg">Вы уверены, что хотите удалить раздел?</div>
//     </div>

//     <div class="btn">
//         <button class="btn__a btn__a--ma" type="submit">Подтвердить</button>
//         <button class="btn__b btn__b--mb" type="submit" data-close>Отменить</button>
//     </div>
// </div>
// </div>`,
// password:`  <div class="modal__dialog modal__dialog--br">

// <button class="modal__close" type="button" data-close>
//     <img src="img/icon-cross.svg" alt="">
// </button>

// <div class="modal-add">

//     <div class="modall-add__content">
//         <div class="modal-add__header">
//             <div class="modal-add__title">Создать пароль</div>
//         </div>

//         <form class="form" action="/" method="post" id="form-password">
//             <div class="form__group">
//                 <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
//                 <input class="form__input form__input--b" name="input-name" type="text" id="name6">
//             </div>

//             <div class="form__group">
//                 <label class="form__label" for="input-name">Логин<span class="label__star">*</span></label>
//                 <input class="form__input form__input--b" name="input-name" type="text" id="login">
//             </div>

//             <div class="form__group">
//                 <label class="form__label" for="input-name">Пароль<span class="label__star">*</span></label>
//                 <div class="text__fuild">
//                     <input class="form__input form__input--b" name="input-name" type="password" id="password">
//                 </div>
//             </div>

//             <div class="form__group">
//                 <label class="form__label" for="input-name">URL<span class="label__star">*</span></label>
//                 <input class="form__input form__input--b" name="input-name" type="text" id="url">
//             </div>

//             <div class="form__group">
//                 <div class="label__counter">
//                     <div class="form__label-word">
//                         <label class="form__label" for="input-name">Описание</label>
//                     </div>
//                     <span class="counter" id="char_count5">0/100</span>
//                 </div>
//                 <textarea class="form__textarea form__textarea--c" name="input-text" id="textbox5" maxlength="100"></textarea>
//             </div>

//             <div class="form__group">
//                 <label class="form__label" for="input-name">Привязать к категории</label>
//                 <div class="select__wrapper">
//                     <select class="form__select form__select--z" name="select-name">
//                         <option class="choose">Выберите категорию</option>
//                     </select>
//                 </div>
//             </div>

//             <div class="line line--rt"></div>

//             <div class="btn">
//                 <button class="btn__a" type="submit">Создать</button>
//                 <button class="btn__b" type="submit" data-close>Отменить</button>
//             </div>
//         </form>
//     </div>
// </div>

// </div>`,
// cath:` <div class="modal__dialog modal__dialog--br">

// <button class="modal__close" type="button" data-close>
//     <img src="img/icon-cross.svg" alt="">
// </button>

// <div class="modal-add">

//     <div class="modall-add__content">
//         <div class="modal-add__header">
//             <div class="modal-add__title">Создать категорию</div>
//         </div>

//         <form class="form" action="/" method="post" id="form-add4">
//             <div class="form__group">
//                 <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
//                 <input class="form__input form__input--b" name="input-name" type="text" id="name4">
//             </div>

//             <div class="form__group">
//                 <div class="label__counter">
//                     <div class="form__label-word">
//                         <label class="form__label" for="input-name">Описание</label>
//                     </div>
//                     <span class="counter" id="char_count3">0/100</span>
//                 </div>
//                 <textarea class="form__textarea form__textarea--c" name="input-text" id="textbox3" maxlength="100"></textarea>
//             </div>

//             <div class="form__group">
//                 <label class="form__label" for="input-name">Пригласить</label>
//                 <div class="select__wrapper">
//                     <select class="form__select form__select--v" name="select-name">
//                         <option>+ Добавить сотрудника</option>
//                     </select>
//                 </div>
//             </div>

//             <div class="line line--rt"></div>

//             <div class="btn">
//                 <button class="btn__a" type="submit">Сохранить</button>
//                 <button class="btn__b" type="submit" data-close>Отменить</button>
//             </div>
//         </form>
//     </div>


// </div>

// </div>`

// }
// const checkboxPop = {
//     invite:` <div class="check-con invite">
//     <div class="modal__add">

      
//         <div class="modal-add__header modal-add__header--list">
//             <h3 class="invite-h3">Пригласить в проект</h3>
//         </div>
//             <div class="modal-checkbox">
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Олег Козорезов
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Константин Ткачук
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Ольга Рыкова
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Дмитрий Коцюбинский
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Алексей Осипенко
//                     </label>
//                 </div>
//             </div>   
//             <div class="btn">
//                 <button class="btn__a" type="submit">Сохранить</button>
//                 <button class="btn__b" type="submit" data-close>Отменить</button>
//             </div>

//     </div>
// </div>`,
//     add:`<div class="check-con">
//     <div class="modal__add">

      

//             <div class="modal-checkbox">
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Все
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Многомеб
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Skillline
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Отель Schloss
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Unipump
//                     </label>
//                 </div>
//             </div>   
      

//     </div> 
// </div>`,
//     redact:`<div class="check-con redact">
//     <div class="modal__add">

      
//         <div class="modal-add__header modal-add__header--list">
//             <h3 class="invite-h3">Редактировать пароль</h3>
//         </div>
//             <div class="modal-checkbox">
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Олег Козорезов
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Константин Ткачук
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Ольга Рыкова
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Дмитрий Коцюбинский
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Алексей Осипенко
//                     </label>
//                 </div>
//             </div>   
//             <div class="btn">
//                 <button class="btn__a" type="submit">Создать</button>
//                 <button class="btn__b" type="submit" data-close>Отменить</button>
//             </div>

//     </div>
// </div>`,
//     open:`<div class="check-con open">
//     <div class="modal__add">

      
//         <div class="modal-add__header modal-add__header--list">
//             <h3 class="invite-h3">Открыть доступ</h3>
//         </div>
//             <div class="modal-checkbox">
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Олег Козорезов
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Константин Ткачук
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Ольга Рыкова
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Дмитрий Коцюбинский
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Алексей Осипенко
//                     </label>
//                 </div>
//             </div>   
//             <div class="btn">
//                 <button class="btn__a" type="submit">Сохранить</button>
//                 <button class="btn__b" type="submit" data-close>Отменить</button>
//             </div>

//     </div>
// </div>`,
//     open:`<div class="check-con open">
//     <div class="modal__add">

      
//         <div class="modal-add__header modal-add__header--list">
//             <h3 class="invite-h3">Открыть доступ</h3>
//         </div>
//             <div class="modal-checkbox">
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Олег Козорезов
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item" id="checked">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Константин Ткачук
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Ольга Рыкова
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Дмитрий Коцюбинский
//                     </label>
//                 </div>
//                 <div class="modal-checkbox__item">
//                     <label class="check">
//                         <input class="check__input" type="checkbox">
//                         <span class="check__box"></span>
//                         Алексей Осипенко
//                     </label>
//                 </div>
//             </div>   
//             <div class="btn">
//                 <button class="btn__a" type="submit">Сохранить</button>
//                 <button class="btn__b" type="submit" data-close>Отменить</button>
//             </div>

//     </div>
// </div>`,
// }
