const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']


/**Using forEach to console.log names */
names.forEach(name => {
    console.log(name)
});

/**Using for each to console corresponding name with province */
provinces.forEach((province,index)=>{
    name = names[index]
    console.log("("+name+") " + province)
});


/**Upper Case with map */
const UpperCaseArray = []
provinces.map((province)=>{
    UpperCaseArray.push(province.toUpperCase())
})
console.log(UpperCaseArray)


/**Map to get number of characters as Array */
const NumCharacters = []
names.map((name)=>{
    NumCharacters.push(name.length)
})
console.log(NumCharacters)


/**Sort provinces alphabetically */
const sortedProvinces = provinces.sort();

//Return filteredProvinces
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length)


const checks = names.map((name) => name.toLowerCase().includes('s'))
console.log(checks);
const hasSInName = checks.some((value) => value);
console.log(hasSInName);


const newObject = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
  }, {});

  console.log(newObject);


