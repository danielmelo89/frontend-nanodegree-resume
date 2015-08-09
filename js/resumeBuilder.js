var bio = {
	"name" : "Daniel M. Melo",
	"role" : "Front-End Developer",
	"contact" : {
	"mobile" : "+553191889159",
	"email" : "danielmelo777@gmail.com",
	"twitter" : "dmelo89",
	"github" : "danielmelo89",
	"blog" : "http://danielslab.com/",
	"location" : "Belo Horizonte",
	},
	"pictureURL" : "https://scontent-gru1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10896951_873016152719067_1387598860170594653_n.jpg?oh=23b9c08880dc666ca8e529b340bd9b78&oe=56389EA7",
	"skills" : ["awesomeness", "programing", "teaching", "JS"],
	"welcome" : "Hello Mr Kitty."
}


var education = {
	"schools" : [
		{
			"name" : "Newton Paiva",
			"city" : "Belo Horizonte",
			"degree" : "BA",
			"major" : ["Advertising"],
			"minor" : ["Comunication"]
		},
		{
			"name" : "Udacity",
			"city" : "Internet",
			"degree" : "Nanodegree",
			"major" : ["Front-End"],
			"minor" : ["CompSci"]
		}
	]
}
var work = {
	"jobs" : [
		{
			"employer" : "Tag House",
			"title" : "Founder & CEO",
			"location" : "Belo Horizonte",
			"dates" : "January 2010 to current",
			"description" : "Founded the company in 2010, planning and leading creation of online/offline advertising campaings & web development and design for clients, prospecting new clients, managing sales and marketing, client relationship and cloud based software planning and design. Even being a small start-up in this experience I could prospect and work with big projects for big companies like Anheuser-Busch InBev and others."
		},
		{
			"employer" : "TV Globo",
			"title" : "Marketing Intern",
			"location" : "Belo Horizonte",
			"dates" : "June 2009 to December 2009",
			"description" : "Planning advertising and marketing actions online that would commute with TV and traditonal advertising. Sales, sponsorship and product/content planning for both online & offline advertisers in the largest advertising and television company that have the most popular news web portal in Brazil."
		},
		{
			"employer" : "Neomerkato.com",
			"title" : "Marketing Analyst",
			"location" : "Belo Horizonte",
			"dates" : "September 2008 to March 2009",
			"description" : "Managing and planning direct advertising actions to costumers from 18 online stores in Brazil. Advanced marketing sales and email marketing analysis and reporting, planning and evaluation. Developed product hotsites and planned new landing pages for products marketing mainly in the content planning and product presentation and consumer targeting. Client management, actions management and results improvements for direct relationship with the costumer."
		}
,
		{
			"employer" : "Neomerkato.com",
			"title" : "Web Designer",
			"location" : "Belo Horizonte",
			"dates" : "September 2008 to March 2009",
			"description" : "Planning and design of banners and landing pages for SafariShop website that would be advertised in the most popular content portals in Brazil, such as: Terra, UOL, Globo.com, Editora Abril and others. Product presentation planning and content planning for best suit for internet marketing/online advertising and call-to-action campaing improvement."
		}

	]
}
var projects = {
	"projects" : [
		{
			"title" : "",
			"dates" : "",
			"description" : "",
			"images" : [""],
		}
	]
}
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