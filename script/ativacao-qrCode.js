document.addEventListener('DOMContentLoaded', function () {
    // Select the radio buttons
    var radioYes = document.querySelector('input[type="radio"][value="sim"]');
    var radioNo = document.querySelector('input[type="radio"][value="nao"]');
    // Select the QR code message container
    var qrCodeMessage = document.querySelector('.main__c-qrcode-ativo');

    // Function to toggle the QR code message display based on the "Sim" radio button's state
    function toggleQRCodeMessage() {
        if (radioYes.checked) {
            qrCodeMessage.style.display = 'block';
        } else {
            qrCodeMessage.style.display = 'none';
        }
    }

    // Add event listeners to both radio buttons to handle selection changes
    radioYes.addEventListener('change', toggleQRCodeMessage);
    radioNo.addEventListener('change', toggleQRCodeMessage);

    // Initial call to set the correct display state of the QR code message
    toggleQRCodeMessage();
});
