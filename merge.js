/**
 * @function merge
 * @param {*} a 
 * @param {*} b 
 */
const merge = (a, b) => {
	if(a && b) {
		for(key in b) {
			a[key] = b[key]
		}
	}
	return a
}
