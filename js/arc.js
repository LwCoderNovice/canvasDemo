window.onload = function() {
    let _btn = document.querySelector('#btn');
    let _btnT = document.querySelector('#btnT');
    let _btnS = document.querySelector('#btnS');
    _btn.addEventListener('click', ()=>{ // 填充路径
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.arc(250, 250, 50, 0, 1.5*Math.PI, true);
        _mainCanvas.fillStyle = 'red';
        _mainCanvas.fill();
    })
    _btnT.addEventListener('click', ()=>{ // 绘制路径
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.arc(250, 250, 50, 0, 1.5*Math.PI, false);
        _mainCanvas.stroke();
    })
    _btnS.addEventListener('click', ()=>{ // 绘制曲线
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.moveTo(10, 10);
        _mainCanvas.arcTo(250, 10, 250, 250, 100);
        _mainCanvas.stroke();
    })
};