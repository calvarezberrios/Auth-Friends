import React from 'react';
import * as MaterialUI from "../MaterialUI";

const FriendCard = ({ friend }) => {
    const classes = MaterialUI.useStyles();
    return (
            <MaterialUI.Card className={classes.Card_root} variant="outlined">
                <MaterialUI.CardContent>
                    <MaterialUI.Typography variant="h5" component="h2">
                        {friend.name}
                    </MaterialUI.Typography>
                    <MaterialUI.Typography className={classes.Card_pos} color="textSecondary">
                        Age: {friend.age}
                    </MaterialUI.Typography>
                    <MaterialUI.Typography variant="body2" component="p">
                        Email: {friend.email}
                    </MaterialUI.Typography>
                </MaterialUI.CardContent>
                <MaterialUI.CardActions>
                    <MaterialUI.Button size="small">Edit</MaterialUI.Button>
                </MaterialUI.CardActions>
            </MaterialUI.Card>
    );
};

export default FriendCard;