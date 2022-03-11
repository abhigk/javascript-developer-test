const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;
  let results = [];
  await Promise.all(urls.map(async url=>{
    let response = await httpGet(url);
    let bodyData = JSON.parse(response.body);
    let obj ;
    if(response.status === 200){
      obj = {'Arnie Quote':bodyData.message}
    }else{
      obj = {'FAILURE':bodyData.message}
    }
    results.push(obj);
  }));

  return results;
};

module.exports = {
  getArnieQuotes,
};
