import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import routes from "./constants/routes";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import { useMemo } from "react";
// import { initialUsersFetch } from "./features/users/usersSlice";

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(initialUsersFetch());
    // }, [dispatch]);

    //-----------//

    const [counter, setCounter] = useState(0);

    console.log("App");

    const counterHandler = useCallback(() => {
        setCounter((prev) => prev + 1);
    }, []);

    const users = useMemo(
        () => ({
            name: "John",
            surname: "Doe",
        }),
        []
    );

    return (
        <div className="App">
            <h1>App</h1>
            <nav>
                <button onClick={() => navigate(routes.HOME)}>Home</button>
                <button onClick={() => navigate(routes.USERS)}>Users</button>
            </nav>
            <Routes>
                <Route
                    path={routes.HOME}
                    Component={Home}
                />
                <Route
                    path={routes.USERS}
                    Component={Users}
                />
            </Routes>
            <h1>Counter: {counter}</h1>

            <Footer
                user={users}
                counterHandler={counterHandler}
            />
        </div>
    );
}

export default App;
