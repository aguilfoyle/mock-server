var mocks = [];
var schemas = require('../schemas/schemas');

var collectors= {
    name: 'collectors',
    mockRoute: '\/api\/v1\/supportdata\/collectors',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"collectors": [
            {
        "collectorId": "1000",
        "name": "100",
		"description":""
      },
      {
        "collectorId": "1001",
        "name": "200",
		"description":""
      },
      {
        "collectorId": "1002",
        "name": "210",
		"description":""
      },
      {
        "collectorId": "1003",
        "name": "220",
		"description":""
      },
      {
        "collectorId": "1004",
        "name": "300",
		"description":""
      },
      {
        "collectorId": "1005",
        "name": "400",
		"description":""
      },
      {
        "collectorId": "1006",
        "name": "500",
		"description":""
      },
      {
        "collectorId": "1007",
        "name": "600",
		"description":""
      },
      {
        "collectorId": "1008",
        "name": "700",
		"description":""
      },
      {
        "collectorId": "1009",
        "name": "710",
		"description":""
      },
      {
        "collectorId": "1010",
        "name": "720",
		"description":""
      },
      {
        "collectorId": "1011",
        "name": "730",
		"description":""
      },
      {
        "collectorId": "1012",
        "name": "740",
		"description":""
      },
      {
        "collectorId": "1013",
        "name": "750",
		"description":""
      },
      {
        "collectorId": "1014",
        "name": "800",
		"description":""
      },
      {
        "collectorId": "1015",
        "name": "810",
		"description":""
      },
      {
        "collectorId": "1016",
        "name": "900",
		"description":""
      },
      {
        "collectorId": "1017",
        "name": "910",
		"description":""
      },
      {
        "collectorId": "1018",
        "name": "920",
		"description":""
      },
      {
        "collectorId": "1019",
        "name": "930",
		"description":""
      },
      {
        "collectorId": "1020",
        "name": "988",
		"description":""
      },
      {
        "collectorId": "1021",
        "name": "BOGUS",
		"description":""
      },
      {
        "collectorId": "1040",
        "name": "610",
		"description":""
      },
      {
        "collectorId": "1",
        "name": "Default Collector",
		"description":""
      },
      {
        "collectorId": "1101",
        "name": "770",
		"description":""
      },
      {
        "collectorId": "1380",
        "name": "Mark Adkins",
		"description":""
      },
      {
        "collectorId": "1260",
        "name": "602",
		"description":""
      },
      {
        "collectorId": "1240",
        "name": "402",
		"description":""
      },
      {
        "collectorId": "1280",
        "name": "403"
      },
      {
        "collectorId": "1281",
        "name": "603"
      },
      {
        "collectorId": "1160",
        "name": "Teresa Davis"
      },
      {
        "collectorId": "1161",
        "name": "Tammy Archer"
      },
      {
        "collectorId": "1162",
        "name": "Tina Hobbs"
      },
      {
        "collectorId": "1163",
        "name": "Katrina Wood"
      },
      {
        "collectorId": "1164",
        "name": "Lajuana Garcia"
      },
      {
        "collectorId": "1166",
        "name": "Elaine Powers"
      },
      {
        "collectorId": "1167",
        "name": "Iris Sance"
      },
      {
        "collectorId": "1168",
        "name": "Annmarie Patterson"
      },
      {
        "collectorId": "1080",
        "name": "760"
      },
      {
        "collectorId": "1140",
        "name": "101"
      },
      {
        "collectorId": "1141",
        "name": "102"
      },
      {
        "collectorId": "1142",
        "name": "201"
      },
      {
        "collectorId": "1143",
        "name": "301"
      },
      {
        "collectorId": "1144",
        "name": "302"
      },
      {
        "collectorId": "1145",
        "name": "401"
      },
      {
        "collectorId": "1146",
        "name": "501"
      },
      {
        "collectorId": "1147",
        "name": "601"
      },
      {
        "collectorId": "1148",
        "name": "701"
      },
      {
        "collectorId": "1149",
        "name": "123"
      },
      {
        "collectorId": "1150",
        "name": "731"
      },
      {
        "collectorId": "1151",
        "name": "741"
      },
      {
        "collectorId": "1152",
        "name": "751"
      },
      {
        "collectorId": "1153",
        "name": "771"
      },
      {
        "collectorId": "1180",
        "name": "Susan Hodges"
      },
      {
        "collectorId": "1220",
        "name": "Paula Fitzpatrick"
      },
      {
        "collectorId": "1320",
        "name": "404",
		"description":""
      },
      {
        "collectorId": "1321",
        "name": "604",
		"description":""
      },
      {
        "collectorId": "1060",
        "name": "688",
		"description":""
      },
      {
        "collectorId": "1061",
        "name": "788",
		"description":""
      },
      {
        "collectorId": "1120",
        "name": "611",
		"description":""
      },
      {
        "collectorId": "1121",
        "name": "612",
		"description":""
      },
      {
        "collectorId": "1340",
        "name": "Eric Hall",
		"description":""
      },
      {
        "collectorId": "2403",
        "name": "Sharon Sawyer",
		"description":""
      },
      {
        "collectorId": "2404",
        "name": "Kelle Bondman",
		"description":""
      },
      {
        "collectorId": "2405",
        "name": "Andrea Marks",
		"description":""
      },
      {
        "collectorId": "2406",
        "name": "Tara Coley",
		"description":""
      },
      {
        "collectorId": "2407",
        "name": "Jan Thomas",
		"description":""
      },
      {
        "collectorId": "2408",
        "name": "Maria Alvarez",
		"description":""
      },
      {
        "collectorId": "2409",
        "name": "Alicia Baldwin",
		"description":""
      },
      {
        "collectorId": "2410",
        "name": "Georgia Eads",
		"description":""
      },
      {
        "collectorId": "3417",
        "name": "Tameika Frazier",
		"description":""
      },
      {
        "collectorId": "3418",
        "name": "Patty Koch",
		"description":""
      },
      {
        "collectorId": "3419",
        "name": "Keiona Fenn",
		"description":""
      },
      {
        "collectorId": "8416",
        "name": "Elizabeth Smith",
		"description":""
      },
      {
        "collectorId": "2400",
        "name": "Jayce Creque",
		"description":""
      },
      {
        "collectorId": "2401",
        "name": "503",
		"description":""
      },
      {
        "collectorId": "2402",
        "name": "503B",
		"description":""
      },
      {
        "collectorId": "3403",
        "name": "111",
		"description":""
      },
      {
        "collectorId": "3404",
        "name": "112",
		"description":""
      },
      {
        "collectorId": "3405",
        "name": "113",
		"description":""
      },
      {
        "collectorId": "3406",
        "name": "121",
		"description":""
      },
      {
        "collectorId": "3407",
        "name": "122",
		"description":""
      },
      {
        "collectorId": "3408",
        "name": "211",
		"description":""
      },
      {
        "collectorId": "3409",
        "name": "212",
		"description":""
      },
      {
        "collectorId": "3410",
        "name": "221",
		"description":""
      },
      {
        "collectorId": "3411",
        "name": "222",
		"description":""
      },
      {
        "collectorId": "3412",
        "name": "131",
		"description":""
      },
      {
        "collectorId": "3413",
        "name": "141",
		"description":""
      },
      {
        "collectorId": "5416",
        "name": "110",
		"description":""
      },
      {
        "collectorId": "5417",
        "name": "130",
		"description":""
      },
      {
        "collectorId": "5418",
        "name": "140",
		"description":""
      },
      {
        "collectorId": "5419",
        "name": "Jose Navarro",
		"description":""
      },
      {
        "collectorId": "6416",
        "name": "114",
		"description":""
      },
      {
        "collectorId": "6417",
        "name": "124",
		"description":""
      },
      {
        "collectorId": "6418",
        "name": "125",
		"description":""
      },
      {
        "collectorId": "9416",
        "name": "120",
		"description":""
      },
      {
        "collectorId": "1400",
        "name": "Jevon Sullivan",
		"description":""
      },
      {
        "collectorId": "3414",
        "name": "Tamara Bryant",
		"description":""
      },
      {
        "collectorId": "3415",
        "name": "Kim Gray",
		"description":""
      },
      {
        "collectorId": "4416",
        "name": "KARSTENDELZER",
		"description":""
      },
      {
        "collectorId": "4417",
        "name": "MARYKNIGHT",
		"description":""
      },
      {
        "collectorId": "4418",
        "name": "TAMILECALLAWAY",
		"description":""
      },
      {
        "collectorId": "4419",
        "name": "MAHENDRASHRIVASTAVA",
		"description":""
      },
      {
        "collectorId": "4421",
        "name": "CHARLOTTESTEPHENS",
		"description":""
      },
      {
        "collectorId": "4422",
        "name": "MAURETTATHOMAS",
		"description":""
      },
      {
        "collectorId": "4423",
        "name": "KATEPATNETT",
		"description":""
      },
      {
        "collectorId": "7416",
        "name": "230",
		"description":""
      },
      {
        "collectorId": "7417",
        "name": "231",
		"description":""
      }
    ]});
        }
    }]
};
mocks.push(collectors);

