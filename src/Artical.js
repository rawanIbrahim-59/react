export default function Artical({name, email, content="No Content Yet", children}) {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <hr />
            <p>{children}</p>
        </div>
    );
}