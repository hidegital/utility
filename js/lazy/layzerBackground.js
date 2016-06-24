import Layzr from 'layzr.js'
var instance = Layzr();
instance.on('src:after', function(element) {
	var srcValue = element.getAttribute('data-layzr-bg');
	element.style.backgroundImage = `url(${srcValue})`;
});
const layzerFnc = () => {
	instance
		.update()
		.check()
		.handlers(true);
};


