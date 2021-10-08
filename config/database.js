require("dotenv").config();
module.exports = {
  // 'url': 'mongodb+srv://admin:admin@listenup.mecwk.gcp.mongodb.net/test2?retryWrites=true&w=majority'
  // 'url': 'mongodb://localhost:27017/complaint'
  'url': process.env.ATLAS_URL
};
