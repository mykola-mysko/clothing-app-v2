import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';

import { selectCurrentUser } from '../src/redux/user/user.selectors';
import { checkUserSession } from '../src/redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/checkout' component={Checkout} />
				<Route
					exact
					path='/signin'
					render={() =>
						currentUser ? (
							<Redirect to='/' />
						) : (
							<SignInAndSignUpPage />
						)
					}
				/>
			</Switch>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
