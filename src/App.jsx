import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import PostList from './components/PostList'
import Profile from './components/Profile'

function App() {
  
  const [author, setAuthor] = useState('')

  const [profile, setProfile] = useState(false)
  const [post, setPost] = useState(true)

  const filterAuthor = (author) => {
    setAuthor(author);
  }

  const showpProfile = () => {
    setProfile(true)
    setPost(false)
  }

  const showpPosts = () => {
    setPost(true)
    setProfile(false)
  }


  return (
    <>
    
    <div className='min-w-min'>
    <div className='container flex items-center justify-center w-4/5 py-3 mx-auto'>
      <h1 className='text-xl font-bold text-center'>El objetivo del ejercicio es la construcción de una aplicación web React.js con diferentes components que
      tenga como resultado la siguiente interfaz de usuario (Mobile first):</h1>
    </div>

    <Navbar profile={profile} showpProfile={showpProfile} post={post} showpPosts={showpPosts}/>
    
    {profile && <Profile /> }
    
    {post && 
      <>
      <SearchBar author={author} filterAuthor={filterAuthor}/>
      <PostList author={author}/>
      </>
    }
    
    </div>
    </>
  )
}

export default App
