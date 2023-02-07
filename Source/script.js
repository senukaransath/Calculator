const btnEqul = document.getElementById('btnEqul');
const txtBox = document.getElementById('txtBox');
const btnClear = document.getElementById('btnClear');
const btnMultipicatoin = document.getElementById('btnMultipicatoin');
const btnMinus = document.getElementById('btnMinus');
const btnPlus = document.getElementById('btnPlus');
const btnDecimel = document.getElementById('btnDecimel');
const btnDivide = document.getElementById('btnDivide');
const operators = ['+','-','*','/','.']
const numbers = [1,2,3,4,5,6,7,8,9,0]
const btns = []

function display(newKey){
    let display = txtBox.value
    let lastCharactor = display.slice(-1).trim()
        if((numbers.indexOf(parseInt(newKey))<0) && (numbers.indexOf(parseInt(lastCharactor))<0)){
            txtBox.value = display.substring(0, display.length - 1) + newKey
            }
            else{
                txtBox.value += newKey; 
                }

}

for (let i = 0; i <10; i++) {
btns[i] = document.getElementById('btn'+i)

btns[i].addEventListener('click',()=>{
display(i)
})

}

btnMultipicatoin.addEventListener('click',() =>{

    display('*')
})
btnDecimel.addEventListener('click',() =>{
    display('.')
})

btnMinus.addEventListener('click',() =>{
    display('-')
})

btnPlus.addEventListener('click',() =>{
    display('+')
})
btnClear.addEventListener('click', () => {
    txtBox.value = ""
});

btnEqul.addEventListener('click', () => {
    txtBox.value = eval(txtBox.value)
});

btnDivide.addEventListener('click', () => {
    display('/')
});

document.addEventListener('keydown', (event) => {
    let name = event.key;
    if(numbers.indexOf(parseInt(name))>=0||operators.indexOf(name)>=0){
        display(name);
    }
  
    else if (name == "Enter"){
        txtBox.value = eval(txtBox.value)
    }

    else if (name == "Escape"){
        txtBox.value = ""
    }

  });