<%*
async function fetchMetadata(url) {
    try {
        let proxyUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);
        let response = await fetch(proxyUrl);
        let data = await response.json();
        let parser = new DOMParser();
        let doc = parser.parseFromString(data.contents, "text/html");
        let title = doc.querySelector("title") ? doc.querySelector("title").innerText.trim() : "No Title";
        let faviconTag = doc.querySelector("link[rel='icon'], link[rel='shortcut icon']");
        let favicon = faviconTag ? faviconTag.href : "";
        if (favicon && !favicon.startsWith("http")) {
            let urlObj = new URL(url);
            favicon = urlObj.origin + favicon; 
        }
        return { title, favicon };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return { title: "Unknown Title", favicon: "" };
    }
}

const clipboard = await tp.system.clipboard();
const metadata = await fetchMetadata(clipboard);
let output = `<a href="${clipboard}" style="text-decoration: none; color: inherit;">`;

if (metadata.favicon) {
    output += `<span style="display: inline-flex; align-items: center;">`;
    output += `<img src="${metadata.favicon}" width="16" height="16" style="margin-right: 6px;">`;
    output += `${metadata.title}</span>`;
} else {
    output += `${metadata.title}`;
}

output += `</a>`;
-%>
<% output %>