var contactpointpurposes = {
    name: 'contactpointpurposes',
    mockRoute: '\/api\/v1\/supportdata\/contactpointpurposes',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"ContactPointPurpose": [
    {
        "code": "ASSISTANT",
        "name": "Assistant",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "BUSINESS",
        "name": "Business",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "HOME-BUSINESS",
        "name": "Home-Business",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "PERSONAL",
        "name": "Personal",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "EMERGENCY",
        "name": "Emergency",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "COLLECTIONS",
        "name": "Collections",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "DUNNING",
        "name": "Dunning",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "INVOICE-EMAIL",
        "name": "Invoice Email",
        "oracleCode": "",
        "description": ""
    }
]});
        }
    }]
};
mocks.push(contactpointpurposes);

var contacttypes = {
    name: 'contacttypes',
    mockRoute: '\/api\/v1\/supportdata\/contacttypes',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"ContactTypes": [
    {
        "code": "PRIV_PREF",
        "name": "Privacy Preference",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "EMAIL",
        "name": "E-mail",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "FAX",
        "name": "Fax",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "MAIL",
        "name": "Mail",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "TLX",
        "name": "Telex",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "ALL",
        "name": "All",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "CALL",
        "name": "Call",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "EDI",
        "name": "EDI",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "SMS",
        "name": "SMS",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "VISIT",
        "name": "Visit",
        "oracleCode": "",
        "description": ""
    },
    {
        "code": "WEB",
        "name": "WEB",
        "oracleCode": "",
        "description": ""
    }
]});
        }
    }]
};
mocks.push(contacttypes);

