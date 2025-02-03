import TagHoverButton from "./TagHoveButton";
function SideMenu() {
  return (
    <div style={{padding:"20px", border: "3px solid teal", margin:"20px", flexWrap:"wrap", display: "flex", justifyContent: "center", alignItems: "center", width:"400px"}}>
        <TagHoverButton />
        <TagHoverButton />
        <TagHoverButton />
        <TagHoverButton />
        <TagHoverButton />
        <TagHoverButton />
        <TagHoverButton />
        <TagHoverButton />

    </div>
  );
}

export default SideMenu;
