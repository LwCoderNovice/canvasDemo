window.onload = function() {
    let _mainSection = document.querySelector('#canvasSection');
    let _mainCanvas = _mainSection.getContext('2d');

    _mainCanvas.fillRect(0, 0, 500, 500);// 填充矩形
    _mainCanvas.clearRect(50, 50, 400, 400); // 清除矩形
    _mainCanvas.strokeRect(100, 100, 300, 300); // 无填充矩形
    _mainCanvas.fillRect(150, 150, 200, 200);
};