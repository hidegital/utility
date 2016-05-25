import ready  from './jquerytojs/ready'
import simple from './lodashtojs/templete'
import settimeout from './promise/settimeout'


ready(
    simple('hogehoge'),
	settimeout(1500)
		.then(function(){
			console.log('timeout');
		})
);







