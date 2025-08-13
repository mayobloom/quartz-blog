---
tags:
---
<%*
let now = new Date();
now.setHours(now.getHours() + 9);
let dateString = now.toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
let file_written_date =  dateString.substr(0,8) + '_' +dateString.substr(8,14);

await tp.file.rename(file_written_date + "：")
-%>

- [ ] is writing done?
# Entry Point


## Why i taking this note?


## Outline / Summary


# Main Text


# Outgoing Link & Reference


# Further Information & Research
