import $ from 'jquery'

export default function textCount(target,lineNum) {
	var $target = target;

	var checkLh  = $target.css('line-height'),
		checkHeight = parseInt(checkLh, 10),
		constHeight = checkHeight*lineNum;

	$target.each(function(){
		var targetHeight = $(this).innerHeight(),
			thisText = $(this).text().replace(/\s+/g, ''),
			textLength = thisText.length;
		if(constHeight >= targetHeight) return;
		for (var count = 1; count <= textLength; count++) {
			var justTextLength = textLength - count,
				showText = thisText.substring(0, textLength - count),
				hideText = thisText.substring(justTextLength, textLength),
				insertText = showText;
			insertText += '<span class="is-disable">' + hideText + '</span>';
			insertText += '<span class="omit">…</span>';
			$(this).html(insertText);
			targetHeight = $(this).innerHeight();
			if (constHeight >= targetHeight) {
				break;
			}
		}
	});
};

