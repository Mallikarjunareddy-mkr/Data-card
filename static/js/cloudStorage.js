async function saveNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const response = await fetch("/notes/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, content})
    });
    if (response.ok) {
        alert("Saved to Cloud!");
        fetchNotes();
    }
}

async function fetchNotes() {
    const response = await fetch("/notes/");
    const notes = await response.json();
    const list = document.getElementById("notesList");
    list.innerHTML = "";
    notes.forEach(note => {
        const li = document.createElement("li");
        li.textContent = note.title + ": " + note.content;
        list.appendChild(li);
    });
}

fetchNotes();
