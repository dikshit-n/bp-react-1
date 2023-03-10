import {
  AuthPageContent,
  // LoginPageContent,
  OAuthPageContent,
  SignupPageContent,
} from "src/content/auth";
import { authSetup } from "src/data";
import { Guest } from "src/guard";
import { AuthLayout } from "src/layouts";
import { ROUTES_DEFINITION } from "../router";
import { Helmet } from "react-helmet";

export const authRoutes: ROUTES_DEFINITION = [
  {
    path: authSetup.authPage,
    element: (
      <>
        <Helmet>
          <title>Auth</title>
        </Helmet>
        <Guest>
          <AuthLayout>
            <AuthPageContent />
          </AuthLayout>
        </Guest>
      </>
    ),
  },
  {
    path: authSetup.signupPage,
    element: (
      <>
        <Helmet>
          <title>Sign up - Auth</title>
        </Helmet>
        <Guest>
          <AuthLayout>
            <SignupPageContent />
          </AuthLayout>
        </Guest>
      </>
    ),
  },
  {
    path: authSetup.oauthPage,
    element: (
      <>
        <Helmet>
          <title>OAuth - Auth</title>
        </Helmet>
        <Guest>
          <OAuthPageContent />
        </Guest>
      </>
    ),
  },
];
