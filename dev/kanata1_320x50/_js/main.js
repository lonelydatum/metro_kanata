function start(){
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	const read = "+=1"
	const time = .5
	tl.set(".frame1", {opacity:1})
	
	tl.add("dothis", 2)
	tl.to(".slider", .5, {x:"-=110"}, "dothis")
	tl.to(".t1", .3, {opacity:0}, "dothis")
	tl.from(".t2", .3, {opacity:0}, "dothis")
	
	
}

start()

module.exports = {};

