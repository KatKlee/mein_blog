import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewBlogEntry = () => {
    const [blogTitel, setBlogTitle] = useState('')
    const [blogImg, setBlogImg] = useState(null)
    const [blogText, setBlogText] = useState('')
    const nav = useNavigate()

    // onClick Function
    const publishData = () => {
        console.log('Titel:', blogTitel, ', Text:', blogText)
        const form = new FormData()
        form.append('blogtitle', blogTitel)
        form.append('blogimage', blogImg)
        form.append('blogcontent', blogText)

        fetch('http://localhost:9898/blogposts', {
            method: 'POST',
            body: form
        })
            .then(res => res.status === 200 ? nav('/') : null)
    }

    return (
        <div className="divNewEntry">
            <input type="text" name="blogtitle" id="" placeholder="Beitragstitel" onChange={(e) => setBlogTitle(e.target.value)} />
            <input type="file" name="blogimage" id="blogimage" placeholder="Beitragsbild" onChange={(e) => setBlogImg(e.target.files[0])} />
            <input type="text" name="blogcontent" id="" placeholder="Schreibe hier deinen Beitragstext" onChange={(e) => setBlogText(e.target.value)} />
            <button onClick={publishData}>Publish</button>
        </div>
    )
}

export default NewBlogEntry