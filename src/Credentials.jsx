import React, { useState } from 'react'
import {  encrypt } from './crud';

// const savedCreden = localStorage.getItem('credentials');
export default function Credentials({ setCrede }) {
    const [creden, setCreden] = useState({});
    const [passcode, setPasscode] = useState('');

    function onCredentialChange(e) {
        setCreden((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function savedCredendentials() {
        const strin = JSON.stringify(creden);
        const encrypted = encrypt(strin, passcode);
        localStorage.setItem('credentials', encrypted);
        setCrede(creden);
    }


    return (
        <div>
            <p>Github Username</p>
            <input type="text" name='owner' value={creden.owner || ''} onChange={onCredentialChange} placeholder='eg. balibabu' />
            <p>Created repo name</p>
            <input type="text" name='repo' value={creden.repo || ''} onChange={onCredentialChange} placeholder='eg. my-note-app' />
            <p>Path to the created file</p>
            <input type="text" name='path' value={creden.path || ''} onChange={onCredentialChange} placeholder='eg. source/data.txt' />
            <p>Github Access Token</p>
            <input type="text" name='token' value={creden.token || ''} onChange={onCredentialChange} placeholder='eg. ghp_8zSiWabakwjeG6El3M5tJFr4zsc3kar2T' />

            <p>Create A passkey</p>
            <input type="text" value={passcode} onChange={(e) => setPasscode(e.target.value)} placeholder='eg. any passcodes' />
            <hr />
            <button onClick={savedCredendentials}>save</button>
        </div>
    )
}
