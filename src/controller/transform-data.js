const fs = require('fs');

const fileName = ""
const featureData = require(`../input/${fileName}.json`);

const updatedFeatureData = featureData.map((ele)=>{
    const id = ele["_id"]["$oid"];
    // const index = ele["type"];

    delete ele["_id"];
    // delete ele["type"];

    return {id, ...ele};
    // return {id, ...ele, index};
})

fs.writeFileSync(`src/output/${fileName}.json`, JSON.stringify(updatedFeatureData, null, 2));





// to iterate through files of specified folder

// const folder = 'E:/iauro/data_engineering/search_service/src/input/'
// fs.readdir(folder, (err, files)=>{
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }

//     files.forEach(function (file) {
//         console.log(file); 
//     });
// })