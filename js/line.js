window.onload = ()=> {
    
    let _btn = document.querySelector('#btn');
    (()=>{
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.moveTo(50, 50);
        _mainCanvas.lineTo(200, 50);
        _mainCanvas.lineTo(200, 200);
        //_mainCanvas.stroke();
    })();
    _btn.addEventListener('click', ()=> {
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        
        _mainCanvas.closePath();
        _mainCanvas.stroke();
    })
};