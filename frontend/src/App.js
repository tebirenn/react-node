import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import Header from "./components/header";
import { check } from "./http/userAPI";
import './styles/all.css';

const App = observer(() => {
    const {users} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then(data => {
          users.setIsAuth(true);
        }).finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <h1>LOADING...</h1>
    }

    return (
      <BrowserRouter>
          <Header />
          <AppRouter />
      </BrowserRouter>
    );
});

export default App;
