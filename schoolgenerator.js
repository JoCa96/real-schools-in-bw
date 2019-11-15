const { schoolType, prefix } = require('./school-names.js');
const cities = require('./cities.js');


function getSchoolName({city}) {
    const i1 = Math.round(Math.random() * (prefix.length - 1));
    const i2 = Math.round(Math.random() * (schoolType.length - 1));

    const ran = Math.random();
    if (ran < 0.50) {
        return `${schoolType[i2]} ${city}`;
    } else if (ran < 0.65) {
        return `${schoolType[i2]} in ${city}`;
    } 
    return `${prefix[i1]}${schoolType[i2]} ${city}`;
}

function getCity() {
    // select random zip
    const index = Math.round(Math.random() * (cities.length - 1));
    const { zip, city } = cities[index];

    // if range select random between
    let zipRange = zip.split('–')
    if (zipRange.length == 2) {
        return { city, zip: '' + getNumberBetween(zipRange) }
    }
    zipRange = zip.split('-')
    if (zipRange.length == 2) {
        return { city, zip: '' + getNumberBetween(zipRange) }
    }

    return { zip, city };
}


function getNumberBetween([first, last]) {
    return +first + Math.round(Math.random() * (last - first));
}


for (let i = 0; i < 200; i++) {
    console.log(getSchoolName(getCity()));
}