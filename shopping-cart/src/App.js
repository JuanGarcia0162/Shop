import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    productos: [
      { name: "Netflix", price: 10000, img: "/productos/1.png" },
      { name: "Disney", price: 6000, img: "/productos/2.png" },
      { name: "Spotify", price: 6000, img: "/productos/3.png" },
      /* {name: 'HBO', price: 6000, img: '/productos/4.png'},
      {name: 'Youtube', price: 6000, img: '/productos/5.png'},
      {name: 'Amazon', price: 6000, img: '/productos/6.png'},
      {name: 'Deezer', price: 10000, img: '/productos/7.png'},
      {name: 'Crunchyroll', price: 6000, img: '/productos/8.png'}, */
    ],
  };
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log("Agregar al carro")}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
