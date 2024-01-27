function createTable() {
    var rowNum = prompt("input number of rows:");
	if(rowNum === null)return;

	var colNum = prompt("input number of columns:");
	if(colNum === null)return;

	var table = document.getElementById("myTable");
	table.innerHTML='';

	for(var i=0; i<rowNum; i++){
		var row = table.insertRow(i);
		for(var j=0; j<colNum; j++){
			var cell = row.insertCell(j);
			cell.innerHTML = "row" + (i+1) + "<br>column" + (j+1);
		}
	}
  
}
