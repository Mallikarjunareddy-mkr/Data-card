from .database import db
from .models import Note

def create_note(note: dict):
    return db.notes.insert_one(note)

def get_notes():
    return list(db.notes.find({}, {"_id": 0}))
