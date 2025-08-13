<%*
var sel = window.getSelection && window.getSelection();
if (sel && sel.rangeCount > 0) {
	var selected = sel.getRangeAt(0).toString();
	}
const choice = await tp.system.suggester(["Note", "Abstract, Summary", "Info", "Todo", "Important, Tip", "Check, Success", "Question, FAQ", "Warning", "Failure, Missing", "Danger, Error", "Bug", "Example", "Quote, Cite"], ["Note", "Abstract, Summary", "Info", "Todo", "Important", "Check", "Question", "Warning", "Failure", "Danger, Error", "Bug", "Example", "Quote"]);
-%>
> [!<%choice%>]
> <%selected%>