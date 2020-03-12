import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/Nav_bar/Nav_bar";
import PostBody from "./components/Post/Post";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts: [],
            activePostID: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => this.setState({posts: value}))
    }


    changeActivePostID = (id) => {
        this.setState({activePostID: id});
    };

    activePost = (id) => {
        const {posts} = this.state;
        const post = posts.find(i => i.id === id);
        return post
    };

    setPostAsRead = (id) => {
        let {posts} = this.state;
        let post = this.activePost(id);
        if (post && !post.isRead) {
            post.isRead = true;
            this.setState({posts})
        }
    };

    render() {
        const {posts, activePostID} = this.state;
        return (
            <div className="App">
                <NavBar list={posts} change={this.changeActivePostID} readTrue={this.setPostAsRead}/>
                <PostBody post={this.activePost(activePostID)} id={activePostID} handlerFunc={this.setPostAsRead}/>
            </div>
        );
    }

}

export default App;
