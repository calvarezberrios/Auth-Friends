import React from 'react';
import { useStyles, Button } from '../MaterialUI';

const Home = props => {
    const classes = useStyles();

    return (
        <div className = "home_container">
            <Button variant = "contained" onClick = {() => props.history.push("/login")}>See Friends List</Button>
        </div>
    );
};

export default Home;