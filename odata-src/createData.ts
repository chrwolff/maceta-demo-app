import connect from "./connect";
const randomWords = require("random-words");
const randomTimestamp = require("random-hammertime");
const generateName = require('sillyname');

async function create() {
  try {
    const db = await connect();
    await db.collection("Posts").drop();
    await db.collection("Posts").insertMany(getRandomDocs());
  } catch (e) {
    console.error(`Document creation failed: ${e}`);
  }
  process.exit();
}

function getRandomDocs() {
  let docs = [];
  for (let i = 0; i < 5; ++i) {
    docs.push({
      userName: generateName(),
      text: randomWords({ min: 10, max: 100, join: " " }),
      time: randomTimestamp()
    });
  }
  return docs;
}

create();
