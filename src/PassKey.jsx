import React, { useState } from 'react'
import Credentials from './Credentials';
import { decrypt } from './crud';

export default function PassKey({ setCrede }) {
    const [savedCreden, setSavedCreden] = useState(localStorage.getItem('credentials'));
    const [passkey, setPasskey] = useState('');

    function clearRecords() {
        setSavedCreden(false);
        localStorage.removeItem('credentials');
    }

    function decryptCrede() {
        const value = decrypt(savedCreden, passkey);
        setCrede(JSON.parse(value));
    }

    return (
        <div>
            {savedCreden ?
                <div>
                    <p>some details has been saved in encrypted formate please provide passcode to continue</p>
                    <input type="text" value={passkey} onChange={(e) => setPasskey(e.target.value)} />
                    <button onClick={decryptCrede}>proceed</button>
                    <hr />
                    <button onClick={clearRecords}>clear previous</button>
                </div> :
                <Credentials {...{ setCrede }} />
            }
        </div>
    )
}
