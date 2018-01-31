import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
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
        console.log(this.state.selectedPost);
    }

    render () {
        const posts = this.state.posts.slice(0,4).map((post) => {
            return <Post key={post.id} title={post.title}
            click={() => this.postSelection(post.id)}
            />
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;