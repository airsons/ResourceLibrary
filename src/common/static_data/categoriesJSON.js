angular.module('categoriesJSON', [])

.service('$categoriesJSON', function () {
    var categories = [
            { 'id': '1', 'name': 'Marketing Docs' },
            { 'id': '2', 'name': 'Unicity Malaysia' },
            { 'id': '3', 'name': 'Latest Trip Promotion Information' },
            { 'id': '4', 'name': 'Distributor Price List & Order Form' },
            { 'id': '5', 'name': 'Preferred Customer Forms' },
            { 'id': '6', 'name': 'Retail Customer Order Form' },
            { 'id': '7', 'name': 'jugal' }
    ];
    return {
        get: function () {
            return categories;
        }
    };
});