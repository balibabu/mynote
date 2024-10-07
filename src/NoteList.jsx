import React from 'react'

export default function NoteList({notes,setEditing}) {
    return (
        <div>
            {notes.map((note,i)=>(<div key={i}>{note.title}</div>))}
            <hr />
            <button onClick={()=>setEditing(true)}>create</button>
        </div>
    )
}
