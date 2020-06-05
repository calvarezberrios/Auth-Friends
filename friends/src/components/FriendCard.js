import React, { useState, useEffect } from 'react';
import * as MaterialUI from "../MaterialUI";
import useForm from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { editFriend, deleteFriend } from "../actions/friends";

const FriendCard = ({ friend }) => {
    const classes = MaterialUI.useStyles();
    const [isEditing, setIsEditing] = useState(false);
    const [edit, handleChanges] = useForm({id: friend.id, name: friend.name, age: friend.age, email: friend.email});
    const dispatch = useDispatch();

    const toggleEditing = e => {       
        if(isEditing) dispatch(editFriend(edit));     

        if(edit.name === "" && edit.age === "" && edit.email === "") dispatch(deleteFriend(friend.id));
        
        setIsEditing(!isEditing);   
    }

    useEffect(() => {
        if(friend.name === "") setIsEditing(true);
    }, [friend.name])

    return (
            <MaterialUI.Card className={classes.Card_root} variant="outlined">
                <MaterialUI.CardContent>
                    {
                        !isEditing && 
                        <>
                            <MaterialUI.Typography variant="h5" component="h2">
                                {friend.name}
                            </MaterialUI.Typography>
                            <MaterialUI.Typography className={classes.Card_pos} color="textSecondary">
                                Age: {friend.age}
                            </MaterialUI.Typography>
                            <MaterialUI.Typography variant="body2" component="p">
                                Email: {friend.email}
                            </MaterialUI.Typography>
                        </>
                    }

                    {
                        isEditing &&
                        <>
                                <MaterialUI.TextField 
                                    id = "name" 
                                    type = "text" 
                                    label = "Name" 
                                    variant = "outlined" 
                                    name = "name"
                                    value = {edit.name}
                                    onChange = {handleChanges}
                                /><br /><br />
                                <MaterialUI.TextField 
                                    id = "age" 
                                    type = "number" 
                                    label = "Age" 
                                    variant = "outlined" 
                                    name = "age"
                                    value = {edit.age}
                                    onChange = {handleChanges}
                                /><br /><br />
                                <MaterialUI.TextField 
                                    id = "email" 
                                    type = "email" 
                                    label = "Email" 
                                    variant = "outlined" 
                                    name = "email"
                                    value = {edit.email}
                                    onChange = {handleChanges}
                                /><br /><br />
                        </>
                    }

                </MaterialUI.CardContent>
                <MaterialUI.CardActions>
                    <MaterialUI.Button size="small" onClick = {toggleEditing}>{!isEditing ? "Edit" : "Save"}</MaterialUI.Button>
                    <MaterialUI.Button size="small" onClick = {() => dispatch(deleteFriend(friend.id))}>Delete</MaterialUI.Button>
                </MaterialUI.CardActions>
            </MaterialUI.Card>
    );
};

export default FriendCard;