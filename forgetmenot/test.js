var arr=new Array();
for(i=0;i<64;i++)
{
	arr[i]=Math.floor(i/8)+1;
}
var curridx,temp,randomidx,state=0,sel1=0;
curridx=arr.length;
while(0 !== curridx)
{
	randomidx=Math.floor(Math.random()*curridx);
	curridx-=1;
	temp=arr[curridx];
	arr[curridx]=arr[randomidx];
	arr[randomidx]=temp;
}
var count=60;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
function timer()
{
	count=count-1;
	if (count <= 0)
	{
		clearInterval(counter);
		alert("Sorry! Try Again");
		location.reload(true);
		return;
	}
	document.getElementById("timer").innerHTML="<p style='font-size:30px;'>Time remaining:"+count+"</p>";
}
function isgameover()
{
	for(i=0;i<64;i++)
	{
		if(arr[i]!=0)
			break;
	}
	if(i==64)
		return 1;
	return 0;
}
function create_html()
{
	var i,j,s="",a,k=0;
	for(i=0;i<8;i++)
	{
		for(j=0;j<8;j++)
		{
			a=document.createElement("div");
			k=8*i+j+1;
			var s1="box"+k;
			a.setAttribute('id',s1);
			var s2="width:56px;height:56px;position:absolute;top:"+60*i+"px;left:"+60*j+"px;background:lightgrey;border:2px ;border-radius:3px;";
			a.setAttribute('style',s2);
			a.setAttribute('onmousedown',"mouseDown(this)");
			document.getElementById('container').appendChild(a);
		}
	}
}
function mouseDown(obj)
{
	var num=obj.id;
	num=parseInt(num.substring(3,num.length));
	if(state==0)
	{
		obj.innerHTML="<h1 id='heading' style='text-align:center;font-size:26px;'>"+arr[num-1]+"</h1>";
		state=1;
		sel1=num;
		return;
	}
	if(state==1)
	{
		obj.innerHTML="<h1 id='heading' style='text-align:center;font-size:26px;'>"+arr[num-1]+"</h1>";
		var a=document.getElementById("box"+sel1);
		setTimeout(function()
		{
			if(arr[sel1-1]!=arr[num-1])
			{
				obj.innerHTML="<h1 id='heading' style='text-align:center;font-size:26px;'></h1>";
				a.innerHTML="<h1 id='heading' style='text-align:center;font-size:26px;'></h1>";
				state=0;
			}
			else
			{
				if(sel1!=num)
				{
					document.getElementById("box"+sel1).remove();
					document.getElementById("box"+num).remove();
					arr[sel1-1]=0;
					arr[num-1]=0;
					state=0;
					if(isgameover())
					{
						alert("Yay! You have done it ");
						location.reload(true);
					}
				}
			}
		},300);
	}
}