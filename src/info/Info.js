import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock67 from "../img/mock67.png"
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(22, 96, 162), rgb(73, 3, 99)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.c
 */

export const info = {
    firstName: "Ariza",
    lastName: "Damara Al-khaf",
    initials: "ARZ", // the example uses first and last, but feel free to use three or more if you like.
    position: "a .NET Developer & Cyber Security Analyst",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🍕',
            text: 'Pizza Eater'
        },
        {
            emoji: '🌎',
            text: 'based in the IDN'
        },
        {
            emoji: "💼",
            text: ".Net Application Operation & .Net Support Developer"
        },
        {
            emoji: "📧",
            text: "arizadamar@live.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/arizzadamm",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/arizzadamm",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/arizzadamm",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/arizzadamm",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/arizzadamm",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Ariza. I'm a .Net Developer. I studied Computer Engineering at Telkom University, My Degree is S.T and i love gaming and coding. Thanks for visiting my Website",
    skills: 
        {
            proficientWith: ['SQL Server','javascript', '.NET', 'C#', 'bootstrap', 'html5', 'css3'],
            exposedTo: ['nodejs', 'python', 'react','Azure','Analytical Skills','System Analyst','Cyber Security','Network']
        }
    ,
    experiences: [
        {
            title: "BAPPENAS",
            info: "2025-Present",
            JobDesc:"Cyber Security Analyst at BAPPENAS", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        },   
        {
            title: "AGIT",
            info: "2021-2025",
            JobDesc:" maintaining and supporting the Application Operation Human Resource, Warehouse Management Service, and Procurement Management Service for PT Isuzu Astra Motor Indonesia", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it
        },    
        {
            title: "PT Maximize IT",
            info: "2020-2021",
            JobDesc:"contributed to the development of a web procurement application for PT Salim Ivomas Pratama Tbk using .NET Core", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it
        } 
        
    ],hobbies: [
        {
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'Bicycling',
            emoji: '⚔'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Automotive',
            emoji: '👀'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "SPR REPORT Total Bangun Persada",
            live: "Project I had for Recruitment Test Total Bangun Persada",
            source: "Feature : Create with ASP.Net 7 and Bootstrap 5 and Simple CRUD and logic. with this app i wass passed the test from the user 9/10 ", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Otto Digital",
            live: "Project I had for Recruitment Test Otto Digital",
            source: "Feature : Create with ASP.Net 6 and Bootstrap 5 and Simple CRUD and logic with JWT Authentication And Role",
            image: mock2
        },
        {
            title: "ESS-HR",
            info: "jobDesc",
            JobDesc:"As Operation team at Isuzu Astra Motor Indonesia, I maintained the Application ESS-HR is stands for Employee Self Service-Human Resource, this can maintain employee leave,medical,CICO,Overtime,and Etc", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock4
        },    
        {
            title: "ESS-IT(Operations) ",
            info: "Info Job Desc",
            JobDesc:"As Operation team at Isuzu Astra Motor Indonesia, I maintained the Application ESS-IT is stands for Employee Self Service-Information Tech, this can maintain employee to create form related to IT field",
            image: mock5
        },
        {
            title: "Retail Mini App",
            live: "",
            source: "https://github.com/arizzadamm",
            image: mock3
        }
    ],
    operation: [

        {
            title: "Cyber Sec @ BAPPENAS",
            live: "",
            source: "https://github.com/arizzadamm",
            image: mock67
        }

    ]
}