document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.aside-form-c-opcao-button');
    var colorDisplay = document.getElementById('selectedColorDisplay');
    var selectedColors = []; // Array to keep track of selected colors

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var color = button.textContent.trim();
            
            // Toggle selection
            if (selectedColors.includes(color)) {
                // If color is already selected, deselect it
                selectedColors = selectedColors.filter(c => c !== color);
                button.classList.remove('aside-form-c-opcao-button-active');
            } else if (selectedColors.length < 3) {
                // Add new color if fewer than 3 are already selected
                selectedColors.push(color);
                button.classList.add('aside-form-c-opcao-button-active');
            }
            
            // Update display with selected colors
            colorDisplay.textContent = 'Cores de gravação: ' + (selectedColors.join(', ') || 'Selecionar');
        });
    });
});
