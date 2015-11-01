//// Morris.js Charts sample data for METHOD RECEIVED AREA CHART
//var myData = [{
//            method: 'Android',
//            value: 9,
//            timestamp: 'Jan',
//        }, {
//            method: 'BUCSLIP',
//            value: 11,
//            timestamp: 'Feb',
//        }, {
//            method: 'EEPHONE',
//            value: 7,
//            timestamp: 'Mar',
//        }, {
//            method: 'EMAIL',
//            value: 517,
//            timestamp: 'Apr',
//        }, {
//            method: 'FAX',
//            value: 106,
//            timestamp: 'May',
//        }, {
//            method: 'FILESURV',
//            value: 9,
//            timestamp: 'June',
//        }, {
//            method: 'INHOUSE',
//            value: 1816,
//            timestamp: 'July',
//        }, {
//            method: 'IPHONE',
//            value: 36,
//            timestamp: 'Aug',
//        }, {
//            method: 'MAIL',
//            value: 58,
//            timestamp: 'Sept',
//        }, {
//            method: 'MASS',
//            value: 9,
//            timestamp: 'Oct',
//        }{
//            method: 'MAYOFF',
//            value: 9,
//            timestamp: 'Nov',
//        }{
//            method: 'MOBILE',
//            value: 343,
//            timestamp: 'Dec',
//        }{
//            method: 'OTHER',
//            value: 9,
//            timestamp: 'Jan',
//        }{
//            method: 'PHONC',
//            value: 9,
//            timestamp: 'Jan',
//        }{
//            method: 'PHONE',
//            value: 124266,
//            timestamp: 'Jan',
//        }{
//            method: 'SRVCDRCT',
//            value: 9,
//            timestamp: 'Jan',
//        }{
//            method: 'SWEEP',
//            value: 9,
//            timestamp: 'Jan',
//        }{
//            method: 'WALKIN',
//            value: 1487,
//            timestamp: 'Jan',
//        }{
//            method: 'WEB',
//            value: 380,
//            timestamp: 'Jan',
//        }];

Morris.Area({
  element: 'morris-area-chart-method',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B']
});
