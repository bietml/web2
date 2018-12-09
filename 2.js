function sc(){
	rng=prompt("Enter the range");
	res=rng.split('-');
	if(res.length!=2){
	alert("Invalid range");
	return;
	}
	firstnum=parseInt(res[0]);
	secondnum=parseInt(res[1]);
	if(firstnum>secondnum){
	alert("Invalid range");
	return;
	}
	str="<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
	for(i=firstnum;i<=secondnum;i++)
	{
	str=str+"<tr><td>"+i+"<td>"+(i*i)+"<td>"+(i*i*i);
	}
	document.write(str);
	
}