const section = document.querySelectorAll(".accardion");
let cardHeight = "140px";
let cardOpacity = "1";
let cardDisplay = "block";
console.log(document.title === "History");
const cardProps = {
  title: "Новый проект SKIlllINE",
  owner: "Коцюбинский Дмитрий",
  date: "14.02.2023",
  projTitle: "Доступ к сайту по SSH",
  link: "access.html",
};
const rowProps = {
  name: "Доступ к сайту по SSH",
  desc: "Изменение доступа к сайту",
  login: "admin",
  password: "qwerty123gh",
  url: "https://lk.skillline.ru",
  date: "07.11.2022",
  svg: `<button class='btns menuBtn tableBtn' ><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 7.34375C14.5771 7.34375 7.34375 14.5771 7.34375 23.5C7.34375 32.4229 14.5771 39.6562 23.5 39.6562C32.4229 39.6562 39.6562 32.4229 39.6562 23.5C39.6562 14.5771 32.4229 7.34375 23.5 7.34375ZM4.40625 23.5C4.40625 12.9548 12.9548 4.40625 23.5 4.40625C34.0452 4.40625 42.5938 12.9548 42.5938 23.5C42.5938 34.0452 34.0452 42.5938 23.5 42.5938C12.9548 42.5938 4.40625 34.0452 4.40625 23.5Z" fill="#C6CDD3"/>
<path d="M23.5 25.7031C24.7168 25.7031 25.7031 24.7168 25.7031 23.5C25.7031 22.2832 24.7168 21.2969 23.5 21.2969C22.2832 21.2969 21.2969 22.2832 21.2969 23.5C21.2969 24.7168 22.2832 25.7031 23.5 25.7031Z" fill="#C6CDD3"/>
<path d="M23.5 16.8906C24.7168 16.8906 25.7031 15.9043 25.7031 14.6875C25.7031 13.4707 24.7168 12.4844 23.5 12.4844C22.2832 12.4844 21.2969 13.4707 21.2969 14.6875C21.2969 15.9043 22.2832 16.8906 23.5 16.8906Z" fill="#C6CDD3"/>
<path d="M23.5 34.5156C24.7168 34.5156 25.7031 33.5293 25.7031 32.3125C25.7031 31.0957 24.7168 30.1094 23.5 30.1094C22.2832 30.1094 21.2969 31.0957 21.2969 32.3125C21.2969 33.5293 22.2832 34.5156 23.5 34.5156Z" fill="#C6CDD3"/>
</svg></button>`,
};
const historyProps = {
  name: "Изменение доступа к сайту",
  changed: "Коцюбинский Дмитрий",
  date: "07.11.2022",
};
const row = ` <div class="table-row btnCon"><div class='table-row__div'><span id="name" >${
  document.title === "History" ? historyProps.name : rowProps.name
}</span><span id="about" >${
  document.title === "History" ? historyProps.changed : rowProps.desc
}</span><span id="login">${
  document.title === "History" ? historyProps.date : rowProps.login
}</span><span id="password">${
  document.title === "History" ? "" : rowProps.password
}</span><span id="url">${
  document.title === "History" ? "" : rowProps.url
}</span><span id="founding_date">${
  document.title === "History" ? "" : rowProps.date
}</span>
${document.title === "History" ? "" : rowProps.svg}
<div  class=" popup table-popup side set">
<ul class="menu">
    <li><div class="triangle"></div></li>
    <li><a data-pop='move' data-pos='next2btnLeft'  href="#" class="side-link move  "><img src="img/Icon.png" alt="img/icon-drag.svg">Переместить</a></li>
    <li><a data-pop='tie' data-pos='next2btnLeft'   href="#" class="side-link tie  "><img src="img/chain.svg" alt="img/icon-drag.svg">Привязать к категории</a></li>
 <li ><a data-pop='redact'  href="#" class="side-link redact useCover "><img src="img/Icon-key.svg" alt="img/icon-drag.svg">Редактировать пароль</a>
     
    </li>
   
    <li><a data-pop='dlt' href="#" class="side-link dlt useCover "><img src="img/icon-bin.svg" alt="img/icon-drag.svg">Удалить</a></li>
   
</ul>

</div></div> </div>`;

