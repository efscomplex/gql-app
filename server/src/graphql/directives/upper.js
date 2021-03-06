export const directiveResolvers = {
	upper(next, src, args, context) {
		return next().then((str) => {
			if (typeof str === 'string') {
				return str.toUpperCase()
			}
			return str
		})
	}
}
