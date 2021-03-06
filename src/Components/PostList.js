import React from 'react';
import { connect } from 'react-redux';

import {fetchPosts} from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderList (){
       return this.props.posts.map((item) => {

            return (
                <div className='item' key={item.id}>
                    <i className='large middle icon user'/>
                    <div className='content'>
                        <div className='description'>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                        <UserHeader id={item.userId}/>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='ui relaxed divided list'>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {posts: state.posts}
};

export default connect(mapStateToProps,{fetchPosts})(PostList);