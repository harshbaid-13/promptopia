import Link from 'next/link'
import React from 'react'

const Form = ({
    type,
    post,
    setPost,
    submitting,
    handleSubmit
}) => {
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} post</span>
            </h1>
            <p className='desc text-left max-w-md'>{type} and share amazing prompts with the work and let your imagination run wild with any AI-powered platform.</p>
            <form className='w-full mt-10 max-w-2xl flex flex-col gap-7 glassmorphism' onSubmit={handleSubmit}>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Your AI Prompt
                    </span>
                    <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} className='form_textarea' placeholder='Write your prompt here...' required />
                </label>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Tag
                        <span className='font-normal'> (#product, #web3, #idea)</span>
                    </span>
                    <input value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value })} className='form_input' placeholder='#tag' required />
                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className='text-gray-500 text-sm'>Cancel</Link>
                    <button type="submit" className='px-5 text-sm py-1.5 rounded-full text-white bg-primary-orange' disabled={submitting}>{submitting ? `${type == 'Create' ? 'Creat' : 'Edit'}ing...` : type}</button>
                </div>
            </form>
        </section>
    )
}

export default Form