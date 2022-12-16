import img1  from "../assets/courseSystem.jpg"
import img2  from "../assets/dogs&movies.jpg"
import img3  from "../assets/tenzies.jpg"
import img4 from "../assets/yelpcamp.jpg"

const project = [ 
    {
        id:1,
        img: img1,
        alt: "a snapshot of a course registration system, containing a table showing all courses",
        name: "Student Course Registration System",
        description: "The purpose of this project is to create an application for students to register for classes at a school. The scope of this project includes course registration and management.",
        tech:"Java, Swing"
    },
    {
        id:2,
        img: img2,
        alt: "a snapshot of a website about dog movies",

        name: "Dogs & Movies",
        description: "This website is about dogs and dog movies. it aims to offer everything from dog information to dog movie reviews to tips on keeping dogs on our site.",
        tech:"HTML, CSS"
    },

    {
        id:3,
        img: img3,
        alt: "a snapshot of tenzies game, containing a grid and a button",

        name: "Tenzies",
        description: "A simple game which is won by being the first to roll ten dice to the same agreed-upon number. Everytime click the roll button, unheld dices would change.",
        tech:"React, JavaScript, HTML, CSS"
    },
    {
        id:4,
        img: img4,
        alt: "a snapshot of camp introduction wwebsite, containing a picture of the camp and some reviews",
        name: "Yelp Camp",
        description: "A simple website to collect user reviews about different camps. Peopel can score and review different camps, they can also add new camps.",
        tech:"JavaScript, HTML, CSS"
        
    }

]

export default project;