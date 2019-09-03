import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_MO6vVhZCvQ0hTypkArBPy8Qa00NG8RVZ4q';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then(response => {
				alert('Payment successfull');
			})
			.catch(error => {
				console.log('Payment error: ', error);
				alert(
					'There was an issue with your payment. Make sure you use the provided test credit card'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Cool Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
