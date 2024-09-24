const btn =document.querySelector("#generatepass") ;
const newpass=document.querySelector("#pass") ;
const showrange=document.querySelector("#showrange") ;
const range=document.querySelector("#range") ;

const uppercase=document.querySelector("#uppercase")
const lowercase=document.querySelector("#lowercase")
const number=document.querySelector("#number")
const symble=document.querySelector("#symble")

const btn2=document.querySelector("#btn2")

range.addEventListener('input',()=>{
    
    
    showrange.innerText=range.value ;
})


    

function Str_Random(length) {

    let finalstr="" ;
    let capitalstr="ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    let smallstr="abcdefghijklmnopqrstuvwxyz" ;
    let numberstr="0123456789" ;
    let symblestr="!@#$%^&*?" ;


    if(uppercase.checked){
        finalstr+=capitalstr ;
    }
    if(lowercase.checked){
        finalstr+=smallstr ;
    }
    if(number.checked){
        finalstr+=numberstr ;
    }
    if(number.checked){
        finalstr+=symblestr ;
    }
    
    let result = '';
    const characters = finalstr;
    
    
    for (let i = 0; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
    return result;
}




btn.addEventListener('click',()=>{
   
    newpass.innerText= Str_Random(showrange.innerText);

})



function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Copied to clipboard: ', text);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

btn2.addEventListener('click',()=>{
   
    copyToClipboard(newpass.innerText)

})