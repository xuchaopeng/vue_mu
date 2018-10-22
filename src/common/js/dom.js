export function addClass(el,className){
	if(hasClass(el,className)){
		return
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}

export function hasClass(el,className){
	let reg = new RegExp('(^|\\s)'+className+'(\\s|$)')
	return reg.test(el.className)
}

export function getData(el,name,val){
	const prefix = 'data-'
	const dataName = prefix + name
	if(val){
		return el.setAttribute(dataName,val)
	}else{
		return el.getAttribute(dataName)
	}
}

let elementStyle = document.createElement('div').style
let vendor = (() => {
	let transformNames = {
		webkit:'webkitTransform',
		Moz:'MozTransfrom',
		o:'OTransform',
		ms:'msTransform',
		standard:'transfrom'
	}
	for(let key in transformNames){
		if(elementStyle[transformNames[key]] !== undefined){
			return key
		}
	}
	return false
})()

export function prefixStyle(style){
	if(vendor === false){
		return false
	}
	if(vendor === 'standard'){
		return style
	}

	return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}