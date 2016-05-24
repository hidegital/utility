//export default class GetJson 渡すclassが1つの場合 defaultつける
export class GetJson {
	constructor(url) {
		this.defer = $.Deferred();
		this.url = url;
	}
	fetch() {
		$.ajax({
			type: "GET",
			dataType: 'json',
			url: this.url,
			success	: this.defer.resolve,
			error: this.defer.reject
		});
		return this.defer.promise();
	}
}
