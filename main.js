const output = document.getElementById('screen')
console.log(output)

 function inputValue(value){
    if(output.textContent.length > 10){
        output.textContent = 'Too many characters'
    }else{
        output.textContent += value
    }
    
}
function clearOutput(){
    output.textContent = ''
}
function showResult(){
    try{
        output.textContent = eval(output.textContent)
    }
    catch(error){
        output.textContent = 'Syntax Error';
        
    }
    
    
}