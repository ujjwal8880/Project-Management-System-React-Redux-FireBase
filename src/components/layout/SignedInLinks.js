import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {signOut} from "../../store/actions/authActions";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
        </ul>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        signOut : () => dispatch(signOut())
    }
};

const mapStateToProps = state => {
    return{
        initial: state.firestore.ordered.users,
    }
};

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect([
    {
        collection : 'users'
    }])
)(SignedInLinks)
