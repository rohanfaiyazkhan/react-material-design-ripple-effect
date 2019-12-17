import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Ripple from "./Ripple";
import styled from "styled-components";

const Button = styled.button`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: tomato;
  padding: 5px 30px;
  color: #fff;
  font-size: 20px;
  border-radius: 20px;
  border: 1px solid #fff;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

function App() {
  return (
    <div className="App">
      <Button>
        Let it rip!
        <Ripple />
      </Button>
      <Button>
        Its now yellow!
        <Ripple color="yellow" />
      </Button>
      <Button>
        Its now slowwwww
        <Ripple duration={3000} />
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