var creditclassifications = {
    name: 'creditclassifications',
    mockRoute: '\/api\/v1\/supportdata\/creditclassifications',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"creditClassifications": [
      {
        "value": "HIGH",
        "label": "High Risk"
      },
      {
        "value": "LOW",
        "label": "Low Risk"
      },
      {
        "value": "MODERATE",
        "label": "Moderate Risk"
      },
      {
        "value": "GUARANTOR",
        "label": "Guarantor"
      },
      {
        "value": "A",
        "label": "A"
      },
      {
        "value": "B",
        "label": "B"
      },
      {
        "value": "C",
        "label": "C"
      },
      {
        "value": "D",
        "label": "D"
      },
      {
        "value": "L",
        "label": "L"
      },
      {
        "value": "U",
        "label": "U"
      }
    ]});
        }
    }]
};
mocks.push(creditclassifications);


var creditmanagers = {
    name: 'creditmanagers',
    mockRoute: '\/api\/v1\/supportdata\/creditmanagers',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"creditAnalysts": [
      {
        "value": "100003800",
        "label": "Davis, Edward C (Ed)"
      },
      {
        "value": "100004300",
        "label": "Fitzpatrick, Paula"
      },
      {
        "value": "100003603",
        "label": "Bondman, Kelle J"
      },
      {
        "value": "100009314",
        "label": "Callaway, Tamile"
      },
      {
        "value": "100004043",
        "label": "Knight, Mary"
      },
      {
        "value": "100019486",
        "label": "Gray, Kimberly Nicole"
      },
      {
        "value": "100037554",
        "label": "Shrivastava, Mahendra Kumar"
      },
      {
        "value": "100055569",
        "label": "Prince, Jernita Laquise"
      },
      {
        "value": "100066581",
        "label": "Frazier, Tameika Sumpter"
      },
      {
        "value": "100066582",
        "label": "Jennings, Kelvin Torran"
      },
      {
        "value": "100066583",
        "label": "Fenn, Keiona Chatinna"
      },
      {
        "value": "100066587",
        "label": "Blake Thomas, Mauretta E"
      },
      {
        "value": "100080286",
        "label": "Navarro Salazar, Jose Luis"
      },
      {
        "value": "100087290",
        "label": "Palacios, Jesus"
      },
      {
        "value": "100101291",
        "label": "Jordan - CTR, Mackema"
      },
      {
        "value": "100088291",
        "label": "Smith, Elizabeth H"
      }
    ]});
        }
    }]
};
mocks.push(creditmanagers);


