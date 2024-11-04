const en = {
	play: 'Play',
	levels: 'Levels',
	target: 'Target',
	start: 'Start',
	points: 'points',
	level: 'Level',
	moves: 'Moves',
	volume: 'Volume',
	back: 'Back',
	reset: 'Reset level',
	levelComplete: 'Level complete!',
	next: 'Next',
	'levelOver.title': 'Level failed!',
	'levelOver.text': 'You did not reach the goal!',
	'noPossible.title': 'No moves!',
	'noPossible.text': 'You ran out of possible combinations!'
}

const ru = {
	play: 'Играть',
	levels: 'Уровни',
	target: 'Задача',
	start: 'Начать',
	points: 'очки',
	level: 'Уровень',
	moves: 'Собрано',
	volume: 'Звук',
	back: 'Назад',
	reset: 'Перезапустить уровень',
	levelComplete: 'Уровень пройден!',
	next: 'Дальше',
	'levelOver.title': 'Уровень провален!',
	'levelOver.text': 'Вы не достигли цели!',
	'noPossible.title': 'Так не получится!',
	'noPossible.text': 'У вас закончились возможные комбинации!'
}

const LOCAL_STORE_KEY = 'lang'

const langs = {en, ru}

type Keys = keyof typeof en & keyof typeof ru
const params = new URLSearchParams(window.location.search)
const savedLang = window.localStorage.getItem(LOCAL_STORE_KEY)
export const getLang = (key: Keys) => {
	if(!savedLang){
		window.localStorage.setItem(LOCAL_STORE_KEY, params.get('lang') || 'ru')
	}
	const keys = langs[window.localStorage.getItem(LOCAL_STORE_KEY) as keyof typeof langs] || ru

	return keys[key] || ''
}
