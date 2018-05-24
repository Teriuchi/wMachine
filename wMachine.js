//node wMachine.js
var Promise = require('promise');
var sleep = require('system-sleep');
var mode = 'idle';

var fill = function(){		
	var promise = new Promise(function(resolve, reject){
		if(mode == 'idle'){
			console.log('Starting program');
			console.log('Idle -> filling water');
			sleep(5*1000);
			mode = 'filling';
			resolve(mode);
		}
		
		else{
			var reason = new Error('Error while moving from idle to filling water');
			reject(reason);
		}
	});
	return promise;
};

var wash = function(){		
	var promise = new Promise(function(resolve, reject){
		if(mode == 'filling'){
			console.log('Filling water -> washing');
			sleep(5*1000);
			mode = 'washing';
			resolve(mode);
		}
		
		else{
			var reason = new Error('Error while moving from filling water to washing');
			reject(reason);
		}
	});
	return promise;
};

var rinse = function(){		
	var promise = new Promise(function(resolve, reject){
		if(mode == 'washing'){
			console.log('Washing -> rinsing');
			sleep(5*1000);
			mode = 'rinsing';
			resolve(mode);
		}
		
		else{
			var reason = new Error('Error while moving from washing to rinsing');
			reject(reason);
		}
	});
	return promise;
};

var spin = function(){		
	var promise = new Promise(function(resolve, reject){
		if(mode == 'rinsing'){
			console.log('Rinsing -> spinning');
			sleep(5*1000);
			mode = 'spinning';
			resolve(mode);
		}
		
		else{
			var reason = new Error('Error while moving from rinsing to spinning');
			reject(reason);
		}
	});
	return promise;
};

var idle = function(){		
	var promise = new Promise(function(resolve, reject){
		if(mode == 'spinning'){
			console.log('Spinning -> idle');
			sleep(5*1000);
			mode = 'idle';
			console.log('Ending program');
			resolve(mode);
		}
		
		else{
			var reason = new Error('Error while moving from spinning to idle');
			reject(reason);
		}
	});
	return promise;
};

fill()
	.then(wash)
	.then(rinse)
	.then(spin)
	.then(idle);
