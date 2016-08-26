'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  * indexAction(){
      let model = this.model("user");
      let data = yield model.where({name: "18312051179"}).find();
    //auto render template file index_index.html
    // return this.display();
      this.success(data);
  }
}