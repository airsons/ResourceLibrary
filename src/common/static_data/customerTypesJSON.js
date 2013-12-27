angular.module('customerTypesJSON', [])

.service('$customerTypesJSON', function () {
    var customerTypes = [
            { 'id': '1', 'name': 'Associate' },
            { 'id': '2', 'name': 'Customer' },
            { 'id': '3', 'name': 'Employee' },
            { 'id': '4', 'name': 'Family Pricing' },
            { 'id': '5', 'name': 'Wholesale Customer' },
            { 'id': '6', 'name': 'Lead Sales' },
            { 'id': '7', 'name': 'Medical Professional' },
            { 'id': '8', 'name': 'Preferred Customer' },
            { 'id': '9', 'name': 'DSC Employee' },
            { 'id': '10', 'name': 'Legacy Terminated' },
            { 'id': '11', 'name': 'Legacy Suspended ' },
            { 'id': '12', 'name': 'Rollup Enrollers' }
    ];
    return {
        get: function () {
            return customerTypes;
        }
    };
});