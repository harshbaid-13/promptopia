"use client"
import { useEffect, useState } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((prompt) => (
                <PromptCard key={prompt.id} post={prompt} handleTagClick={handleTagClick} />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([])
    const handleSearchChange = () => { }
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    }, [])

    return (
        <section className='feed'>
            <form className="realtive w-full flex-center">
                <input
                    type="text"
                    className="search_input peer"
                    placeholder='Search for a tag or a username'
                    onChange={handleSearchChange}
                    required
                    value={searchText}
                />
            </form>
            <PromptCardList data={posts} handleTagClick={() => { }} />
        </section>
    )
}

export default Feed