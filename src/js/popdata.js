let settingsSide = `    <div class="arrange-drop side">
        
<ul class="menu">
    <li><div class="triangle"></div></li>
    <li><a href="#" class="side-link "><img src="img/Icon-a.svg" alt="img/con-drag.svg">Переместить</a></li>
    <li><a href="#" class="side-link "><svg width="10" height="10" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.37854 0.981445C8.77635 0.981445 9.15786 1.14435 9.43916 1.43433L10.5956 2.76086H0V2.01239C0 1.44301 0.447714 0.981445 0.999998 0.981445H8.37854Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.98145C15.5523 3.98145 16 4.44301 16 5.01239V13.7573C16 14.3266 15.5523 14.7882 15 14.7882H1C0.447716 14.7882 0 14.3266 0 13.7573V3.98145H15ZM10.018 6.96414H11.0355V8.97919H13.0505V10.0111H11.0355V12.0111H10.018V10.0111H8.01798V8.97919H10.018V6.96414Z" fill="#848B94"/>
        </svg>
        Создать раздел</a></li>
</ul>
</div>`


let settingsPop= {
    Create:`    <div class="modal-share">

    <button class="modal__close" type="button" data-close>
        <img src="img/Icon-cross.svg" onclick='close()' alt="Создать раздел">
    </button>

    <div class="modall-add__content">

        <div class="modall-add__content">
            <div class="modal-add__header">
                <div class="modal-add__title">Создать раздел</div>
            </div>

            <form class="form" action="/" method="post" id="form-add2">
                <div class="form__group">
                    <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
                    <input class="form__input-chapter" name="input-name" type="text" id="name2">
                </div>

                <div class="form__group">
                    <label class="form__label" for="input-name">Проекты</label>
                    <div class="select__wrapper">
                        <select class="form__select form__select--h" name="select-name">
                        </select>
                    </div>
                </div>

                <div class="line-chapter"></div>

                <div class="btn">
                    <button class="btn__a btn__a--l" type="submit">Создать</button>
                </div>
            </form>
        </div>

    </div>

</div>`,
    arrange:`<div class=" arrange side">
        
    <ul class="menu">
    <li><div class="triangle"></div></li>
    <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Активные проекты</a></li>
    <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Мои проекты</a></li>
    <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Не активные проекты</a></li>
    </ul>
    </div>`
    }
    
    let titlePop = {
        add:` <div class="modal-title">
    
        <button class="modal__close" type="button" data-close>
            <img src="img/icon-cross.svg" alt="">
        </button>
    
        <div class="modal-add">
    
            <div class="modall-add__content">
                <div class="modal-add__header">
                    <div class="modal-add__title">Добавить проект</div>
                </div>
    
                <form class="form" action="/" method="post" id="form-add">
                    <div class="form__group">
                        <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
                        <input class="form__input" name="name" type="text" id="name1">
                    </div>
    
                    <div class="form__group">
                        <div class="label__counter">
                            <div class="form__label-word">
                                <label class="form__label" for="input-name">Описание</label>
                            </div>
                            <span class="counter" id="char_count1">0/100</span>
                        </div>
                        <textarea class="form__textarea" name="input-text" id="textbox1" maxlength="100"></textarea>
                    </div>
    
    
                    <div class="form__group">
                        <label class="form__label" for="input-name">Пригласить</label>
                        <div class="select__wrapper">
                            <select class="form__select" name="select-name">
                                <option>+ Добавить сотрудника</option>
                            </select>
                        </div>
                    </div>
    
                    
                    <div class="form__group">
                        <div class="upload-container">
                            <img src="img/Vector.svg" alt="">
                            <div class="upload__item">
                                <input class="file-input" type="file" name="file" multiple>
                                <label class="file-label" for="file-input">Вы можете просто перетащить файл сюда</label>
                            </div>
                        </div>
                    </div>
    
                    <div class="line"></div>
    
                    <div class="btn">
                        <button class="btn__a" type="submit">Добавить</button>
                        <button class="btn__b" type="submit" data-close>Отменить</button>
                    </div>
                </form>
            </div>
    
    
        </div>
    
    </div>`,
    dlt:`      <div class="dlt-title">
    
    <button class="modal__close" type="button" data-close>
        <img src="img/Icon-cross.svg" alt="">
    </button>
    
    
    <div class="modall-chapter__content">
        <div class="modal-chapter__header">
            <div class="modal-add__title modal-add__title--bg">Вы уверены, что хотите удалить раздел?</div>
        </div>
    
        <div class="btn">
            <button class="btn__a btn__a--ma" type="submit">Подтвердить</button>
            <button class="btn__b btn__b--mb" type="submit" data-close>Отменить</button>
        </div>
    </div>
    </div>`,
    password:`  <div class="modal__dialog modal__dialog--br">
    
    <button class="modal__close" type="button" data-close>
        <img src="img/icon-cross.svg" alt="">
    </button>
    
    <div class="modal-add">
    
        <div class="modall-add__content">
            <div class="modal-add__header">
                <div class="modal-add__title">Создать пароль</div>
            </div>
    
            <form class="form" action="/" method="post" id="form-password">
                <div class="form__group">
                    <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
                    <input class="form__input form__input--b" name="input-name" type="text" id="name6">
                </div>
    
                <div class="form__group">
                    <label class="form__label" for="input-name">Логин<span class="label__star">*</span></label>
                    <input class="form__input form__input--b" name="input-name" type="text" id="login">
                </div>
    
                <div class="form__group">
                    <label class="form__label" for="input-name">Пароль<span class="label__star">*</span></label>
                    <div class="text__fuild">
                        <input class="form__input form__input--b" name="input-name" type="password" id="password">
                    </div>
                </div>
    
                <div class="form__group">
                    <label class="form__label" for="input-name">URL<span class="label__star">*</span></label>
                    <input class="form__input form__input--b" name="input-name" type="text" id="url">
                </div>
    
                <div class="form__group">
                    <div class="label__counter">
                        <div class="form__label-word">
                            <label class="form__label" for="input-name">Описание</label>
                        </div>
                        <span class="counter" id="char_count5">0/100</span>
                    </div>
                    <textarea class="form__textarea form__textarea--c" name="input-text" id="textbox5" maxlength="100"></textarea>
                </div>
    
                <div class="form__group">
                    <label class="form__label" for="input-name">Привязать к категории</label>
                    <div class="select__wrapper">
                        <select class="form__select form__select--z" name="select-name">
                            <option class="choose">Выберите категорию</option>
                        </select>
                    </div>
                </div>
    
                <div class="line line--rt"></div>
    
                <div class="btn">
                    <button class="btn__a" type="submit">Создать</button>
                    <button class="btn__b" type="submit" data-close>Отменить</button>
                </div>
            </form>
        </div>
    </div>
    
    </div>`,
    cath:` <div class="modal__dialog modal__dialog--br">
    
    <button class="modal__close" type="button" data-close>
        <img src="img/icon-cross.svg" alt="">
    </button>
    
    <div class="modal-add">
    
        <div class="modall-add__content">
            <div class="modal-add__header">
                <div class="modal-add__title">Создать категорию</div>
            </div>
    
            <form class="form" action="/" method="post" id="form-add4">
                <div class="form__group">
                    <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
                    <input class="form__input form__input--b" name="input-name" type="text" id="name4">
                </div>
    
                <div class="form__group">
                    <div class="label__counter">
                        <div class="form__label-word">
                            <label class="form__label" for="input-name">Описание</label>
                        </div>
                        <span class="counter" id="char_count3">0/100</span>
                    </div>
                    <textarea class="form__textarea form__textarea--c" name="input-text" id="textbox3" maxlength="100"></textarea>
                </div>
    
                <div class="form__group">
                    <label class="form__label" for="input-name">Пригласить</label>
                    <div class="select__wrapper">
                        <select class="form__select form__select--v" name="select-name">
                            <option>+ Добавить сотрудника</option>
                        </select>
                    </div>
                </div>
    
                <div class="line line--rt"></div>
    
                <div class="btn">
                    <button class="btn__a" type="submit">Сохранить</button>
                    <button class="btn__b" type="submit" data-close>Отменить</button>
                </div>
            </form>
        </div>
    
    
    </div>
    
    </div>`
    
    }
    let checkboxPop = {
        invite:` <div class="check-con invite">
        <div class="modal__add">
        <div class="triangle"></div>
          
            <div class="modal-add__header modal-add__header--list">
                <h3 class="invite-h3">Пригласить в проект</h3>
            </div>
                <div class="modal-checkbox">
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Олег Козорезов
                        </label>
                    </div>
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Константин Ткачук
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Ольга Рыкова
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Дмитрий Коцюбинский
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Алексей Осипенко
                        </label>
                    </div>
                </div>   
                <div class="btn">
                    <button class="btn__a" type="submit">Сохранить</button>
                    <button class="btn__b" type="submit" data-close>Отменить</button>
                </div>
    
        </div>
    </div>`,
        add:`<div class="check-con">
        <div class="modal__add">
    
          
    
                <div class="modal-checkbox">
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Все
                        </label>
                    </div>
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Многомеб
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Skillline
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Отель Schloss
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Unipump
                        </label>
                    </div>
                </div>   
          
    
        </div> 
    </div>`,
        redact:`<div class="check-con redact">
        <div class="modal__add">
    
          
            <div class="modal-add__header modal-add__header--list">
                <h3 class="invite-h3">Редактировать пароль</h3>
            </div>
                <div class="modal-checkbox">
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Олег Козорезов
                        </label>
                    </div>
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Константин Ткачук
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Ольга Рыкова
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Дмитрий Коцюбинский
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Алексей Осипенко
                        </label>
                    </div>
                </div>   
                <div class="btn">
                    <button class="btn__a" type="submit">Создать</button>
                    <button class="btn__b" type="submit" data-close>Отменить</button>
                </div>
    
        </div>
    </div>`,
        open:`<div class="check-con open">
        <div class="modal__add">
    
          
            <div class="modal-add__header modal-add__header--list">
                <h3 class="invite-h3">Открыть доступ</h3>
            </div>
                <div class="modal-checkbox">
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Олег Козорезов
                        </label>
                    </div>
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Константин Ткачук
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Ольга Рыкова
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Дмитрий Коцюбинский
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Алексей Осипенко
                        </label>
                    </div>
                </div>   
                <div class="btn">
                    <button class="btn__a" type="submit">Сохранить</button>
                    <button class="btn__b" type="submit" data-close>Отменить</button>
                </div>
    
        </div>
    </div>`,
        open:`<div class="check-con open">
        <div class="modal__add">
    
          
            <div class="modal-add__header modal-add__header--list">
                <h3 class="invite-h3">Открыть доступ</h3>
            </div>
                <div class="modal-checkbox">
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Олег Козорезов
                        </label>
                    </div>
                    <div class="modal-checkbox__item" id="checked">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Константин Ткачук
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Ольга Рыкова
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Дмитрий Коцюбинский
                        </label>
                    </div>
                    <div class="modal-checkbox__item">
                        <label class="check">
                            <input class="check__input" type="checkbox">
                            <span class="check__box"></span>
                            Алексей Осипенко
                        </label>
                    </div>
                </div>   
                <div class="btn">
                    <button class="btn__a" type="submit">Сохранить</button>
                    <button class="btn__b" type="submit" data-close>Отменить</button>
                </div>
    
        </div>
    </div>`,
    }
    const pops = {
        password:`<div class="title-password">

        <button class="modal__close" type="button" data-close>
            <img src="img/icon-cross.svg" alt="">
        </button>

        <div class="modal-add">

            <div class="modall-add__content">
                <div class="modal-add__header">
                    <div class="modal-add__title">Создать пароль</div>
                </div>

                <form class="form" action="/" method="post" id="form-password">
                    <div class="form__group">
                        <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
                        <input class="form__input form__input--b" name="input-name" type="text" id="name6">
                    </div>

                    <div class="form__group">
                        <label class="form__label" for="input-name">Логин<span class="label__star">*</span></label>
                        <input class="form__input form__input--b" name="input-name" type="text" id="login">
                    </div>

                    <div class="form__group">
                        <label class="form__label" for="input-name">Пароль<span class="label__star">*</span></label>
                        <div class="text__fuild">
                            <input class="form__input form__input--b" name="input-name" type="password" id="password">
                        </div>
                    </div>

                    <div class="form__group">
                        <label class="form__label" for="input-name">URL<span class="label__star">*</span></label>
                        <input class="form__input form__input--b" name="input-name" type="text" id="url">
                    </div>

                    <div class="form__group">
                        <div class="label__counter">
                            <div class="form__label-word">
                                <label class="form__label" for="input-name">Описание</label>
                            </div>
                            <span class="counter" id="char_count5">0/100</span>
                        </div>
                        <textarea class="form__textarea form__textarea--c" name="input-text" id="textbox5" maxlength="100"></textarea>
                    </div>

                    <div class="form__group">
                        <label class="form__label" for="input-name">Привязать к категории</label>
                        <div class="select__wrapper">
                            <select class="form__select form__select--z" name="select-name">
                                <option class="choose">Выберите категорию</option>
                            </select>
                        </div>
                    </div>

                    <div class="line line--rt"></div>

                    <div class="btn">
                        <button class="btn__a" type="submit">Создать</button>
                        <button class="btn__b" type="submit" data-close>Отменить</button>
                    </div>
                </form>
            </div>
        </div>

    </div>`,
    add:` <div class="title-password">

    <button class="modal__close" type="button" data-close>
        <img src="img/icon-cross.svg" alt="">
    </button>

    <div class="modal-add">

        <div class="modall-add__content">
            <div class="modal-add__header">
                <div class="modal-add__title">Создать категорию</div>
            </div>

            <form class="form" action="/" method="post" id="form-add4">
                <div class="form__group">
                    <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
                    <input class="form__input form__input--b" name="input-name" type="text" id="name4">
                </div>

                <div class="form__group">
                    <div class="label__counter">
                        <div class="form__label-word">
                            <label class="form__label" for="input-name">Описание</label>
                        </div>
                        <span class="counter" id="char_count3">0/100</span>
                    </div>
                    <textarea class="form__textarea form__textarea--c" name="input-text" id="textbox3" maxlength="100"></textarea>
                </div>

                <div class="form__group">
                    <label class="form__label" for="input-name">Пригласить</label>
                    <div class="select__wrapper">
                        <select class="form__select form__select--v" name="select-name">
                            <option>+ Добавить сотрудника</option>
                        </select>
                    </div>
                </div>

                <div class="line line--rt"></div>

                <div class="btn">
                    <button class="btn__a" type="submit">Сохранить</button>
                    <button class="btn__b" type="button" data-close>Отменить</button>
                </div>
            </form>
        </div>


    </div>

</div>`,
create:` <div class="history-password">

<button class="modal__close" type="button" data-close>
    <img src="img/icon-cross.svg" alt="">
</button>

<div class="modal-add">

    <div class="modall-add__content">
        <div class="modal-add__header">
            <div class="modal-add__title">Создать пароль</div>
        </div>

        <form class="form" action="/" method="post" id="form-password">
            <div class="form__group">
                <label class="form__label" for="input-name">Название<span class="label__star">*</span></label>
                <input class="form__input form__input--b" name="input-name" type="text" id="name6">
            </div>

            <div class="form__group">
                <label class="form__label" for="input-name">Логин<span class="label__star">*</span></label>
                <input class="form__input form__input--b" name="input-name" type="text" id="login">
            </div>

            <div class="form__group">
                <label class="form__label" for="input-name">Пароль<span class="label__star">*</span></label>
                <div class="text__fuild">
                    <input class="form__input form__input--b" name="input-name" type="password" id="password">
                </div>
            </div>

            <div class="form__group">
                <label class="form__label" for="input-name">URL<span class="label__star">*</span></label>
                <input class="form__input form__input--b" name="input-name" type="text" id="url">
            </div>

            <div class="form__group">
                <div class="label__counter">
                    <div class="form__label-word">
                        <label class="form__label" for="input-name">Описание</label>
                    </div>
                    <span class="counter" id="char_count5">0/100</span>
                </div>
                <textarea class="form__textarea form__textarea--c" name="input-text" id="textbox5" maxlength="100"></textarea>
            </div>

            <div class="form__group">
                <label class="form__label" for="input-name">Привязать к категории</label>
                <div class="select__wrapper">
                    <select class="form__select form__select--z" name="select-name">
                        <option class="choose">Выберите категорию</option>
                    </select>
                </div>
            </div>

            <div class="line line--rt"></div>

            <div class="btn">
                <button class="btn__a" type="submit">Создать</button>
                <button class="btn__b" type="submit" data-close>Отменить</button>
            </div>
        </form>
    </div>
</div>

</div>`
    }