var distributorcategories = {
    name: 'distributorcategories',
    mockRoute: '\/api\/v1\/supportdata\/distributorcategories',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"distributorCategories": [
      {
        "value": "88 Parent",
        "label": "88 Parent Account"
      },
      {
        "value": "BR Customer",
        "label": "Bills Receivable Customer"
      },
      {
        "value": "Buying Group",
        "label": "Buying Group Account"
      },
      {
        "value": "Chain",
        "label": "Chain"
      },
      {
        "value": "Customer",
        "label": "Customer"
      },
      {
        "value": "Prospect",
        "label": "Prospect"
      },
      {
        "value": "Salesperson",
        "label": "Salesperson's Customer Account"
      },
      {
        "value": "True Parent",
        "label": "True Parent Account"
      }
    ]});
        }
    }]
};
mocks.push(distributorcategories);


var emailformattypes = {
    name: 'emailformattypes',
    mockRoute: '\/api\/v1\/supportdata\/emailformattypes',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"emailFormatTypes": [
      {
        "value": "MAILATTH",
        "label": "Text mail with HTML attachment"
      },
      {
        "value": "MAILHTML",
        "label": "HTML mail"
      },
      {
        "value": "MAILTEXT",
        "label": "Plain text mail"
      },
      {
        "value": "MAILHTM2",
        "label": "HTML mail without standard attachment"
      }
    ]});
        }
    }]
};
mocks.push(emailformattypes);


var freightassignments = {
    name: 'freightassignments',
    mockRoute: '\/api\/v1\/supportdata\/freightassignments',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"freightAssignments": [
      {
        "value": "1223345",
        "label": "1223345"
      },
      {
        "value": "Charge Factory",
        "label": "Charge Factory"
      },
      {
        "value": "Charge Agent",
        "label": "Charge Agent"
      },
      {
        "value": "Charge Distributor",
        "label": "Charge Distributor"
      }
    ]});
        }
    }]
};
mocks.push(freightassignments);


var freightterms = {
    name: 'freightterms',
    mockRoute: '\/api\/v1\/supportdata\/freightterms',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"freightTerms": [
      {
        "value": "Collect",
        "label": "Collect"
      },
      {
        "value": "Prepay & Add with cost conversion",
        "label": "Prepay & Add with cost conversion"
      },
      {
        "value": "Prepay & Add",
        "label": "Prepay & Add"
      },
      {
        "value": "Prepaid",
        "label": "Prepaid"
      },
      {
        "value": "To Be Determined",
        "label": "To Be Determined"
      },
      {
        "value": "Third Party Billing",
        "label": "Third Party Billing"
      },
      {
        "value": "Freight Allowed",
        "label": "Freight Allowed"
      },
      {
        "value": "Freight Not Allowed",
        "label": "Freight Not Allowed"
      },
      {
        "value": "Bill Air Freight Difference",
        "label": "Bill Air Freight Difference"
      }
    ]});
        }
    }]
};
mocks.push(freightterms);

