conn = new Mongo();
db = conn.getDB("hw4");

for (var i = 0; i < 10; i++) {
	var id = Math.floor(Math.random() * 90000);
	var inc_id = Math.min(id + 10000, 99999);

	var year = Math.floor(Math.random() * 10) + 2010;
	var month = (Math.floor(Math.random() * 12) + 1).toString();
	var day = (Math.floor(Math.random() * 28) + 1).toString();

	var start_from_year = (year).toString();
	var start_to_year = (Math.min(year + 1, 2019));

	var end_from_year = (year + 10).toString();
	var end_to_year = (Math.min(year + 10 + 1, 2029));

	var start_from = start_from_year + "-" + month + "-" + day;
	var start_to = start_to_year + "-" + month + "-" + day;
	var end_from = end_from_year + "-" + month + "-" + day;
	var end_to = end_to_year + "-" + month + "-" + day;

	// count before update
	// printjson("Found projects: " + 
	// 	db.collection.find({
	// 		pid: {$gte:id, $lte:inc_id},
	// 		tasks: {$elemMatch: {
	// 			startdate: {$gte: start_from, $lte:start_to}, 
	// 			enddate: {$gte: end_from, $lte:end_to},
	// 			priority: "Highest"
	// 		}}
	// 	}).count()
	// );

	var new_task_name = Math.floor(Math.random() * 100000000).toString();

	// add a new task to documents based on some requirement
	db.collection.updateMany({
		pid: {$gte:id, $lte:inc_id},
		tasks: {$elemMatch: {
			startdate: {$gte: start_from, $lte:start_to}, 
			enddate: {$gte: end_from, $lte:end_to},
			priority: "Highest"
		}}},
		{$addToSet:{
			tasks:{
				name:new_task_name, 
				priority:"High", 
				status:"In progress", 
				startdate: new Date("2018/6/1"),
				enddate: new Date("2028/6/1"),
				members:[
					{name:"Kara Hicks", email:"kh28@abc.com", organization:"Marketing"},
					{name:"Mark Jones", email: "mj29@abc.com", organization:"Marketing"}
				]}
			}
		}
	);

	// count if the number equal after update
	// printjson("Added tasks to projects: " + 
	// 	db.collection.find({
	// 		pid: {$gte:id, $lte:inc_id},
	// 		"tasks.name":new_task_name
	// 	}).count()
	// );

	print("\n\n");
}






for (var i = 0; i < 10; i++) {
	var id = Math.floor(Math.random() * 90000);
	var inc_id = Math.min(id + 10000, 99999);

	var year = Math.floor(Math.random() * 10) + 2010;
	var month = (Math.floor(Math.random() * 12) + 1).toString();
	var day = (Math.floor(Math.random() * 28) + 1).toString();

	var start_from_year = (year).toString();
	var start_to_year = (Math.min(year + 1, 2019));

	var end_from_year = (year + 10).toString();
	var end_to_year = (Math.min(year + 10 + 1, 2029));

	var start_from = start_from_year + "-" + month + "-" + day;
	var start_to = start_to_year + "-" + month + "-" + day;
	var end_from = end_from_year + "-" + month + "-" + day;
	var end_to = end_to_year + "-" + month + "-" + day;

	// count before update
	// printjson("Found projects: " + 
	// 	db.collection.find({
	// 		pid: {$gte:id, $lte:inc_id},
	// 		tasks: {$elemMatch: {
	// 			startdate: {$gte: start_from, $lte:start_to},
	// 			enddate: {$gte: end_from, $lte:end_to}, 
	// 			status: "Closed"
	// 		}}
	// 	}).count()
	// );

	var new_task_name = Math.floor(Math.random() * 100000000).toString();

	// add a new task to documents based on some requirement
	db.collection.updateMany({
			pid: {$gte:id, $lte:inc_id},
			tasks: {$elemMatch: {
				startdate: {$gte: start_from, $lte:start_to},
				enddate: {$gte: end_from, $lte:end_to}, 
				status: "Closed"
			}}
		},
		{$addToSet:{
			tasks:{
				name:new_task_name, 
				priority:"Normal", 
				status:"Review", 
				startdate: new Date("2018/10/1"),
				enddate: new Date("2028/12/1"),
				members:[
					{name:"Karaen Hicks", email:"kh30@abc.com", organization:"Production"},
					{name:"Mark Joneson", email: "mj31@abc.com", organization:"Distribution"}
				]}
			}
		}
	);

	// count if the number equal after update
	// printjson("Added tasks to projects: " + 
	// 	db.collection.find({
	// 		pid: {$gte:id, $lte:inc_id},
	// 		"tasks.name":new_task_name
	// 	}).count()
	// );

	print("\n\n");
}





