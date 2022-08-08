import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SingleCard } from "./layouts";
import {
  LoginForm,
  ResetPasswordForm,
  ChangePasswordForm,
  CreateAccountForm,
} from "./components";

export default function UnauthenticatedContent() {
  return (
    <Switch>
      <Route exact path="/login">
        <SingleCard>
          <LoginForm />
        </SingleCard>
      </Route>
      <Route exact path="/create-account">
        <SingleCard title="Cadastrar">
          <CreateAccountForm />
        </SingleCard>
      </Route>
      <Route exact path="/reset-password">
        <SingleCard
          title="Resetar senha"
          description="Por favor, coloque o email para que seja enviado uma senha."
        >
          <ResetPasswordForm />
        </SingleCard>
      </Route>
      <Route exact path="/change-password/:recoveryCode">
        <SingleCard title="Mudar senha">
          <ChangePasswordForm />
        </SingleCard>
      </Route>
      <Redirect to={"/login"} />
    </Switch>
  );
}