const Card = `<div class="card btnCon"><a href='${
  document.title === "Projects" ? cardProps.link : "projects.html"
}'>
<div class="card-title">
     <div class="card-title__box">

     </div>
     <h3 class="card-title__h3">${
       document.title === "Projects" ? cardProps.projTitle : cardProps.title
     }</h3>
     <button id="underBtn" data-target='card-menu' class=' btns menuBtn  loadedBtn'>
        <svg  width="16" height="16" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 7.34375C14.5771 7.34375 7.34375 14.5771 7.34375 23.5C7.34375 32.4229 14.5771 39.6562 23.5 39.6562C32.4229 39.6562 39.6562 32.4229 39.6562 23.5C39.6562 14.5771 32.4229 7.34375 23.5 7.34375ZM4.40625 23.5C4.40625 12.9548 12.9548 4.40625 23.5 4.40625C34.0452 4.40625 42.5938 12.9548 42.5938 23.5C42.5938 34.0452 34.0452 42.5938 23.5 42.5938C12.9548 42.5938 4.40625 34.0452 4.40625 23.5Z" fill="#C6CDD3"/>
            <path d="M23.5 25.7031C24.7168 25.7031 25.7031 24.7168 25.7031 23.5C25.7031 22.2832 24.7168 21.2969 23.5 21.2969C22.2832 21.2969 21.2969 22.2832 21.2969 23.5C21.2969 24.7168 22.2832 25.7031 23.5 25.7031Z" fill="#C6CDD3"/>
            <path d="M23.5 16.8906C24.7168 16.8906 25.7031 15.9043 25.7031 14.6875C25.7031 13.4707 24.7168 12.4844 23.5 12.4844C22.2832 12.4844 21.2969 13.4707 21.2969 14.6875C21.2969 15.9043 22.2832 16.8906 23.5 16.8906Z" fill="#C6CDD3"/>
            <path d="M23.5 34.5156C24.7168 34.5156 25.7031 33.5293 25.7031 32.3125C25.7031 31.0957 24.7168 30.1094 23.5 30.1094C22.2832 30.1094 21.2969 31.0957 21.2969 32.3125C21.2969 33.5293 22.2832 34.5156 23.5 34.5156Z" fill="#C6CDD3"/>
            </svg>
            <button>
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
<div class=" cardSet popup side mainPop loadedPop">
<ul class="menu">
    <li><div class="triangle"></div></li>
    <li ><a data-pop='card-redact' href="#" class="side-link card-redact useCover"><img src="img/settings.svg" alt="img/icon-drag.svg">Редактировать</a></li>
    ${
      document.title === "Projects"
        ? ""
        : `<li class="menu__list"><a href="#" data-pop='card-move' data-pos="next2btn"  class="side-link card-move "><img src="img/Icon-a.svg" alt="img/icon-drag.svg">Переместить</a></li>`
    }
  
    <li><a href="#" data-pop='card-dlt' class="side-link card-dlt useCover"><img src="img/icon-bin.svg" alt="img/icon-drag.svg">Удалить</a></li>
   
</ul>

</div>

</div></a>`;

//=======
const body = document.body;
let cover = document.createElement("div");
let lastClicked;
cover.className = "cover";
const btns = document.querySelectorAll(".btns:not(.menuBtn)");
const menuBtn = document.querySelectorAll(".menuBtn ");
const popup = document.querySelectorAll(".popup");
const popSide = document.querySelectorAll(".popup-side");
const mainPop = document.querySelectorAll(".mainPop");

// popup.forEach(pop => {
//   pop.addEventListener('click',function(){
//   })
// })
// let cover= document.querySelector('.coverCon')
//Fucntion for all btns
const menuBtnCon = document.querySelector(".btnCon");
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(btns);
    addingBtnMenuItems(this, popup);
    removeOnClick(e, btn,  popup)
    //     btn.addEventListener('mouseover',function(m){
    //       m.preventDefault()

    //  if(this.closest('.btnCon')){
    //    const mainParent = this.closest('.btnCon')

    //    btnListener(mainParent)
    //    console.log('success')
    //  }
    // },{once : true})
  });
});
menuBtn.forEach((btn) => {
  btn.addEventListener(
    "mouseover",
    function (m) {
      m.preventDefault();

      if (this.closest(".btnCon")) {
        const mainParent = this.closest(".btnCon");

        btnListener(mainParent);
        console.log("success");
      }
    },
    { once: true }
  );
});

