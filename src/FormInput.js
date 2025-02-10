import { useState } from "react";
import './Form.css';
export default function FromInput() {
    const [FromInputs, setFormInputs] = useState({
        name: "",
        email: "",
        comment:"",
        isStudent: false,
        status: ""

    });
    return (
        <form className={"form"} onSubmit={(event) => {
            event.preventDefault();
        }}>
            <div>
                <label>Name:</label>
                <input value={FromInputs.name} onChange={(event) => {
                    setFormInputs({ ...FromInputs, name: event.target.value })
                }} />
            </div>
            <hr />
            <div>
                <label>Email:</label>
                <input value={FromInputs.email} onChange={(event) => {
                    setFormInputs({ ...FromInputs, email: event.target.value })
                }} />
            </div>
            <hr />
            <div>
                <label>comment</label>
                <textarea value={FromInputs.comment} onChnage={(event)=>{
                    setFormInputs({...FromInputs, comment: event.target.value})
                }
                } />
            </div>
            <hr />
            <div>
                <label>Are You Student?</label>
                <input type="checkbox" checked={FromInputs.isStudent} onChange={(event)=>{
                    setFormInputs({...FromInputs, isStudent: event.target.checked})
                }}/>
            </div>
            <div>
                <div>
                    <label>Teacher</label>
                    <input type="radio" value="Teacher" checked={FromInputs.status=="Teacher"} />
                </div>
                <div>
                    <label>Doctor</label>
                    <input type="radio" value="Student" checked={FromInputs.status=="Student"} onChnage={
                        (event)=>{
                            setFormInputs({...FromInputs, status: event.target.value})
                        }
                    }/>
                </div>
            </div> 
            <hr />
            <button>Submit</button>
        </form>

    );
}