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

//More btns for each blood groups
const moreContainer = document.querySelector('.more-container');
const closeBtn = document.querySelector('.btnc');

const moreBtnOp = document.querySelector('.mop');
const moreBtnOn = document.querySelector('.mon');
const moreBtnAp = document.querySelector('.map');
const moreBtnAn = document.querySelector('.man');
const moreBtnBp = document.querySelector('.mbp');
const moreBtnBn = document.querySelector('.mbn');
const moreBtnAbn = document.querySelector('.mabn');
const moreBtnAbp = document.querySelector('.mabp');

const firstHead = document.querySelector('.first-head');
const secondDescPara = document.querySelector('.second-desc');
const secondHead = document.querySelector('.second-head');
const secondFirstPara = document.querySelector('.second-first-desc');

const bgImage = document.querySelector('.bg-img');

let firstHeading = {
    headOp : 'O Positive blood type',
    headOn : 'O Negative blood type',
    headAp : 'A Positive blood type',
    headAn : 'A Negative blood type',
    headBp : 'B Positive blood type',
    headBn : 'B negative blood type',
    headAbp : 'AB Positive blood type',
    headAbn : 'AB negative blood type'
};

let secondHeading = {
    headOp : 'Who can receive O Positive blood?',
    headOn : 'Who can receive O negative blood?',
    headAp : 'Who can receive A Positive blood?',
    headAn : 'Who can receive A negative blood?',
    headBp : 'Who can receive B Positive blood?',
    headBn : 'Who can receive B negative blood?',
    headAbp : 'Who can receive AB positive blood?',
    headAbn : 'Who can receive AB negative blood?'
};

let secondDesc = {
    secondDescOp : '1 in 3 donors is O positive. O positive is the most common blood type as around 35% of our blood donors have it.The second most common blood type is A positive (30%), while AB negative (1%) is the rarest.',
    secondDescOn : 'Around 1 in 7 people have O negative blood.Around 13% of our blood donors have O negative blood.In comparison, 35% of donors have O positive blood.Air ambulances and emergency response vehicles carry O negative supplies for emergencies. Collecting enough O negative blood is a constant challenge and we always need your donations.',
    secondDescAp : '1 in 3 donors is A positive. Around 30% of donors have A positive blood, making it the second most common blood type after O positive (36%).',
    secondDescAn : '1 in 13 donors is A negative.Around 8% of donors have A negative     blood.In comparison, 30% of donors have A positive blood.',
    secondDescBp : '1 in 13 donors is B positive. This means only 8% of donors have B positive blood.In total, 10% of people belong to blood group B, making it one of the least common blood groups.',
    secondDescBn : '1 in 50 donors is B negative. B negative blood is one of the rarest blood types as just 2% of our blood donors have it.In comparison, 36% of donors have O positive blood which is the most common type.',
    secondDescAbp : '1 in 50 donors is AB positive. Just 2% of donors have AB positive blood making it one of the rarest blood types in the country.',
    secondDescAbn : '1 in 100 donors is AB negative. AB negative is the rarest blood type in the ABO blood group, accounting for just 1% of our blood donors.In total only 3% of donors belong to the AB blood group.'
};

let secondFirstDesc = {
    secondDescOp : 'Anyone with an Rh positive blood type can receive O positive red blood cells – so that’s A positive, B positive and AB positive as well as O positive.That means 3 in 4 people, or around 76% of the population, can benefit from your donation.',
    secondDescOn : 'O negative donors are often called ‘universal donors’ because anyone can receive the red blood cells from their donations.Although about 8% of the population has O negative blood, it accounts for around 13% of hospital requests for red blood cells.',
    secondDescAp : 'A positive and AB positive people. A positive red blood cells can be given to people with: A positive blood,AB positive blood',
    secondDescAn : 'Group A and AB people. A negative red blood cells can be used to treat people with: A negative blood,A positive blood,AB positive blood,AB negative blood',
    secondDescBp : 'B positive and AB positive people. B positive red blood cells can be given to people with:B positive blood,AB positive blood ',
    secondDescBn : 'Group B and AB people. Around 1 in 8 people can receive red blood cells from B negative donors. B negative blood can help people who are:B negative,B positive,AB negative,AB positive',
    secondDescAbp : 'Only AB positive people. AB positive red blood cells can only be used to treat people with AB positive blood',
    secondDescAbn : 'AB negative and AB positive people. You can receive AB negative red blood cells if you are: AB negative,AB positive'
};

