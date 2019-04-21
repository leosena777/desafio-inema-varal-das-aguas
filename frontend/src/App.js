import React, { Component } from "react";
import { Header, Footer, MainContent } from "./components/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
