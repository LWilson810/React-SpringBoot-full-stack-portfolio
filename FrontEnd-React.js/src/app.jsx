import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import axios, { AxiosHeaders } from 'axios';
import Main from "./components/home";
import Chat from "./components/ChatGPT/chat";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function WebContent() {
  // useEffect(() => {
  //   const query = `
  //     query {
  //       authors {
  //         _id
  //         name
  //         email
  //       }
  //     }
  //   `
  //   axios.post("http://localhost:5000", {query: query}, {headers:{'Content-Type':'application/json'}})
  //   .then(response => console.log(response.data.data));
  // })
  return (
    <>
      {/* <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer /> */}
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path='/' element={<Navigate to="/Aleksandar" />}/> */}
            {/* <Route path="/home" element= { <Home/>} /> */}
            <Route path="/register" element={<Register />} />

            <Route path="/LWilson" element={<Main />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default WebContent;
