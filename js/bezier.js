window.onload = function() {
    let _btn = document.querySelector('#quadraticCurveTo');
    let _btnT = document.querySelector('#bezier');
    _btn.addEventListener('click', ()=>{ // 二次贝塞尔曲线
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.moveTo(20,20);
        _mainCanvas.quadraticCurveTo(20,100,200,20);
        _mainCanvas.stroke();
    })
    _btnT.addEventListener('click', ()=>{ // 三次贝塞尔曲线
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.moveTo(20,20);
        _mainCanvas.bezierCurveTo(20,100,200,100,200,20);
        _mainCanvas.stroke();
    })
};