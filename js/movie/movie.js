export class VideoControl{
	constructor() {
		this.init();
		this.load();
		this.playStop();
	}
	init() {
		this.$targetWrap = $('[data-video-hover]');
		this.$target = $('[data-video-id]');
		this.$stopBtn = $('[data-video-stop]');
		this.$loading = $('[data-video-loading]');
		this.playFlg = false;
	}
	load() {
		if(ua.Mobile) return;
		this.$target.load();
	}
	playStop() {
		this.$target.on('loadeddata',() => {
			this.$loading.css('display','none');
			if(ua.Tablet) {
				this.$targetWrap.on(_touch, (el) => {
					if(!this.playFlg) {
						$(el.currentTarget).next('[data-video-id]').get(0).play();
						this.playFlg = true;
					} else {
						$(el.currentTarget).next('[data-video-id]').get(0).pause();
						this.playFlg = false;
					}
				});
			} else if(!ua.Mobile) {
				this.$targetWrap.hover((el) => {
						$(el.currentTarget).next('[data-video-id]').get(0).play();
					},
					(el) => {
						$(el.currentTarget).next('[data-video-id]').get(0).pause();
					}
				)
			}
		});
	}
}
