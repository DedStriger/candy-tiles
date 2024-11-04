import { useRecoilValue } from 'recoil';
import { completedLevelsState } from '../store/completedLevels';

export default () => {
	return useRecoilValue(completedLevelsState);
};
