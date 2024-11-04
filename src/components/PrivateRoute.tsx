import { Navigate } from 'react-router-dom';

type Props = {
	allowAnonymousUsers: boolean;
	allowLoggedUsers: boolean;
	children: React.ReactNode;
};

const PrivateRoute = ({ allowAnonymousUsers, allowLoggedUsers, children }: Props) => {
	return <Navigate to="/"></Navigate>
};

export default PrivateRoute;
