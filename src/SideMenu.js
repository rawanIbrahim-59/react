import TagHoverButton from "./TagHoveButton";
function SideMenu() {
  return (
    <div style={{padding:"20px", border: "3px solid teal", margin:"20px", flexWrap:"wrap", display: "flex", justifyContent: "center", alignItems: "center", width:"400px"}}>
        <TagHoverButton >
          <p style={{color:"red", width:"50px"}}>Hi</p>
        </TagHoverButton>
        <TagHoverButton >
          <p style={{color:"black", width:"50px"}}>Hi</p>
        </TagHoverButton>
        <TagHoverButton >
          <p style={{color:"blue", width:"50px"}}>Hi</p>
        </TagHoverButton>
        <TagHoverButton >
          <p style={{color:"green", width:"50px"}}>Hi</p>
        </TagHoverButton>
        <TagHoverButton >
          <p style={{color:"green", width:"50px"}}>Hi</p>
        </TagHoverButton>


    </div>
  );
}

export default SideMenu;
