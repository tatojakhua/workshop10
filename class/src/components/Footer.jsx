import React from 'react'

const Footer = React.memo(({ counterHandler, user}) => {

    console.log("Footer");
    
  return (
    <div>
        <h1>Footer</h1>
        <h1>{user.name} {user.surname}</h1>
        <button onClick={counterHandler}>Increment</button>
    </div>
  )
})

export default Footer