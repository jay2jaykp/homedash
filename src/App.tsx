import React from "react";
import "./App.scss";
import { AppHeader } from "./components/appHeader/AppHeader";
import { Route, Switch } from "react-router-dom";
import { Budget } from "./pages/budget/Budget";
import { Expense } from "./pages/expanse/Expense";

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Switch>
        <Route path="/expense">
          <Expense />
        </Route>
        <Route path="/budget">
          <Budget />
        </Route>
      </Switch>
    </>
  );
};

export default App;
