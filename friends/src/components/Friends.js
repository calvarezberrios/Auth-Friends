import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import FriendsLogo from "../assets/images/friends_logo.png";
import { getFriends, addFriend } from '../actions/friends';
import FriendCard from './FriendCard';
import * as MaterialUI from "../MaterialUI";

const Friends = props => {
    const {friends, error, isFetching} = useSelector(state => state.friendsReducer);
    const dispatch = useDispatch();
    const classes = MaterialUI.useStyles();

    useEffect(() => {
        dispatch(getFriends());
    }, [dispatch]);

    
    return (
        <div className = {classes.Friends_root}>
            <img src = {FriendsLogo} alt = "Friends" />
            <MaterialUI.Button onClick = {() => dispatch(addFriend())} variant = "contained">Add New Friend</MaterialUI.Button>

            {isFetching && <h3>Loading Friends...</h3>}
            
            <br /><br />
            <div className = {classes.Grid_root}>
                <MaterialUI.Grid className = {classes.Grid_container} container spacing = {3}>
                    {!error && !isFetching ? (
                        friends.map(friend => (
                            <FriendCard key = {friend.id} friend = {friend} />
                        ))
                    ) : (error && !isFetching) &&
                        <h3>{error}</h3>
                    }    
                </MaterialUI.Grid>
            </div>  
        </div>
    );
};

export default Friends;