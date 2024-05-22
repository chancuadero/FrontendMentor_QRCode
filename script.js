document.addEventListener("DOMContentLoaded", function() {
    const qrCodeElement = document.getElementById("qrcode");
    const qrcode = new QRCode(qrCodeElement, {
        text: "https://www.frontendmentor.io/",
        width: 200,
        height: 200,
        colorDark: "#FFFFFF",
        colorLight: "#2C7DFA",
        correctLevel: QRCode.CorrectLevel.H
    });

   

});