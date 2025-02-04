import TagHoverButton from "./TagHoveButton";

function SideMenu() {
  const categories = [
    {id:1, title:"click Here",c:(<p style={{color:"black", width:"50px"}}>Hi</p>)},
    {id:1, title:"اقرا أكثر",c:(<p style={{color:"black", width:"50px"}}>Hello</p>)},
    {id:1, title:"learning",c:(<p style={{color:"black", width:"50px"}}>Si</p>)},

  ];
  const CatList =categories.map((cat)=>{
    return <TagHoverButton key={cat.id} title={cat.title}>{cat.c}</TagHoverButton>
  })
  return (
    <div style={{padding:"20px", border: "3px solid teal", margin:"20px", flexWrap:"wrap", display: "flex", justifyContent: "center", alignItems: "center", width:"400px"}}>
      {CatList}
    </div>
  );
}

export default SideMenu;
