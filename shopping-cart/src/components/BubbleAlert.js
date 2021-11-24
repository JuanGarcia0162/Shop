import { Component } from "react";

const styles = {
  bubbleAlert: {
    backgroundColor: "#E9725A",
    borderRadius: "15px",
    color: "#fff",
    padding: "2px 10px",
    fontsize: "0.9rem",
    width: "20px",
  },
};
class BubbeAlert extends Component {
  render() {
    return <span style={styles.bubbleAlert}>5</span>;
  }
}

export default BubbeAlert;
