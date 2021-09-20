var elForm = document.querySelector(".form-js");
var elInput = document.querySelector(".input-js");
var elSelect = elForm.querySelector(".select-js");
var elDisplay = document.querySelector(".display-js");

const usdToSum = 10670;
const eurToSum = 12100;
const rublToSum = 110;

elForm.addEventListener("submit", function(converter){
    converter.preventDefault();
    
    var sum = elInput.value;
    var valyuta = elSelect.value;
    if (sum <= 0) {
        alert("0 dan katta qiymat kiriting !!!")
    } else {
        elDisplay.textContent = sum * valyuta + " so\'m";
    }

})