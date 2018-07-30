window.onload = ()=> {
    let _mainSection = document.querySelector('#canvasSection');
    let _mainCanvas = _mainSection.getContext('2d');

    let _btn = document.querySelector('#btn');
    let _fontS = document.querySelector('#fontS');
    let _fontT = document.querySelector('#fontT');
    _mainCanvas.rect(0, 0, 500, 500);// 矩形
    
    _btn.addEventListener('click', ()=>{
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        let _txt = 'Hello World'
        _mainCanvas.font="40px Arial";

        _mainCanvas.fillText(_txt,10,50);
        _mainCanvas.fillText("width:" + _mainCanvas.measureText(_txt).width,10,80)
    })
    _fontS.addEventListener('click', ()=>{
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        _mainCanvas.beginPath();
        _mainCanvas.strokeStyle="blue";
        _mainCanvas.moveTo(200,0);
        _mainCanvas.lineTo(200,200);
        _mainCanvas.stroke();

        _mainCanvas.font="26px Arial";
        _mainCanvas.strokeStyle="red";
        // 显示不同的 textAlign 值
        _mainCanvas.textAlign="start";
        _mainCanvas.strokeText("textAlign=start",200,60);
        _mainCanvas.textAlign="end";
        _mainCanvas.strokeText("textAlign=end",200,80);
        _mainCanvas.textAlign="left";
        _mainCanvas.strokeText("textAlign=left",200,100);
        _mainCanvas.textAlign="center";
        _mainCanvas.strokeText("textAlign=center",200,120);
        _mainCanvas.textAlign="right";
        _mainCanvas.strokeText("textAlign=right",200,140);
    })

    _fontT.addEventListener('click', ()=> {
        let _mainSection = document.querySelector('#canvasSection');
        let _mainCanvas = _mainSection.getContext('2d');
        //在位置 y=100 绘制蓝色线条
        _mainCanvas.strokeStyle="blue";
        _mainCanvas.moveTo(5,100);
        _mainCanvas.lineTo(395,100);
        _mainCanvas.stroke();

        _mainCanvas.font="20px Arial"

        //在 y=200 以不同的 textBaseline 值放置每个单词
        _mainCanvas.textBaseline="top";
        _mainCanvas.fillText("Top-i",5,100);
        _mainCanvas.textBaseline="bottom";
        _mainCanvas.fillText("Bottom-p",40,100);
        _mainCanvas.textBaseline="middle";
        _mainCanvas.fillText("Middle-p",120,100);
        _mainCanvas.textBaseline="alphabetic";
        _mainCanvas.fillText("Alphabetic",200,100);
        _mainCanvas.textBaseline="hanging";
        _mainCanvas.fillText("Hanging",290,100);
    })
};