const  btns = document.querySelectorAll('.btns')
const  searchCon = document.querySelector('.search-header__inputs')
const  firstDrop = document.querySelector('.arrange-drop')
const  firstDropLink = document.querySelectorAll('.side-link')
const sideHtml = ` <div class=" arrange side">
        
<ul class="menu">
    <li><div class="triangle"></div></li>
    <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Активные проекты</a></li>
    <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Мои проекты</a></li>
    <li><a href="#" class="side-link "><img src="img/icon-drag.svg" alt="img/icon-drag.svg">Не активные проекты</a></li>
</ul>
</div>`

let cover = document.createElement('div')
const body = document.body
let sideCon = document.createElement("div")
let setCreate = document.createElement("div")
let titleAdd = document.createElement("div")
let titleDlt = document.createElement("div")
let checkUsers = document.createElement("div")
let titlePassword = document.createElement("div")
let titleFile = document.createElement("div")
let titleCreate = document.createElement("div")
sideCon.innerHTML = settingsPop.arrange
setCreate.innerHTML = settingsPop.Create
titleAdd.innerHTML = titlePop.add
titleDlt.innerHTML = titlePop.dlt
checkUsers.innerHTML = checkboxPop.invite
titlePassword.innerHTML = pops.password
titleFile.innerHTML = pops.add
titleCreate.innerHTML = pops.create



