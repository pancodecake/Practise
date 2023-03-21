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
        })();
      
       
   
        
       
       
   
    
        
       
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
