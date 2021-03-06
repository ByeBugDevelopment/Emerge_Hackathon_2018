
var uuid = require('uuid');
var dynamoose = require('dynamoose');
var Schema = dynamoose.Schema;

var persons = dynamoose.model('emerge_persons', { id: String, profile: Object, events: Object });
var events = dynamoose.model('emerge_events', { id: String, profile: Object, users: Object });


// dynamoose.AWS.config.update({
//   accessKeyId: '',
//   secretAccessKey: '',
//   region: process.env.AWS_REGION
// });

dynamoose.setDefaults({ create: false });



// FETCH MODEL AND PRINT IN CONSOLE

const Person = {
	get: async function (id) {

		return persons.get(id, console.log);
	},
	create: async function (payload) {

		const id = payload.subject;

		const { lips, asian, gender, age, hispanic, other, black, white, glasses } = attributes;

		const attributes = payload.detect.images[0].faces[0].attributes;

		const profile = {
			asian,
			gender: gender.type,
			age,
			hispanic,
			other,
			black,
			white,
			glasses
		};

		const events = [ payload.gallery_name ];

		return await events.create({
			id,
			profile,
			events
		});
	},
	update: async function (payload) {

		const person = await Person.get(payload.subject);

	}
}

module.exports = { Person };

// UPDATE MODEL

	// persons.update({id: 'asdfgh', profile: {name: 'test77'}},console.log)


// function createPerson(payload){
	// create model from Schema
	// var odie = new Dog({
	//   ownerId: 4,
	//   name: 'Odie',
	//   breed: 'Beagle',
	//   color: ['Tan'],
	//   cartoon: true
	// });

	// var params = {
	// 	Item: {
	// 		"id": {
	// 			S: uuid();
	// 		},
	// 		"Profile": {
	// 			M: {
	// 				"Gender" : "",
	// 				"Age" : "",
	// 				"Race" : ""
	// 			}
	// 		},
	// 		"Events": {
	// 			M: {
	// 				[eventId]: [
	// 					{
	// 					  "face_id": "5410001743ab64935982",
	// 					  "images": [
	// 					    {
	// 					      "attributes": {
	// 					        "lips": "Together",
	// 					        "asian": 0.25658,
	// 					        "gender": {
	// 					          "type": "F"
	// 					        },
	// 					        "age": 26,
	// 					        "hispanic": 0.41825,
	// 					        "other": 0.11144,
	// 					        "black": 0.16007,
	// 					        "white": 0.05365,
	// 					        "glasses": "None"
	// 					      },
	// 					      "transaction": {
	// 					        "status": "success",
	// 					        "topLeftX": 390,
	// 					        "topLeftY": 706,
	// 					        "gallery_name": "MyGallery",
	// 					        "timestamp": "1487012582681",
	// 					        "height": 780,
	// 					        "quality": 0.79333,
	// 					        "confidence": 0.99997,
	// 					        "subject_id": "Elizabeth",
	// 					        "width": 781,
	// 					        "face_id": 1
	// 					      }
	// 					    }
	// 					  ]
	// 					}
	// 					// kairos data + unix trimesarmp
	// 				]
	// 			}
	// 		}
	// 	},
	// 	ReturnConsumedCapacity: "TOTAL",
	// 	TableName: "Music"
	// };
	// dynamodb.putItem(params, function(err, data) {
	// 	if (err) console.log(err, err.stack); // an error occurred
	// 	else     console.log(data);           // successful response
	// });
// }
