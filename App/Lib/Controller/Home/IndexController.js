/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/index_index.html file
      // this.assign('nav', 'home');
      this.assign("data", {
      	"list": [{
      		"id": 0,
      		"title": "http权威指南",
      		"author": "huangxiaolu"
      	},
      	{
      		"id": 1,
      		"title": "http权威指南",
      		"author": "huangxiaolu"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "huangxiaolu"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "huangxiaolu"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "huangxiaolu"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "huangxiaolu"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "huangxiaolu"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "huangxiaolu"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "huangxiaolu"
      	}]
      });
      this.display();
    }
  };
});