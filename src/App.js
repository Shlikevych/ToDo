import React, { useState } from 'react'
import MyModal from './components/MyModal/MyModal'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './components/hooks/usePosts'
import './styles/App.css'
// import PostItem from './components/PostItem'
// import Counter from './components/Counter'
// import ClassCounter from './components/ClassCounter'

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() =>setModal(true)}>
                Add new user
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
           <hr style={{margin: '15px 0'}}/>
           <PostFilter
                filter={filter}
                setFilter={setFilter}
           />
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post list"/>
        </div>
    )
    }
    
    export default App;