//=====================================================
function btnListener(btnCon) {
  const cardBtns = btnCon.querySelector(".btns");
  const cardPopup = btnCon.querySelector(".popup");
  const popSideBtns = cardPopup.querySelectorAll(".side-link");
  popSideBtns.forEach((mBtn) => {
    mBtn.addEventListener("click", function (pope) {
      pope.preventDefault();

      addingBtnMenuItems(this, popup);
    });
  });
  cardBtns.addEventListener("click", function (carde) {
    popActive(carde, this, cardPopup);
    removeOnClick(carde, cardBtns,  cardPopup)
    console.log("repeat", carde.target);
  });
}
function open(targetItem) {
  setTimeout(() => {
    targetItem.style.visibility = "visible";
    targetItem.style.opacity = "1";
    // console.log('opening',targetItem)
    targetItem.style.pointerEvents = "auto";
  }, targetItem.animationDelay + 20);
}
function close(targetItem) {
  setTimeout(() => {
    // console.log('closing',targetItem)
    targetItem.style.opacity = "0";
    targetItem.style.pointerEvents = "none";
  }, targetItem.animationDelay + 20);
}
// function trigger(element){
// if(element.target.classList.contains('btns') && element.target.classList.contains('btnMenu-active')  ){

//   const popTrigger = element.target.closest('.btnCon').querySelector('.popup')
//   popTrigger.classList.remove('btnMenu-active')
// close(popTrigger)
// }

//  }

