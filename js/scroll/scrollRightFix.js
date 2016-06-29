/*
 loadTargetPos
 loadWrapperPos 読み込み先で定義
 例
 const init = {
 loadTargetPos : target.rightColumn.outerHeight() + target.rightColumn.offset().top,
 loadWrapperPos : target.mainColumn.outerHeight() + target.mainColumn.offset().top
 };
*/
export default class ScrollFunc {
	constructor(target,loadTargetPos,loadWrapperPos){
		this.target = target;
		this.loadTargetPos = loadTargetPos;
		this.loadWrapperPos = loadWrapperPos;
	}
	init(loadWrapperPos){
		this.loadWrapperPos = loadWrapperPos;
	}
	setState(threshold) {
		var state;
		if(threshold > this.loadTargetPos && threshold < this.loadWrapperPos){
			state = 'isFixed'
		}
		else if(threshold > this.loadWrapperPos){
			state = 'isAbsolute'
		}
		else{
			state = 'isStatic'
		}
		return state;
	}
	setEvent(threshold) {
		var status = this.setState(threshold);
		switch (status) {
			case 'isStatic':
				this.isStaticFunc();
				break;
			case 'isFixed':
				this.isFixedFunc();
				break;
			case 'isAbsolute':
				this.isAbsoluteFunc();
				break;
			default:
				break;
		}
	}
	isStaticFunc() {
		if(this.target.hasClass('is-static')) return;
		this.target.removeClass().addClass('is-static');
	}
	isFixedFunc() {
		if(this.target.hasClass('is-fixed')) return;
		this.target.removeClass().addClass('is-fixed');
	}
	isAbsoluteFunc() {
		if(this.target.hasClass('is-absolute')) return;
		this.target.removeClass().addClass('is-absolute');
	}
}
