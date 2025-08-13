<%*
var sel = window.getSelection && window.getSelection();
if (sel && sel.rangeCount > 0) {
	var selected = sel.getRangeAt(0).toString();
	}
-%>

<h3><%selected%></h3>