import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({  
    firebase: new window.Firebase('https://resplendent-torch-2573.firebaseio.com')
});
