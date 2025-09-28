function saveNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.push({title, content});
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    const list = document.getElementById("notesList");
    list.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note.title + ": " + note.content;
        list.appendChild(li);
    });
}

displayNotes();
