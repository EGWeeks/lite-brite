'use strict';
(function(){

	var doc = document;

	(function createDiv() {

		var divsWidth = Math.ceil((window.innerWidth - 20) / 6);
		var divsHeight = Math.ceil((window.innerHeight - 200) / 6);

		var table = doc.createElement('table');
		doc.body.appendChild(table);
		table.setAttribute('id', 'table');

		for (var y = 0; y < divsHeight; y++) {

			var tr = doc.createElement('tr');
			table.appendChild(tr);

			for(var x = 0; x < divsWidth; x++) {

				var r = Math.floor(Math.random() * (255 - 0) + 0);
				var g = Math.floor(Math.random() * (255 - 0) + 0);
				var b = Math.floor(Math.random() * (255 - 0) + 0);

				var td = doc.createElement('td');
				td.style.background = 'rgb('+ r +','+ g +',' + b +')';
				tr.appendChild(td);
			}
		}

	})();

	doc.getElementById('table')
		 .addEventListener('mouseover', function(event) {
		 		event.preventDefault();
				var hoverDiv = doc.elementFromPoint(event.clientX, event.clientY);
				var divString = hoverDiv.toString();
				if(divString === '[object HTMLTableCellElement]') {
					hoverDiv.style.width = '20px';
					hoverDiv.style.height = '20px';

				}
	});


})();