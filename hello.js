// Step 1 : Create a vue instance 
var Vue = require('vue')

var app = new Vue({
	render:function(h){

		return h('div','Hello World')

	}
})

// Step 2 : Create a renderer

var renderer = require('vue-server-renderer').createRenderer();


// Step 3 : Render the vue instance to html

renderer.renderToString(app,function(err,html){
	if(err) throw err
	console.log(html);
});