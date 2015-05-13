/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
    	var id = this.get('id');
    	this.assign('id', id);
      	this.display();
    }
  };
});