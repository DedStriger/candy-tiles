
import { getRequest } from '../utils/fetch-request';
import { LevelData, LevelFile } from '../types';

export const getMainLevel = async (levelId: string) => {
	const mainLevelURL = `/levels/${levelId}.json`;
	const file = await getRequest<LevelFile>(mainLevelURL);
	return {
		file,
		isMainLevel: true,
	} as LevelData;
};

export type UploadLevelData = {
	levelTitle: string;
	levelJson: string;
	userId: string;
};


