import './TestJsx.css';
function TagHoverButton({ title, children }) {
  return (
    <div>
      {title=="" || title==null ? (<div></div>) : (<button className={"hoverButton"}>{title}{children}</button>)}
    </div>
  );
}

export default TagHoverButton;
