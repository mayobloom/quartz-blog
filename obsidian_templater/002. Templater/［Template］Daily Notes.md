---
date: <% tp.date.now("YYYY-MM-DD") %>
tags: 
aliases: 
cssclasses: 
publish:
---
<%*
let now = new Date();
now.setHours(now.getHours() + 9);
let dateString = now.toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
let file_written_date =  dateString.substr(0,4) + '-' + dateString.substr(4,2) + '-' + dateString.substr(6,2)  ;

await tp.file.rename(file_written_date)
-%>

- [ ] is writing done?
***
creation date: <% tp.date.now("dddd Do MMMM YYYY HH:mm:ss") %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
[출근시각:: ]
[퇴근시각:: ]


***
<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>
# Daily Quote

<% tp.web.daily_quote() %>

***
# Note

- 여기에 내용을 입력하세요

***
# Todo

`- [ ] 할 일을 체크박스 형식으로 적어주세요. (taks plugin 활용)`

***


***
# Written today

```dataview
LIST
FROM ""
WHERE file.cday = this.file.day
SORT file.name
```

# Modified today(without created)
```dataview
LIST
FROM ""
WHERE file.mday = this.file.day AND file.cday != this.file.day
SORT file.name
```
***
