import { useState } from "react";

// import "./App.css";
import Icon from "./components/Icons";

//toastify items
import { ToastContainer, toast, Icons } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//BootStrap from ReactStrap
import { Card, CardBody, Container, Button, Col, Row, Toast } from "reactstrap";
import { icons } from "react-icons";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);

  const [winMessage, setWinMessage] = useState("");

  const CheckTie = () => {
    console.log(itemArray.includes("empty"));
  };
  const reloadGame = () => {
    //
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const CheckIsWinner = () => {
    //

    // col
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} Wins`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} Wins`);
    } else if (
      //diagnal
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} Wins`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty" &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`Tie`);
      return toast("It was tie", { type: "info" });
    }
  };
  const changeItem = (itemnumber) => {
    //
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemnumber] === "empty") {
      itemArray[itemnumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "error" });
    }

    CheckIsWinner();
  };
  return (
    <div className="Holder">
      <Container>
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2 d-grid gap-2 col-6 mx-auto">
                <h1 className="text-success text-uppercase text-center">
                  {winMessage}
                </h1>
                <button
                  type="button"
                  block="true"
                  className="btn btn-success"
                  onClick={reloadGame}
                >
                  ReloadGame
                </button>
              </div>
            ) : (
              <h1 className="text-center text-warning">
                {isCross ? "Cross" : "Circle"} turns
              </h1>
            )}
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card
                  color="warning"
                  key={index}
                  onClick={() => changeItem(index)}
                >
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
