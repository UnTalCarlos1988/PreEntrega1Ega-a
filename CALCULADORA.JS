function appendToDisplay(value) {
    document.getElementById('pantalla').value += value;
    //getElementById obtiene el dato del elemento con el ID que se coloco
    //en este caso de la etiqueta input con el id "pantalla"
}

function clearDisplay() {
    document.getElementById('pantalla').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = result;
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}
