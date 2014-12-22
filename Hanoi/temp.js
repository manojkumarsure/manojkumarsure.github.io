function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
		context.beginPath();
		context.moveTo(100,430);
		context.lineTo(100,80);
		context.lineWidth=3;
		context.strokeStyle='blue';
		context.lineCap='round';
		context.stroke();
		context.moveTo(300,430);
		context.lineTo(300,80);
		context.lineWidth=3;
		context.strokeStyle='blue';
		context.lineCap='round';
		context.stroke();
		context.moveTo(500,430);
		context.lineTo(500,80);
		context.lineWidth=3;
		context.strokeStyle='blue';
		context.lineCap='round';
		context.stroke();
		context.moveTo(700,430);
		context.lineTo(700,80);
		context.lineWidth=3;
		context.strokeStyle='blue';
		context.lineCap='round';
		context.stroke();
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
      }
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
	  var flag=1;
      canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
		var s1=mousePos.x+'px';
		var s2=mousePos.y+'px';
		document.getElementById('box1').style.top=s2;
		document.getElementById('box1').style.left=s1;
		flag=0;
      }, false);
	  canvas.addEventListener('mouseup',function(evt){
		  flag=1;
		  console.log('up');
	},false);
	  canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
		var s1=mousePos.x+'px';
		var s2=mousePos.y+'px';
		if(flag==0)
		{
			document.getElementById('box1').style.top=s2;
			document.getElementById('box1').style.left=s1;
		}
      }, false);