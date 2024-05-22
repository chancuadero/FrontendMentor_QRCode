  
const qrCode = new QRCodeStyling({
    width: 200,
    height: 200,
    data: "https://github.com/F2BEAR",
        
    dotsOptions: {
    color: "#FFFFFF",
    type: "square"
},
    backgroundOptions: {
    color: "#2C7DFA",
}
});
qrCode.append(document.getElementById("qrcode"));