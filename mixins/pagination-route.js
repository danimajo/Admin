var defaultPaginationSettings = {
    page: 1,
    limit: 15
};

var PaginationRoute = Ember.Mixin.create({

    /**
     * Sets up pagination details
     * @param {settings}: object that specifies additional pagination details
     */
    setupPagination: function (settings) {

        settings = settings || {};
        for (var key in defaultPaginationSettings) {
            if (!settings.hasOwnProperty(key)) {
                settings[key] = defaultPaginationSettings[key];
            }
        }

        this.set('paginationSettings', settings);
        this.controller.set('paginationSettings', settings);
    }

});

export default PaginationRoute;
