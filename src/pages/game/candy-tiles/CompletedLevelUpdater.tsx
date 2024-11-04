import { useMemo, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { levelCompleteState } from './store/levelComplete';
import { levelScoreStarsState } from './store/levelScoreStars';
import { CompletedLevels, completedLevelsState } from '../../../store/completedLevels';
import useSelectedLevel from '../../../hooks/useSelectedLevel';

const CompletedLevelUpdater = () => {
	const [completedLevels, setCompletedLevels] = useRecoilState(completedLevelsState);
	const selectedLevel = useSelectedLevel();

	const levelId = useMemo(
		() => (selectedLevel.data?.isMainLevel ? selectedLevel.data.file.id : selectedLevel.data?.id),
		[selectedLevel.data],
	);
	const levelScoreStars = useRecoilValue(levelScoreStarsState);
	const levelComplete = useRecoilValue(levelCompleteState);

	useEffect(() => {
		levelComplete && onLevelComplete();
	}, [levelComplete]);

	const getNewState = (state: CompletedLevels) => {
		const key = selectedLevel.data?.isMainLevel ? 'main' : 'online';
		const newState = structuredClone(state);
		const previousStars = state[key].find((x) => x.id === levelId)?.stars || 0;
		const stars = Object.values(levelScoreStars).filter((x) => x).length;
		newState[key] = newState[key].filter((x) => x.id !== levelId);
		newState[key].push({ id: levelId || -1, stars: previousStars > stars ? previousStars : stars });
		return newState;
	};

	const onLevelComplete = () => {
		const newState = getNewState(completedLevels);
		setCompletedLevels(newState);
	};

	return <></>;
};

export default CompletedLevelUpdater;
