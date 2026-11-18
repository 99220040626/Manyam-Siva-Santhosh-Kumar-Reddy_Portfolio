export interface SkillModule {
  id: string;
  code: string;
  name: string;
  category: "backend" | "frontend" | "ai" | "infra";
  status: string;
  accent: string;
  summary: string;
  subSkills: string[];
  proof: string;
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  timeline: string;
  badge: string;
  accent: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  techStack: string[];
  metrics: string;
  githubUrl: string;
  liveUrl: string;
}

export const RESUME_DATA = {
  name: "MANYAM SIVA SANTHOSH KUMAR REDDY",
  professionalTitle: "Full-Stack Software Engineer (Java, Spring Boot, Python, React & AI/ML)",
  email: "sivasanthoshmanyam48@gmail.com",
  phone: "+91-6281134837",
  linkedin: "https://www.linkedin.com/in/manyam-siva-santhosh-kumar-reddy-297a9531b/",
  github: "https://github.com/99220040626",
  portfolio: "https://99220040626.github.io/portfolio/",
  leetcode: "https://leetcode.com/u/qq0liHCj2l/",
  codechef: "https://www.codechef.com/users/kl_99220040626",
  resumePdfPath: "/resume/Manyam_Siva_Santhosh_Kumar_Reddy_Resume.pdf",
  objective:
    "Computer Science undergraduate with strong foundations in Java, Python, SQL, and full-stack web development. Experienced in building scalable web applications and machine learning models. Seeking an entry-level software development role to apply problem-solving skills and contribute to high-quality software solutions.",
  roles: [
    "Full-Stack Software Engineer (Java & Spring Boot)",
    "Backend REST API & Microservices Architect",
    "AI & Machine Learning Developer (Python & TensorFlow)",
    "React & Modern Frontend UI Engineer",
    "Database & SQL Optimization Specialist",
    "Data Structures & Algorithms Problem Solver",
  ],
  skillsAndInterests: {
    programmingLanguages: ["Java", "Python", "SQL"],
    frontendTechnologies: ["HTML5", "CSS3", "React"],
    backendTechnologies: ["Spring Boot", "RESTful APIs", "Spring Data JPA", "Hibernate"],
    database: ["MySQL"],
    toolsAndFrameworks: ["Git", "GitHub", "VS Code", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    coreSubjects: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"],
    softSkills: ["Critical thinking", "Data-driven decision making", "Project ownership"],
    languages: ["English", "Telugu", "Tamil"],
    strengths: ["Quick Learner", "Strong Analytical Thinking", "Team Work"],
    interests: ["Artificial Intelligence", "Learning New Technologies"],
  },
  education: [
    {
      institution: "Kalasalingam Academy of Research and Education",
      degree: "Bachelors of Engineering in Computer Engineering",
      period: "Sept 2022 - April 2026",
      score: "CGPA: 8.34",
      coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"],
    },
    {
      institution: "Gowtham Junior College",
      degree: "Senior Secondary (Class XII)",
      period: "Sept 2020 - April 2022",
      score: "Percentage: 94.8%",
      coursework: ["Mathematics", "Physics", "Chemistry", "Analytical Problem Solving"],
    },
    {
      institution: "Montessori English Medium High School",
      degree: "Secondary (Class X)",
      period: "Sept 2019 - April 2020",
      score: "Percentage: 99.3%",
      coursework: ["Quantitative Aptitude", "Science & Computing", "Board Distinction (99.3%)"],
    },
  ],
  skillModules: [
    {
      id: "java-engine",
      code: "MOD-01",
      name: "JAVA ENGINE",
      category: "backend",
      status: "ONLINE // CORE PRIMARY",
      accent: "#00F5FF",
      summary: "Object-Oriented Programming, Core Java, Collections, Multithreading, Exception Handling, and DSA problem-solving.",
      subSkills: ["Core Java (JDK 17/21)", "OOP Pillars & Design Patterns", "Collections & Streams API", "Data Structures & Algorithms"],
      proof: "Certified in Java by CodeChef (2025), completed CodSoft Java Programming Internship, and built e-commerce backend services.",
    },
    {
      id: "spring-boot-core",
      code: "MOD-02",
      name: "SPRING BOOT CORE",
      category: "backend",
      status: "ONLINE // PRODUCTION",
      accent: "#4ADE80",
      summary: "Enterprise Controller-Service-Repository backend architecture, RESTful API design, Spring Data JPA, and Hibernate ORM.",
      subSkills: ["Spring Boot 3.x", "RESTful API Design", "Controller-Service-Repository", "Spring Data JPA / Hibernate"],
      proof: "Architected full-stack E-Commerce backend handling authentication, product management, cart operations, and order processing.",
    },
    {
      id: "react-ui",
      code: "MOD-03",
      name: "REACT UI",
      category: "frontend",
      status: "ONLINE // INTERACTIVE",
      accent: "#7C4DFF",
      summary: "Component-driven responsive frontend engineering using React.js, HTML5, CSS3, Next.js 15, TypeScript, and Tailwind CSS.",
      subSkills: ["React.js & Hooks", "HTML5 & Semantic SEO", "CSS3 & Tailwind CSS", "Responsive Cross-Device UX"],
      proof: "Built interactive E-Commerce storefront UI and certified in HTML & CSS by CodeChef (2025).",
    },
    {
      id: "python-module",
      code: "MOD-04",
      name: "PYTHON MODULE",
      category: "ai",
      status: "ONLINE // 92% ANN ACCURACY",
      accent: "#00F5FF",
      summary: "Machine Learning & Deep Learning pipelines with Python, TensorFlow, Artificial Neural Networks (ANN), Scikit-learn, Pandas, NumPy, and SMOTE.",
      subSkills: ["Python 3.x", "TensorFlow & Keras ANN", "Scikit-learn & SMOTE", "Pandas & NumPy Preprocessing"],
      proof: "Developed Thyroid Disease Detection ANN achieving 92% test accuracy with SMOTE class-imbalance handling.",
    },
    {
      id: "mysql-database",
      code: "MOD-05",
      name: "MYSQL DATABASE",
      category: "infra",
      status: "ONLINE // ACID COMPLIANT",
      accent: "#4ADE80",
      summary: "Relational schema modeling, SQL query optimization, normalization, indexing, and transactional persistence with MySQL & Spring Data JPA.",
      subSkills: ["MySQL 8.x", "Complex SQL Joins", "DBMS Normalization", "Spring Data JPA Mapping"],
      proof: "Dual CodeChef Certifications in SQL (2025) and DBMS (2025); integrated persistent MySQL storage in E-Commerce platform.",
    },
    {
      id: "aws-node",
      code: "MOD-06",
      name: "AWS NODE",
      category: "infra",
      status: "ONLINE // CLOUD READY",
      accent: "#7C4DFF",
      summary: "Cloud-native deployment architectures, REST API gateway routing, static & edge hosting (GitHub Pages / Vercel), and scalable web systems.",
      subSkills: ["Cloud Deployment Pipelines", "RESTful API Gateways", "Vercel & GitHub Pages CI/CD", "Computer Networks & OS"],
      proof: "Live production deployments hosted on GitHub Pages (99220040626.github.io/portfolio/).",
    },
    {
      id: "docker-engine",
      code: "MOD-07",
      name: "DOCKER ENGINE",
      category: "infra",
      status: "ONLINE // CONTAINERIZED",
      accent: "#00F5FF",
      summary: "Reproducible development environments, Git/GitHub version control workflows, VS Code tooling, and multi-service orchestration.",
      subSkills: ["Git & GitHub Workflows", "Docker & Service Containers", "VS Code & Google Colab", "Modular Codebase Design"],
      proof: "Used across full-stack Java Spring Boot + React + MySQL and Python ML engineering workflows.",
    },
    {
      id: "jwt-security",
      code: "MOD-08",
      name: "JWT SECURITY",
      category: "backend",
      status: "ONLINE // ENCRYPTED",
      accent: "#4ADE80",
      summary: "Stateless token authentication, secure REST API endpoints, role-based access control, and protected checkout/order workflows.",
      subSkills: ["REST Authentication APIs", "JWT Stateless Sessions", "Role-Based Access Control", "Secure Order Processing"],
      proof: "Designed and implemented authentication and protected order-processing APIs in the E-Commerce Web Application.",
    },
  ] as SkillModule[],
  projects: [
    {
      id: "ecommerce",
      code: "PRJ-01 // FULL-STACK ENTERPRISE",
      title: "E-Commerce Web Application (React, Spring Boot, MySQL)",
      timeline: "Jan 2024 – Mar 2024",
      badge: "Spring Boot + React + MySQL",
      accent: "#00F5FF",
      overview:
        "Full-stack e-commerce web application engineered with a modular Java Spring Boot backend, Spring Data JPA/Hibernate persistence, MySQL relational database, and a responsive React frontend.",
      problem:
        "Traditional monolithic shopping platforms suffer from tightly coupled business logic, slow cart-to-checkout database transactions, and hard-to-maintain API endpoints.",
      solution:
        "Architected a clean Controller-Service-Repository backend in Java Spring Boot with dedicated RESTful APIs for authentication, product management, cart operations, and order processing backed by MySQL and Hibernate ORM.",
      architecture: [
        "Presentation Layer: Responsive React.js SPA with dynamic product filtering and cart state synchronization.",
        "API Layer (Controllers): RESTful Spring Boot endpoints handling JSON payloads for Auth, Products, Cart, and Orders.",
        "Business Logic Layer (Services): Modular transactional services enforcing inventory validation and order rules.",
        "Persistence Layer (Repositories): Spring Data JPA & Hibernate entities mapped to normalized MySQL tables.",
      ],
      features: [
        "Developed the backend using Java, Spring Boot, RESTful APIs, and MySQL for an e-commerce application.",
        "Designed and implemented REST APIs for authentication, product management, cart operations, and order processing.",
        "Implemented Controller-Service-Repository architecture to manage business logic and maintain modular code.",
        "Integrated MySQL using Spring Data JPA/Hibernate for database operations and persistent data management.",
      ],
      techStack: ["Java", "Spring Boot", "React", "MySQL", "Spring Data JPA", "Hibernate", "RESTful APIs", "HTML5", "CSS3", "Git"],
      metrics: "4 Core REST Modules (Auth, Catalog, Cart, Orders) • Modular Controller-Service-Repository Architecture",
      githubUrl: "https://github.com/99220040626",
      liveUrl: "https://99220040626.github.io/portfolio/",
    },
    {
      id: "thyroid",
      code: "PRJ-02 // AI & DEEP LEARNING",
      title: "Thyroid Disease Detection System (Python, TensorFlow)",
      timeline: "Jan 2025 – Mar 2025",
      badge: "92% Test Accuracy • TensorFlow ANN",
      accent: "#7C4DFF",
      overview:
        "Clinical machine learning and deep learning diagnostic system built with Python and TensorFlow that classifies thyroid disease using an Artificial Neural Network (ANN) trained on clinical patient datasets.",
      problem:
        "Clinical thyroid datasets exhibit severe class imbalance, missing biomarker values, and high susceptibility to overfitting when trained on standard shallow classifiers.",
      solution:
        "Engineered a complete preprocessing and deep learning pipeline incorporating normalization, feature engineering, SMOTE, and an ANN architecture with dropout and regularization—achieving 92% classification accuracy on the test dataset.",
      architecture: [
        "Data Ingestion & Cleaning: Pandas & NumPy pipeline handling missing clinical attributes and outlier removal.",
        "Feature Engineering & Normalization: Scikit-learn feature scaling and selection of high-signal thyroid indicators.",
        "Class Balancing Engine: SMOTE oversampling to equalize minority thyroid pathology classes.",
        "Deep Neural Network (TensorFlow): Multi-layer Artificial Neural Network with Dropout and regularization achieving 92% test accuracy.",
      ],
      features: [
        "Developed an Artificial Neural Network (ANN) model for thyroid disease classification.",
        "Performed data preprocessing, normalization, and feature engineering to improve model accuracy.",
        "Applied SMOTE technique to handle class imbalance.",
        "Implemented dropout and regularization to prevent overfitting.",
        "Achieved 92% accuracy on test dataset.",
      ],
      techStack: ["Python", "TensorFlow", "Artificial Neural Networks (ANN)", "Scikit-learn", "SMOTE", "Pandas", "NumPy"],
      metrics: "92% Test Dataset Accuracy • SMOTE Class-Balanced • Dropout Regularized ANN",
      githubUrl: "https://github.com/99220040626",
      liveUrl: "https://99220040626.github.io/portfolio/",
    },
  ] as ProjectItem[],
  certifications: [
    {
      id: "cert-java",
      title: "Java Programming Certification",
      issuer: "CodeChef (2025)",
      certId: "ae38b31",
      url: "https://drive.google.com/file/d/1JxL_T0ZXGfFXDD5TthyiGu7vNbx7ctQ7/view?usp=drivesdk",
    },
    {
      id: "cert-python",
      title: "Python Programming Certification",
      issuer: "CodeChef (2025)",
      certId: "fc9eb25",
      url: "https://drive.google.com/file/d/1K4tl4oO-Vi0Og7QrTmTh4xucIt4XDAZ8/view?usp=drivesdk",
    },
    {
      id: "cert-htmlcss",
      title: "HTML & CSS Certification",
      issuer: "CodeChef (2025)",
      certId: "adfd132",
      url: "https://drive.google.com/file/d/1K-oN7gRofqb2lBwzM_z7MEDhwMxM6Z7v/view?usp=drivesdk",
    },
    {
      id: "cert-sql",
      title: "SQL Database Certification",
      issuer: "CodeChef (2025)",
      certId: "5859ff2",
      url: "https://drive.google.com/file/d/1JveZ6fOBC-DPnOydJ9KmPtJgVU5mHW2q/view?usp=drivesdk",
    },
    {
      id: "cert-dbms",
      title: "DBMS Certification",
      issuer: "CodeChef (2025)",
      certId: "97b1476",
      url: "https://drive.google.com/file/d/1UP9CHcV4-Q7NMI047ATzwAH5PV34Q8YF/view?usp=drivesdk",
    },
    {
      id: "cert-hackathon",
      title: "Hackathon Participant – Secured 2nd Place",
      issuer: "National / University Hackathon",
      certId: "HACK-2ND",
      url: "https://drive.google.com/file/d/1PG50ivrfZMxqQebGqtv1FgoJS3o5jVtr/view?usp=drivesdk",
    },
  ],
};
