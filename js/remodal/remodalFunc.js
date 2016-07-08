/*remodal plugin メモ*/

//onofevent
var delegateModalEvt = (state,namespace) => {
	if(state == 'on') {
		$(`[data-modal-trigger=${namespace}]`).on(_touch + `.${namespace}`, function () {
			var prefModal = $(`[data-remodal-id=${namespace}]`).remodal();
			prefModal.open();
		});
	}else{
		$(`[data-modal-trigger=${namespace}]`).off(_touch + `.${namespace}`);
	}
};

var locationEvt = () => {
	trigger.location.on('change',function(){
		if($(this).val() == '') {
			delegateModalEvt('off','prefmodal');
			delegateModalEvt('off','hangoutmodal');
		}else{
			delegateModalEvt('on','prefmodal');
			delegateModalEvt('off','hangoutmodal');
		}
	});
};



