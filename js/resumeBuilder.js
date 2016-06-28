// begin data //

var bio = {
    "name" : "Susan Kordis",
    "role" : "API Documentation Specialist",
    "contacts" : {
        "email" : "susankordis@gmail.com",
        "mobile" : "970-402-7390",
        "github" : "sjkordis",
        "twitter" : "@susan_kordis",
        "location" : "Colorado"
    },
    "pictureURL" : "images/susan.jpg",
    "welcomeMessage" : "APIs make the world go round!",
    "skills" : ["API documentation", "Front-end web development", "Agile development", "GitBook", "Swagger", "Markdown", "MadCap Flare"]
}

var work = {
    "jobs": [
        {
            "employer": "HP Chief Technology Office",
            "title": "Information Engineering Team Lead",
            "location": "Fort Collins, Colorado",
            "dates": "2013-present",
            "description": "Documented APIs for web services and created documentation portals"
        },
        {
            "employer": "HP Software",
            "title": "Information Engineer",
            "location": "Fort Collins, Colorado",
            "dates": "2007-2013",
            "description": "Documented APIs for web services and created admin guides"
        },
        {
            "employer": "KForce",
            "title": "Technical Writer",
            "location": "Fort Collins, Colorado",
            "dates": "2002-2007",
            "description": "Created and maintained user and administrator documentation for several HP Software products"
        },
        {
            "employer": "Change Technologies",
            "title": "Information Developer",
            "location": "Fort Collins, Colorado",
            "dates": "1991-2001",
            "description": "Created and maintained marketing literature, training instruments, and instructional books"
        },
        {
            "employer": "HP - Colorado Integrated Circuits Division",
            "title": "Digital Hardware Engineer",
            "location": "Fort Collins, Colorado",
            "dates": "1984-1990",
            "description": "Created automated test software for a proprietary integrated circuit tester; supported internal customers in bringing integrated circuit designs to production"
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Udacity.com",
            "city": "Online",
            "grad": 2016,
            "degree": "Nanodegree",
            "major": "Front-End Web Development"
        },
        {
            "name": "New York Institute of Technology",
            "city": "New York, NY",
            "grad": 2008,
            "degree": "MBA",
            "major": "Economic Strategy and Online Marketing"
        },
        {
            "name": "University of Wisconsin",
            "city": "Madison, WI",
            "grad": 1984,
            "degree": "BS",
            "major": "Electrical and Computer Engineering"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "HP Common Web Platform",
            "dates": "2013-present",
            "description": "Created documentation for a platform of fundamental web services that HP web applications consume",
            "images": [
                "images/cwp1.jpg", "images/cwp2.jpg", "images/cwp3.jpg"
            ]
        },
        {
            "title": "HP Database and Middleware Automation",
            "dates": "2011-2013",
            "description": "Created user guides, admin guides, online help, and API documentation",
            "images": [
                "images/dma1.jpg", "images/dma2.jpg", "images/dma3.jpg"
            ]
        },
        {
            "title": "HP Server Automation",
            "dates": "2009-2011",
            "description": "Created user guides, admin guides, and online help",
            "images": [
                "images/sa1.jpg", "images/sa2.jpg", "images/sa3.jpg"
            ]
        },
        {
            "title": "HP Enterprise Discovery",
            "dates": "2007-2009",
            "description": "Created user guides, admin guides, and online help",
            "images": [
                "images/sa1.jpg", "images/sa2.jpg", "images/sa3.jpg"
            ]
        }
    ]
}

// end of data

// begin functions

function displayContacts (locationId){
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $(locationId).append(formattedMobile);
    $(locationId).append(formattedEmail);
    $(locationId).append(formattedGitHub);
    $(locationId).append(formattedTwitter);
    $(locationId).append(formattedLocation);
}

function displayHeader() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var bioPic = HTMLbioPic.replace("%data%", bio.pictureURL);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    displayContacts("#topContacts");
    $("#header").append(bioPic);
    $("#header").append(formattedMsg);

}

function displaySkills () {
    $("#header").append (HTMLskillsStart);
    for ( skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }
}

function displayWork () {
    for ( job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

projects.display = function() {
    for ( project in this.projects ) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
}

education.display = function() {
    for ( school in this.schools ) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].grad);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].city);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }
}

// end of functions

// begin main

displayHeader();
displaySkills();
displayWork();
projects.display();
education.display();
displayContacts( "#footerContacts");

// end main

