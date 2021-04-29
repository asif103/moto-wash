import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            // storeAuthToken();
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
              
          });
    }
    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //         .then(function (idToken) {
    //             sessionStorage.setItem('token', idToken);
    //       }).catch(function(error) {
    //         // Handle error
    //       });
    // }
    return (
        <div className="container bg-info">
            <div className="row p-5 m-5">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <Button variant="danger" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Login with google</Button>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png" alt="" className="img-fluid"/>
                </div>
            </div>
            
        </div>
    );
};

export default Login;