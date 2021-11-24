import { Component } from "react";
import Button from "./Button";

const styles = {
    carro: {
        backgroundColor: "#7bbe64",
        color: "#fff",
        cursor: 'pointer',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
    }
}

class Carro extends Component {
  render() {
    return (
      <div>
        <Button style={styles.carro}>Carro</Button>
      </div>
    );
  }
}

export default Carro;
