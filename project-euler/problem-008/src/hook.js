require("babel/register")({
	stage: 0
});

require('./index')((err, res) => {
  console.log("done");
})
