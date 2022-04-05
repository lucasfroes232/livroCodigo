function showPassord(){
    const eye= document.getElementeById('eye');
    const eyeSlash= document.getElementeById('eye-slash');
    const fieldPassword= document.getElementeById('field-password');

    if (eye.style.display==='none'){
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    }else{
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }

};

document.getElementById('btn-login').addEventListener('click',function(e){
    e.preventDefault();
    alert('Logado!');
})