import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { EmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/emailpassword/prebuiltui';
import * as reactRouterDom from "react-router-dom";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

SuperTokens.init({
    appInfo: {
        appName: "Your App Name",
        apiDomain: "http://localhost:3001",
        websiteDomain: "https://steady-sopapillas-ac5945xyz.netlify.app",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(),
        Session.init()
    ]
});

function App() {
  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [EmailPasswordPreBuiltUI])}

            <Route path="/dashboard" element={<SessionAuth><Dashboard /></SessionAuth>} />
            <Route path="/" element={<Navigate to="/dashboard" />}/>
        </Routes>
        </BrowserRouter>
    </SuperTokensWrapper>
  );
}

export default App;
