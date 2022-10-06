import BlogEntryList from '../../components/BlogEntryList'

const Home = () => {
    return (
        <main>
            <header className="headerHome">
                <img className="headerImgHome" src="https://images.unsplash.com/photo-1617191979724-f755c6d83e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
                <h1 className="headerHeadlineHome">Hier steht ein Begrüßungstext</h1>
            </header>
            <BlogEntryList />
        </main>
    )
}

export default Home