function removeOnClick(el, popBtns, popMenu) {

    document.addEventListener("click", function (doc) {
      console.log("doc click added");

      if (popSide) {
        //close one popside when other opened

        popSide.forEach((sb) => {
          // console.log({lastclicked:lastClicked.classList,pside:sb.id})&& lastClicked.classList.contains(sb.id) && lastClicked !== doc.target && !doc.target.closest('.popup-side')
          //close last opened linkpopup
          if (
            lastClicked !== undefined &&
            lastClicked.classList.contains(sb.id) &&
            lastClicked !== doc.target &&
            !doc.target.closest(".popup-side")
          ) {
            console.log({
              last: lastClicked.classList,
              id: sb.id,
              first: doc.target,
              mainParent: doc.target.closest(".popup"),
            });
            lastClicked.classList.remove("btnMenu-active");
            doc.target.classList.contains("useCover")
              ? (cover.style.visibility = "visible")
              : (cover.style.visibility = "hidden");

            close(sb);
          }
        });
      }
      console.log(popBtns, doc.target);
      if (
        //close the popup before
        doc.target !== popBtns
      ) {
        if (!doc.target.closest(".popup")) {
          popBtns.classList.remove("btnMenu-active");

          addingBtnMenu(el.target, popMenu);
          close(popMenu);
          console.log("clicked away 1");
        }
      }

      if (
        //click away popup dissapers
        !doc.target.classList.contains("btns")
      ) {
        if (!doc.target.closest(".popup")) {
          console.log("clicked away 2");

          popBtns.classList.remove("btnMenu-active");

          addingBtnMenu(el.target, popMenu);
          cover.style.visibility = "hidden";
          popup.forEach((p) => {
            close(p);
          });
        }
      }
      lastClicked = doc.target;
    });

}
function popActive(el, pthat, popMenu) {
  el.preventDefault();
  pthat.classList.toggle("btnMenu-active");
  console.log("popActive()");
  // document.addEventListener("click", function (doc) {
  //   console.log("doc click added");
  //   // if(doc.target.classList.contains('menuBtn')){

  //   //     console.log(doc.target.closest('.btnCon'))
  //   //     const btnConPop = doc.target.closest('.btnCon').querySelector('.mainPop')

  //   //     popMenu.forEach(mp => {
  //   //       console.log(mp)
  //   //       if(btnConPop === mp){
  //   //         console.log(mp)
  //   //       }
  //   //     })
  //   //     // doc.target.dataset.pop === p.id && console.log(p)

  //   // }

  //   if (popSide) {
  //     //close one popside when other opened

  //     popSide.forEach((sb) => {
  //       // console.log({lastclicked:lastClicked.classList,pside:sb.id})&& lastClicked.classList.contains(sb.id) && lastClicked !== doc.target && !doc.target.closest('.popup-side')
  //       //close last opened linkpopup
  //       if (
  //         lastClicked !== undefined &&
  //         lastClicked.classList.contains(sb.id) &&
  //         lastClicked !== doc.target &&
  //         !doc.target.closest(".popup-side")
  //       ) {
  //         console.log({
  //           last: lastClicked.classList,
  //           id: sb.id,
  //           first: doc.target,
  //           mainParent: doc.target.closest(".popup"),
  //         });
  //         lastClicked.classList.remove("btnMenu-active");
  //         doc.target.classList.contains("useCover")
  //           ? (cover.style.visibility = "visible")
  //           : (cover.style.visibility = "hidden");

  //         close(sb);
  //       }
  //     });
  //   }
  //   console.log(popBtns, doc.target);
  //   if (
  //     //close the popup before
  //     doc.target !== popBtns
  //   ) {
  //     if (!doc.target.closest(".popup")) {
  //       popBtns.classList.remove("btnMenu-active");

  //       addingBtnMenu(el.target, popMenu);
  //       close(popMenu);
  //       console.log("clicked away 1");
  //     }
  //   }

  //   if (
  //     //click away popup dissapers
  //     !doc.target.classList.contains("btns")
  //   ) {
  //     if (!doc.target.closest(".popup")) {
  //       console.log("clicked away 2");

  //       popBtns.classList.remove("btnMenu-active");

  //       addingBtnMenu(el.target, popMenu);
  //       cover.style.visibility = "hidden";
  //       popup.forEach((p) => {
  //         close(p);
  //       });
  //     }
  //   }
  //   lastClicked = doc.target;
  // });

  addingBtnMenu(el.target, popMenu);
}
function addingBtnMenu(that, btnMenu) {
  if (that.classList.contains("btnMenu-active")) {
    open(btnMenu);
  } else if (!that.classList.contains("btnMenu-active")) {
    close(btnMenu);
  }
}
function addingBtnMenuItems(that, pops) {
  console.log(that);
  pops.forEach((p) => {
    const elCord = that.parentElement.getBoundingClientRect();
    let closeCon =
      that.closest("section") !== null
        ? that.closest("section").getBoundingClientRect()
        : "0";

    const cords = {
      top: elCord.top + window.scrollY,
      left: elCord.left - closeCon.left + window.scrollX,
      width: elCord.width,
      height: elCord.height - 20,
    
      underbtnTop: elCord.top + window.scrollY + 60,
      linkWidth: p.getBoundingClientRect().width,
    
    };
    function position() {
      console.log(that.dataset.pos === undefined);
      console.log(p.classList.contains("Xbtn") ? p : "nope");
      if (that.dataset.pos === "underBtn") {
        console.log("is underbtn", elCord.left, that.parentElement);
        p.style.transform = `translate(${cords.left - cords.width - 180}px,${
          cords.underbtnTop - cords.height
        }px`;
      }
      if (that.dataset.pos === "next2btn") {
        console.log("NEXT 2 BTN");
        console.log(elCord.left, that.closest(".btnCon"),  that.closest(".btnCon").getBoundingClientRect().left);
        p.style.transform = `translate(${cords.left+ (cords.width) + 10}px,${
          cords.top - cords.height 
        }px`;
      } else if (
        !that.classList.contains("useCover") &&
        that.dataset.pos === undefined
      ) {
        console.log("normal position");
        p.style.transform = `translate(${cords.left - cords.width}px,${
          cords.top - cords.height
        }px`;
      } else if (that.dataset.pos === "next2btnLeft") {
        console.log("NEXT 2 BTN LEFT");
        p.style.transform = `translate(${(cords.left ) - cords.linkWidth - 10}px,${
          cords.top - cords.height + 10
        }px`;
        console.log(
         
          cords.left,
          that,
          cords.width,
         
        );
      }
    }

    if (that.dataset.pop === p.id) {
      console.log("step 1:Id matched");
      position();
      if (p.classList.contains("Xbtn")) {
        console.log("is Xbtn");

        menuItemsX(p);
      } else {
        menuItemsToggle(p);
      }
    }
  });

  //---------------------------------------------------Functions
  function menuItemsToggle(item) {
    that.classList.toggle("btnMenu-active");
    console.log(that);
    if (that.classList.contains("btnMenu-active")) {
      console.log("toggle active got added");
      open(item);
    } else if (!that.classList.contains("btnMenu-active")) {
      console.log("toggle active got removed");
      console.log(item)
      close(item);
    }
  }
  function menuItemsX(item) {
    that.classList.add("btnMenu-active");
    if (that.dataset.pos !== "underBtn") {
      body.append(cover);

      cover.style.visibility = "visible";
    }

    if (that.classList.contains("btnMenu-active")) {
      console.log("Xbtn contains active");
      open(item);
    }
    const X = item.querySelector(".modal__close");

    if (X) {
      X.addEventListener("click", function () {
        cover.style.visibility = "hidden";

        close(item);
      });
    }
    const Xbtn = item.querySelector(".btn__b");
    console.log(Xbtn, "button");
    if (Xbtn) {
      console.log(Xbtn);
      Xbtn.addEventListener("click", function () {
        cover.style.visibility = "hidden";

        close(item);
      });
    }
  }
}

