import Layzr from 'layzr.js'
var instance = Layzr();
instance.on('src:after', function(element) {
	if(!element.hasAttribute('data-layzr-bg')) return;
	var srcValue = element.getAttribute('data-layzr-bg');
	element.removeAttribute('src');
	element.style.backgroundImage = `url(${srcValue})`;
});
const layzerFnc = () => {
	instance
		.update()
		.check()
		.handlers(true);
};

