<%*
const setStart = "START"
const clipboard = await tp.system.clipboard()

var Question = await tp.system.prompt("문제지(앞면)에 표시할 내용을 입력해주세요", clipboard)
var Word = await tp.system.prompt("입력된 문장 중, 어느 영단어에 빈칸을 뚫으시겠습니까?", Question)
var Answer = await tp.system.prompt("답안지(뒷면)에 표시할 내용을 입력해주세요")

var Choices = Sentence.replace(/\s/g, ' / ');

let now = new Date();
now.setHours(now.getHours() + 9);
let dateString = now.toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
let ankiString = 'Anki ' + dateString.substr(0,8) + '_' +dateString.substr(8,14);
await tp.file.rename(ankiString)
-%>
***
> [!Information]
> - 빈 칸이 길 때 사용합니다
> - 

CREATED : <% tp.date.now("YYYY_MM_DD_HHmmss") %>

<% setStart %>
KOREANKI_WRITING_CLOZE
Question: {{c1::<% Sentence %>}}
Translation: <% Meaning %>
Type?: 1
Choices: <% Choices %>
Solution:
Title: 다음 문장(한글)을 읽고 외국어(영어)로 작문해주세요.
Category:
Unit:
Image:
END

FILE TAGS: SENTENSE(KOR_to_ENG)
TARGET DECK: Study English
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
> 	Question: 여기에 **정답을 입력**(작문할 문장 전체를 cloze로 만들어주기)
> 		- ex) {{c1::I've always had a great many worries, most of which were silly.}}
> 	Translation: 정답 언어의 번역을 입력
> 	Type?: 키보드 타이핑을 원하는 경우 1 입력
> 	Choices: 위 Quesion에 입력한 문장을 원하는 단위로 쪼개줌 (Anki가 랜덤으로 섞음, **힌트 역할**)
> 		- ex) I / have / always / had / a great many worries / most of which / were / silly.
> 	Solution: 뒷면에 나오는 정답 해설
> 	Title: 문제의 제목
> 	Category: 카테고리 분류(우측 첫째줄)
> 	Unit: 유닛 혹은 챕터명(우측 둘째줄)
> 	Image: 이미지 입력

`해당 Template은 KOREANKI 카페의 https://cafe.naver.com/koreanki/143 를 통해 작성하였습니다.`