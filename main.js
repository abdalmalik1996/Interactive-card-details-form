
document.querySelectorAll("input").forEach(i =>{
    i.addEventListener("click", function(){
        i.style.borderImageSource = "linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%)"
        i.style.borderWidth ="1px";
        i.style.borderImageSlice = 1;
    })
    i.addEventListener("focusout",()=>{
        if(i.value === ""){
            i.style.border = "1px solid hsl(0, 100%, 66%)";
            i.nextElementSibling.classList.remove("hidden")
            console.log(i.nextElementSibling);
        }else{
            i.style.border = "var(--Light-grayish-violet) 1px solid ";
            console.log(i.nextSibling);
            i.nextElementSibling.classList.add("hidden")
        }
    })
    
})



/* holder-name*/ 
let holderName = document.querySelector(".input__holder-name");
let titleHolderName =   document.querySelector(".title-hloder p")

holderName.addEventListener("focusout", function(){
    titleHolderName.textContent = holderName.value;
    if(holderName.value ===""){
        titleHolderName.textContent = "Jane Appleseed";
    }
})

/*card number*/ 
let inputCardNumber = document.querySelector(".input__card-number");
let titleCardNumber = document.querySelector(".title__card-number");

inputCardNumber.addEventListener("focusout", function(){

    titleCardNumber.textContent = inputCardNumber.value;
    if(inputCardNumber.value ===""){
        titleCardNumber.textContent = "0000 0000 0000 0000"
    }
})

inputCardNumber.addEventListener('input', (e) => {
    // Formats value into credit card
    e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
    validateForm(e.target);
});


/*exp mm*/
let inputmm = document.querySelector(".input__mm");
let titlemm = document.querySelector(".title-mm");

inputmm.addEventListener("focusout",function(){
    titlemm.textContent = inputmm.value;
    if(inputmm.value === ""){
        titlemm.textContent="00";
    }
})
inputmm.addEventListener("input",(e) =>{
e.target.value = e.target.value
.replace(/[^\dA-Z]/g, '');
})

/*exp yy*/
let inputYy = document.querySelector(".input__yy");
let titleYy = document.querySelector(".title-yy");

inputYy.addEventListener("focusout",function(){
    titleYy.textContent = inputYy.value;
    if(inputYy.value === ""){
        titleYy.textContent="00";
    }
})
inputYy.addEventListener("input",(e) =>{
    e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, '');
    })

/*eg*/ 
let inputEg = document.querySelector(".input__eg");
let titleEg = document.querySelector(".title__eg");
inputEg.addEventListener("focusout",function(){
    titleEg.textContent = inputEg.value;
    if(inputEg.value === ""){
        titleEg.textContent ="0000"
    }
})
inputEg.addEventListener("input",(e) =>{
    e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, '');
    })

/*=========complate ======*/ 
let complatetInput =document.querySelector(".complate__input");
complatetInput.addEventListener("click",function (){
    document.querySelector(".complate").classList.add("hidden");
    document.querySelector("form").classList.remove("hidden");
})

/*======================*/ 
let worng = false ;
let confirm = document.querySelector(".form__confirm");
confirm.addEventListener("click", function (){
    if (worng == false) {
        document.querySelector(".form-card").classList.add("hidden");
        document.querySelector(".complate").classList.remove("hidden");
    }
})
