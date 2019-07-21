function calculateSize(){
	var number=document.getElementById('number1').value;
 
	if(number==""){
		alert("Please enter something");
	}else{
		var result;
		var file1=document.getElementById('file1').value;
		var file2=document.getElementById('file2').value;
 
		if(file1=="Byte" && file2=="Byte"){
			result=parseInt(number);
		}else if(file1=="Byte" && file2=="KB"){
			result=Math.round(parseInt(number)/1024)
		}else if(file1=="Byte" && file2=="MB"){
			result=Math.round(parseInt(number)/1024/1024);
		}else if(file1=="Byte" && file2=="GB"){
			result=Math.round(parseInt(number)/1024/1024/1024);
		}else if(file1=="KB" && file2=="Byte"){
			result=parseInt(number)*1024;
		}else if(file1=="KB" && file2=="KB"){
			result=parseInt(number);
		}else if(file1=="KB" && file2=="MB"){
			result=Math.round(parseInt(number)/1024);
		}else if(file1=="KB" && file2=="GB"){
			result=Math.round(parseInt(number)/1024/1024);
		}else if(file1=="MB" && file2=="Byte"){
			result=parseInt(number)*1024*1024;
		}else if(file1=="MB" && file2=="KB"){
			result=parseInt(number)*1024;
		}else if(file1=="MB" && file2=="MB"){
			result=parseInt(number);
		}else if(file1=="MB" && file2=="GB"){
			result=Math.round(parseInt(number)/1024);
		}else if(file1=="GB" && file2=="Byte"){
			result=parseInt(number)*1024*1024*1024;
		}else if(file1=="GB" && file2=="KB"){
			result=parseInt(number)*1024*1024;
		}else if(file1=="GB" && file2=="MB"){
			result=parseInt(number)*1024;
		}else if(file1=="GB" && file2=="GB"){
			result=parseInt(number);
		}
 
		document.getElementById('number2').value = result;
	}
}
