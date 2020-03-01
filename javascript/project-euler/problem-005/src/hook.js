require("babel/register")({
	stage: 0
});

require("./index")(10, (err, res) => {
  console.log(res);
})
