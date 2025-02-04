import './TestJsx.css';
function TagHoverButton({title ,children}) {
  if(title=="" || title==null){
    return null;
  }
  return (
    <div>
        <button className={"hoverButton"}>{title}{children}</button>
    </div>
  );
}

export default TagHoverButton;
