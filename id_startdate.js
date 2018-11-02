conn = new Mongo();
db = conn.getDB("hw4");

db.collection.createIndex({
	"tasks.startdate":1
});
printjson(db.collection.getIndexes());