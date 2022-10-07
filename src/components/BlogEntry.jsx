const BlogEntry = ({ post }) => {

    // state & fetch aus Blogentrylist?

    return (
        <div>
            <img src={`http://localhost:9898/${post.blogimage}`} alt={post.blogtitle} />
            <p>{post.blogtitle}</p>
        </div>
    )
}

export default BlogEntry