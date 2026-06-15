function clean() {
    let input = document.getElementById("input").value;
    lines = input.split("\n");
    document.getElementById("verse_ref").innerText = lines[0]
    lines.splice(0, 1);
    verse = lines.join("\n")
    document.getElementById("output").value = verse.replace(/\[\d+\] /g, "");
}

function copy() {
    let output = document.getElementById("output").value;
    navigator.clipboard.writeText(output);
}