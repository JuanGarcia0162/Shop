import { Component } from "react";
import BubbleAlert from "./BubbleAlert";


const styles = {
    carro: {
        backgroundColor: "#7bbe64",
        color: "#fff",
        cursor: 'pointer',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
    },
    bubble: {
      position: 'relative',
      left: 12,
      top: 20,
      
    }
}

class Carro extends Component {
  render() {
    const {carro} = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad}/>
          : null}
        </span>
        <button style={styles.carro}>Carro</button>
      </div>
    );
  }
}

export default Carro;
