import Layout from "./components/Layout/Layout";
import "./App.css";
import { useState } from "react";
import Table from "./components/Table";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      {!login && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl my-2 font-mono font-bold text-center tracking-widest">
            Click to LogIn
          </h1>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => setLogin(!login)}
          >
            LogIn
          </button>
        </div>
      )}
      {login && (
        <Layout>
          <div className="flex items-center justify-center">
            <button
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded"
              onClick={() => setLogin(!login)}
            >
              Logout
            </button>
          </div>
          <Table />
        </Layout>
      )}
    </div>
  );
}

export default App;
