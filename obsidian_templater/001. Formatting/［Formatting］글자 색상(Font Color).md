<%*
var sel = window.getSelection && window.getSelection();
if (sel && sel.rangeCount > 0) {
	var selected = sel.getRangeAt(0).toString();
	}
const selectedColor = await tp.system.suggester([" ","🔴 Red","🟠 Orange","🟡 Yellow","🟢 Green","🔵 Blue","🟣 Purple","🟤 Brown"], [" ","orangered","orange","yellow","limegreen","aqua","mediumorchid","sienna"]);
//const selectedBackgroundColor = await tp.system.suggester([" ","Firebrick Red","Orange","Yellow","Light Green","Sea Green","Cyan","Sky Blue","Royal Blue","Blue","Navy","Purple(Dark Violet)","Pink(Violet)","Magenta"], [" ","firebrick","orange","yellow","lightgreen","seagreen","cyan","skyblue","royalblue","blue","navy","darkviolet","violet","magenta"] );
-%>
<span style="color:<%selectedColor%>;font-weight:bold"><%selected%></span>

