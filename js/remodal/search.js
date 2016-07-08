import $ from 'jquery'
import _touch from './touch'
export class ModalFunc {
	delegateModalEvt(state,namespace) {
		if(state == 'on') {
			$(`[data-modal-trigger=${namespace}]`).on(_touch + `.${namespace}`, () => {
				var prefModal = $(`[data-remodal-id=${namespace}]`).remodal();
				prefModal.open();
			});
		}else{
			$(`[data-modal-trigger=${namespace}]`).off(_touch + `.${namespace}`);
		}
	}
}

export class SearchModalFunc {
	init(target){
		this.$targetModal = $(`[data-search-id=${target}]`),
			this.$targetList = this.$targetModal.find('input'),
			this.$addTagDom = $(`[data-target-addtag=${target}]`),
			this.checklist = {},
			this.addTag();
	}
	addTag(){
		var self = this;
		this.$targetList.each(function(){
			$(this).on('change',() => {
				var datanum = $(this).data('num'),
					checkText = $(this).next('label').text();
				self.checklist[datanum] = checkText;
				if($(this).prop('checked') == false) {
					delete self.checklist[datanum];
				}
				self.$addTagDom.empty();
				for(var key in self.checklist){
					var innerText = self.checklist[key];
					self.$addTagDom.append(`<span class='c-tag--detail--table'>${innerText}</span>`);
				}
			});
		});
	}
}
