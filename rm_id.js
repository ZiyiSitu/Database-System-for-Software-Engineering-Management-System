conn = new Mongo();
db = conn.getDB("hw4");

db.collection.dropIndexes();
printjson(db.collection.getIndexes());
