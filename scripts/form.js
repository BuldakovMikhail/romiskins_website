"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    const formbody = document.getElementsByClassName('form-body')[0];
    
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', image.files[0]);

        if (error === 0){
            formbody.classList.add("_sending");
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
           
            if (response.ok){
                let result = await response.json();
                alert(result.message);
                let clear = '';
                $('.overlay').css('background-image', clear);
                form.reset();

                formbody.classList.remove('_sending');
            } else {
                alert('Ошибка отправки!');
                formbody.classList.remove('_sending');
            }  
        } else {
            alert("Заполните обязательные поля!");
        } 
        
    }


    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            formRemoveError(input);

            if (input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === ""){
                    formAddError(input);
                    error++;
                }
            }
            
        }

        return error;
    }

    function formAddError(input){
        input.classList.add('_error');
    }

    function formRemoveError(input){
        input.classList.remove('_error');
    }

    function emailTest(input){
        return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
    }


    const image = document.getElementById('image');

    
    image.addEventListener("change", () => {
        uploadFile(image.files[0]);
    });

    function uploadFile(file){
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)){
            alert('Разрешены только изображения!');
            image.value = '';
            return;
        }

        if (file.size > 5 * 1024 * 1024){
            alert('Файл должен быть менее 5МБ!');
            image.value = '';
            return;
        }

            let reader = new FileReader();
        reader.onload = function (e){
            let url = "url('" + e.target.result + "')";
            $('.overlay').css('background-image', url);
        };
        reader.onerror = function (e){
            alert("Ошибка!");
        };
        reader.readAsDataURL(file);
    }

    
});
