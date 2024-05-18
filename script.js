let qrinput = document.getElementById('qr-input');
let qrbutton = document.getElementById('qr-button');
let qrimg = document.getElementById('qr-img');
// console.log(qrbutton);


qrbutton.addEventListener('click', function() {
    let inputvalue = qrinput.value;

    if(!inputvalue){
        alert("Please enter valid URL")
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
        qrimg.alt = `QR code for ${inputvalue}`
    }
})