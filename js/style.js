window.onload = ()=> {
    
    let _fillStyle= document.querySelector('#fillStyle');
    let _storkeStyle= document.querySelector('#storkeStyle');
    let _shadow= document.querySelector('#shadow');

    _fillStyle.addEventListener('click', ()=> {
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        var my_gradient=_mainCanvas.createLinearGradient(0, 0, 250, 0);
        my_gradient.addColorStop(0,'blue');
        my_gradient.addColorStop(.5, 'yellow');
        my_gradient.addColorStop(1,'green');
        _mainCanvas.fillStyle=my_gradient;
        _mainCanvas.fillRect(0, 0, 200, 200);
    })
    _storkeStyle.addEventListener('click', ()=> {
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        var grd=_mainCanvas.createRadialGradient(75,50,5,90,60,100);
            grd.addColorStop(0,'yellow');
            grd.addColorStop(0.2, 'red');
            grd.addColorStop(1,'white');
            _mainCanvas.fillStyle=grd;
            _mainCanvas.fillRect(10,10,150,100);
    })
    _shadow.addEventListener('click', ()=> {
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.shadowBlur=10;
        _mainCanvas.shadowOffsetX=20;
        _mainCanvas.shadowOffsetY=20;
        _mainCanvas.shadowColor="black";
        _mainCanvas.strokeRect(50, 50, 100, 100);
    })
};