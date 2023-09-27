//blood need form
const bgContainer = document.querySelector('.bg-container');
const closePage = document.querySelector('.need-container');
const needContainer = document.querySelector('.need-container');
const submitBtn = document.querySelector('#submit');
const subNote = document.querySelector('.submit-note');
const bgt = document.querySelector('.bgt');

//need btns for each blood groups
const needBtnOp = document.querySelector('.op');
const needBtnOn = document.querySelector('.on');
const needBtnAp = document.querySelector('.ap');
const needBtnAn = document.querySelector('.an');
const needBtnBp = document.querySelector('.bp');
const needBtnBn = document.querySelector('.bn');
const needBtnAbp = document.querySelector('.abp');
const needBtnAbn = document.querySelector('.abn');


needBtnOp.onclick = () => {
    bgContainer.classList.add('active');
    needContainer.style.display = 'block';
}

needBtnOn.onclick = () => {
    bgContainer.classList.add('active');
    needContainer.style.display = 'block';
    bgt.innerHTML = 'O-';
}
needBtnAp.onclick = () => {
    bgContainer.classList.add('active');
    needContainer.style.display = 'block';
    bgt.innerHTML = 'A+';
}
needBtnAn.onclick = () => {
    bgContainer.classList.add('active');
    needContainer.style.display = 'block';
    bgt.innerHTML = 'A-';
}
needBtnBp.onclick = () => {
    bgContainer.classList.add('active');
    needContainer.style.display = 'block';
    bgt.innerHTML = 'B+';
}
needBtnBn.onclick = () => {
    bgContainer.classList.add('active');
    needContainer.style.display = 'block';
    bgt.innerHTML = 'B-';
}
needBtnAbp.onclick = () => {
    bgContainer.classList.add('active');
    needContainer.style.display = 'block';
    bgt.innerHTML = 'AB+';
}
needBtnAbn.onclick = () => {
    bgContainer.classList.add('active');
    needContainer.style.display = 'block';
    bgt.innerHTML = 'AB-';
}

//when press the submit btn 
submitBtn.onclick = () => {
    subNote.style.display = 'block' ;

    setTimeout(() => {
        subNote.style.display = 'none';
    }, 2000);

    setTimeout(() => {
        closePage.style.display = 'none';
        bgContainer.classList.remove('active');
    }, 4000);
}