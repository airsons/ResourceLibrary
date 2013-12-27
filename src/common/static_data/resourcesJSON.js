angular.module ('resourcesJSON', [])

.service('$resourcesJSON', function () {
    var _resources = {
        '1': {
            'resourceID': 1,
            'title': 'Preferred Customer Order Form',
            'description': 'Physician Desk Reference 2013',
            'CategoryID': 1,
            'CategoryName': 'Marketing Docs',
            'Tags': ['1', '2'],
            'youtube_url': 'www.youtube.com',
            'CustomerType': ['1', '2', '3'],
            'url': '',
            'type': 'png',
            'date':'12-12-2001'
        },
        '2': {
            'resourceID': 2,
            'title': 'East Malaysia Price List',
            'description': 'This is the Bookk Reference needed for the workflow',
            'CategoryID': 1,
            'CategoryName': 'Marketing Docs',
            'Tags': ['1', '2', '4'],
            'youtube_url': '',
            'CustomerType': ['1', '2', '3','5'],
            'url': 'www.google.com/images/nest.jpg',
            'type': 'pdf',
            'date': '10-11-2003'
        },
        '3': {
            'resourceID': 3,
            'title': 'Distributor Fax Order Form',
            'description': 'This is the Bookk Reference needed for the workflow',
            'CategoryID': 1,
            'CategoryName': 'Marketing Docs',
            'Tags': ['1', '1'],
            'youtube_url': 'www.youtube.com',
            'CustomerType': ['1', '2', '7'],
            'url': 'www.yahoo.com',
            'type': 'pdf',
            'date': '12-12-2012'
        },
        '4': {
            'resourceID': 4,
            'title': 'Policies & Procedures',
            'description': 'Policies & Procedures ( Effective 15 September 2013)',
            'CategoryID': 2,
            'CategoryName': 'Unicity Malaysia',
            'Tags': ['1', '2'],
            'youtube_url': 'www.youtube.com/ssdfs',
            'CustomerType': ['5', '4', '3'],
            'url': 'www.gmail.com',
            'type': 'png',
            'date': '12-12-2010'
        },
        '5': {
            'resourceID': 5,
            'title': 'Physician Desk Reference 2013',
            'description': 'This is the Bookk Reference needed for the workflow',
            'CategoryID': 2,
            'CategoryName': 'Unicity Malaysia',
            'Tags': ['1', '2'],
            'youtube_url': 'www.youtube.com/ssdfs',
            'CustomerType': ['5', '4', '3'],
            'url': 'www.gmail.com',
            'type': 'png',
            'date': '12-12-2009'
        },
        '6': {
            'resourceID': 6,
            'title': 'West Malaysia Price List',
            'description': 'This is the Bookk Reference needed for the workflow',
            'CategoryID': 3,
            'CategoryName': 'Latest Trip Promotion Information',
            'Tags': ['1', '2'],
            'youtube_url': 'www.youtube.com/ssdfs',
            'CustomerType': ['2', '3', '6'],
            'url': 'www.gmail.com',
            'type': 'pdf',
            'date': '12-12-2011'
        }

    };

    return {
        get: function () {
            return _resources;
        }
    };
});
