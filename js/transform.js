window.onload = () => {
    let _mainSection = document.querySelector('#canvasSection');
    let _mainCanvas = _mainSection.getContext('2d');

    let _btn = document.querySelector('#btn');
    let _join = document.querySelector('#join');
    _mainCanvas.rect(0, 0, 500, 500);// 矩形
    
    _btn.addEventListener('click', ()=>{
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.lineCap = 'round'; // square, round, butt
        _mainCanvas.lineWidth = '50';
        _mainCanvas.moveTo(50,50);
        _mainCanvas.lineTo(50,200);
        _mainCanvas.stroke();
    })
    _join.addEventListener('click', ()=>{
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.lineJoin="miter"; // bevel, round, miter
        _mainCanvas.lineWidth = '10';
        _mainCanvas.miterLimit=1;
        _mainCanvas.moveTo(50,50);
        _mainCanvas.lineTo(150,100);
        _mainCanvas.lineTo(50,110);
        _mainCanvas.stroke();
    })
};