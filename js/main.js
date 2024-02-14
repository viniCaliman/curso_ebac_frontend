const form = document.getElementById('form');
const message = document.getElementById('message');
const a = document.getElementById('input_a');
const b = document.getElementById('input_b');

function validateNumber(number_a, number_b){
    return parseInt(number_a) > parseInt(number_b);
}

function resetFields(){
    a.value = "";
    b.value = "";
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    
    
    if(!validateNumber(a.value, b.value)){
        message.innerHTML = 'Formulário enviado com sucesso';
        message.classList.remove('error');
        message.classList.add('sucess');
        resetFields();
    }else{
        message.innerHTML = 'Formulário não enviado pois o número a é maior que o b';
        message.classList.remove('sucess');
        message.classList.add('error');
    }
});