var istaxregistrationnumberduplicated = {
    name: 'istaxregistrationnumberduplicated',
    mockRoute: '\/api\/v1\/supportdata\/taxregistrationnumduplicated\/\\d+$',
    testScope: 'success', 
    testScenario: 'istrue', 
    latency: '500-3000', 
    jsonTemplate: [{
        istrue: function() {
            return JSON.stringify({"TaxRegistrationNumberDuplicateCheck": {"isDuplicated": true}});
        },
        isfalse: function() {
            return JSON.stringify({"TaxRegistrationNumberDuplicateCheck": {"isDuplicated": false}});
        }
    }]
};
mocks.push(istaxregistrationnumberduplicated);

var operatingunits = {
    name: 'operatingunits',
    mockRoute: '\/api\/v1\/supportdata\/operatingunits',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"operatingUnits": [
      {
        "value": "US",
        "label": "USA"
      },
      {
        "value": "CA",
        "label": "CANADA"
      },
      {
        "value": "MX",
        "label": "MEXICO"
      }
    ]});
        }
    }]
};
mocks.push(operatingunits);


var phonelinetypes = {
    name: 'phonelinetypes',
    mockRoute: '\/api\/v1\/supportdata\/phonelinetypes',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"phoneLineTypes": [
      {
        "value": "Fax",
        "label": "Fax"
      },
      {
        "value": "Telephone",
        "label": "Telephone"
      },
      {
        "value": "Mobile",
        "label": "Mobile"
      },
      {
        "value": "Pager",
        "label": "Pager"
      },
      {
        "value": "Voice Mail",
        "label": "Voice Mail"
      }
    ]});
        }
    }]
};
mocks.push(phonelinetypes);


var saleschannels = {
    name: 'saleschannels',
    mockRoute: '\/api\/v1\/supportdata\/saleschannels',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"salesChannels": [
      {
        "value": "FI",
        "label": "Foreign/International"
      },
      {
        "value": "SP",
        "label": "Salesperson"
      },
      {
        "value": "IC",
        "label": "Intercompany"
      },
      {
        "value": "CN",
        "label": "Contractor"
      },
      {
        "value": "AO",
        "label": "All Other"
      },
      {
        "value": "CA",
        "label": "Catalog"
      },
      {
        "value": "DR",
        "label": "C&I Direct"
      },
      {
        "value": "ED",
        "label": "Electrical Distributor"
      },
      {
        "value": "ES",
        "label": "ESCO"
      },
      {
        "value": "HC",
        "label": "Home Centers"
      },
      {
        "value": "IN",
        "label": "DOT/Infrastructure"
      },
      {
        "value": "MD",
        "label": "Media"
      },
      {
        "value": "OE",
        "label": "OEM"
      },
      {
        "value": "SR",
        "label": "Showroom"
      },
      {
        "value": "UA",
        "label": "Utility"
      },
      {
        "value": "EMAIL_CENTER",
        "label": "Email Center"
      },
      {
        "value": "DI",
        "label": "Digital Retail"
      }
    ]});
        }
    }]
};
mocks.push(saleschannels);


