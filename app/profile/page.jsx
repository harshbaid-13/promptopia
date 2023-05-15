"use client"
import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([])
    const router = useRouter();
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user?.id}/posts`);
            const data = await response.json();
            setPosts(data);
        }
        if (session?.user?.id) fetchPosts();
    }, [])
    const handleEdit = (prompt) => {
        router.push(`/update-prompt?promptId=${prompt._id}`)
    }
    const handleDelete = async (prompt) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?"); if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${prompt._id}`, {
                    method: "DELETE"
                });
                setPosts(posts.filter(post => post._id !== prompt._id))
            } catch (error) { console.log(error); }
        }
    }

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page!"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}
export default MyProfile