// let rowBtn = document.createElement("div");
// rowBtn.innerHTML = cardPop.tablePass;

function loadContent() {
  for (sec of section) {
    if (sec.className.includes("_project")) {
      const proj = sec.querySelector(".acc-con");

      const elChildren = sec.dataset.el;
      for (i = 0; i < elChildren; i++) {
        proj.innerHTML += Card;
      }
      function addingCardHeight(accConSize) {
        accConSize.style.height = `${
          accConSize.getBoundingClientRect().height
        }px`;
      }
      addingCardHeight(proj); //smoothaccardeon wont work without it
      window.addEventListener("resize", function () {
        addingCardHeight(proj);
      });
    }

    const cards = sec.querySelectorAll(".card");
    cards.forEach((card) => {
      btnListener(card);
      // popSideBtns.forEach((mBtn) => {
      //   mBtn.addEventListener("click", function (pope) {
      //     pope.preventDefault();
      //        console.log('twice')
      //     addingBtnMenuItems(this,popup);
      //   });
      // });
      // cardBtns.addEventListener("click", function (carde) {
      //   popActive(carde,this,cardBtns,cardPopup)

      // });
      card.addEventListener("click", function (e) {
        if (e.target.classList.contains("btns")) {
          e.preventDefault();
        }
      });
    });
  }

  for (sec of section) {
    if (sec.className.includes("_table")) {
      const tables = sec.querySelector(".table-rows");
      const accCon = sec.querySelector(".acc-con");

      const elChildren = sec.dataset.el;
      for (i = 0; i < elChildren; i++) {
        tables.innerHTML += row;
      }
      function addingTableHeight() {
        accCon.style.height = `${accCon.getBoundingClientRect().height}px`;
      }
      addingTableHeight();
      window.addEventListener("resize", addingTableHeight);
      const tRows = tables.querySelectorAll(".table-row__div");

      tRows.forEach((tab) => {
        btnListener(tab);
      });
    }
  }
  const acc = document.querySelectorAll(".accardion");
  for (e of acc) {
    const btn = e.querySelector(".acc-btn");
    const con = e.querySelector(".acc-con");
    // const card = e.querySelector('.card')
    // console.log(card)

    btn.addEventListener("click", removesBlock);

    function removesBlock(e) {
      btn.classList.toggle("accBtn-active");

      if (!con.classList.contains("acc-closed")) {
        con.classList.add("acc-closed");
        setTimeout(() => {
          con.style.display = "none";
        }, 500);
      } else {
        con.classList.remove("acc-closed");
        setTimeout(() => {
          con.classList.add("acc-open");
        }, 500);
      }

      // con.style.height = 0;

      // con.style.opacity = 0;
    }
  }
}

console.log("hehe");
window.addEventListener("DOMContentLoaded", loadContent);

const checklist = document.querySelector(".modal-checkbox");
const checkItem = checklist.querySelectorAll(".modal-checkbox__item");
console.log(checkItem);
checkItem.forEach((check) => {
  const checkInput = check.querySelector(".check__input");
  checkInput.addEventListener("click", function () {
    if (this.checked) {
      check.style.backgroundColor = "#D5F1FB";
    } else {
      check.style.backgroundColor = "white";
    }
    this.checked
      ? (check.style.backgroundColor = "#D5F1FB")
      : (check.style.backgroundColor = "white");
    console.log("hehe");
  });
});
