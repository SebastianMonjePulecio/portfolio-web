/**
 * Textos en inglés.
 * El español vive directamente en index.html (es el idioma por defecto y lo que
 * ven los buscadores). main.js guarda ese texto original al cargar la página,
 * así que aquí solo hace falta la versión en inglés de cada clave data-i18n.
 */
window.TRANSLATIONS_EN = {
  pageTitle: "Sebastián Monje Pulecio · Data Analyst",
  pageDescription:
    "Portfolio of Sebastián Monje Pulecio, junior data analyst in Neiva, Colombia. Data analysis, machine learning and forecasting projects with Python, SQL and Power BI.",

  skip: "Skip to content",
  navLabel: "Main",
  langLabel: "Language",
  techLabel: "Technologies",
  navProjects: "Projects",
  navSkills: "Skills",
  navAbout: "About",
  navContact: "Contact",

  heroRole: "Junior data analyst in Neiva, Colombia",
  heroTitle: "I analyze business data and build models that help people decide.",
  heroLead:
    "I clean and explore data with Python and SQL, train machine learning models and turn them into tools other people can use: Streamlit dashboards, Power BI reports and FastAPI services.",
  ctaProjects: "See projects",
  ctaCv: "Download CV (PDF, Spanish)",

  projectsTitle: "Projects",
  projectsIntro:
    "Each project starts from a business question. The data is public or simulated, and the code is on GitHub.",
  colProject: "Project",
  colWork: "What I did",
  colResult: "Result",
  code: "Code",
  demo: "Live demo",

  p1Title: "Demand forecasting with MLOps",
  p1Problem: "How much of each product will sell, so inventory can be planned?",
  p1Work:
    "End-to-end pipeline: ETL into SQLite, 23 features, an ensemble of XGBoost, LightGBM and Gradient Boosting, a FastAPI service and a Streamlit dashboard.",
  p1Figure: "2.49%",
  p1Result: "mean error (MAPE) on 73,000 simulated sales records.",

  p2Title: "OpsVision AI: delivery times",
  p2Problem: "Why are deliveries late, and how long will they take?",
  p2Work:
    "I measured the effect of traffic, weather and distance, trained a model that estimates delivery time and built a scenario simulator.",
  p2Result: "Traffic is the biggest cause of delays; bad weather makes it worse.",

  p3Title: "Customer churn prediction",
  p3Problem: "Which customers are about to leave, and why?",
  p3Work:
    "Data cleaning and feature engineering, a Random Forest model and a Streamlit app that simulates a customer and shows their risk in real time.",
  p3Result: "Customers under 6 months old with frequent support contact carry the highest risk.",

  p4Title: "E-commerce profitability and retention",
  p4Problem: "How can sales grow without losing margin?",
  p4Work:
    "I generated a consistent business case, analyzed it with Python and SQL and built a Streamlit dashboard by segment, channel and category.",
  p4Result:
    "Shows which channels and categories sell more but leave less profit, and which customers are close to churning.",

  p5Title: "Loan portfolio and credit risk",
  p5Problem: "Which customers should collections contact first?",
  p5Work:
    "I segmented the portfolio by days past due, classified risk and built financial KPIs into a Power BI dashboard.",
  p5Result: "A small group of highly overdue customers concentrates most of the risk.",

  p6Title: "Flight delays",
  p6Problem: "Can we anticipate which flights will leave late?",
  p6Work:
    "Python ETL, time, weather and route features, a Random Forest model evaluated with ROC-AUC and an executive dashboard.",
  p6Result: "Severe weather, peak hours and distance explain most delays.",

  p7Title: "Sales analysis with SQL and Power BI",
  p7Problem: "Which products and customers drive sales?",
  p7Work: "SQL queries, exploration in Jupyter and a Power BI dashboard covering two years of sales.",
  p7Result: "Sales are seasonal, and premium customers have the highest average spend.",

  skillsTitle: "Skills",
  skAnalysis: "Analysis",
  skAnalysisList: "Python (Pandas, NumPy), SQL, exploratory analysis, data cleaning and transformation",
  skModels: "Modeling",
  skModelsList: "scikit-learn, Random Forest, XGBoost, LightGBM, feature engineering, model evaluation",
  skViz: "Visualization",
  skVizList: "Power BI, Streamlit, Plotly, Matplotlib",
  skTools: "Tools",
  skToolsList: "Git and GitHub, FastAPI, SQLite, Jupyter, Excel",

  aboutTitle: "About me",
  aboutP1:
    "I like turning data into information people can act on. In my projects I cover the whole path, from collecting and cleaning the data to explaining what the results mean for the business.",
  aboutP2:
    "I'm looking for my first data analyst role, where I can keep learning with a team and contribute from day one.",
  eduTitle: "Education",
  edu1: "Technologist in Software Analysis and Development, in progress",
  edu2: "Diploma in Artificial Intelligence applied to Machine Learning",
  edu3: "Systems Technician, SENA (2016–2017)",

  contactTitle: "Let's talk",
  contactText: "If you have an opening or a data project, write to me.",
  cvShort: "CV in PDF (Spanish)",
};
