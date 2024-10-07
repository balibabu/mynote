import React, { useState } from "react";
import Note from "./Note";
import PassKey from "./PassKey";


export default function App() {
  const [crede, setCrede] = useState();
  
  return <div>{crede ? <Note {...{crede}}/> : <PassKey {...{ setCrede }} />}</div>;
}