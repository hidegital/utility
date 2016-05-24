module.exports = {
	textCount : function(target,countNum) {
		var count = countNum;
		$(target).each(function () {
			var thisText = $(this).text().replace(/\s+/g,''),
				textLength = thisText.length;
			if (textLength > count) {
				var showText = thisText.substring(0, count),
					hideText = thisText.substring(count, textLength),
					insertText = showText;
				insertText += '<span class="hide">' + hideText + '</span>';
				insertText += '<span class="omit">…</span>';
				$(this).html(insertText);
			}
		});
		$(target + ' .hide').hide();
	}
}