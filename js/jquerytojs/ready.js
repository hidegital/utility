export default function ready(...r){
	if (document.readyState != 'loading'){
		r();
	} else {
		document.addEventListener('DOMContentLoaded', r);
	}
};




