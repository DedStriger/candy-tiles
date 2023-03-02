import { Avatar, IconButton, IconButtonProps } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { loggedUserState } from '../store/loggedUser';

type Props = {
	size: number;
	fontSize: number;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const UserAvatar = ({ size, fontSize, onClick }: Props) => {
	const user = useRecoilValue(loggedUserState) as LoggedUserData;

	return (
		<IconButton onClick={onClick}>
			<Avatar
				src={user.profile.avatarURL}
				sx={{ width: size, height: size, bgcolor: 'tertiary.dark', fontWeight: 'bolder', color: 'white', fontSize }}
			>
				{user.profile.firstLetter}
			</Avatar>
		</IconButton>
	);
};

export default UserAvatar;