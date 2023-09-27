const checkEligibility = document.querySelector('.checkEligible');
const eligibilityContain = document.querySelector('.eligibility-container');
const mainContainer = document.querySelector('.home-container');
const continueBtn1 = document.querySelector('.continue');

checkEligibility.addEventListener("click", (e)  => {
    eligibilityContain.classList.add('active');
    mainContainer.classList.add('active');
});
continueBtn1.onclick = () => {
    eligibilityContain.classList.remove('active');
    mainContainer.classList.remove('active');
}

