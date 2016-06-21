var checkTouch = () => {
	var ieCheck = navigator.userAgent;
	if (ieCheck.match(/Win(dows )?NT 10\.0/) || ieCheck.match(/Win(dows )?NT 6\.3/) || ieCheck.match(/Win(dows )?NT 6\.2/)) { 	// Windows 10 の処理
		return ('touchstart mousedown');
	}
	else if('ontouchstart' in document) {
		return 'touchstart';
	}else{
		return 'click';
	}
};

var _touch = checkTouch();

export default _touch;

