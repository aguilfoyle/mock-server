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
        "value": "1000",
        "label": "100"
      },
      {
        "value": "1001",
        "label": "200"
      },
      {
        "value": "1002",
        "label": "210"
      },
      {
        "value": "1003",
        "label": "220"
      },
      {
        "value": "1004",
        "label": "300"
      },
      {
        "value": "1005",
        "label": "400"
      },
      {
        "value": "1006",
        "label": "500"
      },
      {
        "value": "1007",
        "label": "600"
      },
      {
        "value": "1008",
        "label": "700"
      },
      {
        "value": "1009",
        "label": "710"
      },
      {
        "value": "1010",
        "label": "720"
      },
      {
        "value": "1011",
        "label": "730"
      },
      {
        "value": "1012",
        "label": "740"
      },
      {
        "value": "1013",
        "label": "750"
      },
      {
        "value": "1014",
        "label": "800"
      },
      {
        "value": "1015",
        "label": "810"
      },
      {
        "value": "1016",
        "label": "900"
      },
      {
        "value": "1017",
        "label": "910"
      },
      {
        "value": "1018",
        "label": "920"
      },
      {
        "value": "1019",
        "label": "930"
      },
      {
        "value": "1020",
        "label": "988"
      },
      {
        "value": "1021",
        "label": "BOGUS"
      },
      {
        "value": "1040",
        "label": "610"
      },
      {
        "value": "1",
        "label": "Default Collector"
      },
      {
        "value": "1101",
        "label": "770"
      },
      {
        "value": "1380",
        "label": "Mark Adkins"
      },
      {
        "value": "1260",
        "label": "602"
      },
      {
        "value": "1240",
        "label": "402"
      },
      {
        "value": "1280",
        "label": "403"
      },
      {
        "value": "1281",
        "label": "603"
      },
      {
        "value": "1160",
        "label": "Teresa Davis"
      },
      {
        "value": "1161",
        "label": "Tammy Archer"
      },
      {
        "value": "1162",
        "label": "Tina Hobbs"
      },
      {
        "value": "1163",
        "label": "Katrina Wood"
      },
      {
        "value": "1164",
        "label": "Lajuana Garcia"
      },
      {
        "value": "1166",
        "label": "Elaine Powers"
      },
      {
        "value": "1167",
        "label": "Iris Sance"
      },
      {
        "value": "1168",
        "label": "Annmarie Patterson"
      },
      {
        "value": "1080",
        "label": "760"
      },
      {
        "value": "1140",
        "label": "101"
      },
      {
        "value": "1141",
        "label": "102"
      },
      {
        "value": "1142",
        "label": "201"
      },
      {
        "value": "1143",
        "label": "301"
      },
      {
        "value": "1144",
        "label": "302"
      },
      {
        "value": "1145",
        "label": "401"
      },
      {
        "value": "1146",
        "label": "501"
      },
      {
        "value": "1147",
        "label": "601"
      },
      {
        "value": "1148",
        "label": "701"
      },
      {
        "value": "1149",
        "label": "123"
      },
      {
        "value": "1150",
        "label": "731"
      },
      {
        "value": "1151",
        "label": "741"
      },
      {
        "value": "1152",
        "label": "751"
      },
      {
        "value": "1153",
        "label": "771"
      },
      {
        "value": "1180",
        "label": "Susan Hodges"
      },
      {
        "value": "1220",
        "label": "Paula Fitzpatrick"
      },
      {
        "value": "1320",
        "label": "404"
      },
      {
        "value": "1321",
        "label": "604"
      },
      {
        "value": "1060",
        "label": "688"
      },
      {
        "value": "1061",
        "label": "788"
      },
      {
        "value": "1120",
        "label": "611"
      },
      {
        "value": "1121",
        "label": "612"
      },
      {
        "value": "1340",
        "label": "Eric Hall"
      },
      {
        "value": "2403",
        "label": "Sharon Sawyer"
      },
      {
        "value": "2404",
        "label": "Kelle Bondman"
      },
      {
        "value": "2405",
        "label": "Andrea Marks"
      },
      {
        "value": "2406",
        "label": "Tara Coley"
      },
      {
        "value": "2407",
        "label": "Jan Thomas"
      },
      {
        "value": "2408",
        "label": "Maria Alvarez"
      },
      {
        "value": "2409",
        "label": "Alicia Baldwin"
      },
      {
        "value": "2410",
        "label": "Georgia Eads"
      },
      {
        "value": "3417",
        "label": "Tameika Frazier"
      },
      {
        "value": "3418",
        "label": "Patty Koch"
      },
      {
        "value": "3419",
        "label": "Keiona Fenn"
      },
      {
        "value": "8416",
        "label": "Elizabeth Smith"
      },
      {
        "value": "2400",
        "label": "Jayce Creque"
      },
      {
        "value": "2401",
        "label": "503"
      },
      {
        "value": "2402",
        "label": "503B"
      },
      {
        "value": "3403",
        "label": "111"
      },
      {
        "value": "3404",
        "label": "112"
      },
      {
        "value": "3405",
        "label": "113"
      },
      {
        "value": "3406",
        "label": "121"
      },
      {
        "value": "3407",
        "label": "122"
      },
      {
        "value": "3408",
        "label": "211"
      },
      {
        "value": "3409",
        "label": "212"
      },
      {
        "value": "3410",
        "label": "221"
      },
      {
        "value": "3411",
        "label": "222"
      },
      {
        "value": "3412",
        "label": "131"
      },
      {
        "value": "3413",
        "label": "141"
      },
      {
        "value": "5416",
        "label": "110"
      },
      {
        "value": "5417",
        "label": "130"
      },
      {
        "value": "5418",
        "label": "140"
      },
      {
        "value": "5419",
        "label": "Jose Navarro"
      },
      {
        "value": "6416",
        "label": "114"
      },
      {
        "value": "6417",
        "label": "124"
      },
      {
        "value": "6418",
        "label": "125"
      },
      {
        "value": "9416",
        "label": "120"
      },
      {
        "value": "1400",
        "label": "Jevon Sullivan"
      },
      {
        "value": "3414",
        "label": "Tamara Bryant"
      },
      {
        "value": "3415",
        "label": "Kim Gray"
      },
      {
        "value": "4416",
        "label": "KARSTENDELZER"
      },
      {
        "value": "4417",
        "label": "MARYKNIGHT"
      },
      {
        "value": "4418",
        "label": "TAMILECALLAWAY"
      },
      {
        "value": "4419",
        "label": "MAHENDRASHRIVASTAVA"
      },
      {
        "value": "4421",
        "label": "CHARLOTTESTEPHENS"
      },
      {
        "value": "4422",
        "label": "MAURETTATHOMAS"
      },
      {
        "value": "4423",
        "label": "KATEPATNETT"
      },
      {
        "value": "7416",
        "label": "230"
      },
      {
        "value": "7417",
        "label": "231"
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
