import React, {Component, Fragment} from 'react';
import './Post.css';

class PostBody extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {

        const {id, handlerFunc} = this.props;

        clearTimeout(this.timer);

        if (id !== prevProps.id) {
            this.timer = setTimeout(() => {
                handlerFunc(id);
            }, 2000)
        }
    }

    render() {
        const {post} = this.props;

        return (
            <div className='post_body'>
                {post &&
                    <Fragment>
                        <span>Title: </span> <h3 className='d-inline'>{post.title}</h3>
                        <h5>ID: {post.id}</h5>
                        <h6>User ID: {post.userId}</h6>
                        <br />
                        <span>Text: </span> <p>{post.body}</p>
                    </Fragment>
                }
            </div>
        )
    }

}

export default PostBody;