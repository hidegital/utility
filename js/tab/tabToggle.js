import $ from 'jquery'

export default class TabFunc {
	constructor(trigger,target) {
		this.$trigger = trigger;
		this.$target = target;
	}
	itelatorFunc(activeClass,disableClass) {
		var toggleFunc = function(t,className) {
			t.toggleClass(className);
		};
		this.$trigger.each(function(){
			toggleFunc($(this),activeClass);
		});
		this.$target.each(function(){
			toggleFunc($(this),disableClass);
		});
	}
}

