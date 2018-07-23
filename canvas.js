window.onload = function() {
    let _mainSection = document.querySelector('#canvasSection');
    let _mainCanvas = _mainSection.getContext('2d');

    _mainCanvas.fillStyle = "#f5f5f5";
    _mainCanvas.fillRect(0, 0, 500, 500);// 矩形
    _mainCanvas.clearRect(50, 50, 400, 400);
    _mainCanvas.strokeRect(100, 100, 300, 300);
    _mainCanvas.fillStyle = "#e6e6e6";
    _mainCanvas.fillRect(150, 150, 200, 200);// 矩形
};