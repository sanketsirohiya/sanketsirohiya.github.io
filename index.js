var realtoday= new Date();
var today= new Date();
var todate= today.getDate();
var months= [["January",31], ["February",28],["March",31], ["April",30], ["May",31], ["June",30], ["July",31], ["August",31],["September",30],["October",31] , ["November",30] , ["December",31]];
var initial = function()
{
	document.getElementById("inner11").innerText=months[today.getMonth()][0];
	document.getElementById("inner12").innerText=today.getFullYear();
	today.setDate(1);
	var n= today.getDay();
	var dates= document.getElementsByClassName("day");
	
	for(var j=0;j<dates.length;j++)
	{
		dates[j].innerText=null;
		dates[j].setAttribute("style","background-color: #eee");
	}
	if(n < 5)
	{
		dates[35].setAttribute("style", "display: none");
		dates[36].setAttribute("style", "display: none");
	}
	 var noOfDays= new Date(today.getFullYear(),today.getMonth()+1,0).getDate();//months[today.getMonth()][1];
	// if(today.getFullYear()%4==0 && today.getMonth()==1)
	// 	noOfDays= noOfDays+1;
	// console.log(noOfDays);
	for(var i=1;i<=noOfDays;i++)	
	{
		dates[n].innerText=i;
		if(today.getFullYear()==realtoday.getFullYear()&&today.getMonth()==realtoday.getMonth())
			{	
				if(i==todate)
				{
					dates[n].setAttribute("style","background-color: #1abc9c");
				}
			}	
		n++;
	}
}
initial();

var prevY=document.getElementById("prevY");
prevY.addEventListener('click',function(event){
	today.setFullYear(today.getFullYear()-1);
	initial();
});
var prevM=document.getElementById("prevM");
prevM.addEventListener('click',function(event){
	today.setMonth(today.getMonth()-1);
	initial();
});
var nextY=document.getElementById("nextY");
nextY.addEventListener('click',function(event){
	today.setFullYear(today.getFullYear()+1);
	initial();
});
var nextM=document.getElementById("nextM");
nextM.addEventListener('click',function(event){
	today.setMonth(today.getMonth()+1);
	initial();
});
var todaybutton=document.getElementById("today");
todaybutton.addEventListener('click',function(event){
	var todayx= new Date();
	today=todayx;
	initial();
});
