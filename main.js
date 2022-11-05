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

inputCardNumber.addEventListener("keydown",function(e){
    let arrays = [];
    arrays.push(inputCardNumber.value);
    let array = Array.from(`${arrays}`);
    if (array.length === 4 || array.length === 9 || array.length === 14 ) {
        inputCardNumber.value += " ";
    }
    // if (e.key === "Backspace") {
    //     inputCardNumber.value =inputCardNumber.value.charAt(inputCardNumber.value.length - 1 ) ;
    //     remove(inputCardNumber.value.charAt(inputCardNumber.value.length - 1 ));
    //     console.log(inputCardNumber.value.charAt(inputCardNumber.value.length -1 ));
    //     // console.log(inputCardNumber.value.charAt(inputCardNumber.value.length - 1 ))
    // }
    
})





/*exp mm*/
let inputMm = document.querySelector(".input__mm");
let titleMm = document.querySelector(".title-mm");

inputMm.addEventListener("focusout",function(){
    titleMm.textContent = inputMm.value;
    if(inputMm.value === ""){
        titleMm.textContent="00";
    }
    
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

/*eg*/ 
let inputEg = document.querySelector(".input__eg");
let titleEg = document.querySelector(".title__eg");
inputEg.addEventListener("focusout",function(){
    titleEg.textContent = inputEg.value;
    if(inputEg.value === ""){
        titleEg.textContent ="000"
    }
})




/*=========complate ======*/ 
let complatetInput =document.querySelector(".complate__input");
complatetInput.addEventListener("click",function (){
    document.querySelector(".complate").classList.add("hidden");
    document.querySelector("form").classList.remove("hidden");

})