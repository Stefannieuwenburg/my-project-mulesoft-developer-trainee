import * as React from "react";
import "../App.css";

import MyButton from "./StyleButton";


const Home = () => {
    return (
        <>
            <div className="App">
                <p>follow me on my journey to mulesoft</p>
                <MyButton variant="contained">Hello Mulesoft</MyButton>
            </div>
        </>
    );
};

export default Home;
