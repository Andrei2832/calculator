document.addEventListener('keydown',function (){
    document.querySelector('#display__enter').focus();
});
document.querySelector('#display__enter').addEventListener('keydown',function (e){
    if (e.keyCode === 13 || e.keyCode === 67 ){
        click_button(e);
    }
    let val = document.querySelector('#display__enter');
    val.oninput = function (){
        val.value = val.value.replace (/[^+\-\/=*.\d]/g, '');
    }
});

document.querySelectorAll('button').forEach(function (ev){
    ev.addEventListener('click',click_button);
});
function click_button(ev){
    let textArea  = document.querySelector('#display__enter');

    try {
        if (ev.target.innerHTML === ''){
            if (ev.keyCode === 13) {
                textArea.value = eval(textArea.value);
            } else if (ev.keyCode === 67){
                textArea.value = '';
            }
        }else {
            if (ev.target.innerHTML === 'AC'){
                textArea.value = '';
            } else if (ev.target.innerHTML === '&lt;-'){
                textArea.value = textArea.value.slice(0, -1);
            } else if (ev.target.innerHTML === '%'){
                if (textArea.value/100 === textArea.value/100){
                    textArea.value = textArea.value/100;
                }
            } else if (ev.target.innerHTML === '+/–'){
                textArea.value = textArea.value * -1;
            } else if (ev.target.innerHTML === '=') {
                textArea.value = eval(textArea.value);
            } else{
                textArea.value += ev.target.innerHTML;
            }
        }
    }
    catch {
        let oldValue = textArea.value;
        textArea.value = 'недопустимое выражение';
        setTimeout(() => {
            textArea.value = oldValue
        }, 1000);
    }



}

