import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { Button, Container, Form } from "react-bootstrap";

// WITHOUT REDUX ===========================================================================
function Counter() {
  const [count, setCount] = useState([]);
  // const [Form, setForm] = useState({
  //   username: "",
  //   password: "",
  // });

  // const [data, setData] = useState([]);
  //index 0 pada array di atas digunakan untuk pengambilan data atau peletakan data
  //index 1 pada array di atas untuk memanipulasi data pada index 0

  const increaseCounter = () => {
    setCount(count + 1);
    // setForm({ ...Form, username: "Bagus" });
  };

  return (
    <>
      <Container className="text-center">
        <Navbar />
        <h1>Counter</h1>
        <hr />
        <h3>{count}</h3>
        <h4>{Form.username}</h4>
        <h4>{Form.password}</h4>
        <Button variant="primary">-</Button>
        <Button variant="secondary" className="mx-2">
          RESET
        </Button>
        <Button variant="primary" onClick={increaseCounter}>
          +
        </Button>
      </Container>
    </>
  );
}

export default Counter;

// WITH REDUX ===========================================================================
// function Counter() {
//   return (
//     <>
//       <Container className="text-center">
//         <Navbar />
//         <h1>Counter</h1>
//         <hr />
//         <h3>0</h3>
//         <Button variant="primary">-</Button>
//         <Button variant="secondary" className="mx-2">
//           RESET
//         </Button>
//         <Button variant="primary">+</Button>
//       </Container>
//     </>
//   );
// }

// export default Counter;
