import React from 'react';

import SignIn from '../../components/signin/sign-in.component';
import SignUp from '../../components/signup/signup-component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInAndSignUpPage;
