import React from 'react'
// import {useDispatch, useSelector} from "react-redux"
// import { decrement, increment } from '../features/counter/counterSlice';
// import { signIn, singOut } from '../features/auth/authSlice';

const Home = () => {

    // const {counter, auth, users}= useSelector((state)=> ({counter:state.counter,auth: state.auth, users:state.users }));
    // const dispatch = useDispatch();
    // console.log(users);

  return (
    <div>
        <h1>Home</h1>
        {/* <h1>Counter: {auth.counter}</h1>
        <button onClick={() => dispatch(increment(10))}>Increment</button>
        <button onClick={() => dispatch(decrement(5))}>Decrement</button>


        {auth.userIsLoggedIn ? <h1>User Is Logged In</h1> : <h1>User Is not Logged In</h1>}
        <button onClick={()=> dispatch(signIn())}>Sign In</button>
        <button onClick={()=> dispatch(singOut())}>Sign Out</button> */}

    </div>
  )
}

export default Home