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
    "skills": ["API documentation", "Front-end web development",
        "Agile development", "GitBook", "Swagger", "Markdown", "MadCap Flare"]
};

/**
* @description Displays all the biographical information in the resume.
*/

bio.display = function() {

/**
* @description Used to display everything that comes before the list of skills and to display the footer.
*/

    function displayHeaderFooter () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#headerContacts").append(formattedMobile);
        $("#headerContacts").append(formattedEmail);
        $("#headerContacts").append(formattedGitHub);
        $("#headerContacts").append(formattedTwitter);
        $("#headerContacts").append(formattedLocation);
        $("#header").append(bioPic);
        $("#header").append(formattedMsg);

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGitHub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);
    }

/**
* @description Used to display the list of skills.
*/

    function displaySkills () {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach( function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }

    displayHeaderFooter();
    displaySkills();
};

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
    work.jobs.forEach( function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

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
    projects.projects.forEach( function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        project.images.forEach( function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

/*
Degrees attained and online courses completed, in reverse chronological order
*/

var education = {
    "schools": [{
        "name": "New York Institute of Technology",
        "location": "New York, NY",
        "dates": "2006-2008",
        "degree": "MBA",
        "majors": ["Economic Strategy", "eCommerce"],
        "url": "nyit.edu"
    }, {
        "name": "University of Wisconsin",
        "location": "Madison, WI",
        "dates": "1980-1984",
        "degree": "BS",
        "majors": ["Electrical and Computer Engineering"],
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
    education.schools.forEach( function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%name%", school.name);
        formattedName = formattedName.replace("%url%", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var majorsList = "";
        school.majors.forEach( function(major, idx, array) {
            majorsList = majorsList + major;
            if (idx != array.length - 1){
                majorsList = majorsList + ",&nbsp;";
            }
        });
        formattedMajors = HTMLschoolMajor.replace("%data%", majorsList);
        $(".education-entry:last").append(formattedMajors);
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach( function(course) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%title%", course.title);
        formattedTitle = formattedTitle.replace("%url%", course.url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedDate);
        var formattedUrl = HTMLonlineUrl.replace("%url%", course.url);
        formattedUrl = formattedUrl.replace("%text%", course.url);
        $(".education-entry:last").append(formattedUrl);
    });
};

// begin main

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

// end main