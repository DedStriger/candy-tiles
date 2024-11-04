import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Toast from './components/Toast';
import UserInteractionDetection from './components/UserInteractionDetection';
import { muiTheme } from './config/mui-theme';
import GamePage from './pages/game';
import HomePage from './pages/home';
import LevelSelectorPage from './pages/level-selector';
const queryClient = new QueryClient();
const App = () => {
	return (
		<>
			<RecoilRoot>
				<ThemeProvider theme={muiTheme}>
					<CssBaseline />
					<BrowserRouter>
						<QueryClientProvider client={queryClient}>
							<UserInteractionDetection></UserInteractionDetection>
							<div className="flex flex-col p-[16px] pt-[0px] md:p-[12px] grow overflow-hidden">
								<Routes>
									<Route path="/" element={<HomePage />}></Route>
									<Route path="/home" element={<HomePage />}></Route>
									<Route path="/levels" element={<LevelSelectorPage />}></Route>
									<Route path="/level/:levelId" element={<GamePage />}></Route>
									<Route path="/level/main/:levelId" element={<GamePage isMainLevel />}></Route>
								</Routes>
							</div>
						</QueryClientProvider>
					</BrowserRouter>

					<Toast></Toast>
				</ThemeProvider>
			</RecoilRoot>
		</>
	);
};

export default App;
