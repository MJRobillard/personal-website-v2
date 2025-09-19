%-----------------------------------------------------------------------------------------------------------------------------------------------%
%	The MIT License (MIT)
%-----------------------------------------------------------------------------------------------------------------------------------------------%

\documentclass[a4paper,10.5pt]{article}

\usepackage{url}
\usepackage{parskip}
\RequirePackage{color}
\RequirePackage{graphicx}
\usepackage[usenames,dvipsnames]{xcolor}
\usepackage[scale=0.92]{geometry}
\usepackage{tabularx}
\usepackage{enumitem}
\newcolumntype{C}{>{\centering\arraybackslash}X}
\usepackage{titlesec}
\usepackage{multicol}
\titleformat{\section}{\large\scshape\raggedright}{}{0em}{}[\titlerule]
\titlespacing{\section}{0pt}{6pt}{6pt}
\usepackage[unicode, draft=false]{hyperref}
\definecolor{linkcolour}{rgb}{0,0.2,0.6}
\hypersetup{colorlinks,breaklinks,urlcolor=linkcolour,linkcolor=linkcolour}
\usepackage{fontawesome5}

\newenvironment{joblong}[2]{
  \begin{tabularx}{\linewidth}{@{}l X r@{}}
  \textbf{#1} & & #2 \\[2pt]
  \end{tabularx}
  \begin{itemize}[nosep,leftmargin=1em,itemsep=2pt,label=--]
}{
  \end{itemize}
}

\begin{document}
\pagestyle{empty}

%----------------------------------------------------------------------------------------
%	HEADER
%----------------------------------------------------------------------------------------
\begin{tabularx}{\linewidth}{@{} C @{}}
\Huge{Matthew Robillard} \\[4pt]
\large{University of California, Berkeley} \\[6pt]
\href{https://github.com/MJRobillard}{\faGithub\ MJRobillard} \ $|$ \
\href{https://linkedin.com/in/matthew-robillard-6723b8252}{\faLinkedin\ matthew-robillard} \ $|$ \
\href{https://mjrobillard.com}{\faGlobe \ mjrobillard.com} \ $|$ \
\href{mailto:Robillard.matthew22@berkeley.edu}{\faEnvelope \ Robillard.matthew22@berkeley.edu} \ $|$ \
\href{tel:+15102209685}{\faMobile \ (510)~220--9685} \\
\end{tabularx}

%----------------------------------------------------------------------------------------
% SUMMARY
%----------------------------------------------------------------------------------------
\section{Summary}
UC Berkeley senior studying \textbf{History} \& \textbf{Data Science} with hands-on experience in AI/ML, geospatial analytics, and full-stack development. Proven impact in teaching, applied ML, California energy policy, and recently historical research.

%----------------------------------------------------------------------------------------
% EXPERIENCE
%----------------------------------------------------------------------------------------
\section{Work Experience}

\begin{joblong}{Student Fellow, California Energy Commission (CEC)}{Summer 2025 -- Present}
\item Built anomaly detection \& visualization system for the Lithium Valley Dashboard, to provide visual risk assesments for policy decisions.
\item Coordinated with USGS, BLM, Benchmark, and industry stakeholders on data integration.
\item Concierge for the CEC's 50th Anniversary Speakers; planning on attending the Benchmark Mineral Intelligence Week 2025 at the Ritz Carlton LA to network with 300+ policymakers and industry leaders.
\end{joblong}

\begin{joblong}{Advanced Coder, Outlier AI}{Summer 2024 -- Summer 2025}
\item Produced large-scale training data for ChatGPT 4.0 coding queries (Feather project), with an average score of 4.3/5
\item Specialized in React apps with Next.js, Pandas, and Facebook Prophet for production-quality solutions.
\item Acted as a code reviewer for the Dolfin project for github merge commits to provide reinforcment learning on AI cursor agents. 
\end{joblong}

\begin{joblong}{Machine Learning Associate, Allos AI}{Winter 2023 -- Winter 2024}
\item Deployed AWS inference endpoints (RL, DL, causal inference) for faster, scalable biotechnical report analysis.
\item Implemented 60\%+ of codebase tests, improving reproducibility and runtime efficiency across pipelines.
\item Resolved a critical AWS bug that caused storage bucket overloads, preventing potential multi-GB data loss.
\item Built a React-based causal inference visualization platform, streamlining client reporting.

\end{joblong}


%----------------------------------------------------------------------------------------
% PROJECTS
%----------------------------------------------------------------------------------------
\section{Projects}

\begin{tabularx}{\linewidth}{ @{}l r@{} }
\textbf{AI Pacman} & \hfill \href{https://pacman-ai-five.vercel.app/multiagent}{Live Link} \,|\, \href{https://github.com/mjrobillard/q_learner_grid}{GitHub} \\
\multicolumn{2}{@{}X@{}}{Reinforcement learning agent (Python, NumPy) in 2D Pac-Man; implemented Q-learning with dynamic hyperparameters.} \\
\end{tabularx}

\begin{tabularx}{\linewidth}{ @{}l r@{} }
\textbf{Veterinary Endoscopy Analysis }  \\
\multicolumn{2}{@{}X@{}}{Cleaned 20 years’ worth of veterinarian data (7.8GB) using regex
and pandas then with causal inference, random forest and clustering to identify confounding variables to cancer
and other illnesses. } \\
\end{tabularx}

\begin{tabularx}{\linewidth}{ @{}l r@{} }
\textbf{Music Galaxy Visualizer} & \hfill \href{https://musicviz-tan.vercel.app/}{Live Link} \,|\, \href{https://github.com/MJRobillard/musicviz}{GitHub} \\
\multicolumn{2}{@{}X@{}}{Built a real-time 3D audio-reactive visualizer mapping bass, rhythm, and energy to particle systems driven by chaotic attractors (Lorenz, Rössler, noise-based, hybrid, and spiral), with presets, customization, and sharable snapshots.} \\
\end{tabularx}

\begin{tabularx}{\linewidth}{ @{}l r@{} }
\textbf{Salsa at Cal Website} & \hfill \href{https://salsaatcal.com}{Live Link} \\
\multicolumn{2}{@{}X@{}}{Next.js + Firebase; Platform to Learn to dance like duolingo, network, and rsvp for Salsa At Cal workshops; achieved 600+ views in first week and sustained 20–28\% weekly user growth.} \\
\end{tabularx}

%----------------------------------------------------------------------------------------
% EDUCATION
%----------------------------------------------------------------------------------------
\section{Education}
\textbf{University of California, Berkeley} \hfill Fall 2022 -- Spring 2026 (Exp.) \\
B.A. in History \& Data Science (Emphasis: Science, Technology, and Society) 
\begin{itemize}[nosep,leftmargin=1em,itemsep=2pt,label=--]
  \item \textbf{HSF Scholar (2023–)}.
  \item \textbf{Head Instructor, \href{https://www2.eecs.berkeley.edu/Scheduling/CS/schedule.html}{CS198: Introduction to Full-Stack Web Development}} — Led 100+ students; revamped 70\% of the \href{https://fullstackdecal.com/}{course} content, adding modern technologies. Managed contributions from 35 Berkeley developers, 588 commits, and supported 10,000+ course site views \href{https://github.com/fullstack-decal/fullstackdecal}{(GitHub)}.
  \item \textbf{Vice President, Web Dev at Berkeley} — Directed a 6-person engineering team; reduced bug backlog by 30\%.
  \item \textbf{Salsa at Cal (Student Org)} — Internal Chair, Lead Developer, and Performance Lead.
\end{itemize}

%----------------------------------------------------------------------------------------
% SKILLS
%----------------------------------------------------------------------------------------
\section{Skills}
\begin{multicols}{2}
\begin{itemize}[nosep,leftmargin=1em,itemsep=1pt]
\item \textbf{Languages:} Python, Java, JavaScript, TypeScript, SQL, R 
\item \textbf{Frameworks:} React, Next.js, Tailwind
\item \textbf{Data Science:} PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, GeoPandas, Prophet, POSTGRE
\item \textbf{Tools:} AWS, Google Cloud Service, Firebase, ArcGIS, Git, Bash, Kaggle, Regex, BeautifulSoup, Selenium, Markdown, MDX
\end{itemize}
\end{multicols}
\end{document}
