import { Box, Container, Paper, Stack, Tab, Tabs } from '@mui/material';
import anime from 'animejs';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Header from '../../components/header';
import MainLevelsTab from './main-levels-tab';
import { grey } from '@mui/material/colors';
import { selectedTabState } from './store/selectedTab';
import SwipeableViews from 'react-swipeable-views';
import { getLang } from '../../utils/get-key-lang';

const animateButtons = () => {
	anime({
		targets: '[data-level-button]',
		scale: [0, 1],
		delay: anime.stagger(4),
		duration: 500,
		easing: 'easeOutCirc',
	});
};

const LevelSelectorPage = () => {
	const [selectedTab, setSelectedTab] = useRecoilState(selectedTabState);

	useEffect(() => {
		selectedTab === 0 && animateButtons();
	}, [selectedTab]);

	const onTabChange = (e: React.SyntheticEvent, newValue: number) => setSelectedTab(newValue);

	return (
		<>
			<Header />
			<Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
				<Stack component={Paper} overflow="hidden" sx={{ backgroundColor: grey[100] }}>
					<Tabs
						value={selectedTab}
						onChange={onTabChange}
						centered
						variant="fullWidth"
						sx={{ minHeight: '64px' }}
						className="px-[16px] py-[8px] sticky top-0 left-0"
						textColor="primary"
						indicatorColor="primary"
						style={{ flexShrink: 0 }}
					>
						<Tab label={getLang('levels')} data-cy="main-levels-tab-button"></Tab>
					</Tabs>
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/*@ts-ignore*/}
					<SwipeableViews
						index={selectedTab}
						//onChangeIndex={onSwipeableChange}
						containerStyle={{
							transition: '0.35s ',
						}}
					>
						<Box className="overflow-hidden" display={selectedTab === 0 ? 'block' : 'none'}>
							<MainLevelsTab />
						</Box>
					</SwipeableViews>
				</Stack>
			</Container>
		</>
	);
};

export default LevelSelectorPage;
