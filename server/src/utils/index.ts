const getDayOfWeek = (date = new Date()) => {
	const weekDays = [
		'Monday',
		'Thuesday',
		'Wednesdey',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	]
	return weekDays[date.getDay()]
}
const getMonth = (date = new Date()) => {
	const months = [
		'Genuary',
		'February',
		'March',
		'Appril',
		'May',
		'June',
		'July',
		'Agost',
		'September',
		'October',
		'November'
	]
	return months[date.getMonth()]
}
const getMonthlyDay = (date = new Date()) => {
	return date.getDate()
}
const getFullYear = (date = new Date()) => {
	return date.getFullYear()
}
export const getToday = (date = new Date()) => ({
	dayOfWeek: getDayOfWeek(date),
	monthlyDay: getMonthlyDay(date),
	year: getFullYear(date),
	month: getMonth(date)
})
export const formatDate = (date: any) => {
	const today = getToday(date)
	return `${today.monthlyDay}th of ${today.month} of ${today.year}`
}
