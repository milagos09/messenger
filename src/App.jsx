import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Messenger2 from "./Messenger2";

function App() {
    const [pageId, setpageId] = useState("108965818922829");
    useEffect(() => {
        const generateRandomNumber = () => {
            const number = Math.floor(Math.random() * 2);
            setpageId(["108965818922829", "104588581239094"][number]);
        };

        // Call the generateRandomNumber function when the component mounts
        generateRandomNumber();
    }, []);
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <Messenger2 pageId={pageId} />
        </>
    );
}

export default App;
