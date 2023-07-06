let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', () =>{
    let buttonText = button.textContent;
    if (buttonText === '='){
        try{
            let result = eval(input.value);
            input.value = result;
        }
    catch (error){
        input.error = 'Error';
    }
    }else if (buttonText === 'C') {
        input.value = '';
    }else if (buttonText === '+/-') {
        // Toggle positive/negative value
        if (input.value !== '') {
          input.value = parseFloat(input.value) * -1;
        }
    }else{
        input.value += buttonText;
    }
})
})