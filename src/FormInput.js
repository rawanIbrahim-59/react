import {useState} from "react";
export default function FromInput(){
    const [FormsInputs, setFormsInputs] =useState({name:"", email: ""});
    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
        }}>
            <input value={FormsInputs.name} onChange={(event)=>{
                setFormsInputs({name: event.target.value});
            }}/>
            <hr/>
            <input value={FormsInputs.email} onChange={(event)=>{
                setFormsInputs({email: event.target.value});
            }}/>
            <hr></hr>
            <button>Submit</button>
        </form>
    );
}