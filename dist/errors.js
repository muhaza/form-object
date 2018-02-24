'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {

    /**
     * Constructor
     *
     * @return {Errors}
     */
    function _class() {
        _classCallCheck(this, _class);

        this.errors = {};
    }

    /**
     * Set the errors from a JSON encoded Laravel errors bag object.
     *
     * @param {Object} errors
     */


    _createClass(_class, [{
        key: 'set',
        value: function set(errors) {
            this.errors = errors;
        }

        /**
         * Check if the given field has an error.
         *
         * @param  {String} field
         * @return {Boolean}
         */

    }, {
        key: 'has',
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }

        /**
         * Get the error message for the given field.
         *
         * @param  {String} field
         * @return {String}
         */

    }, {
        key: 'get',
        value: function get(field) {
            if (this.has(field)) {
                return this.errors[field][0];
            }
        }

        /**
         * Get all error messages for the given field.
         *
         * @param  {String} field
         * @return {Array}
         */

    }, {
        key: 'getAll',
        value: function getAll(field) {
            if (this.has(field)) {
                return this.errors[field];
            }
        }

        /**
         * Clear the error message for the given field or all errors if no field is
         * specified.
         *
         * @param  {String} field
         */

    }, {
        key: 'clear',
        value: function clear(field) {
            if (field) {
                _vue2.default.delete(this.errors, field);
            } else {
                this.errors = {};
            }
        }

        /**
         * Determine if the form has any error.
         *
         * @returns {boolean}
         */

    }, {
        key: 'any',
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }]);

    return _class;
}();