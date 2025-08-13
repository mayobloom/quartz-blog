<%*
var sel = window.getSelection && window.getSelection();
if (sel && sel.rangeCount > 0) {
	var selected = sel.getRangeAt(0).toString();
	}
const clozeType = await tp.system.suggester(
  ["드래그 내용을 뒷면(정답)으로 처리","드래그 내용을 앞면(문제,힌트)로 처리"],
  ["setselectedAnswer","setselectedQuestion"]
);
const showFirstLetter = await tp.system.suggester(
  ["정답의 첫 글자를 보여줍니다","정답의 첫 글자를 보여주지 않습니다"],
  ["Yes","No"]
);

if (clozeType == "setselectedAnswer") {  
  var clozeIndex = await tp.system.prompt("몇번째 cloze 입니까? 숫자를 입력하세요.")
  var exposed = await tp.system.prompt("앞면에 노출시킬 내용을 입력하세요(없으면 빈칸 그대로 Enter)")
  if (exposed == null && showFirstLetter == "No") {
    var newselected = selected.replace(
      selected,
      `{{c${clozeIndex}::${selected}}}`
    );
  } else if (showFirstLetter == "No") {
    var newselected = selected.replace(
      selected,
      `{{c${clozeIndex}::${selected}::${exposed};---}}`
    );
  } else {
    var newselected = selected.replace(
      selected,
      `{{c${clozeIndex}::${selected}::${exposed};${selected[0]}--}}`
    );
  }

} else if (clozeType == "setselectedQuestion") {  
  var clozeIndex = await tp.system.prompt("몇번째 cloze 입니까? 숫자를 입력하세요.")
  var answer = await tp.system.prompt("정답을 입력하세요")
  if (showFirstLetter == "No") {
    var newselected = selected.replace(
      selected,
      `{{c${clozeIndex}::${answer}::${selected};---}}`
    );
  } else {
    var newselected = selected.replace(
      selected,
      `{{c${clozeIndex}::${answer}::${selected};${answer[0]}--}}`
    );
  }

} else {
  
}
-%>
<%newselected%>