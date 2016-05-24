//import $ from 'jquery'
//import _ from 'lodash'
//
//function simple(name) {
//	var compiled = _.template("<p>Hello <%= name %>!</p>");
//	var user = { "name": name };
//	$("#simple").html(compiled(user));
//}
//下記es6templeteで書き換え

export default function simple(name) {
	let tempTarget = document.getElementById("simple");
	const compiled = ({ name }) => `<p>hello ${name}</p>`;
	let user = { "name": name };
	tempTarget.innerHTML = compiled(user);
}
