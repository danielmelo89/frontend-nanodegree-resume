var bio = {
	"name" : "Daniel Melo",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile" : "+553191889159",
		"email" : "danielmelo777@gmail.com",
		"twitter" : "dmelo89",
		"github" : "danielmelo89",
		"blog" : "http://danielslab.com/",
		"location" : "Belo Horizonte",
	},
	"bioPic" : "https://scontent-gru1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10896951_873016152719067_1387598860170594653_n.jpg?oh=23b9c08880dc666ca8e529b340bd9b78&oe=56389EA7",
	"skills" : ["Entrepreneurship", "Programing", "Marketing", "Advertising", "Management"],
	"welcomeMessage" : "Hello Mr Kitty."
}
bio.display = function() {

		var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").prepend(formattedPicture);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedRole);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
	}
    // TODO: Display Contacts!!

}

var education = {
	"schools" : [
	{
		"name" : "Newton Paiva",
		"location" : "Belo Horizonte, MG",
		"degree" : "Bachelor of Arts",
		"major" : ["Advertising", "Publicity"],
		"dates" : 2010,
		"url" : "http://www.newtonpaiva.br/"
	},
	{
		"name" : "The Wharton School",
		"location" : "Philadelphia, PA",
		"degree" : "Certificate",
		"major" : ["Marketing"],
		"dates" : 2010,
		"url" : "http://www.newtonpaiva.br/"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Body Language for Entrepreneurs",
		"school" : "Udemy",
		"date": 2014,
		"url" : "www.udemy.com"
	}
	]
}
education.display = function() {
			for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolwithURL = formattedSchool.replace("%url%", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolwithURL + formattedDegree);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedMajor);
	}
}
var work = {
	"jobs" : [
	{
		"employer" : "Tag House",
		"title" : "Founder & CEO",
		"location" : "Caiçaras, Belo Horizonte, MG",
		"dates" : "January 2010 - current",
		"description" : "Founded the company in 2010, planning and leading creation of online/offline advertising campaings & web development and design for clients, prospecting new clients, managing sales and marketing, client relationship and cloud based software planning and design. Even being a small start-up in this experience I could prospect and work with big projects for big companies like Anheuser-Busch InBev and others."
	},
	{
		"employer" : "TV Globo",
		"title" : "Marketing Intern",
		"location" : "São Paulo, SP",
		"dates" : "June 2009 to December 2009",
		"description" : "Planning advertising and marketing actions online that would commute with TV and traditonal advertising. Sales, sponsorship and product/content planning for both online & offline advertisers in the largest advertising and television company that have the most popular news web portal in Brazil."
	},
	{
		"employer" : "Neomerkato.com",
		"title" : "Marketing Analyst",
		"location" : "Belo Horizonte, MG",
		"dates" : "September 2008 - March 2009",
		"description" : "Managing and planning direct advertising actions to costumers from 18 online stores in Brazil. Advanced marketing sales and email marketing analysis and reporting, planning and evaluation. Developed product hotsites and planned new landing pages for products marketing mainly in the content planning and product presentation and consumer targeting. Client management, actions management and results improvements for direct relationship with the costumer."
	}
	,
	{
		"employer" : "Neomerkato.com",
		"title" : "Web Designer",
		"location" : "Belo Horizonte, MG",
		"dates" : "September 2008 - March 2009",
		"description" : "Planning and design of banners and landing pages for SafariShop website that would be advertised in the most popular content portals in Brazil, such as: Terra, UOL, Globo.com, Editora Abril and others. Product presentation planning and content planning for best suit for internet marketing/online advertising and call-to-action campaing improvement."
	}
	]
}
work.display = function() {
		for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}
var projects = {
	"projects" : [
	{
		"title" : "Portal Programas Ambev",
		"dates" : "September 2012 - Current",
		"description" : "My responsabilities include client relationship, project and interface planning and management. This project is a web based cloud software for Trade Marketing actions management, reporting and tracking. With more than 5000+ users in the entire Brazil area.",
		"images" : ["http://www.portalprogramas.com.br/assets/img/logo.png"]
	}
	]
}
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedPTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedPTitle);
		var formattedPDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedPDates);
		var formattedPDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedPDescription);
		if (projects.projects[project].images.length > 0) {
		var formattedPImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedPImage);
		}
	}
}
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	name = bio.name;
 	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] +" "+ name[1];
}

$("#main").prepend(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);