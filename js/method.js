window.onload = function() {
    let _mainSection = document.querySelector('#canvasSection');
    let _mainCanvas = _mainSection.getContext('2d');

    let _btn = document.querySelector('#btn');
    let _beginPath = document.querySelector('#beginPath');
    _mainCanvas.rect(0, 0, 500, 500);// 矩形
    
    _btn.addEventListener('click', ()=>{
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.fillStyle = "#f5f5f5";
        _mainCanvas.fill();
    })
    _beginPath.addEventListener('click', ()=>{
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.moveTo(50, 50);
        _mainCanvas.lineTo(200, 50);
        _mainCanvas.stroke();

        //_mainCanvas.beginPath(); // 重置路径
        _mainCanvas.moveTo(100, 100);
        _mainCanvas.lineTo(200, 150);
        _mainCanvas.stroke();
    })
};