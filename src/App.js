import React from "react";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <PageTitle>To Do List</PageTitle>
      <div className={styles.app__wrapper}></div>
      <AppHeader />
    </div>
    </Provider>
  );
}

export default App;
