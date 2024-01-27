function createTable() {
    var rowNum = prompt("Input number of rows");
	if(rowNum === null)return;

	var colNum = prompt("Input number of columns");
	if(colNum === null)return;

	var table = document.getElementById("myTable");
	table.innerHTML='';

	for(var i=0; i<rowNum; i++){
		var row = table.insertRow(i);
		for(var j=0; j<colNum; j++){
			var cell = row.insertCell(j);
			cell.innerHTML = "row" + (i) + "<br>column" + (j);
		}
	}
  
}
