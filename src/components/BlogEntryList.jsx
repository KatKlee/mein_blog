import { useEffect, useState } from "react"
import BlogEntry from "./BlogEntry"

const BlogEntryList = () => {
    const [blogposts, setBlogposts] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/blogposts')
            .then(res => res.json())
            .then(data => setBlogposts(data))
    }, [])

    return (
        <section>
            {blogposts.map((post, key) =>
                <BlogEntry
                    key={key}
                    post={post}
                />

            )}
        </section>
    )
}

export default BlogEntryList