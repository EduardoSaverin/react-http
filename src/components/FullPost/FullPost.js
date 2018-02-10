import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';
    
class FullPost extends Component {
    state= {
        post:null
    }
    
    componentDidMount(){
        console.log(this.props);
        axios.get('/posts/'+this.props.match.params.id).then(
            (response) => {
                this.setState({
                    post: response.data
                })
            }
        ).catch(error => {
            console.log('Error in getting posts.');
        });
    }
    deletePostHandler = (id) => {
        axios.delete('/posts/'+id).then(
            (response) => {
                console.log(response);
            }
        ).catch(error => {
            console.log('Error in deleting post.');
        });
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Loading...</p>;
        if(this.state.post){
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={() => this.deletePostHandler(this.props.match.params.id)}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;