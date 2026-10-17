const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = 3000;

const admin = require("firebase-admin");
// const serviceAccount = require("./firebase-adminsdk.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

const { initializeApp, cert } = require("firebase-admin/app"); 
const { getAuth } = require("firebase-admin/auth"); 
const serviceAccount = require("./firebase-adminsdk.json"); 
initializeApp({ credential: cert(serviceAccount), }); 

app.use(cors());
app.use(express.json());

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization; 
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const realToken = token?.replace('Bearer ', '');

  if (!realToken) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try{
    const decodedToken = await getAuth().verifyIdToken(realToken);
    req.decodedEmail = decodedToken.email;
    next();    
  }
  catch (error) {
    console.log('Verify error:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// tanvirfahim6939_db_user
// 8XzYp3kTRHEPWfmN

const uri = "mongodb+srv://tanvirfahim6939_db_user:8XzYp3kTRHEPWfmN@cluster0.iobktmp.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', (req, res) => {
  res.send('Hello tanvir3!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    const database = client.db('test');
    const users = database.collection('users');
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    //users 
    app.get('/users', verifyToken, async (req, res) => {
      const email = req.query.email;

      if (email !== req.decodedEmail) {
        res.status(403).json({ message: 'Forbidden' });
        return;
      }
      const usersResult = await users.find({email: email}).toArray();
      res.json(usersResult);
    });

    app.get('/users/:id', async (req, res) => {
      const user = await users.findOne({ _id: new ObjectId(req.params.id) });
      res.json(user);
    });

    app.post('/users', async (req, res) => {
      const { name, email } = req.body;
      const user = { name, email };
      const insertResult = await users.insertOne(user);
      res.json(insertResult);
    });

    app.put('/users/:id', async (req, res) => {
      const {name} = req.body;
      const updateResult = await users.updateOne({ _id: new ObjectId(req.params.id) }, { $set: { name: name } });
      res.json(updateResult);
    });

    app.delete('/users/:id', async (req, res) => {
      const deleteResult = await users.deleteOne({ _id: new ObjectId(req.params.id) });
      res.json(deleteResult);
    });

  } finally {
    //  await client.close();
  }
}
run().catch(console.dir);
