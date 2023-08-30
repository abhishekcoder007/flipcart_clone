const paytmchecksum =require('../paytm/PaytmChecksum.js');

async function handlepaytm (){
    const paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
    try {
        const params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.json(params);
    } catch (error) {
        console.log(error);
    }
}

module.exports=handlepaytm