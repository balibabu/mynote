import React, { useState, useEffect } from 'react'
import Editor from './Editor'
import NoteList from './NoteList';
import GetFile, { updateFile } from './crud';

let sha = ''
export default function Note({ crede }) {
    const [editing, setEditing] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getContent();
    }, [])


    async function getContent() {
        const fileData = await GetFile(crede.owner, crede.repo, crede.path, crede.token);
        sha = fileData.sha;
        const noteString = atob(fileData.content);
        setNotes(JSON.parse(noteString));
    }

    async function updateContent(allnotes) {
        const content = JSON.stringify(allnotes);
        const status = await updateFile(crede.owner, crede.repo, crede.path, crede.token, sha, content);
        if (status) {
            alert("file saved successfully");
        }
    }


    return (
        <div>
            {
                editing ?
                    <Editor {...{ notes, setEditing, setNotes, updateContent }} /> :
                    <NoteList {...{ notes, setEditing }} />
            }
        </div>
    )
}
