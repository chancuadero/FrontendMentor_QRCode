document.addEventListener("DOMContentLoaded", function() {
    const qrCode = new QRCodeStyling({
        width: 200,
        height: 200,
        data: "https://www.frontendmentor.io/",
        dotsOptions: {
            color: "#FFFFFF",
            type: "square"
        },
        backgroundOptions: {
            color: "#2C7DFA"
        }
    });

    qrCode.append(document.getElementById("qrcode"));
});