import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import CandyTilesDialog from '../CandyTilesDialog';
import { finishedMovingState } from '../../store/finishedMoving';
import GameOverActions from '../GameOverActions';
import useAudio from '../../../../../hooks/useAudio';
import { gameOverState } from '../../store/gameOver';
import { getLang } from '../../../../../utils/get-key-lang';

const GameOverDialog = () => {
	const finishedMoving = useRecoilValue(finishedMovingState);
	const gameOver = useRecoilValue(gameOverState);
	const playAudio = useAudio();

	useEffect(() => {
		gameOver && onGameOver();
	}, [finishedMoving]);

	const onGameOver = () => {
		playAudio({ audioName: 'gameOver', volume: 0.7 });
	};

	return gameOver ? (
		<CandyTilesDialog>
			<div className="flex flex-col w-full items-center gap-[12px]" data-cy="game-over-dialog">
				<div>
					<span className="m-auto font-YellowCandy text-[22px] block text-center text-p-light">{getLang('levelOver.title')}</span>
					<span className="m-auto font-YellowCandy text-[18px] block text-center text-s-light">{getLang('levelOver.text')}</span>
				</div>
				<GameOverActions></GameOverActions>
			</div>
		</CandyTilesDialog>
	) : (
		<></>
	);
};

export default GameOverDialog;
