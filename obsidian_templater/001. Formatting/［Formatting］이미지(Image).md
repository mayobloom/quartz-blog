<%*
const clipboard = await tp.system.clipboard();
-%>
<figure style="display: flex; flex-direction: column; align-items: center; text-align: center;">
    <img src="<% clipboard %>" style="max-width: 100%; height: auto;"/>
    <figcaption>
        <span style="font-weight:bold"> [Figure num] </span>
        <span style="font-style:italic;">Image from clipboard</span>
    </figcaption>
</figure>
