import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdWeb, MdAssignmentInd } from "react-icons/md";

import type { IconType } from "react-icons";

// Define types for social links
type SocialLink = {
  link: string;
  text: string;
  icon: IconType;
};

// Define the type for Data
interface DataType {
  fullname: string;
  name: string;
  title: string;
  birthday: string;
  email: string;
  address: string;
  phone: string;
  skype: string;
  experience: Array<{ title: string; date: string; description: string }>;
  education: Array<{ title: string; date: string; description: string }>;
  services: Array<{ title: string; description: string; icon: IconType }>;
  skills: Array<{ title: string; description: string[] }>;
  socials: Record<string, SocialLink>;
  Aboutme: string;
}

// Create the Data object with the correct type
const Data: DataType = {
  fullname: "Er. Deepak Kumar",
  name: "Deepak Kumar",
  title: "Frontend Developer",
  birthday: "18teen September 1996",
  email: "deepak.ds.0621@gmail.com",
  address: "H.no. 87 Khanowal Pb. In.",
  phone: "9872793808",
  skype: "@deepak_808",

  experience: [
    {
      title: "Hirarky Solution",
      date: "Jan 2020 to Jun 2020",
      description: "ReactJS web developer",
    },
    {
      title: "ZCC",
      date: "1st June 2017 to 15th July 2017",
      description: "Core Java",
    },
    {
      title: "Mentorus",
      date: "2 Months in July 2019",
      description: "Python Programming using OOPS Gui, QT5 and Project Work",
    },
  ],
  education: [
    {
      title: "Guru Nanak Dev University of Sultanpur Lodhi",
      date: "May 2016 to June 2020",
      description:
        "I have completed my Bachelor of Technology in Computer Science.",
    },
    {
      title: "Govt. Sr. Sec. School of Kapurthala",
      date: "March 2015",
      description: "I have completed my 12th in Non-Medical.",
    },
    {
      title: "10th",
      date: "March 2012",
      description: "I have passed out 10th from state board.",
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "I have been working on web design in ReactJS.",
      icon: MdWeb,
    },
    {
      title: "Programming",
      description: "I have been working on Django.",
      icon: MdAssignmentInd,
    },
    {
      title: "Core Java",
      description:
        "I have Knowledge of design patterns, OO Programming, Reactive Design Patterns, Design, implementation, testing, deployment and maintenance of the system",
      icon: MdWeb,
    },
  ],
  skills: [
    {
      title: "Frontend",
      description: ["Reactjs", "Javascript", "CSS", "HTML5"],
    },
    {
      title: "MERN",
      description: ["MongoDB", "Express", "React", "Node"],
    },
    {
      title: "API",
      description: ["Axios", "REST API", "Shopify API"],
    },
    {
      title: "Python",
      description: ["Python Syntax", "OOPS", "GUI", "QT5"],
    },
  ],

  socials: {
    Facebook: {
      link: "https://www.facebook.com/deepak76961",
      text: "Deepak Singh",
      icon: FaFacebook,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/deepak-kumar-374149118/",
      text: "Deepak Kumar",
      icon: FaLinkedin,
    },
    Instagram: {
      link: "https://www.instagram.com/sdeep_singh0001/",
      text: "Deepak Kumar",
      icon: FaInstagram,
    },
    GitHub: {
      link: "https://github.com/deepak-808",
      text: "Deepak Kumar",
      icon: FaGithub,
    },
  },
  Aboutme:
    "I am a dedicated, hardworking, self-learning and proactive computer science engineer and a front end web developer. I have 6 months internship experience in React JS and I am currently looking for a job in Reactjs profile. \n\nDeep understanding of technology. Proven ability to be a strong professional with good knowledge of new technologies and my skills are in React Js HTML CSS and Javascript.\nApart from being a member of the campus sports team, I have participated in tournaments and achieved goals, as well as participated in cultural events.",
};

export default Data;
