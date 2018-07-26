window.onload = function() {
    let _mainSection = document.querySelector('#canvasSection');
    let _mainCanvas = _mainSection.getContext('2d');

    let _btn = document.querySelector('#btn');
    
    _mainCanvas.rect(0, 0, 500, 500);// 矩形
    
    _btn.addEventListener('click', ()=>{
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.fillStyle = "#f5f5f5";
        _mainCanvas.fill();
    })
};