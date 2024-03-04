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

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the input and mockup container
    const imageInput = document.getElementById('imageInput');
    const mockupContainer = document.getElementById('mockupContainer');

    // Add an event listener to the input to trigger when an image is selected
    imageInput.addEventListener('change', handleImageUpload);

    // Function to handle image upload and display in the mockup
    function handleImageUpload() {
        const file = imageInput.files[0];

        if (file) {
            // Create a FileReader to read the image
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageUrl = e.target.result;

                // Display the image in the mockup container
                mockupContainer.innerHTML = `<img class="gravacao-frente" src="${imageUrl}" alt="Uploaded Image">`;
            };

            // Read the image as a data URL
            reader.readAsDataURL(file);
        }
    }
});
