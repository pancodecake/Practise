(() => {
    "use strict";
    $(document).ready(function () {
        var e = $(".upload-container");
        function t(t) {
            let o = new FormData();
            $(t).each(function (e, t) {
                t.size <= 5242880 && ("image/png" == t.type || "image/jpeg" == t.type) && o.append("images[]", t);
            }),
                $.ajax({
                    url: e.attr("action"),
                    type: e.attr("method"),
                    data: o,
                    contentType: !1,
                    processData: !1,
                    success: function (e) {
                        alert("Файлы были успешно загружены!");
                    },
                });
        }
        $(".file-input")
            .focus(function () {
                $("label").addClass("focus");
            })
            .focusout(function () {
                $("label").removeClass("focus");
            }),
            e.on("drag dragstart dragend dragover dragenter dragleave drop", function () {
                return !1;
            }),
            e.on("dragover dragenter", function () {
                e.addClass("dragover");
            }),
            e.on("dragleave", function (t) {
                let o = t.pageX - e.offset().left,
                    n = t.pageY - e.offset().top;
                (o < 0 || o > e.width() || n < 0 || n > e.height()) && e.removeClass("dragover");
            }),
            e.on("drop", function (o) {
                e.removeClass("dragover"), t(o.originalEvent.dataTransfer.files);
            }),
            $(".file-input").change(function () {
                t(this.files);
            });
    }),
        (function (e) {
            let t = new Image();
            (t.onload = t.onerror = function () {
                !(function (e) {
                    let t = !0 === e ? "webp" : "no-webp";
                    document.documentElement.classList.add(t);
                })(2 == t.height);
            }),
                (t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(),
        $(function () {
         
                $(".modal__dialog").on("click", function (e) {
                    e.stopPropagation();
                });
            let o = document.getElementById("textbox"),
                n = document.getElementById("char_count");
            o.addEventListener("input", () => {
                let e = 100 - o.value.length;
                n.textContent = e + "/100";
            });
            let i = document.getElementById("textbox1"),
                a = document.getElementById("char_count1");
            i.addEventListener("input", () => {
                let e = 100 - i.value.length;
                a.textContent = e + "/100";
            });
            let r = document.getElementById("textbox2"),
                l = document.getElementById("char_count2");
            r.addEventListener("input", () => {
                let e = 100 - r.value.length;
                l.textContent = e + "/100";
            });
            let d = document.getElementById("textbox3"),
                s = document.getElementById("char_count3");
            d.addEventListener("input", () => {
                let e = 100 - d.value.length;
                s.textContent = e + "/100";
            });
            let u = document.getElementById("textbox4"),
                c = document.getElementById("char_count4");
            u.addEventListener("input", () => {
                let e = 100 - u.value.length;
                c.textContent = e + "/100";
            });
            let f = document.getElementById("textbox5"),
                g = document.getElementById("char_count5");
            f.addEventListener("input", () => {
                let e = 100 - f.value.length;
                g.textContent = e + "/100";
            });
            let m = document.getElementById("textbox6"),
                v = document.getElementById("char_count6");
            m.addEventListener("input", () => {
                let e = 100 - m.value.length;
                v.textContent = e + "/100";
            });
        }),
        (window.validation = function () {
            new JustValidate(".form", {
                errorFieldCssClass: "is-invalid",
                errorLabelStyle: { color: "rgba(209, 22, 22, 1)", fontWeight: "400", fontSize: "12px", lineHeight: "16px", marginleft: "15px" },
                focusInvalidField: !0,
                lockForm: !0,
            })
                .addField("#name", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .onSuccess((e) => {
                    e.preventDefault(), window.showNotification();
                });
        }),
        validation(),
        (window.validation = function () {
            new JustValidate("#form-add", {
                errorFieldCssClass: "is-invalid",
                errorLabelStyle: { color: "rgba(209, 22, 22, 1)", fontWeight: "400", fontSize: "12px", lineHeight: "16px", marginleft: "15px" },
                focusInvalidField: !0,
                lockForm: !0,
            })
                .addField("#name1", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .onSuccess((e) => {
                    e.preventDefault(), window.showNotification();
                });
        }),
        validation(),
        (window.validation = function () {
            new JustValidate("#form-add2", {
                errorFieldCssClass: "is-invalid",
                errorLabelStyle: { color: "rgba(209, 22, 22, 1)", fontWeight: "400", fontSize: "12px", lineHeight: "16px", marginleft: "15px" },
                focusInvalidField: !0,
                lockForm: !0,
            })
                .addField("#name2", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .onSuccess((e) => {
                    e.preventDefault(), window.showNotification();
                });
        }),
        validation(),
        (window.validation = function () {
            new JustValidate("#form-add3", {
                errorFieldCssClass: "is-invalid",
                errorLabelStyle: { color: "rgba(209, 22, 22, 1)", fontWeight: "400", fontSize: "12px", lineHeight: "16px", marginleft: "15px" },
                focusInvalidField: !0,
                lockForm: !0,
            })
                .addField("#name3", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .onSuccess((e) => {
                    e.preventDefault(), window.showNotification();
                });
        }),
        validation(),
        (window.validation = function () {
            new JustValidate("#form-add4", {
                errorFieldCssClass: "is-invalid",
                errorLabelStyle: { color: "rgba(209, 22, 22, 1)", fontWeight: "400", fontSize: "12px", lineHeight: "16px", marginleft: "15px" },
                focusInvalidField: !0,
                lockForm: !0,
            })
                .addField("#name4", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .onSuccess((e) => {
                    e.preventDefault(), window.showNotification();
                });
        }),
        validation(),
        (window.validation = function () {
            new JustValidate("#form-add5", {
                errorFieldCssClass: "is-invalid",
                errorLabelStyle: { color: "rgba(209, 22, 22, 1)", fontWeight: "400", fontSize: "12px", lineHeight: "16px", marginleft: "15px" },
                focusInvalidField: !0,
                lockForm: !0,
            })
                .addField("#name5", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .onSuccess((e) => {
                    e.preventDefault(), window.showNotification();
                });
        }),
        validation(),
        (window.validation = function () {
            new JustValidate("#form-password", {
                errorFieldCssClass: "is-invalid",
                errorLabelStyle: { color: "rgba(209, 22, 22, 1)", fontWeight: "400", fontSize: "12px", lineHeight: "16px", marginleft: "15px" },
                focusInvalidField: !0,
                lockForm: !0,
            })
                .addField("#name6", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .addField("#login", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .addField("#password", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .addField("#url", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .onSuccess((e) => {
                    e.preventDefault(), window.showNotification();
                });
        }),
        validation(),
        (window.validation = function () {
            new JustValidate("#form-password-red", {
                errorFieldCssClass: "is-invalid",
                errorLabelStyle: { color: "rgba(209, 22, 22, 1)", fontWeight: "400", fontSize: "12px", lineHeight: "16px", marginleft: "15px" },
                focusInvalidField: !0,
                lockForm: !0,
            })
                .addField("#name6", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .addField("#login1", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .addField("#password1", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .addField("#url1", [{ rule: "required", errorMessage: "Необходимо заполнить!" }])
                .onSuccess((e) => {
                    e.preventDefault(), window.showNotification();
                });
        }),
        validation();
})();
const checklist = document.querySelector('.modal-checkbox')
const checkItem = checklist.querySelectorAll('.modal-checkbox__item')
console.log(checkItem)
checkItem.forEach(check => {
    const checkInput = check.querySelector('.check__input')
    checkInput.addEventListener('click',function(){
        // if(this.checked){
        //     check.style.backgroundColor = '#D5F1FB'
        // }else{
        //     check.style.backgroundColor = 'white'
        // }
        this.checked ?  check.style.backgroundColor = '#D5F1FB' :  check.style.backgroundColor = 'white'
        console.log('hehe')
      
    })
})
