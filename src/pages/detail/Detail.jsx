const Detail = ({ post }) => {

    // mit props übergebene Werte?

    return (
        <main>
            <header className="headerDetail">
                <img className="headerImgDetail" src={`http://localhost:9898/${post.blogimage}`} alt="{post.blogtitle}" />
                <h1 className="headerTextDetail">{post.blogtitle}</h1>
            </header>
            <p>{post.blogcontent}</p>
        </main>
    )
}

export default Detail