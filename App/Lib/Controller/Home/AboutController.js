/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
    	// this.assign('nav', 'about');
      	this.display();
    }
  };
});