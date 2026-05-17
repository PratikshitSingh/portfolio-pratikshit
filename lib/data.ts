import React from "react";
import { FaServer, FaChartBar, FaCloud, FaBrain, FaCode, FaDatabase, FaWrench } from "react-icons/fa";
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
        description: [
            "Designed and built event-driven microservices architecture for privacy compliance automation, serving CCPA, GDPR, and Global Privacy Control requirements across all Intuit products",
            "Architected and led AI-powered Complaint Management Platform for all Intuit product support operations",
            "Improved complaint recall from 1% manual processing to 100% automated, reducing processing time from monthly reviews to daily reports",
            "Creating Langgraph agents for Privacy automations & code assist plugins for enabling teams across Intuit to embed Privacy principles in their development lifecycle",
        ],
        logoPath: "/logos/Intuit.svg",
        tags: ["SPRING BOOT", "MICROSERVICES", "KAFKA", "AWS", "EVENT-DRIVEN", "DISTRIBUTED SYSTEMS", "PRIVACY COMPLIANCE"],
        date: "Present",
    },
    {
        title: "Zeta Global, Software Engineer",
        location: "San Francisco, CA",
        description: [
            "Building analytical reporting tools for clients in Adtech industry",
            "Developing attributions ETLs for MTA campaigns",
        ],
        logoPath: "/logos/zeta.svg",
        tags: ["BIG DATA", "NOSQL", "SQL", "DISTRIBUTED SYSTEMS", "ETL", "REST", "AWS", "DOCKER"],
        date: "June 2024 - Sep 2024",
    },
    {
        title: "Illinois Center of Transportation, Lead Software Developer",
        location: "Rantoul, IL",
        description: [
            "Designed and implemented multiple containerized web applications for Pavement Life Cycle Assessment",
            "Utilized RDBMS, ReactJS, and Django REST Framework for implementation",
        ],
        logoPath: "/logos/ict.svg",
        tags: ["DJANGO", "REACT", "MANTINE", "POSTGRES", "OPENSOURCE LIBRARIES", "AWS LIGHTSAIL", "DOCKER", "GITHUB ACTIONS"],
        date: "Dec 2022 - May 2024",
    },
    {
        title: "JP Morgan Chase - Software Engineer II",
        location: "Bengaluru, India",
        description: [
            "Developed optimization system using Linear Regression & XGB prediction models for risk computation costs",
            "Reduced AWS EC2 usage by 84% for the team",
        ],
        logoPath: "/logos/jpmc.svg",
        tags: ["SKLEARN", "LINEAR REGRESSION", "XG-BOOST", "ETL DATA PIPELINE", "AWS EC2", "POSTGRES", "KUBERNETES (K8S)"],
        date: "Jan 2022 - Aug 2022",
    },
    {
        title: "JP Morgan Chase - Software Engineer I",
        location: "Bengaluru, India",
        description: [
            "Built user-facing dashboards to display Derivative Trade market risk and P&L reports",
            "Wrote data massaging and aggregation services triggered by Market Markers",
        ],
        logoPath: "/logos/jpmc.svg",
        tags: ["TORNADO", "REACT", "POSTGRES", "SQL", "AWS EC2", "KUBERNETES (K8S)"],
        date: "Aug 2020 - Jan 2022",
    },
    {
        title: "JP Morgan Chase - Software Engineering Intern",
        location: "Bengaluru, India",
        description: [
            "Developed an automatic dependency upgradation for NodeJS trading app",
        ],
        logoPath: "/logos/jpmc.svg",
        tags: ["NODEJS", "JENKINS", "GROOVY"],
        date: "May 2019 - Jul 2019",
    },
] as const;

