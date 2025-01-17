// get input value collect common function

function getInputByIdValue (id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber =parseFloat(inputValue);
    return inputValueNumber;
}

// get value of text field

function getTextbyIdValue (id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}