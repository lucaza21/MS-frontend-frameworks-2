import React, { useState } from 'react'
//import { posts } from '../../../data'
import { getPosts } from '../../posts-services';
import Post from '../Post'
export default function PostList({ author }) {

  const [posts, setPosts] = useState(null)

  getPosts().then((p) => setPosts(p))
  //console.log(posts)
  return (
    <>
      {posts ? (
        <>
        <div className='container grid w-4/5 gap-4 p-4 mx-auto mb-4 text-center bg-gray-200 min-w-min xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {posts
                .filter((post) => post.author?.toLowerCase().includes(author.toLowerCase()) ||
                         post.description?.toLowerCase().includes(author.toLowerCase()))
                .map((post) => (
                    <Post post={post} key={post.id} />
                ))}
        </div>
        </>
      ) : (
        <div className='text-center'>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
