import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {

    componentDidMount(){
        this.props.fetchUser(this.props.id);
    }


    render() {
       const {user} = this.props;
        if(!user){
            return null;
        }
        return (
            <div className='header'>
                {user.username}
            </div>
        );
    }
}

const mapStateToProps = (state,props) => {
    return { user: state.user.find(user=>user.id === props.id)}
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);