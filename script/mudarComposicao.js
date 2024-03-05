function updateSobretampa() {
    var selectElement = document.getElementById('select-sobretampa');
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var imageUrl = selectedOption.getAttribute('data-image');    
    var imgElement = document.getElementById('selected-sobretampa');
    imgElement.src = imageUrl;
}

function updateTampa() {
    var selectElement = document.getElementById('select-tampa');
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var imageUrl = selectedOption.getAttribute('data-image');    
    var imgElement = document.getElementById('selected-tampa');
    imgElement.src = imageUrl;
}

function updateCopo() {
    var selectElement = document.getElementById('select-copo');
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var imageUrl = selectedOption.getAttribute('data-image');    
    var imgElement = document.getElementById('selected-copo');
    imgElement.src = imageUrl;
}