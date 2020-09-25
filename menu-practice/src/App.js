import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Grid from "@material-ui/core/Grid";
function App() {
  return (
    <div className="container">
      <Grid
        container
        direction="column"
        justify="flex-end"
        alignItems="stretch"
      >
        <Header />
        <MainContent />
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
