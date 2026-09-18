function Post(props) {
    const { id, name, title, removePost } = props;   // ✅ достаём всё нужное

    return (
        <div>
            <fieldset>
                <legend style={{ fontWeight: "bold" }}>{name}</legend>
                <p>{title}</p>
                <button onClick={() => removePost(id)}>delete</button>
            </fieldset>
        </div>
    );
}

export default Post;