
let imgBox = document.getElementById('imgBox');
let QRIMG = document.getElementById('QRIMG');
let QrText =  document.getElementById('QrText');


function GenerateQR (){
    if(QrText.value.length > 0){
        QRIMG.src  = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +  QrText.value;
        imgBox.classList.add("show-img");
    }else{
        QrText.classList.add('error');
        setTimeout(()=>{
            alert("Please enter some text to generate QR code");
            QrText.classList.remove('error');
        },1000);
    }
}

QrText.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        GenerateQR();
    }
});

QrText.addEventListener('keyup', e => e.key === 'enter' &&  GenerateQR());