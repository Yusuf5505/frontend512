import Post from "./Post";

function Posts(props) {
    return (
        <div>
            {props.posts.map(post => (
                <Post
                    key={post.id}
                    name={post.name}
                    title={post.title}
                    removePost={props.removePost}   
                    id={post.id}
                />
            ))}
        </div>
    );
}

export default Posts;