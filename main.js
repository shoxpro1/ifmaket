const knopka = document.querySelector('.btn');
const matn = document.querySelector('.title');
const rasm = document.querySelector('.pic');
const full = document.querySelector('.body');
const katta = document.querySelector('.big');



knopka.addEventListener('click', () => {
    
    if(matn.classList.contains('titlenew')){
        matn.classList.remove('titlenew');
        rasm.classList.remove('picnew');
        knopka.classList.remove('btnnew');
        full.classList.remove('bodynew');
        katta.classList.remove('bignew');
    } else {
        matn.classList.add('titlenew');
        rasm.classList.add('picnew');
        knopka.classList.add('btnnew');
        full.classList.add('bodynew');
        katta.classList.add('bignew');
    }
});