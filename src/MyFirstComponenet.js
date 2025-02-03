import './MyFirstComponent.css';

export default function MyFirstComponent(){
    const button ={
        color:"red",
        fontSize:"15px",
    }
    return(
        <div>
            <h1 className={"changeColor"}>Hello my first rect app</h1>
            <p style={{fontSize:"20px", backgroundColor:"white", color:"black"}}>Generate Lorem Ipsum placeholder text in any number of characters, words, sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to to</p>
            <button style={button}>Click here</button>
        </div>
    );
}