/*
Biographical information for the resume
*/

var bio = {
    "name": "Susan Kordis",
    "role": "API Documentation Specialist",
    "contacts": {
        "email": "susankordis@gmail.com",
        "mobile": "970-402-7390",
        "github": "sjkordis",
        "twitter": "@susan_kordis",
        "location": "Colorado"
    },
    "biopic": "images/susan.jpg",
    "welcomeMessage": "APIs make the world go round!",
    "skills": ["API documentation", "Front-end web development", "Agile development", "GitBook", "Swagger", "Markdown", "MadCap Flare"]
};

/**
* @description Used to display the contact information from the bio object. This information occurs both in the header and the footer of the resume, so the location is passed as a parameter.
* @param {string} locationId - The HTML <ul> ID where the contact information is to be displayed
*/

bio.displayContacts = function(locationId) {
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

/**
* @description Used to display everything that comes before the list of skills.
*/

bio.displayHeader = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    bio.displayContacts("#topContacts");
    $("#header").append(bioPic);
    $("#header").append(formattedMsg);
}

/**
* @description Used to display the list of skills.
*/

bio.displaySkills = function() {
    $("#header").append(HTMLskillsStart);
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[indexCount]);
        $("#skills").append(formattedSkills);
    }
}

/**
* @description Displays everything in the header of the resume.
*/

bio.display = function() {
    bio.displayHeader();
    bio.displaySkills();
}

/*
Work history information organized in reverse chronological order.
*/

var work = {
    "jobs": [{
        "employer": "HP Chief Technology Office",
        "title": "Information Engineering Team Lead",
        "location": "Fort Collins, Colorado",
        "dates": "2013-present",
        "description": "Documented APIs for web services and created documentation portals"
    }, {
        "employer": "HP Software",
        "title": "Information Engineer",
        "location": "Sunnyvale, CA",
        "dates": "2007-2013",
        "description": "Documented APIs for web services and created admin guides"
    }, {
        "employer": "KForce",
        "title": "Technical Writer",
        "location": "Corvallis, OR",
        "dates": "2002-2007",
        "description": "Created and maintained user and administrator documentation for several HP Software products"
    }, {
        "employer": "Change Technologies",
        "title": "Information Developer",
        "location": "Minneapolis, MN",
        "dates": "1991-2001",
        "description": "Created and maintained marketing literature, training instruments, and instructional books"
    }, {
        "employer": "HP - Colorado Integrated Circuits Division",
        "title": "Digital Hardware Engineer",
        "location": "Fort Collins, Colorado",
        "dates": "1984-1990",
        "description": "Created automated test software for a proprietary integrated circuit tester; supported internal customers in bringing integrated circuit designs to production"
    }]
};

/**
* @description Displays each job in the work history.
*/

work.display = function() {
    for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[indexCount].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

/*
List of specific projects in reverse chronological order.
*/

var projects = {
    "projects": [{
        "title": "HP Common Web Platform",
        "dates": "2013-present",
        "description": "Created documentation for a platform of fundamental web services that HP web applications consume",
        "images": [
            "images/platform.jpg"
        ]
    }, {
        "title": "HP Database and Middleware Automation",
        "dates": "2011-2013",
        "description": "Created user guides, admin guides, online help, and API documentation",
        "images": [
            "images/dbauto.jpg"
        ]
    }, {
        "title": "HP Server Automation",
        "dates": "2009-2011",
        "description": "Created user guides, admin guides, and online help",
        "images": [
            "images/sa.jpg"
        ]
    }, {
        "title": "HP Enterprise Discovery",
        "dates": "2007-2009",
        "description": "Created user guides, admin guides, and online help",
        "images": [
            "images/entdisc.jpg"
        ]
    }]
};

/**
* @description Displays each project in the list of projects, including any images associated with each project.
*/

projects.display = function() {
    for (var indexCount = 0; indexCount < projects.projects.length; indexCount++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[indexCount].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[indexCount].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[indexCount].description);
        $(".project-entry:last").append(formattedDescription);

        for (var imageCount = 0; imageCount < projects.projects[indexCount].images.length; imageCount++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[indexCount].images[imageCount]);
            $(".project-entry:last").append(formattedImage);
        }
    }
}

/*
Degrees attained and online courses completed, in reverse chronological order
*/

var education = {
    "schools": [{
        "name": "New York Institute of Technology",
        "location": "New York, NY",
        "dates": "2006-2008",
        "degree": "MBA",
        "majors": "Economic Strategy and eCommerce",
        "url": "nyit.edu"
    }, {
        "name": "University of Wisconsin",
        "location": "Madison, WI",
        "dates": "1980-1984",
        "degree": "BS",
        "majors": "Electrical and Computer Engineering",
        "url": "wisc.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "udacity.com"
    }, {
        "title": "Up and Running with Bootstrap 3.0",
        "school": "Lynda",
        "dates": "2015",
        "url": "lynda.com"
    }, {
        "title": "Up and Running with Python",
        "school": "Lynda",
        "dates": "2015",
        "url": "lynda.com"
    }, ]
};

/**
* @description Displays educational information, including degrees earned and online courses completed.
*/

education.display = function() {
    for (var indexCount = 0; indexCount < this.schools.length; indexCount++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%name%", this.schools[indexCount].name);
        formattedName = formattedName.replace("%url%", this.schools[indexCount].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[indexCount].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", this.schools[indexCount].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[indexCount].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[indexCount].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (indexCount = 0; indexCount < this.onlineCourses.length; indexCount++) {
        var formattedTitle = HTMLonlineTitle.replace("%title%", this.onlineCourses[indexCount].title);
        formattedTitle = formattedTitle.replace("%url%", this.onlineCourses[indexCount].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[indexCount].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", this.onlineCourses[indexCount].dates);
        $(".education-entry:last").append(formattedDate);
        var formattedUrl = HTMLonlineUrl.replace("%url%", this.onlineCourses[indexCount].url);
        formattedUrl = formattedUrl.replace("%text%", this.onlineCourses[indexCount].url);
        $(".education-entry:last").append(formattedUrl);
    }
}

// begin main

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
bio.displayContacts("#footerContacts");

// end main