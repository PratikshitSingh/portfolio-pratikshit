import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { SiSpringboot } from "react-icons/si";
import youtubeTrackerImg from "@/public/youtubeTracker.png";
import aesrganImg from "@/public/aesrgan.png";
import ictmanagerImg from "@/public/ictmanager.png";
import iprImg from "@/public/ipr.png";
import lcaImg from "@/public/lca.png";
import mutationImg from "@/public/mutation.png";
import TLImg from "@/public/TL.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Education",
        hash: "#education",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Intuit, Software Engineer - Privacy Engineering",
        location: "Mountain View, CA",
        description:
            "Designing and building event-driven Spring Boot microservices for privacy compliance automation. Architecturing and leading the Intuit Compliance work for all Intuit products, partnered with LCPO.",
        icon: React.createElement(SiSpringboot),
        tags: ["SPRING BOOT", "MICROSERVICES", "KAFKA", "AWS", "EVENT-DRIVEN", "DISTRIBUTED SYSTEMS", "PRIVACY COMPLIANCE"],
        date: "Present",
    },
    {
        title: "Zeta Global, Software Engineer",
        location: "San Francisco, CA",
        description:
            "Building analytical reporting tools for clients in Adtech industry and developing attributions ETLs for MTA campaigns.",
        icon: React.createElement(FaLaptopCode),
        tags: ["BIG DATA", "NOSQL", "SQL", "DISTRIBUTED SYSTEMS", "ETL", "REST", "AWS", "DOCKER"],
        date: "June 2024 - Sep 2024",
    },
    {
        title: "Illinois Center of Transportation, Lead Software Developer",
        location: "Rantoul, IL",
        description:
            "Designed and implemented multiple containerized(AWS CaaS) web applications for Pavement Life Cycle Assesment with RDBMS, ReactJS, and Django Rest Framework.",
        icon: React.createElement(FaLaptopCode),
        tags: ["DJANGO", "REACT", "MANTINE", "POSTGRES", "OPENSOURCE LIBRARIES", "AWS LIGHTSAIL", "DOCKER", "GITHUB ACTIONS"],
        date: "Dec 2022 - May 2024",
    },
    {
        title: "JP Morgna Chase - Software Engineer II",
        location: "Bengaluru, India",
        description:
            "Developed optimization system using Linear Regression & XGB prediction models for risk computation costs, reducing AWS EC2 usage by 84% for the team.",
        icon: React.createElement(BsBank),
        tags: ["SKLEARN", "LINEAR REGRESSION", "XG-BOOST", "ETL DATA PIPELINE", "AWS EC2", "POSTGRES", "KUBERNETES (K8S)"],
        date: "Jan 2022 - Aug 2022",
    },
    {
        title: "JP Morgna Chase - Software Engineer I",
        location: "Bengaluru, India",
        description:
            "Built user-facing dashboards to display Derivative Trade market risk and P&L reports. Wrote the data massaging and aggregation services triggered by Market Markers.",
        icon: React.createElement(BsBank),
        tags: ["TORNADO", "REACT", "POSTGRES", "SQL", "AWS EC2", "KUBERNETES (K8S)"],
        date: "Aug 2020 - Jan 2022",
    },
    {
        title: "JP Morgna Chase - Software Engineering Intern",
        location: "Bengaluru, India",
        description:
            "Developed an automatic dependency upgradation for NodeJS trading app.",
        icon: React.createElement(BsBank),
        tags: ["NODEJS", "JENKINS", "GROOVY"],
        date: "May 2019 - Jul 2019",
    },
] as const;

