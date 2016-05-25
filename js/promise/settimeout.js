//export default function setTimeOut(delay){
//	var defer_time = $.Deferred();
//	setTimeout(function() {
//		defer_time.resolve();
//	}, delay);
//	return defer_time.promise();
//}
//todo es6 promise
//

export default function setTimeOut(delay){
	//var defer_time = $.Deferred();
	//setTimeout(function() {
	//	defer_time.resolve();
	//}, delay);
	//return defer_time.promise();
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, delay);
	});
}
