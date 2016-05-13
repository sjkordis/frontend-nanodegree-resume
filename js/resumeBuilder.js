var bio = {
    "name" : "Susan Kordis",
    "role" : "API Documentation Specialist",
    "contacts" : {
        "email" : "susankordis@gmail.com",
        "mobile" : "970-402-7390",
        "github" : "sjkordis",
        "twitter" : "sjkordis",
        "location" : "Colorado"
    },
    "pictureURL" : "images/susan.jpg",
    "welcomeMessage" : "Welcome to my resume.",
    "skills" : ["API documentation", "front-end web development", "agile development", "online help", "GitBooks", "Swagger", "MadCap Flare"]
}

var work = {
    "jobs": [
        {
            "employer": "HP Chief Technology Office",
            "title": "Information Engineer",
            "location": "Fort Collins, Colorado",
            "dates": "2013-present",
            "description": "Documented APIs for web services and created documentation portals",
            "projects": [
                {
                    "title": "HP Common Web Platform",
                    "dates": "2013-present",
                    "description": "Platform of fundamental web services that HP web apps consume",
                    "images": [
                        "images/cwp1.jpg", "images/cwp2.jpg", "images/cwp3.jpg"
                    ]
                }
            ]
        },
        {
            "employer": "HP Software",
            "title": "Information Engineer",
            "location": "Fort Collins, Colorado",
            "dates": "2007-2013",
            "description": "Documented APIs for web services and created documentation portals",
            "projects": [
                {
                    "title": "HP Common Web Platform",
                    "dates": "2013-present",
                    "description": "Platform of fundamental web services that HP web apps consume",
                    "images": [
                        "images/cwp1.jpg", "images/cwp2.jpg", "images/cwp3.jpg"
                    ]
                }
            ]
        },
        {
            "employer": "KForce",
            "title": "Technical Writer",
            "location": "Fort Collins, Colorado",
            "dates": "2002-2007",
            "description": "Created and maintained user and administrator documentation for several HP Software products"
            "projects": [
                {
                    "title": "HP Client Automation",
                    "dates": "2005-2007",
                    "description": "Created user guides, administrator guides, and online help",
                    "images": [
                        "images/ca1.jpg", "images/ca2.jpg", "images/ca3.jpg"
                    ]
                }
        ]
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
            "name": "University of Wisconsin",
            "city": "Madison, WI",
            "grad": 1984,
            "degree": "BS",
            "major": "Electrical and Computer Engineering"
        },
        {
            "name": "New York Institute of Technology",
            "city": "New York, NY",
            "grad": 2008,
            "degree": "MBA",
            "major": "Economic Strategy and Online Marketing"
        }
    ]
}




var education = {}
    education["school"] = "New York Institute of Technology";
    education["years"] = "2005-2008";
    education["city"] = "New York, New York";

$("#main").append(work["position"]);
$("#main").append(education.school);

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
            "name": "University of Wisconsin",
            "city": "Madison, WI",
            "grad": 1984,
            "degree": "BS",
            "major": "Electrical and Computer Engineering"
        },
        {
            "name": "New York Institute of Technology",
            "city": "New York, NY",
            "grad": 2008,
            "degree": "MBA",
            "major": "Economic Strategy and Online Marketing"
        }
    ]
}