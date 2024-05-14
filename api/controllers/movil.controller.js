const axios = require('axios').default;


const getAllInformation = async (req, res) => {
  try {
    const response = await axios.get('https://lxelctvrnx7xs4eoxujkgqxk6u0khkdy.lambda-url.us-east-1.on.aws/')

    res.status(200).json({ data: response.data[0].geojson.features });
  } catch(error){
    res.status(500).json({error: error.message});
  }
};

export const methods = {
  getAllInformation
};
