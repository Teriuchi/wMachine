//node wMachine.js
var Promise = require('promise');	//npm install promise
var sleep = require('system-sleep');	//npm install system-sleep

var mode = 'idle';

var fill = function(){			//Moving from idle to filling water
	var promise = new Promise(function(resolve, reject){
		if(mode == 'idle'){
			console.log('Starting program');
			console.log('Idle -> filling water');
			sleep(5*1000);	//Halt the execution for 5 seconds
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

var wash = function(){			//Moving from filling water to washing
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

var rinse = function(){			//Moving from washing to rinsing
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

var spin = function(){			//Moving from rinsing to spinning
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

var idle = function(){			//Resetting from spinning to idle
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

fill()					//Call the cycle to use the machine
	.then(wash)
	.then(rinse)
	.then(spin)
	.then(idle);