var taxcodes = {
    name: 'taxcodes',
    mockRoute: '\/api\/v1\/supportdata\/taxcodes',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"taxCodes": [
      {
        "value": "CND VAT",
        "label": "Canadian VAT Tax Group"
      },
      {
        "value": "Exempt",
        "label": "Exempt"
      },
      {
        "value": "Exempt HLP",
        "label": "Exempt"
      },
      {
        "value": "GST",
        "label": "Goods and Services Tax"
      },
      {
        "value": "GST Ad-Hoc",
        "label": "GST for Tax Only Transactions"
      },
      {
        "value": "GST HLP",
        "label": "Goods and Services Tax"
      },
      {
        "value": "GST HLP Ad-Hoc",
        "label": "GST for Tax Only Transactions"
      },
      {
        "value": "GST-AP",
        "label": "GST-AP"
      },
      {
        "value": "HST Ad-Hoc",
        "label": "HST for Tax Only Transactions"
      },
      {
        "value": "HST HLP Ad-Hoc",
        "label": "HST for Tax Only Transactions"
      },
      {
        "value": "HST-AP",
        "label": "HST-AP"
      },
      {
        "value": "HSTBC",
        "label": "HST British Columbia"
      },
      {
        "value": "HSTNB",
        "label": "HST New Brunswick"
      },
      {
        "value": "HSTNB",
        "label": "HST New Brunswick"
      },
      {
        "value": "HSTNB HLP",
        "label": "HST New Brunswick"
      },
      {
        "value": "HSTNB HLP",
        "label": "HST New Brunswick"
      },
      {
        "value": "HSTNB HLP",
        "label": "HST New Brunswick"
      },
      {
        "value": "HSTNL",
        "label": "HST Newfoundland and Labrador"
      },
      {
        "value": "HSTNL HLP",
        "label": "HST Newfoundland and Labrador"
      },
      {
        "value": "HSTNS",
        "label": "HST Nova Scotia"
      },
      {
        "value": "HSTNS HLP",
        "label": "HST Nova Scotia"
      },
      {
        "value": "HSTON",
        "label": "HST Ontario"
      },
      {
        "value": "HSTON HLP",
        "label": "HST Ontario"
      },
      {
        "value": "HSTPE",
        "label": "HST Prince Edward Island"
      },
      {
        "value": "HSTPE",
        "label": "HST Prince Edward Island"
      },
      {
        "value": "PST BC",
        "label": "Provincial Sales Tax"
      },
      {
        "value": "PST HLP BC",
        "label": "Provincial Sales Tax"
      },
      {
        "value": "PST HLP BC Ad-Hoc",
        "label": "Provincial Sales Tax for Tax Only Transactions"
      },
      {
        "value": "PST HLP MB",
        "label": "Provincial Sales Tax"
      },
      {
        "value": "PST HLP MB",
        "label": "Provincial Sales Tax"
      },
      {
        "value": "PST HLP MB Ad-Hoc",
        "label": "Provincial Sales Tax for Tax Only Transactions"
      },
      {
        "value": "PST HLP NS Ad-Hoc",
        "label": "Provincial Sales Tax for Tax Only Transactions"
      },
      {
        "value": "PST HLP ON Ad-Hoc",
        "label": "Provincial Sales Tax for Tax Only Transactions"
      },
      {
        "value": "PST HLP PE",
        "label": "Provincial Sales Tax"
      },
      {
        "value": "PST HLP PE Ad-Hoc",
        "label": "Provincial Sales Tax for Tax Only Transactions"
      },
      {
        "value": "PST HLP SK",
        "label": "Provincial Sales Tax"
      },
      {
        "value": "PST HLP SK",
        "label": "Provincial Sales Tax"
      },
      {
        "value": "PST HLP SK Ad-Hoc",
        "label": "Provincial Sales Tax for Tax Only Transactions"
      },
      {
        "value": "PST-AP",
        "label": "PST-AP"
      },
      {
        "value": "QST",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST Ad-Hoc",
        "label": "QST for Tax Only Transactions"
      },
      {
        "value": "QST HLP",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST HLP",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST HLP",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST HLP",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST HLP",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST HLP",
        "label": "Quebec Sales Tax"
      },
      {
        "value": "QST HLP Ad-Hoc",
        "label": "QST for Tax Only Transactions"
      },
      {
        "value": "QST-AP",
        "label": "QST-AP"
      },
      {
        "value": "Exempt",
        "label": "Exempt"
      },
      {
        "value": "MEX VAT",
        "label": "Mexican Tax Group"
      },
      {
        "value": "VAT",
        "label": "VAT"
      },
      {
        "value": "VAT 15%",
        "label": "Vat 15%-OUTPUT"
      },
      {
        "value": "VAT 16%",
        "label": "Vat 16%-OUTPUT"
      },
      {
        "value": "VAT Ad-Hoc",
        "label": "VAT for Tax Only Transactions"
      },
      {
        "value": "VAT HSA 16%",
        "label": "Vat Hsa 16%-OUTPUT"
      },
      {
        "value": "VAT TAX LR",
        "label": "VAT TAX LR"
      },
      {
        "value": "VAT TAX LR",
        "label": "VAT TAX LR"
      },
      {
        "value": "Ad-Hoc",
        "label": "Used for Tax Only Transactions"
      },
      {
        "value": "Exempt",
        "label": "No Sales tax will be assessed to the customer."
      },
      {
        "value": "Location",
        "label": "Location Based Sales Tax"
      }
    ]});
        }
    }]
};
mocks.push(taxcodes);


