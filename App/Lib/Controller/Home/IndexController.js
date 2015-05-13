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
      		"author": "黄小璐"
      	},
      	{
      		"id": 1,
      		"title": "http权威指南",
      		"author": "黄小璐"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "黄小璐"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "黄小璐"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "黄小璐"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "黄小璐"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "黄小璐"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "黄小璐"
      	},
      	{
      		"id": 2,
      		"title": "http权威指南",
      		"author": "黄小璐"
      	}]
      });
      this.display();
    }
  };
});