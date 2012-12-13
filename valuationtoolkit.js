var ValuationTK = (function () {
  var my = {},
		privateVariable = 1;
	
	function privateMethod() {
		// ...
	}
	
	my.moduleProperty = 1;
	my.hello = function () {
	  alert('Hello Investor!');
	};
	
	return my;
}());

alert('VTK exec!');
