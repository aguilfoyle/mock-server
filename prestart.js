function _removeJsonStore () {
    console.log('Attempting to clear store.json');
    var fs = require('fs');
    var jsonFile = './store.json';
    fs.exists(jsonFile, function(exists) {
        if(exists) {
            console.log('File exists. clearing now ...');
            fs.writeFile(jsonFile, '{}', function(err) {
                if(err) {
                    console.log('Unable to clear store.json ', err);
                }
                console.log("The store.json was cleared!");
            });
        } else {
            console.log('Store.json not found, no need to clear.');
        }
    });
}

function preStartTask () {
    _removeJsonStore();
}

preStartTask();