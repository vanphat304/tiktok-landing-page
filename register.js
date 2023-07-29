

const BASE_URL = 'https://sheetdb.io/api/v1/9gxi3bn1ic1gm';
const access_token = 'nyrfu56rbgosztobhi2c826wnm3tqrbev0q0ns4s'

const registerLiveStream = async (data) => {
  try {


    const response = await axios.post(BASE_URL,{
        data 
    }, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    })

    return response;
  } catch (errors) {
    console.error(errors);
  }
};