export const projectsData = [
    {
        title: "Youtube Playlist Tracker",
        description: [
            "Kafka application for users to track their playlist added in the app",
            "Uses Youtube API to fetch video statistics",
            "Implements Kafka producer-consumer model to track video statistics",
            "Sends notifications to users on Telegram",
        ],
        tags: ["Kafka", "Confluent Cloud", "Heroku", "Youtube API", "Telegram API", "Python", "Flask", "ksqlDB"],
        projectUrl: "https://github.com/PratikshitSingh/youtube-playlist-tracker",
        imageUrl: youtubeTrackerImg,
    },
    {
        title: "Life Cycle/Cost Assessment Tool",
        description: [
            "Web app for computing cost and environmental impacts of pavement projects",
            "Analysis period tracking and reporting for pavement projects",
        ],
        tags: ["Django", "React", "Postgres", "AWS Lightsail"],
        projectUrl: "https://ict-lca.vercel.app/",
        imageUrl: lcaImg,
    },
    {
        title: "Initial Pavement Rehabilitation",
        description: [
            "Web app for comparing cost of initial pavement rehabilitation using different treatments",
            "Provides comprehensive analysis and recommendations for pavement projects",
        ],
        tags: ["Django", "React", "Postgres", "AWS Lightsail"],
        projectUrl: "https://ict-ipr.vercel.app/",
        imageUrl: iprImg,
    },
    {
        title: "Project Management Tool",
        description: [
            "Flask-based data analytics tool for ICT's project management",
            "Users can upload project budget spreadsheets and generate spreadsheet reports",
            "Saves numerous hours of manual work for the organization",
        ],
        tags: ["Flask", "HTML", "CSS", "XLSXWriter", "Pandas", "SQL"],
        projectUrl: "https://ict-management-tool.b48hg0eekp53g.us-east-1.cs.amazonlightsail.com/",
        imageUrl: ictmanagerImg,
    },
    {
        title: "Fast Mutation Testing in Python",
        description: [
            "Fast Python mutation testing framework to validate test suite quality",
            "Safely run mutation trials without source code modifications",
            "Incremental code changes mutation generation for efficient testing",
        ],
        tags: ["Mutation Testing", "Python", "AST", "Mutatest"],
        projectUrl: "https://github.com/PratikshitSingh/mutatest",
        imageUrl: mutationImg,
    },
    {
        title: "Attention-Enhanced Super-Resolution GAN",
        description: [
            "Implemented SRGAN with multi-scale attention U-net discriminator",
            "Built residual-in-residual dense blocks generator",
            "Achieved better NIQE score with sharp edge details and texture generation",
        ],
        tags: ["Super Resolution", "GAN", "Attention blocks", "RRDB", "U-Net", "CNN"],
        projectUrl: "https://github.com/PratikshitSingh/A-ESRGANs",
        imageUrl: aesrganImg,
    },
    {
        title: "Domain Adversarial Transfer Learning for Time Series Classification",
        description: [
            "Developed methods to generate superior pre-trained 1-D CNN transfer models",
            "Optimized for time-series classification tasks",
        ],
        tags: ["Domain adversarial networks", "Error bounds", "Timeseries", "DTW", "Divergence measures", "CNN"],
        projectUrl: "https://github.com/PratikshitSingh/Smart-Tranfer-Learning-for-TSC",
        imageUrl: TLImg,
    },
] as const;

export type SkillCategory = {
    category: string;
    icon: React.ReactNode;
    skills: readonly string[];
};

export const skillsData: readonly SkillCategory[] = [
    {
        category: "Backend & Microservices",
        icon: React.createElement(FaServer),
        skills: ["Spring Boot", "Django", "Flask", "Kafka", "Redis", "Nginx"],
    },
    {
        category: "Data & ETL",
        icon: React.createElement(FaChartBar),
        skills: ["PySpark", "EMR", "Hadoop", "Hive", "SQL", "Airflow"],
    },
    {
        category: "Cloud & DevOps",
        icon: React.createElement(FaCloud),
        skills: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins", "Github Actions", "ArgoCD", "Terraform"],
    },
    {
        category: "GenAI & LLMs",
        icon: React.createElement(FaBrain),
        skills: ["LangChain", "LangGraph", "RAG", "Vector DBs", "Embeddings"],
    },
    {
        category: "ML/DL",
        icon: React.createElement(FaBrain),
        skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn"],
    },
    {
        category: "Frontend",
        icon: React.createElement(FaCode),
        skills: ["React", "Redux", "TypeScript", "JavaScript", "Tailwind", "Next.js", "HTML", "CSS", "Mantine"],
    },
    {
        category: "Databases",
        icon: React.createElement(FaDatabase),
        skills: ["PostgreSQL", "MongoDB", "SQLite", "GraphQL", "Apollo"],
    },
    {
        category: "Languages",
        icon: React.createElement(FaCode),
        skills: ["Python", "Java", "C++", "C", "Bash"],
    },
    {
        category: "Tools & Utilities",
        icon: React.createElement(FaWrench),
        skills: ["Git", "Heroku", "Vercel", "Pandas", "Numpy", "Matplotlib"],
    },
] as const;
