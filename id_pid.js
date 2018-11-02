conn = new Mongo();
db = conn.getDB("hw4");

db.collection.createIndex({
	pid:1
});
printjson(db.collection.getIndexes());