var warehouses = {
    name: 'warehouses',
    mockRoute: '\/api\/v1\/supportdata\/warehouses',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"facilities": [
      {
        "operatingUnit": "CA",
        "warehouseId": 8,
        "name": "CAN1 ITEM MASTER"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 15,
        "name": "LACHINE CAN"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 20,
        "name": "ST. HYACINTHE CAN"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 21,
        "name": "ST. LAURENT CAN"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 4045,
        "name": "CANADIAN EAST REGIONAL DISTRIBUTION CENTER (CEDC)"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 4078,
        "name": "CALGARY CAN (FW)"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 5837,
        "name": "BRAMPTON CAN (FW)"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 5838,
        "name": "ST LAURENT CAN (FW)"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 6017,
        "name": "CAN ITEM VALID ORG"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 6117,
        "name": "RICHMOND HILL CAN"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 6377,
        "name": "SENSOR SWITCH CAN (FW)"
      },
      {
        "operatingUnit": "CA",
        "warehouseId": 6537,
        "name": "CENTRAL CANADA DISTRIBUTION CENTER"
      },
      {
        "operatingUnit": "MX",
        "warehouseId": 16,
        "name": "MEX1 ITEM MASTER"
      },
      {
        "operatingUnit": "MX",
        "warehouseId": 18,
        "name": "MONTERREY MEX (PRODUCTOS)"
      },
      {
        "operatingUnit": "MX",
        "warehouseId": 4044,
        "name": "LITHONIA LIGHTING - MEXICO OPS (XDC)"
      },
      {
        "operatingUnit": "MX",
        "warehouseId": 4937,
        "name": "HOLOPHANE, S.A. DE C.V."
      },
      {
        "operatingUnit": "MX",
        "warehouseId": 5977,
        "name": "HOLOPHANE, S.A. DE C.V. (PRODUCTOS)"
      },
      {
        "operatingUnit": "MX",
        "warehouseId": 6037,
        "name": "MEX ITEM VALID ORG"
      },
      {
        "operatingUnit": "MX",
        "warehouseId": 6097,
        "name": "AEL MEZQUITAL (PRODUCTOS)"
      },
      {
        "operatingUnit": "MX",
        "warehouseId": 6337,
        "name": "MATAMOROS MEX (PRODUCTOS)"
      },
      {
        "operatingUnit": "MX",
        "warehouseId": 6617,
        "name": "ACUITY BRANDS - MEXICO OPS (172)"
      },
      {
        "operatingUnit": "OU_HOLOPHANE_USA",
        "warehouseId": 65,
        "name": "AUSTIN TX"
      },
      {
        "operatingUnit": "OU_HOLOPHANE_USA",
        "warehouseId": 105,
        "name": "HOL_USA ITEM MASTER"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 9,
        "name": "CENTRAL FUNCTIONS"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 10,
        "name": "CITY OF INDUSTRY CA"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 11,
        "name": "COCHRAN GA"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 12,
        "name": "CONYERS GA"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 13,
        "name": "CRAWFORDSVILLE IN"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 14,
        "name": "DECATUR GA"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 17,
        "name": "MONTERREY MEX (COM)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 19,
        "name": "NORTHBROOK IL"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 22,
        "name": "SYLMAR CA (HYDREL)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 23,
        "name": "GLOBAL ITEM MASTER (aka USA1)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 24,
        "name": "VERMILION OH"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 25,
        "name": "ORG 54"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 45,
        "name": "PACIFIC COAST DISTRIBUTION CENTER (PCDC)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 3997,
        "name": "GUADALUPE - MEXICO"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4037,
        "name": "WEST REGIONAL DISTRIBUTION CENTER (WRDC)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4038,
        "name": "BAINBRIDGE GA (AMERICAN ELECTRIC)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4039,
        "name": "COCHRAN DISTRIBUTION CENTER"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4040,
        "name": "SOUTHEAST REGIONAL DISTRIBUTION CENTER (SEDC)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4041,
        "name": "MIDWEST REGIONAL DISTRIBUTION CENTER (MWDC)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4042,
        "name": "NORTHEAST REGIONAL DISTRIBUTION CENTER (NEDC)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4043,
        "name": "SOUTHWEST REGIONAL DISTRIBUTION CENTER (SWDC)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4046,
        "name": "VENDOR ASSIGNED SHIPPING ORGANIZATION (DSO)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4047,
        "name": "PHOENIX AZ (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4048,
        "name": "SAN JOSE CA (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4049,
        "name": "HONOLULU HI (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4050,
        "name": "MANCHESTER NH (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4051,
        "name": "HOUSTON TX (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4052,
        "name": "SALT LAKE CITY UT (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4053,
        "name": "IOTA (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4054,
        "name": "BERKELEY CA (PEERLESS)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4055,
        "name": "AEL MEZQUITAL PLANT (MEQ)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4056,
        "name": "DROP SHIP PLANT"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4057,
        "name": "CONYERS GA (SMC)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4077,
        "name": "WCSLC"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 4257,
        "name": "MATAMOROS MEX (COM)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 5817,
        "name": "RELOC GA"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 5997,
        "name": "RECALL"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6057,
        "name": "NEWARK OH"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6077,
        "name": "UTICA OH"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6217,
        "name": "EDISON NJ (EPF)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6357,
        "name": "SENSOR SWITCH (SSI)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6397,
        "name": "LIGHTING CONTROL AND DESIGN"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6497,
        "name": "WINONA"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6517,
        "name": "SACRAMENTO CA"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6557,
        "name": "FAIRVIEW PA"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6877,
        "name": "DES PLAINES, IL"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 6897,
        "name": "FISHERS, IN"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 7177,
        "name": "LEVITON, CA (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 7197,
        "name": "ATLANTIC, MA (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 7198,
        "name": "FINELITE, CA (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 7199,
        "name": "EL PASO, TX (FW)"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 7217,
        "name": "APODACA, MX"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 7237,
        "name": "WILMINGTON RETURNS"
      },
      {
        "operatingUnit": "US",
        "warehouseId": 7257,
        "name": "OCEANSIDE"
      }
    ]});
        }
    }]
};
mocks.push(warehouses);