closeBtn.onclick = () => {
    bgContainer.classList.remove('active');
    moreContainer.style.display = 'none';
}
moreBtnOp.onclick = () => {
    bgContainer.classList.add('active');
    moreContainer.style.display = 'block';
    firstHead.textContent = firstHeading.headOp;
    secondDescPara.textContent = secondDesc.secondDescOp;
    secondHead.textContent = secondHeading.headOp;
    secondFirstPara.textContent = secondFirstDesc.secondDescOp;
    bgImage.src = `/images/O+positive.png`;
}
moreBtnOn.onclick = () => {
    bgContainer.classList.add('active');
    moreContainer.style.display = 'block';
    firstHead.textContent = firstHeading.headOn;
    secondDescPara.textContent = secondDesc.secondDescOn;
    secondHead.textContent = secondHeading.headOn;
    secondFirstPara.textContent = secondFirstDesc.secondDescOn;
    bgImage.src = `/images/O-negative.png`;
}
moreBtnAp.onclick = () => {
    bgContainer.classList.add('active');
    moreContainer.style.display = 'block';
    firstHead.textContent = firstHeading.headAp;
    secondDescPara.textContent = secondDesc.secondDescAp;
    secondHead.textContent = secondHeading.headAp;
    secondFirstPara.textContent = secondFirstDesc.secondDescAp;
    bgImage.src = `/images/A+positive.png`;
}
moreBtnAn.onclick = () => {
    bgContainer.classList.add('active');
    moreContainer.style.display = 'block';
    firstHead.textContent = firstHeading.headAn;
    secondDescPara.textContent = secondDesc.secondDescAn;
    secondHead.textContent = secondHeading.headAn;
    secondFirstPara.textContent = secondFirstDesc.secondDescAn;
    bgImage.src = `/images/A-negative.png`;
}
moreBtnBp.onclick = () => {
    bgContainer.classList.add('active');
    moreContainer.style.display = 'block';
    firstHead.textContent = firstHeading.headBp;
    secondDescPara.textContent = secondDesc.secondDescBp;
    secondHead.textContent = secondHeading.headBp;
    secondFirstPara.textContent = secondFirstDesc.secondDescBp;
    bgImage.src = `/images/B+Positive.png`;
}
moreBtnBn.onclick = () => {
    bgContainer.classList.add('active');
    moreContainer.style.display = 'block';
    firstHead.textContent = firstHeading.headBn;
    secondDescPara.textContent = secondDesc.secondDescBn;
    secondHead.textContent = secondHeading.headBn;
    secondFirstPara.textContent = secondFirstDesc.secondDescBn;
    bgImage.src = `/images/B-negative.png`;
}
moreBtnAbp.onclick = () => {
    bgContainer.classList.add('active');
    moreContainer.style.display = 'block';
    firstHead.textContent = firstHeading.headAbp;
    secondDescPara.textContent = secondDesc.secondDescAbp;
    secondHead.textContent = secondHeading.headAbp;
    secondFirstPara.textContent = secondFirstDesc.secondDescAbp;
    bgImage.src = `/images/AB+positive.png`;
}
moreBtnAbn.onclick = () => {
    bgContainer.classList.add('active');
    moreContainer.style.display = 'block';
    firstHead.textContent = firstHeading.headAbn;
    secondDescPara.textContent = secondDesc.secondDescAbn;
    secondHead.textContent = secondHeading.headAbn;
    secondFirstPara.textContent = secondFirstDesc.secondDescAbn;
    bgImage.src = `/images/AB-negative.png`;
}