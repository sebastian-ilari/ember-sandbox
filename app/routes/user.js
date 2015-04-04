import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return Ember.$.getJSON("http://api.github.com/users/" + params.login);
    }
});