var websitetypes = {
    name: 'websitetypes',
    mockRoute: '\/api\/v1\/supportdata\/websitetypes',
    testScope: 'notfound', 
    testScenario: 'nodata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"websites": [
      {
        "value": "HOMEPAGE",
        "label": "Home Page"
      },
      {
        "value": "MARKETINGURL",
        "label": "Marketing URL"
      },
      {
        "value": "SALESURL",
        "label": "Sales URL"
      },
      {
        "value": "SUPPORTURL",
        "label": "Support URL"
      },
      {
        "value": "PORTAL-INV",
        "label": "Portal - Invoicing"
      },
      {
        "value": "PORTAL-NON-I",
        "label": "Portal - Non-Invoicing"
      }
    ]});
        }
    }]
};
mocks.push(websitetypes);


var customerfullcreate = {
    name: 'customerfullcreate',
    mockRoute: '\/api\/v1\/customerfull',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"foo":"bar"});
        }
    }]
};
mocks.push(customerfullcreate);


var customerfullread = {
    name: 'customerfullread',
    mockRoute: '\/api\/v1\/customerfull\/\\d+$',
    testScope: 'success', 
    testScenario: 'alldata', 
    latency: '500-3000', 
    jsonTemplate: [{
        alldata: function() {
            return JSON.stringify({"foo":"bar"});
        }
    }]
};
mocks.push(customerfullread);



exports.mocks = mocks;
