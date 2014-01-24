/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, brackets: true, $, window, navigator */
/*
 * 1. Get list of tags by largest number of questions asked
 *   - from bigning.
 *   - this year.
 *   - this month.
 *   - this week.
 *   - today
 *
 * 2. Get number of questions asked aganist first 25 tags
 *   - from bigning.
 *   - this year.
 *   - this month.
 *   - this week.
 *   - today
 *
 * 3. Get the top 10 related tags asked aganist first 25 tags
 *   - from bigning.
 *   - this year.
 *   - this month.
 *   - this week.
 *   - today
 *
 * 4. Frequency
 */
define(function (require) {

    "use strict";

    var ko = require('knockout');

    var baseUrl = 'js/data/';

    var _u = {
        getData: function (options, callback, scope) {
            var ajaxParams = $.extend({
                url: baseUrl,
                async: false,
                contentType: "application/json",
                dataType: 'json',
                success: function (json) {
                    scope = scope || window;
                    callback.apply(scope, [json]);
                },
                error: function (e) {
                    console.log(e.message);
                }
            }, options);

            $.ajax(ajaxParams);
        }

    };

    var Data = {};
    Data.get = function (name, cb) {
        if (name === 'g1') {
            _u.getData({
                url: baseUrl + 'map.json'
            }, cb, this);


        } else if (name === 'g2') {
            _u.getData({
                url: baseUrl + 'yearly-data.json'
            }, cb, this);


        } else if (name === 'g3') {
            _u.getData({
                url: baseUrl + 'monthly-data.json'
            }, cb, this);


        } else {

            cb.call(this, null);
        }



    };

    return Data;
});