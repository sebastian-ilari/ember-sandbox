import Ember from 'ember';

export default Ember.Route.extend({  
    model: function() {
        return this.store.findAll('post');
    },
//    setupController: function(controller) {
//        this._super();
//        //controller.set('postCount', "Hello world!");
//        controller.set('postCount', this.store.findAll('post').get('length'));
//        console.log(this.store.findAll('post'));
//        console.log(this.store.findAll('post').get('length'));
//    }    
});
