<%*
const selectedText = tp.file.selection();

if (!selectedText) {
    new Notice("⚠️ 텍스트를 먼저 선택해주세요.", 2000);
    return;
}

const allFiles = app.vault.getMarkdownFiles();

// 모든 노트를 처리하되, 표시 이름을 조건에 따라 다르게 설정합니다.
const notes = allFiles.map(file => {
    const cache = app.metadataCache.getFileCache(file);
    const title = cache?.frontmatter?.title;
    // title이 있으면 "title (파일명)" 형식으로, 없으면 "파일명"으로 displayName을 설정
    const displayName = title ? `${title} (${file.name})` : file.name;
    return { displayName: displayName, path: file.path };
});

const selectedNote = await tp.system.suggester(
    (item) => item.displayName, // 표시할 이름
    notes,                      // 원본 데이터
    false,
    "링크할 노트를 선택하세요."
);

if (selectedNote) {
    const fileName = selectedNote.path.substring(0, selectedNote.path.lastIndexOf('.'));
    const link = `[[${fileName}|${selectedText}]]`;
    tR += link;
}
-%>