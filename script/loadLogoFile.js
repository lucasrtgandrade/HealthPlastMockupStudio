document.addEventListener('DOMContentLoaded', function() {
    var fileInput = document.getElementById('pngInput');
    var fileNameDisplay = document.getElementById('fileName');
    var container = document.getElementById('pngContainer'); // Make sure you have this container in your HTML

    fileInput.addEventListener('change', function(event) {
        var files = fileInput.files;
        if (files.length > 0) {
            var file = files[0]; // Get the first file

            // Update the display with the file name
            fileNameDisplay.textContent = file.name;

            // Check if the file is a PNG
            if (file.type !== 'image/png') {
                alert('O arquivo deve ser PNG');
                fileNameDisplay.textContent = ''; // Clear the file name display if it's not a PNG
                return;
            }

            // Read and display the PNG file
            var reader = new FileReader();
            reader.onload = function(event) {
                var img = new Image();
                img.src = event.target.result;

                // Add a class to the img element
                img.classList.add('custom-image-class');

                container.innerHTML = ''; // Clear the container
                container.appendChild(img); // Display the image
            };

            reader.readAsDataURL(file);
        } else {
            // Clear the display if no file is selected
            fileNameDisplay.textContent = '';
            alert('Escolha um arquivo PNG');
        }
    });
});
