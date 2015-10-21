/*
	ES6 Generators - Iterators
	Generator Function will run and pause at YIELD points
	it.next(); makes the function continue to run	

	Example 3: Recursive Iterations over a tree with generators (JSON)
	TODO: Iterate through attributes till the bottom of the hierarchy, select the 'parent object' that matches the search criteria
 */
console.log('+-----------------------------------------+');
// console.time('performance');

var jsonObject = {
  "_id": "56044a42a27847d11d61bfc0",
  "scheduleTemplateId": "55099ebdcca58a0c717df912",
  "jobs": [
    {
      "jobTemplateId": "55099ebdcca58a0c717df91f",
      "_id": "56044a42a27847d11d61bfd5",
      "stepTemplates": [
        {
          "jobStepTemplateId": "55099ebdcca58a0c717df921",
          "_id": "56044a42a27847d11d61bfd9"
        },
        {
          "jobStepTemplateId": "55099ebdcca58a0c717df920",
          "_id": "56044a42a27847d11d61bfd7"
        }
      ]
    },
    {
      "jobTemplateId": "55099ebdcca58a0c717df91c",
      "_id": "56044a42a27847d11d61bfd0",
      "stepTemplates": [
        {
          "jobStepTemplateId": "55099ebdcca58a0c717df91d",
          "_id": "56044a42a27847d11d61bfd3"
        }
      ]
    },
    {
      "jobTemplateId": "55099ebdcca58a0c717df919",
      "_id": "56044a42a27847d11d61bfcb",
      "stepTemplates": [
        {
          "jobStepTemplateId": "55099ebdcca58a0c717df91a",
          "_id": "56044a42a27847d11d61bfce"
        }
      ]
    },
    {
      "jobTemplateId": "55099ebdcca58a0c717df916",
      "_id": "56044a42a27847d11d61bfc6",
      "stepTemplates": [
        {
          "jobStepTemplateId": "55099ebdcca58a0c717df917",
          "_id": "56044a42a27847d11d61bfc9"
        }
      ]
    },
    {
      "jobTemplateId": "550aede1cca58a0c717df927",
      "_id": "56044a42a27847d11d61bfc1",
      "stepTemplates": [
        {
          "jobStepTemplateId": "550aedebcca58a0c717df929",
          "_id": "56044a42a27847d11d61bfc4"
        }
      ]
    }
  ]
};

// TODO - Traverse the steps and compare the "_id" to the required ID, grab the parent object (that owns it)
// Easy way 1: forEach
var foundStep, searchStepId = '56044a42a27847d11d61bfd3';
var performanceIterations = 0;
jsonObject.jobs.forEach(function(job) {
	performanceIterations++;
	job.stepTemplates.forEach(function(step) {
		performanceIterations++;
		// each step contains a jobStepTemplateId and an _id
		if(step._id === searchStepId){
			foundStep = step;
		}
	});	
});
// console.log('performance iterations: ', performanceIterations);
// console.log('found the object', foundStep);


// Easy Way 2: For Loops and Breaks
var foundStep, job, step;
var searchStepId = '56044a42a27847d11d61bfd3', performanceIterations = 0;
for (var i = 0; i < jsonObject.jobs.length; i++) {
	performanceIterations++;
	job = jsonObject.jobs[i];
	for (var n = 0; n < job.stepTemplates.length; n++) {
		performanceIterations++;
		step = job.stepTemplates[n];
		if(step._id === searchStepId){
			foundStep = step;
			break; //interrupt for loop
		}
	};	
};
// console.log('performance iterations EASY2 foor loop and breaks: ', performanceIterations);
// console.log(foundStep)

// ES6 Generators (Inverting Control of Iteration and Data Processing)
// Reminder: the iterator can be stopped only by NOT CALLING it.next() 

// Phase 1 High Level
function *iterateJobs(jobs){
	for (var i = 0; i < jobs.length; i++) {      
		var job = jobs[i];
		yield *iterateSteps(job.stepTemplates); // pause and call to the other function to perform the lower level iteration
	}
}
// Phase 2 Lower Level
function *iterateSteps(steps){    
	for (var i = 0; i < steps.length; i++) {			  
		var step = steps[i];		
		yield step; // pause and return the step object, it would be yielded		
	}
}

// Fire-up iteration and Yield the steps
var searchStepId = '56044a42a27847d11d61bfd3';
// findWhere(x, function(s){return s._id === searchStepId})
var stepTemplate = findWhere(jsonObject.jobs, (s) => s._id === searchStepId);
console.log('Found: ',JSON.stringify(stepTemplate));

function findWhere(jobs, predicateBoolean){
	var it = iterateJobs(jobs);
	var res = it.next(); //run one yeld
	while(!res.done){
		performanceIterations++;
		var stepTemplate = res.value;
		// stepTemplate {jobStepTemplateId, _id}
		if(predicateBoolean(stepTemplate)){
			return stepTemplate;
		}
		else{
      console.warn('next')
			res = it.next();
		}
	}
}

//module.exports = findWhere;

console.log('+-----------------------------------------+');
// console.timeEnd('performance');

/*
	Benefits of Generators
	"Generators invert control of iteration, allowing us to separate mechanisms of iteration from the processing of items"
 */