const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uwkfjus.mongodb.net/testDB?retryWrites=true&w=majority`;
//IMPORTANT: Using a TEST DATABASE not the real one YET!!!!!!!

const PORT = process.env.PORT || 8080;

const JWT_KEY_SECRET = process.env.JWT_KEY_SECRET;

module.exports = { DATABASE_URL, PORT, JWT_KEY_SECRET };
//--------------------bc the key and value are the same
