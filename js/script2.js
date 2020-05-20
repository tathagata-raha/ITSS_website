var flag=0;
var count=0;
function beginnerclick(){
	document.getElementById("dropdown1").innerHTML="Beginner<span class=\"caret\"></span>";
	count=1;
}
function intermediateclick(){
	document.getElementById("dropdown1").innerHTML="Intermediate<span class=\"caret\"></span>";
	count=2;
}
function proficientclick(){
	document.getElementById("dropdown1").innerHTML="Proficient<span class=\"caret\"></span>";
	count=3;
}
function submitbuttonclick(){
	if(document.getElementById("nameText").value=="")
	{
		window.alert("Enter name");
		return;
	}
	if(document.getElementById("skillText").value=="")
	{
		window.alert("Enter Skill");
		return;
	}
	if(count==0){
		window.alert("Select proficiency");
		return;
	}
	if(flag==0)
	{
		var division=document.getElementById("excontainer2");
		var newTable=document.createElement("table");
		newTable.className = "table table-striped table-bordered table-responsive";
		var tableHead=document.createElement("thead");
		var tableHeadRow=document.createElement("tr");
		var tableHeadRowElement1=document.createElement("th");
		var tableHeadRowElement2=document.createElement("th");
		var tableHeadRowElement3=document.createElement("th");
		tableHeadRowElement1.innerHTML="NAME";
		tableHeadRowElement2.innerHTML="SKILL";
		tableHeadRowElement3.innerHTML="LEVEL";
		tableHeadRow.appendChild(tableHeadRowElement1);
		tableHeadRow.appendChild(tableHeadRowElement2);
		tableHeadRow.appendChild(tableHeadRowElement3);
		tableHead.appendChild(tableHeadRow);
		newTable.appendChild(tableHead);
		division.appendChild(newTable);
		flag=1;
		var tableBody=document.createElement("tbody");
		tableBody.id="newTableBody";
		newTable.appendChild(tableBody);
		newTable.id="newTable";
	}
	var tableBody=document.getElementById("newTableBody");
	var tableRow=document.createElement("tr");
	var tableData1=document.createElement("td");
	var tableData2=document.createElement("td");
	var tableData3=document.createElement("td");
	var asd=document.getElementById("nameText").value;
	var fgh=document.getElementById("skillText").value;
	tableData1.innerHTML=asd;
	tableData2.innerHTML=fgh;
	if(count==1)
		tableData3.innerHTML="Beginner";
	else if(count==2)
		tableData3.innerHTML="Intermediate";
	else if(count==3)
		tableData3.innerHTML="Proficient";
	tableRow.appendChild(tableData1);
	tableRow.appendChild(tableData2);
	tableRow.appendChild(tableData3);
	tableBody.appendChild(tableRow);
	document.getElementById("dropdown1").innerHTML="Proficiency<span class=\"caret\"></span>";
	document.getElementById("nameText").value="";
	document.getElementById("skillText").value="";
	count=0;
}

function likebuttonclick(){
	var content=document.getElementById("likeButton").innerHTML;
	// var posSpace=content.indexOf(" ");
	// var numstr=content.substring(0,posSpace);
	var num=parseInt(content);
	num++;
	if(num!=1)
	document.getElementById("likeButton").innerHTML=num.toString()+" likes";
	else
		document.getElementById("likeButton").innerHTML=num.toString()+" like";
}