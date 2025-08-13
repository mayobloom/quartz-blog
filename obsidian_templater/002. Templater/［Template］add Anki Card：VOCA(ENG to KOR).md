<%*
const setStart = "START"
const clipboard = await tp.system.clipboard()
var Sentence = await tp.system.prompt("영단어를 통한 한글 뜻 맞추기입니다. 전체 영어 문장을 입력해주세요", clipboard)
var Word = await tp.system.prompt("입력된 문장 중, 어느 영단어에 빈칸을 뚫으시겠습니까?", Sentence+" 중 단어 선택")
if (Sentence.includes(Word)) {
  console.log("문장 내 단어가 있습니다");
} else {
  return;
}
var Meaning = await tp.system.prompt("입력된 영단어의 한글 뜻은 무엇입니까?", Word+'의 뜻을 입력하세요')

if (Sentence.includes(Word)) {
  var newSentence = Sentence.replace(
    Word,
    `{{c1::${Meaning}::${Word};${Meaning[0]}--}}`
  );
  console.log(newSentence);
}

let now = new Date();
now.setHours(now.getHours() + 9);
let dateString = now.toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
let ankiString = 'Anki ' + dateString.substr(0,8) + '_' +dateString.substr(8,14);

await tp.file.rename(ankiString)
-%>

***

CREATED : <% tp.date.now("YYYY_MM_DD_HHmmss") %>
<% setStart %>
KOREANKI_VOCA_CLOZE
Text: <% newSentence %>
Type?: 1
Extra:
Title: 문장에 제시된 빈 칸(영어)을 보고, 다음 단어의 뜻(한글)을 맞춰주세요.
Category:
Unit:
Reference:
Source:
Image:
END

FILE TAGS: VOCA(ENG to KOR)
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
> 	Text: 빈칸으로 만들 텍스트(본문)
> 		- ex) the {{c1::conclusion::결론; c--}} of a trustworthy … 라 입력하면, 1번째(c1) 빈칸에는 결론; c- 라고 나오고, conclusion이라는 단어를 맞춰야 함
> 	Type?: 키보드 타이핑을 추가하려면 1을 입력
> 	Extra: 부가적인 설명 (뒷장 답안지에만 출력됨)
> 	Title: 문제의 제목
> 	Category: 카테고리 분류(우측 첫째줄)
> 	Unit: 유닛 혹은 챕터명(우측 둘째줄)
> 	Reference: 기타 참고자료 (뒷장 답안지에만 출력됨)
> 	Source: 기타 출처
> 	Image: 이미지 입력

`해당 Template은 KOREANKI 카페의 https://cafe.naver.com/koreanki/143 를 통해 작성하였습니다.`