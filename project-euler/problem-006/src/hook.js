require("babel/register")({
	stage: 0
});

var sut = require("./index")


console.log(sut.difference2(10))
