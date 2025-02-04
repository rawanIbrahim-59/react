import './TestJsx.css';
function TagHoverButton({children}) {
  return (
    <div>
        <button className={"hoverButton"}>{children}</button>
    </div>
  );
}

export default TagHoverButton;
