conn = new Mongo();
db = conn.getDB("hw4");

for (var i = 0; i < 5; i++) {
	var id = Math.floor(Math.random() * 100000);
	var inc_id = Math.min(id + 10000, 99999);

	var year = Math.floor(Math.random() * 10) + 2010;
	var month = (Math.floor(Math.random() * 12) + 1).toString();
	var day = (Math.floor(Math.random() * 28) + 1).toString();

	var start_from_year = (year).toString();
	var start_to_year = (Math.min(year + 2, 2019));

	var end_from_year = (year + 10).toString();
	var end_to_year = (Math.min(year + 10 + 2, 2029));

	var start_from = start_from_year + "-" + month + "-" + day;
	var start_to = start_to_year + "-" + month + "-" + day;
	var end_from = end_from_year + "-" + month + "-" + day;
	var end_to = end_to_year + "-" + month + "-" + day;

	var cursor = db.collection.find({
		pid: {$gte:id, $lte:inc_id},
		tasks: {$elemMatch: {
			startdate: {$gte: start_from, $lte:start_to}, 
			enddate: {$gte: end_from, $lte:end_to},
			priority: "Highest"
		}}
	}).sort({name:1}).limit(3);

	while (cursor.hasNext()) {
		printjson("Project ID: " + cursor.next().pid);
	}
	print("\n\n");
}





for (var i = 0; i < 5; i++) {
	var id = Math.floor(Math.random() * 100000);
	var inc_id = Math.min(id + 10000, 99999);

	var year = Math.floor(Math.random() * 10) + 2010;
	var month = (Math.floor(Math.random() * 12) + 1).toString();
	var day = (Math.floor(Math.random() * 28) + 1).toString();

	var start_from_year = (year).toString();
	var start_to_year = (Math.min(year + 2, 2019));

	var end_from_year = (year + 10).toString();
	var end_to_year = (Math.min(year + 10 + 2, 2029));

	var start_from = start_from_year + "-" + month + "-" + day;
	var start_to = start_to_year + "-" + month + "-" + day;
	var end_from = end_from_year + "-" + month + "-" + day;
	var end_to = end_to_year + "-" + month + "-" + day;

	var cursor = db.collection.find({
		pid: {$gte:id, $lte:inc_id},
		tasks: {$elemMatch: {
			startdate: {$gte: start_from, $lte:start_to}, 
			status: "Closed"
		}}
	}).sort({name:1}).limit(3);

	while (cursor.hasNext()) {
		printjson("Project ID: " + cursor.next().pid);
	}
	print("\n\n");
}






for (var i = 0; i < 5; i++) {
	var id = Math.floor(Math.random() * 100000);
	var inc_id = Math.min(id + 10000, 99999);

	var year = Math.floor(Math.random() * 10) + 2010;
	var month = (Math.floor(Math.random() * 12) + 1).toString();
	var day = (Math.floor(Math.random() * 28) + 1).toString();

	var start_from_year = (year).toString();
	var start_to_year = (Math.min(year + 2, 2019));

	var end_from_year = (year + 10).toString();
	var end_to_year = (Math.min(year + 10 + 2, 2029));

	var start_from = start_from_year + "-" + month + "-" + day;
	var start_to = start_to_year + "-" + month + "-" + day;
	var end_from = end_from_year + "-" + month + "-" + day;
	var end_to = end_to_year + "-" + month + "-" + day;

	var cursor = db.collection.find({
		pid: {$gte:id, $lte:inc_id},
		tasks: {$elemMatch: {
			priority: "Normal",
			status: "On hold"
		}}
	}).sort({name:1}).limit(3);

	while (cursor.hasNext()) {
		printjson("Project ID: " + cursor.next().pid);
	}
	print("\n\n");
}





for (var i = 0; i < 5; i++) {
	var id = Math.floor(Math.random() * 100000);
	var inc_id = Math.min(id + 10000, 99999);

	var year = Math.floor(Math.random() * 10) + 2010;
	var month = (Math.floor(Math.random() * 12) + 1).toString();
	var day = (Math.floor(Math.random() * 28) + 1).toString();

	var start_from_year = (year).toString();
	var start_to_year = (Math.min(year + 2, 2019));

	var end_from_year = (year + 10).toString();
	var end_to_year = (Math.min(year + 10 + 2, 2029));

	var start_from = start_from_year + "-" + month + "-" + day;
	var start_to = start_to_year + "-" + month + "-" + day;
	var end_from = end_from_year + "-" + month + "-" + day;
	var end_to = end_to_year + "-" + month + "-" + day;

	var cursor = db.collection.find({
		pid: {$gte:id, $lte:inc_id},
		tasks: {$elemMatch: {
			startdate: {$gte: start_from, $lte:start_to}, 
			enddate: {$gte: end_from, $lte:end_to},
			"members.organization":"Engineering"
		}}
	}).sort({name:1}).limit(3);

	while (cursor.hasNext()) {
		printjson("Project ID: " + cursor.next().pid);
	}
	print("\n\n");
}





