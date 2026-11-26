function clean() {
    // Get input text
    let input = document.getElementById("input").value;

    // Split lines into a list of lines
    let lines = input.split("\n");

    // Split the words in the verse reference
    let verse_ref_words = lines[0].trim().split(" ");

    // Remove the last word in the verse reference, which is the Bible version used
    verse_ref_words.pop();

    // Join back the words in the list to form the verse reference
    document.getElementById("verse_ref").innerText = verse_ref_words.join(" ");

    // Remove the verse reference from the input
    lines.splice(0, 1);

    // Join all the lines in the verse
    let verse = lines.join("\n");

    // Remove the verse numbers and show the result in the output area
    document.getElementById("output").value = verse.replace(/\[\d+\] /g, "");

    // Show result
    document.getElementById("result").hidden = false;
}

function copyVerseRef(button) {
    // Get the cleaned verse reference
    let verse_ref = document.getElementById("verse_ref").innerText;

    // Copy the verse reference to the clipboard
    navigator.clipboard.writeText(verse_ref);

    // Show "Copied!" on the button
    showCopied(button)
}

function copyVerse(button) {
    // Get the cleaned output
    let output = document.getElementById("output").value;

    // Copy the output to the clipboard
    navigator.clipboard.writeText(output);

    // Show "Copied!" on the button
    showCopied(button)
}

function showCopied(button) {
    // Change button to show "Copied!"
    button.innerText = "Copied!";

    // Change button to show "Copy" after 1.5s
    setTimeout(() => {
        button.innerText = "Copy";
    }, 1000);
}