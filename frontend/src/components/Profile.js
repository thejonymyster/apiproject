import React, { useState, useEffect, useContext } from 'react';
import actions from '../api'
import TheContext from '../TheContext';

function Profile(props) {
    const [myPosts, setMyPosts] = useState([])


    useEffect(() => {
        console.log(props)
        // if (!props.user.email) {
        //     props.history.push('/')
        // }
        actions.getMyPosts().then(res => setMyPosts(res.data))
    }, [])

    const showPosts = () => {
        return myPosts.map(post => {
            return (
                <li key={post._id}>{post.post}</li>
            )
        })
    }

    return (
        <div>
            <Welcome />
            {showPosts()}
        </div>
    );
}



function Welcome(props) {

    const { user, history, setUser } = useContext(TheContext)

    const logOut = () => {
        setUser({})
        localStorage.clear()
    }
    return (
        <>
            <h3> Welcome {user?.email} with no props  </h3>
            <button onClick={() => history.goBack()}>GO back</button>
            <button onClick={logOut}>Log Out</button>
        </>
    )
}


export default Profile;