import './TestJsx.css';
export default function Post({title="no title", body="no body"}){
    return(
        <div style={{padding:"20px", border: "3px solid teal", margin:"20px"}}>
            <h3>{title}</h3>
            <hr />
            <p>{body}</p>
        </div>
    );
}