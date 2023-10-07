import React from "react";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";


function App() {
  return (
    <div className="container">
      <PageTitle>To Do List</PageTitle>
      <div className={styles.app__wrapper}></div>
      <AppHeader />
    </div>
  );
}

export default App;
