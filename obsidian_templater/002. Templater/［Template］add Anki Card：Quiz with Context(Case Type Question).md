<%*
const clipboard = await tp.system.clipboard()
const setStart = "START"
var Question = await tp.system.prompt("퀴즈 문제(Context)를 입력하세요. (cloze는 formatting을 사용해 작성 요)", clipboard)

let now = new Date();
now.setHours(now.getHours() + 9);
let dateString = now.toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
let ankiString = 'Anki ' + dateString.substr(0,8) + '_' +dateString.substr(8,14);
await tp.file.rename(ankiString)

-%>

***

CREATED : <% tp.date.now("YYYY_MM_DD_HHmmss") %>
<% setStart %>
KOREANKI_BASIC_CONTEXT
CONTEXT: <% Question %>
Q1:
A1:
Personal Notes:
Missed Questions:
Q2:
A2:
Q3:
A3:
Q4:
A4:
Q5:
A5:
Q6:
A6:
Q7:
A7:
Q8:
A8:
Q9:
A9:
Q10:
A10:
END

FILE TAGS: Quiz_With_Context
TARGET DECK: Anki Quiz

***

<h1>Commentary & Reference</h1>

_문제의 해설을 적어주세요. 필요하다면 obsidian의 다른 문서나 외부 페이지도 참조해주세요_
***
- text

***

<h2>Outgoing Link</h2>

_이후에 읽어야 하거나 이후에 읽으면 좋을 글을 참조_
***
- text
***

> [!info] Note Type 앞의 # 지우기 + File명은 'ANKI + 생성된ID' 로 통일
> 	Context: 본문
> 	Q1~Q10: 하위문제
> 	A1~A10: 하위문제에 해당하는 답안

`해당 Template은 KOREANKI 카페의 https://cafe.naver.com/koreanki/104 를 통해 작성하였습니다.`