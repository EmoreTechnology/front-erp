// Dependencies
import React, { Suspense } from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

interface IRouteProps extends RouteProps {
	caseSensitive?: boolean;
	element?: any;
}

const RoutesPrivate: React.FC<IRouteProps> = ({ caseSensitive = false, element: Component, ...rest }) => {
	const token = localStorage.getItem('@token:erp');

	const Render: (props: RouteProps) => React.ReactNode = () => {
		if (token == null) {
			return false;
		}
		if (caseSensitive && !token) {
			return <Route path="/" element={<Navigate replace to="/home" />} />
		}

		return (
			<Suspense fallback={<div />}>
				<Component />
			</Suspense>
		);
	};

	return (
		<Route {...rest} element={Render} />
	);
}

export default RoutesPrivate;