const axios = require('axios');

// provide index!!
const index = "attack-data";
const fileName = "attack-data"

const featureData = require(`../output/${fileName}.json`)
// console.log(featureData.length);

const init = async () => {
    const url = `https://stagingapi.syber1-dev.com/search-service-staging/${index}/docs`;
    featureData.forEach(async(payload)=>{
        try {
            const res = await axios.post(url, payload);
            // console.log(res.data);
        } catch (error) {
            console.error(error)
        }
    })
}

init();