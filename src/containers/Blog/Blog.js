import React, { Component } from 'react';
//import axios from 'axios';
import './Blog.css';
import Posts from '../../components/Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import {Route,NavLink,Switch, Redirect} from 'react-router-dom';
import FullPost from '../../components/FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav className="links">
                        <ul>
                            <li><NavLink to="/posts" exact>Home</NavLink></li>
                            <li><NavLink to="/newPost" exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* {Swicth matches the first route and then stops analyzing} */}
                <Switch>
                    <Route path="/newPost" exact component={NewPost}/>
                    <Route path="/fullPost/:id" exact component={FullPost}/>
                    <Route path="/posts" exact component={Posts} />
                    <Route render={() => <h1 style={{'textAlign':'center'}}>Not Found</h1>}/>
                    {/* <Redirect from="/" to="/posts"/> */}
                </Switch>
                 {
                    /**
                     * 
                        <section>
                            <NewPost />
                        </section>
                     */
                 }
            </div>
        );
    }
}

export default Blog;