import Ember from 'ember';

export default Ember.ArrayController.extend({
    init: function() {
        this._super();
//        console.log(this.get('content'));
    }
    
//    postCount: function() {
//        console.log(this.get('model').length);
//        return 5;
//    }.property()
});
