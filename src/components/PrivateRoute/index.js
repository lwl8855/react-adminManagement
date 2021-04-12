import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '@/utils/session';
//这里判断   如果用户登录过，就前往主页index,负责
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			isAuthenticated()
				? <Component {...props} />
				: (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location }
						}}
					/>
				)
		)}
	/>
);

export default PrivateRoute;