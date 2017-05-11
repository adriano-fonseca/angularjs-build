angular.module("listaTelefonicaApp").filter("resumeName",function(){
	return function(input,size) {
		size = (size || 10);
		if(input.length <= input){
			return input;
		}else if(input.substring(size-1,size)==" "){
			return input.substr(0, (size-2)) + "...";
		}else{
			return input.substr(0, size) + "...";
		}
	};
});