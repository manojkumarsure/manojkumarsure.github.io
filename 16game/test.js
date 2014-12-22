var xpos = 3;
var ypos = 3;
var initarr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
var currarr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
var move = 0;
function shuffle()
{
	var z,s,k;
	for(var i=0;i<100;i++)
	{
		k=Math.floor((Math.random()*4)+1);
		z = (xpos)+4*(ypos)+1;
		s = 'box'+z;
		if(k==1)
			up(z,s);
		if(k==2)
			down(z,s);
		if(k==3)
			left(z,s);
		if(k==4)
			right(z,s);
	}
	move=0;
	document.getElementById('moves').innerHTML='<h1>Moves:'+move+'</h1>';
}
function up(z,s)
{
	if(ypos<3)
	{
		z2=z+4;
		s2='box'+z2;
		x2=document.getElementById(s2).innerHTML;
		document.getElementById(s2).innerHTML=document.getElementById(s).innerHTML;
		document.getElementById(s2).style.background='white';
		document.getElementById(s).style.borderStyle='none';
		document.getElementById(s).innerHTML=x2;
		document.getElementById(s).style.background='lightgrey';
		ypos=ypos+1;
		var temp;
		temp=currarr[z2-1];
		currarr[z2-1]=currarr[z-1];
		currarr[z-1]=temp;
		move=move+1;
	}
}
function down(z,s)
{
	if(ypos>=1)
	{
		z2=z-4;
		s2='box'+z2;
		x2=document.getElementById(s2).innerHTML;
		document.getElementById(s2).innerHTML=document.getElementById(s).innerHTML;
		document.getElementById(s2).style.background='white';
		document.getElementById(s).style.borderStyle='none';
		document.getElementById(s).innerHTML=x2;
		document.getElementById(s).style.background='lightgrey';
		ypos=ypos-1;
		var temp;
		temp=currarr[z2-1];
		currarr[z2-1]=currarr[z-1];
		currarr[z-1]=temp;
		move=move+1;
	}
}
function left(z,s)
{
	if(xpos<3)
	{
		z2=z+1;
		s2='box'+z2;
		x2=document.getElementById(s2).innerHTML;
		document.getElementById(s2).innerHTML=document.getElementById(s).innerHTML;
		document.getElementById(s2).style.background='white';
		document.getElementById(s).style.borderStyle='none';
		document.getElementById(s).innerHTML=x2;
		document.getElementById(s).style.background='lightgrey';
		xpos=xpos+1;
		var temp;
		temp=currarr[z2-1];
		currarr[z2-1]=currarr[z-1];
		currarr[z-1]=temp;
		move=move+1;
	}
}
function right(z,s)
{
	if(xpos>=1)
	  {
		z2=z-1;
		s2='box'+z2;
		x2=document.getElementById(s2).innerHTML;
		document.getElementById(s2).innerHTML=document.getElementById(s).innerHTML;
		document.getElementById(s2).style.background='white';
		document.getElementById(s).style.borderStyle='none';
		document.getElementById(s).innerHTML=x2;
		document.getElementById(s).style.background='lightgrey';
		xpos=xpos-1;
		var temp;
		temp=currarr[z2-1];
		currarr[z2-1]=currarr[z-1];
		currarr[z-1]=temp;
		move=move+1;
	  }
}
function compare()
{
	var i;
	for(i=0;i<initarr.length;i++)
	{
		if(initarr[i]!=currarr[i])
			break;
		else
			continue;
	}
	if(i==initarr.length)
	{
		var s="Yay! You have done it in "+move+" moves";
		alert(s);
		shuffle();
	}
}
function keyDown(e)
{
  var code = e.keyCode ? e.keyCode : e.which;
  var z = (xpos)+4*(ypos)+1;
  var s = 'box'+z;
  var z2,s2,x2;
  if (code == 38) 
	   up(z,s);
  if (code == 40)
		down(z,s);
  if (code == 37)
	  left(z,s);
  if (code == 39)
	  right(z,s);
  document.getElementById('moves').innerHTML='<h1>Moves:'+move+'</h1>';
  compare();
}
