import { Box, Container, Slide, Stack } from '@mui/material';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import MainButton from './MainButton';
import { ReactComponent as Logo } from './../../assets/img/app/text-logo.svg';
import { useNavigate } from 'react-router-dom';
import { getLang } from '../../utils/get-key-lang';

const HomePage = () => {
	const navigate = useNavigate();
	const playOnClick = () => navigate('levels');

	return (
		<>
			<Slide in={true}>
				<Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
					<Stack alignItems="center" margin="auto">
						<Box display="flex" marginBottom="50px">
							<Logo className="block m-auto min-w-[min(100%,420px)] h-full text-p-light"></Logo>
						</Box>
						<Box display="flex" flexWrap="wrap" gap="2rem" justifyContent="center">
							<MainButton
								data-cy="play-button"
								variant="outlined"
								startIcon={<MdOutlinePlayCircleFilled size={48} />}
								onClick={playOnClick}
							>
								{getLang('play')}
							</MainButton>
						</Box>
					</Stack>
				</Container>
			</Slide>
		</>
	);
};

export default HomePage;
