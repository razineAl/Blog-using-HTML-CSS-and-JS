let formulaire = document.getElementById('contactFormulaire');

formulaire.addEventListener('submit',(e)=>{
    e.preventDefault();
    let fields = document.querySelectorAll('input[required], textarea[required]');
    let valid = true;
    fields.forEach((field) => {
        if (!validateField(field)){
            valid = false;
        }
        console.log (valid);
    });
    if (valid){
        e.target.submit();
    }
},false);
function validateField(field){
    if(field.checkValidity()){
        return true;
    }else{
        field.classList.add('invalid');
        field.previousElementSibling.insertAdjacentHtml('beforeend',`<span>${field.validationMessage}</span>`);
        return false;
    }
}