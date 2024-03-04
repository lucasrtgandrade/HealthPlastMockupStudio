document.addEventListener('DOMContentLoaded', function() {
    // Find each fieldset by its data-group attribute
    document.querySelectorAll('[data-group]').forEach(function(fieldset) {
        let groupName = fieldset.dataset.group;
        let radioYes = fieldset.querySelector('input[type="radio"][value="sim"]');
        let radioNo = fieldset.querySelector('input[type="radio"][value="nao"]');
        let displayElement = document.querySelector(`[data-display="${groupName}"]`);

        // Function to update display based on radio selection
        function updateDisplay() {
            if (radioYes.checked) {
                displayElement.textContent = 'Cor especial';
            } else if (radioNo.checked) {
                displayElement.textContent = ''; // Display none or remove text
            }
        }

        // Listen for changes on each radio button
        radioYes.addEventListener('change', updateDisplay);
        radioNo.addEventListener('change', updateDisplay);

        // Initial update in case the selection is made before the script runs
        updateDisplay();
    });
});