export const projectsData = [
    {
        title: "Youtube Playlist Tracker",
        description:
            "Kafka application for users to track their playlist added in the app, using Youtube API to fetch video statistics, Kafka producer-consumer model to track the video statistics, and sink to send notifications to users on Telegram.",
        tags: ["Kafka", "Confluent Cloud", "Heroku", "Youtube API", "Telegram API", "Python", "Flask", "ksqlDB"],
        projectUrl: "https://github.com/PratikshitSingh/youtube-playlist-tracker",
        imageUrl: youtubeTrackerImg,
    },
    {
        title: "Life Cycle/Cost Assessment Tool",
        description:
            "A web app for computing cost and environmental impacts of pavement projects over the analysis period.",
        tags: ["Django", "React", "Postgres", "AWS Lightsail"],
        projectUrl: "https://ict-lca.vercel.app/",
        imageUrl: lcaImg,
    },
    {
        title: "Initial Pavement Rehabilitation",
        description:
            "A web app for comparing the cost of initial pavement rehabilitation using different treatments.",
        tags: ["Django", "React", "Postgres", "AWS Lightsail"],
        projectUrl: "https://ict-ipr.vercel.app/",
        imageUrl: iprImg,
    },
    {
        title: "Project Management Tool",
        description:
            "A flask-based data anlytics tool for ICT's project management. Users can upload project budget spreadsheets on the HTML form, the backend process the uploaded files and generates spreadsheet reports for users, saving numerous hours of manual work.",
        tags: ["Flask", "HTML", "CSS", "XLSXWriter", "Pandas", "SQL"],
        projectUrl: "https://ict-management-tool.b48hg0eekp53g.us-east-1.cs.amazonlightsail.com/",
        imageUrl: ictmanagerImg,
    },
    {
        title: "Fast Mutation Testing in Python",
        description:
            "Fast Python mutation testing: test your tests! Safely run mutation trials without source code modifications and see what will get past your test suite, with incremental code changes mutation generation and arid nodes removals.",
        tags: ["Mutation Testing", "Python", "AST", "Mutatest"],
        projectUrl: "https://github.com/PratikshitSingh/mutatest",
        imageUrl: mutationImg,
    },
    {
        title: "Attention-Enhanced Super-Resolution GAN",
        description:
            "Implemented SRGAN with multi-scale attention U-net discriminator & residual-in-residual dense blocks generator. The AE-SRGAN resulted in better- NIQE score over current SR models & accurately generated sharp edge details & textures.",
        tags: ["Super Resolution", "GAN", "Attention blocks", "RRDB", "U-Net", "CNN"],
        projectUrl: "https://github.com/PratikshitSingh/A-ESRGANs",
        imageUrl: aesrganImg,
    },
    {
        title: "Domain Adversarial Transfer Learning for Time Series Classification",
        description:
            "Developed methods to generate superior pre-trained 1-D CNN transfer models for time-series classification.",
        tags: ["Domain adversarial networks", "Error bounds", "Timeseries", "DTW", "Divergence measures", "CNN"],
        projectUrl: "https://github.com/PratikshitSingh/Smart-Tranfer-Learning-for-TSC",
        imageUrl: TLImg,
    },
] as const;

export const skillsData = [
    // --- Backend & Microservices ---
    "Spring Boot",
    "Django",
    "Flask",
    "Kafka",
    "Redis",
    "Nginx",
    
    // --- Data & ETL ---
    "PySpark",
    "EMR",
    "Hadoop",
    "Hive",
    "SQL",
    "Airflow",
    
    // --- Cloud & DevOps ---
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Github Actions",
    "ArgoCD",
    "Terraform",
    
    // --- GenAI & LLMs ---
    "LangChain",
    "LangGraph",
    "RAG",
    "Vector DBs",
    "Embeddings",
    
    // --- ML/DL ---
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Scikit-Learn",
    
    // --- Frontend ---
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "Next.js",
    "HTML",
    "CSS",
    "Mantine",
    
    // --- Databases ---
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "GraphQL",
    "Apollo",
    
    // --- Languages ---
    "Python",
    "Java",
    "C++",
    "C",
    "Bash",
    
    // --- Tools & Utilities ---
    "Git",
    "Heroku",
    "Vercel",
    "Pandas",
    "Numpy",
    "Matplotlib",
] as const;
