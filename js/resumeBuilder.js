/*
This is empty on purpose! Your code to build the resume will go here.
 */

function displayWork(){

	var bio = {
		"name": "Jorge Luis Mejía Jiménez",
		"age": 22,
		"role": "Web Developer",
		"contacts": {
			"mobile": "3012301296",
			"email": "mejiajimenez@gmail.com",
			"github": "JorgeLu1s",
			"twitter": "@untaljorgeluis",
			"location": "Barranquilla"
		},
		"welcomeMsg": "A professional software developer with a high sense of responsibility, specialized in the "
		+"web development with three years of experience creating applications oriented to solve industry problems, "
		+"taking always into account client requirements and implementing good development practices according to the "
		+"latest tendencies. I have the necessary set of skills to work under pressure, "
		+"using agile development techniques.",
		"skills": ["programming", "Java software development", "best practices", "web application development"],
		"picture": "images/fry.jpg"
	};

	HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
	HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
	HTMLbioPic = HTMLbioPic.replace("%data%", bio.picture);

	$("#header").prepend(HTMLheaderRole).prepend(HTMLheaderName);

	HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(HTMLmobile).append(HTMLemail).append(HTMLtwitter).append(HTMLgithub).append(HTMLlocation);
	$("#footerContacts").append(HTMLmobile).append(HTMLemail).append(HTMLtwitter).append(HTMLgithub).append(HTMLlocation);
	$("#header").append(HTMLbioPic);

	HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").append(HTMLwelcomeMsg);
	$("#header").append(HTMLskillsStart);
	var skill = "";
	bio.skills.forEach(function(data){
		skill = HTMLskills.replace("%data%", data);
		$("#skills").append(skill);
	});

	var work = {
		"jobs": [
			{
				"employer": "DST LTDA. (Disetronica LTDA.)",
				"title": "Development Engineer",
				"location": "Barranquilla - Atlántico",
				"dates": "june 2015 - Now",
				"description": "Responsible of gathering requirements, web applications design and web applications"
				+" development using PHP, Javascript, jQuery, AngularJS, MySQL and MVC pattern. <br> Database design."
				+" Web services development. Software Maintenance on Java."
			},
			{
				"employer": "I2B Technologies (Intelligence to Business)",
				"title": "Java Consultant",
				"location": "Barranquilla - Atlántico",
				"dates": "september 2013 - april 2015",
				"description": "Development on JPF, JSF and STRUTS frameworks, JavaScript and jQuery."
				+" Web services development for Entel platforms on Oracle Service Bus. "
				+"Web development for Entel’s private platform on Java."
				+" PL SQL procedures development for Entel company."
			},
			{
				"employer": "GEOTECH S.A",
				"title": "Java Junior Developer",
				"location": "Barranquilla - Atlántico",
				"dates": "february 2013 - september 2013",
				"description": "Development on JSP, JSF, JavaScript and jQuery, implementing Hibernate tool. "
				+ "Requirements gathering and Documentation."
			},
			{
				"employer": "DISETRONICA LTDA (Diseño y Manufactura Ltda.)",
				"title": "Intern – Web developer",
				"location": "Barranquilla - Atlántico",
				"dates": "february 2012 - february 2013",
				"description": "Help desk, server management, automation of administrative tasks with macros on Excel "
				+ "and web development on PHP."
			}
		]
	};

	var formatedEmployeer, formatedTitle, formatedDate, formatedLocation, formatedDescription;
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		formatedEmployeer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formatedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		formatedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		formatedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formatedEmployeer+formatedTitle+formatedDate+formatedLocation+formatedDescription);
	}

	var projects = {
		"project": [
			{
				"title": "Fuel Dispatcher Truck Management Portal",
				"dates": "2015",
				"description": "Responsive real-time web application, developed with PHP, JavaScript, jQuery, AngularJS,"
				+" Google Maps and MySQL using MVC pattern for the management of fuel dispatches and other"
				+" related operational information."
			},
			{
				"title": "Carnival Online",
				"dates": "2014",
				"description": "Responsive web application for real-time information delivery about the "
				+"Barranquilla’s Carnival. Application was developed using PHP, JavaScript, jQuery, Ajax, Google Maps "
				+"and MySQL."
			},
			{
				"title": "Shipment Tracking Software",
				"dates": "2013",
				"description": "Web application to track shipments in different places on the world, allowing online "
				+"information management. Developed using JSP, Hibernate, Ajax, JavaScript and jQuery with an Oracle "
				+"database using MVC pattern."
			},
			{
				"title": "Employee Absenteeism Management Software",
				"dates": "2012",
				"description": "Web application for the consolidation and management of employee absenteeism information, "
				+"developed with CakePHP, JavaScript, jQuery, Ajax and MySQL."
			},
			{
				"title": "Fuel Station Dispatch Automation",
				"dates": "2012",
				"description": "Real-time web application for fuel dispatch management with users and vehicles "
				+"validation, and fuel inventory. Developed with CakePHP, JavaScript, jQuery and Ajax with MySql, "
				+"using MVC pattern."
			},
			{
				"title": "BrainXtein",
				"dates": "2012",
				"description": "A game to measure the intellectual coefficient developed under a client – server "
				+" architecture between a computer and a cellphone through Bluetooth, using Java SE and Java ME languages."
			}
		]
	};

	projects.display = function(){
		for(i in projects.project){
			$("#projects").append(HTMLprojectStart);
			var formatedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
			var formatedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
			var formatedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
			$(".project-entry:last").append(formatedTitle).append(formatedDates).append(formatedDescription);
		}
	}
	projects.display();

	var education = {
		"schools": [
			{
				"school": "Universidad Autónoma del Caribe",
				"location": "Barranquilla - Atlántico",
				"degree": "Systems Engineer",
				"dates": "2008 - 2012",
				"url": "http://www.uac.edu.co"
			},
			{
				"school": "Colegio Metropolitano de soledad 2000",
				"location": "Soledad - Atlántico",
				"degree": "Commercial Technician",
				"dates": "2007",
				"url": "#"
			}
		],
		"onlineCourses": [
			{
				"title": "JavaScript Basics",
				"school": "Udacity",
				"dates": "february 2016",
				"url": "http://www.udacity.com"
			},
			{
				"title": "How to Use Git and GitHub",
				"school": "Udacity",
				"dates": "december 2015 - february 2016",
				"url": "http://www.udacity.com"
			},
			{
				"title": "Shaping up with Angular.js",
				"school": "Codeschool",
				"dates": "september 2015",
				"url": "http://www.codeschool.com"
			},
			{
				"title": "Functional HTML5 & CSS3",
				"school": "Codeschool",
				"dates": "february 2014",
				"url": "http://www.codeschool.com"
			},
			{
				"title": "Journey Into Mobile",
				"school": "Codeschool",
				"dates": "february 2013",
				"url": "http://www.codeschool.com"
			},
			{
				"title": "Git",
				"school": "Codeschool",
				"dates": "december 2012",
				"url": "http://www.codeschool.com"
			},
			{
				"title": "HTML & CSS",
				"school": "Codecademy",
				"dates": "december 2012",
				"url": "http://www.codecademy.com"
			}
		]
	};

	education.display = function(){
		for(i in education.schools){
			$("#education").append(HTMLschoolStart);
			var formatedName = HTMLschoolName.replace("%data%", education.schools[i].school);
			var formatedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formatedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formatedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			$(".education-entry:last").append(formatedName).append(formatedDegree).append(formatedDates);
		}

		$("#education").append(HTMLonlineClasses);
		for(i in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formatedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formatedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formatedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			var formatedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			$(".education-entry:last").append(formatedTitle).append(formatedSchool)
			.append(formatedDates);//.append(formatedURL);
		}
	}
	education.display();
}
displayWork();