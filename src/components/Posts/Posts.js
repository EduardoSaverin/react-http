import React from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';
import { Link } from  'react-router-dom';

class Posts extends React.Component{
    state = {
        posts: [],
        selectedPost: null
    }
    // Do data fetch in this method only.
    componentDidMount(){
        axios.get('/posts').then(
            (response) => {
                this.setState({
                    posts: response.data
                });
            }
        );
    }
    postSelection = (id) => {
        this.setState({
            selectedPost: id
        });
        console.log(this.state.selectedPost,id);
        
        // Other way of going to post + also remove Post <Link>
        // this.props.history.push('/'+id);
    }
    
    render(){
        console.log('Rendering Posts');
        //let id=this.state.selectedPost;
        const posts = this.state.posts.slice(0,4).map((post) => {
            return (
                <Link to={'/fullPost/'+post.id} key={post.id}>
                    <Post title={post.title} key={post.id} click={() => this.postSelection(post.id)} />
                </Link>
            );
        });
        return(
            <div className="Posts">
                {posts}
            </div>
        );
    }
}
export default Posts;