cover.className = 'cover'

for(a of firstDropLink){
 
    a.addEventListener('click',arrClick)
   
}

function arrClick(){
    if(this.classList.contains('carry')){
        firstDrop.append(sideCon)
        this.classList.toggle('btn-active')
        this.classList.contains('btn-active') ? sideCon.style.visibility = 'visible' : sideCon.style.visibility = 'hidden'
      
    }else{
        document.body.append(setCreate)
        this.classList.toggle('btn-active')
        if(this.classList.contains('btn-active')){
            setCreate.style.visibility = 'visible'
            body.append(cover)
            body.style.overflow = 'hidden'
            cover.style.visibility = 'visible'
        }
        const X = setCreate.querySelector('.modal__close')
        X.addEventListener('click',function(){
            setCreate.style.visibility = 'hidden'
            cover.style.visibility = 'hidden'
            body.style.overflow = 'unset'
           
        })
       
         
      
    }

      

}
btns.forEach(e => {
    e.addEventListener('click',btnEvent)
})
function btnEvent(e){
    // 
    e.stopPropagation()

    
    if(this.classList.contains('settings')){
        this.classList.toggle('btn-active')
        this.classList.contains('btn-active') ? firstDrop.style.visibility = 'visible' : firstDrop.style.visibility = 'hidden'
        this.classList.contains('btn-active') ? firstDrop.style.opacity = '1' : firstDrop.style.opacity = '0'
     
    }else if(this.classList.contains('addProject')){
        this.parentElement.append(titleAdd)
        this.classList.toggle('btn-active')
        body.append(cover)
        body.style.overflow = 'hidden'
        if( this.classList.contains('btn-active')){
            titleAdd.style.visibility = 'visible'
            cover.style.visibility = 'visible'
        }
        const X = titleAdd.querySelector('.modal__close')
        console.log(X)
        X.addEventListener('click',function(){
            titleAdd.style.visibility = 'hidden'
            cover.style.visibility = 'hidden'
            body.style.overflow = 'unset'
           
        })
      
      
    }else if(this.classList.contains('dltProject')){
        this.parentElement.append(titleDlt)
        this.classList.toggle('btn-active')
        body.append(cover)
        body.style.overflow = 'hidden'
        if( this.classList.contains('btn-active')){
            titleDlt.style.visibility = 'visible'
            cover.style.visibility = 'visible'
        }
        const X = titleDlt.querySelector('.modal__close')
        console.log(X)
        X.addEventListener('click',function(){
            titleDlt.style.visibility = 'hidden'
            cover.style.visibility = 'hidden'
            body.style.overflow = 'unset'
           
        })
      
      
    }
    else if(this.classList.contains('search-header__users')){
        this.parentElement.append(checkUsers)
        this.classList.toggle('btn-active')
      
        body.style.overflow = 'hidden'
        if( this.classList.contains('btn-active')){
            checkUsers.style.visibility = 'visible'
            
        }
        const X = checkUsers.querySelector('.btn__b')
        console.log(X)
        X.addEventListener('click',function(){
            checkUsers.style.visibility = 'hidden'
            
      
           
        })
      
      
    }
    else if(this.classList.contains('password')){
        this.parentElement.append(titlePassword)
        this.classList.toggle('btn-active')
        body.append(cover)
        body.style.overflow = 'hidden'
        if( this.classList.contains('btn-active')){
            titlePassword.style.visibility = 'visible'
            cover.style.visibility = 'visible'
        }
        const X = titlePassword.querySelector('.modal__close')
        console.log(X)
        X.addEventListener('click',function(){
            titlePassword.style.visibility = 'hidden'
            cover.style.visibility = 'hidden'
            body.style.overflow = 'unset'
           
        })
      
      
    }
    else if(this.classList.contains('file')){tableBtn
        this.parentElement.append(titleFile)
        this.classList.toggle('btn-active')
        body.append(cover)
        body.style.overflow = 'hidden'
        if( this.classList.contains('btn-active')){
            titleFile.style.visibility = 'visible'
            cover.style.visibility = 'visible'
        }
        const xx = titleFile.querySelector('.btn__b')
       
        xx.addEventListener('click',function(){
            titleFile.style.visibility = 'hidden'
            cover.style.visibility = 'hidden'
            body.style.overflow = 'unset'
            
      
           
        })
        const X = titleFile.querySelector('.modal__close')
        console.log(X)
        X.addEventListener('click',function(){
            titleFile.style.visibility = 'hidden'
            cover.style.visibility = 'hidden'
            body.style.overflow = 'unset'
           
        })
      
      
    }    else if(this.classList.contains('tableBtn')){
        this.parentElement.append(titleFile)
        this.classList.toggle('btn-active')
        body.append(cover)
        body.style.overflow = 'hidden'
        if( this.classList.contains('btn-active')){
            titleFile.style.visibility = 'visible'
            cover.style.visibility = 'visible'
        }
        const xx = titleFile.querySelector('.btn__b')
       
        xx.addEventListener('click',function(){
            titleFile.style.visibility = 'hidden'
            cover.style.visibility = 'hidden'
            body.style.overflow = 'unset'
            
      
           
        })
        const X = titleFile.querySelector('.modal__close')
        console.log(X)
        X.addEventListener('click',function(){
            titleFile.style.visibility = 'hidden'
            cover.style.visibility = 'hidden'
            body.style.overflow = 'unset'
           
        })
      
      
    }
  
    
    
    

   
}
