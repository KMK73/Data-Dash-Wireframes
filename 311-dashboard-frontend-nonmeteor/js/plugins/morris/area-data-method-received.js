// Morris.js Charts sample data for METHOD RECEIVED AREA CHART
var methodData = [{
            method: 'Android',
            value: 9,
            timestamp: 'Jan',
        }, {
            method: 'BUCSLIP',
            value: 11,
            timestamp: 'Feb',
        }, {
            method: 'EEPHONE',
            value: 7,
            timestamp: 'Mar',
        }, {
            method: 'EMAIL',
            value: 517,
            timestamp: 'Apr',
        }, {
            method: 'FAX',
            value: 106,
            timestamp: 'May',
        }, {
            method: 'FILESURV',
            value: 9,
            timestamp: 'June',
        }, {
            method: 'INHOUSE',
            value: 1816,
            timestamp: 'July',
        }, {
            method: 'IPHONE',
            value: 36,
            timestamp: 'Aug',
        }, {
            method: 'MAIL',
            value: 58,
            timestamp: 'Sept',
        }, {
            method: 'MASS',
            value: 9,
            timestamp: 'Oct',
        }];

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart-method',
        data: methodData,
        xkey: 'method',
        ykeys: ['value', 'timestamp'],
        labels: ['value', 'timestamp'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
