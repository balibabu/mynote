import React, { useState } from 'react'

const dummy = { title: "", description: "" };
export default function Editor({notes,setEditing,setNotes,updateContent}) {
    const [notef, setNotef] = useState(dummy);

    function onDetailsChange(e) {
        setNotef(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    function saveHandler(){
        updateContent([...notes,notef]);
        setNotes((prev)=>[...prev,notef]);
        setNotef(dummy);
        setEditing(false);
    }

    return (
        <div>
            <p>Title</p>
            <input name='title' type='text' value={notef.title} onChange={onDetailsChange} style={{width:'80%'}}/><br />
            <p>Description</p>
            <textarea name='description' value={notef.description} onChange={onDetailsChange} style={{width:'80%'}} rows={notef.description.split('\n').length + 1}></textarea>
            <hr />
            <button onClick={saveHandler}>save</button>
        </div>
    )
}
