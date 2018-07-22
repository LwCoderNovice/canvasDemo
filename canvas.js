window.onload = function() {
    let _mainSection = document.querySelector('#canvasSection');
    let _mainCanvas = _mainSection.getContext('2d');

    _mainCanvas.fillStyle = "#000000";
    _mainCanvas.fillRect(0, 0, 200, 200);
};