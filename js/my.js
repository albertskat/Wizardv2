$('input[name="dest_type"]').on('change', function() {

    $('input[type="text"]').val($(this).val());
   //   $('input[type="text"]').val('');


});

function handleUserAnswer(e){
    var el = e.target || e.srcElement;
    document.getElementById('userAnswer').value = el.value;
}
var radios = document.getElementsByTagName('input');
for(var i = 0; i<radios.length; i++){
    var r = radios[i];
    if(r.getAttribute('name') == 'userAnswerChoice'){
        if(r.addEventListener){
            r.addEventListener('change',handleUserAnswer);
        }else if(r.attachEvent){
            r.attachEvent('onchange',handleUserAnswer);
        }else{
            r.onChange = handleUserAnswer;
        }
    }
}
