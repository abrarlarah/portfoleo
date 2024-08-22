/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abrar's Portfolio",
  description:
    "A  passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Abrar Larah  Portfolio",
    type: "website", 
    url: "https://abrarlarah.github.io/portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Hi There",
  logo_name: "Abrar Larah",
  nickname: "I'm Abrar larah",
  subTitle:
    "Fullstack Developer | Microsoft Certified | Skilled in HTML, CSS, JavaScript, C#, .NET, WPF, Azure Cloud, Node.js, React.js, MongoDB |  Currently contributing to Aark Global Inc, enhancing operational efficiency with C#, WPF, Node.js, React.js, and more.",
  resumeLink:
    "",
  portfolio_repository: "https://github.com/abrarlarah",
  
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/abrarlarah",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abrarlarah/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/De",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:laraabrar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/abrarlarah",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/abrarlarah/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abrarlarah?igsh=MXc5NjlzcjNudTJkYQ==",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
   
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      
      skills: [
        "⚡ Utilize HTML, CSS, and JavaScript for building the user interface , React.js for creating dynamic and interactive components.",
        "⚡ Node.js as the server-side JavaScript runtime  , Express.js for building fast and minimalist web applications and APIs.",
        "⚡ Use Git for version control management , GitHub for hosting repositories and collaboration.",
        "⚡ Utilize MongoDB for NoSQL database management, suitable for flexible and scalable data storage.Use SQL for relational database management, providing structured and efficient data storage and retrieval."
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "skill-icons:expressjs-light",     
          style: {
            color: "#339933", 
          },
        },
        {
          skillName: "NodeJs",
          fontAwesomeClassname: "devicon:nodejs-wordmark",     
          style: {
            color: "#339933", 
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "mdi:github",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Mongodb",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#CB3837",
          },
        },
        
       
      ],
    },
    {
      title: "Secs/Gem Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building responsive Projects using C# , Winforms , Wpf and Dot Net Framework",
        "⚡ Developing Equipment Host application",
        "⚡ Creating  database application backend in Ssms",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon:csharp",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Dot Net",
          fontAwesomeClassname: "devicon-plain:dot-net-wordmark",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Wpf",
          fontAwesomeClassname: "fa6-brands:wpforms",
          style: {
            backgroundColor: "transparent",
          },
        },
        
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on  AWS",
      ],
      softwareSkills: [
       
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
       
       
      ],
    },
   
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      // profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      // profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      // profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      // profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      // profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Islamic university of science and technology ,j&k,India",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iust.jpg",
      alt_name: "Iust",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      
      ],
      website_link: "https://www.iust.ac.in/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
   
    {
      title: "Microsoft Certified : Azure Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/AbrarLarah-8169/4209A8C887B71646",
      alt_name: "",
      color_code: "#00000099",
    },
    {
      title: "Microsoft Certified : Career Essentials in Software Development ",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      
      certificate_link:
        "https://www.linkedin.com/learning/certificates/a0be58dfd60edbbcdc89f6efeda0de612c1e269d2c44bce367c8a5a2d9b681e9?trk=public_profile_see-credential",
      alt_name: "",
      color_code: "#00000099",
    },
   
    {
      title: "The Complete Web Development Bootcamp",
      subtitle: "- Udemy",
      logo_path: "ude.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "",
      color_code: "#00000099",
    },
    
    {
      title: "Microsoft Certified : Career Essentials in Generative AI",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/7140b938a9ec7ac0ba70564db0999387472a0e9840bcbc5d07dfdf3edd1b0ae3?trk=public_profile_see-credential",
      alt_name: "",
      color_code: "#00000099",
    },
    {
      title: "Machine Learning",
      subtitle: "- Intershala",
      logo_path: "is.png",
      certificate_link:
        "https://trainings.internshala.com/view_certificate/A36A92F9-C03C-0A53-CE4A-E465D4AF572D/C3F62337-1BCF-F19E-5177-9729976D5520/?trk=public_profile_see-credential",
      alt_name: "",
      color_code: "#00000099",
    },
    {
      title: "Microsoft Certified : Career Essentials in Data Analysis",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/3998da1b5fa2759a642c9ae411e113f5b3259f4f715e434cc81cccf88fdaf7b9?trk=public_profile_see-credential",
      alt_name: "",
      color_code: "#00000099",
    },
    {
      title: "Microsoft Certified : Career Essentials in Project Management",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/34b9cd1783de43f1efc5b2ab4d6865a7c85be2605c5728ec27815f132c8006a8?trk=public_profile_certification-title",
      alt_name: "",
      color_code: "#00000099",
    },
    // {
    //   title: "Cryptography", 
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship ",
  description:
    "I have extensive experience in the field  software development in  Aark Global, where I served as a Staff Engineer, contributing to the development of cutting-edge solutions. Additionally,  I've also worked with Intershala, overseeing machine learning internships, and freelanced as a Full Stack Developer, leveraging my expertise in both front-end and back-end technologies. Alongside my professional roles, I actively engage with open-source communities, representing and organizing events to foster collaboration and innovation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Staff Engineer(Software Developer)",
          company: "Aark Global Inc",
          company_url: "https://aarkglobalinc.com/",
          logo_path: "aark.jpg",
          duration: "July 2023 - Present",
          location: "Jammu, J&K",
          description:
          "Collaborated On The Development Of A Semi-Automated Data Processing System, Leveraging A Tech Stack That Includes C#, WPF, Node.Js, React.Js, CSS, And SQL Server For Efficient Secs/Gem Management. Played A Key Role In Enhancing Operational Efficiency By Implementing Responsive Interfaces. Effectively Addressed Complex Bugs And Contributed To Module Updates Under The Guidance Of Senior Developers.",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
     
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Intershala.",
          company_url: "https://www.intershala.com/en/",
          logo_path: "is.png",
          duration: "jan 2022 - march 2022",
          location: "WFH",
          description:
            "As a machine learning intern, I was diving into the application of complex algorithms to solve real-world challenges. My responsibilities  include preparing data, crafting models, and evaluating their effectiveness. Collaboration with teams to integrate solutions will be crucial, as well as staying updated on industry trends. This internship presents an exciting opportunity for me to gain practical skills, make meaningful contributions, and immerse myself in the dynamic field of artificial intelligence.",
          color: "#000000",
        },
       
       
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
       
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, J",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
      
       
        
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full-Stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

 const publicationsHeader = {
  // title: "Publications",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
 };

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abrar.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Baramulla,jammu,J&K - 193101 & 180015",
    locality: "Baramulla & Jammu",
    country: "IN",
    region: "J&K",
    postalCode: "385520",
    streetAddress: "Jammu & baramulla",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
