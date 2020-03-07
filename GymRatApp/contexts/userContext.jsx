import React from 'react'

let UserContext = React.createContext({
    user: {
        name: "",
        bio: "",
        points: "",
    },
    newUser: () => {
        console.log("Context not initialized")
    }
})

export default UserContext