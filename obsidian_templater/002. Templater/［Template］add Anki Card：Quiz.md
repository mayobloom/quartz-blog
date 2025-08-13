<%*
const setStart = "START"
const clipboard = await tp.system.clipboard()
var Question = await tp.system.prompt("퀴즈 문제를 입력하세요", clipboard)
var Answer = await tp.system.prompt("퀴즈 정답을 입력하세요")

let now = new Date();
now.setHours(now.getHours() + 9);
let dateString = now.toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
let ankiString = 'Anki ' + dateString.substr(0,8) + '_' +dateString.substr(8,14);
await tp.file.rename(ankiString)

-%>

***

CREATED : <% tp.date.now("YYYY_MM_DD_HHmmss") %>
<% setStart %>
KOREANKI_BASIC
Front: <% Question %>
Back: <% Answer %>
END

FILE TAGS: shortanswerQuestion
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
> 	Front: 앞면, cloze 입력 가능 {{c1:cloze}}
> 	Back: 뒷면

`해당 Template은 KOREANKI 카페의 https://cafe.naver.com/koreanki/45 를 통해 작성하였습니다.`