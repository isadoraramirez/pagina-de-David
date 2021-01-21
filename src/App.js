import React from 'react';
//Routes
import Navigation from './routes/Navigation';
//amplify frameworks
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';
import './amplify.scss';
Amplify.configure(awsconfig);


function App() {

  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  console.log(user);


  console.log(AuthState.SignedIn);
  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData)
    });
  }, []);


  return (
    authState === AuthState.SignedIn && user ? (
      <div className="App">
        <Navigation />

        <AmplifySignOut />

      </div>

    )
      :
      (


        <AmplifyAuthenticator>


          <AmplifySignIn
            headerText="Entra con tu Correo y Contraseña"
            slot="sign-in"

          >

          </AmplifySignIn>


          <AmplifySignUp
            headerText="Crea tu cuenta para formar parte de los Estudios Prospectivos."
            slot="sign-up"
            formFields={[
              { type: "username" },
              { type: "password" },
              { type: "email" }
            ]}
          >
          </AmplifySignUp>

        </AmplifyAuthenticator>


      )
  );
}




export default App;