import React from 'react';
import styles from './Views.module.css';
import resumePdf from '../../assets/akshat_resume.pdf';

// 1. ABOUT VIEW
export function AboutView() {
  return (
    <div className={styles.pageView}>
      {/* Stats Highlight (Education & Grades) */}
      <div className={styles.aboutStats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>UNDERGRADUATE</span>
          <span className={styles.statVal}>B.E. Computer Science, BIT Mesra (Currently in 7th Semester)</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>ACADEMICS</span>
          <span className={styles.statVal}>CGPA: 8.18 / 10.0</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>CLASS XII (CBSE)</span>
          <span className={styles.statVal}>91.8% PCM • MIET Public School</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>CLASS X (CBSE)</span>
          <span className={styles.statVal}>95.4% General • MIET Public School</span>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>BIO / PERSPECTIVE</h2>
      
      <p className={styles.paragraph}>
        I don’t just write code; I design systems that solve developer pain points. As a Computer Science student at BIT Mesra, I focus on building scalable backends, implementing Retrieval-Augmented Generation (RAG) pipelines, and orchestrating complex agentic workflows.
      </p>

      <div className={styles.quoteBlock}>
        "I am a Full Stack AI Engineer passionate about designing developer workflows, orchestrating autonomous agent teams, and sharing technical insights through writing."
      </div>

      <p className={styles.paragraph}>
        I love creating developer tools that directly solve real-world problems I've faced. This hands-on drive recently led me to create and publish a developer tool npm package (you can <a href="https://www.npmjs.com/package/chat-relay-mcp?activeTab=readme" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>check out the npm package here ↗</a>), which gathered 400+ downloads within its first few hours.
      </p>

      <p className={styles.paragraph}>
        For me, building software is only half the journey; the other half is explaining it. I regularly write technical articles breaking down system architecture and engineering concepts. Checkout my latest projects, and feel free to check out my blogs on my <a href="https://medium.com/@akshatf8lmalik" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>Medium Blog ↗</a>.
      </p>
    </div>
  );
}

// 2. SKILLS VIEW
export function SkillsView() {
  const categories = [
    {
      title: 'LANGUAGES',
      items: ['Java', 'JavaScript', 'Python', 'TypeScript']
    },
    {
      title: 'LIBRARIES & FRAMEWORKS',
      items: ['React.js', 'Next.js', 'NestJS', 'Express.js', 'FastAPI', 'LangChain']
    },
    {
      title: 'ADDITIONAL LIBRARIES',
      items: ['JWT', 'Beautiful Soup', 'Groq SDK', 'Tavily API', 'MCP SDK', 'Mongoose', 'Zod']
    },
    {
      title: 'DATABASES & WORKERS',
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'PineconeDB', 'BullMQ']
    },
    {
      title: 'TOOLS & AI',
      items: ['Docker', 'Git', 'GitHub', 'Llama 3.1', 'Cerebras', 'Ollama']
    }
  ];

  return (
    <div className={styles.pageView}>
      <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
      <div className={styles.skillsGrid}>
        {categories.map((cat) => (
          <div key={cat.title} className={styles.skillCard}>
            <h3 className={styles.cardTitle}>{cat.title}</h3>
            <ul className={styles.skillList}>
              {cat.items.map((item) => (
                <li key={item} className={styles.skillItem}>
                  <span className={styles.bullet}>■</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. WORK VIEW
export function WorkView() {
  const projects = [
    {
      title: 'CHAT-RELAY MCP',
      desc: 'Developed a Model Context Protocol (MCP) server enabling cross-IDE context persistence and migration by storing conversations, project metadata, and custom developer context. Published as an npm package with 400+ downloads.',
      tech: 'TypeScript • MCP SDK • SQLite • Zod • Node.js',
      github: 'https://github.com/akshatmalik-bruh/ChatRelayMcp'
    },
    {
      title: 'MULTI AI AGENT + RAG RESEARCH SYSTEM',
      desc: 'Built a RAG-powered research system with metadata-aware retrieval and a multi-agent architecture (Searcher, Parser, Report Generator, Critic Reviewer) that performs live web research and synthesizes information into structured reports.',
      tech: 'ReactJS • FastAPI • MongoDB • PineconeDB • LangChain • Sentence Transformers • Groq • Cerebras',
      github: 'https://github.com/akshatmalik-bruh/Multi-Agent-Research'
    },
    {
      title: 'CODESANDBOX',
      desc: 'Implemented a web-based code execution platform using worker processes to orchestrate Docker containers, enabling secure, isolated, and scalable execution environments.',
      tech: 'Docker • ExpressJS • Redis • BullMQ • MongoDB • Zod • ReactJS',
      github: 'https://github.com/akshatmalik-bruh/CodeSandbox'
    },
    {
      title: 'RESUME ANALYZER',
      desc: 'Built an AI-powered platform that identifies skill gaps, generates interview questions, and creates ATS-optimized resumes tailored to job descriptions.',
      tech: 'ReactJS • ExpressJS • MongoDB • JWT • Bcrypt • Puppeteer • Zod',
      github: 'https://github.com/akshatmalik-bruh/resumeAnalyser'
    }
  ];

  return (
    <div className={styles.pageView}>
      <h2 className={styles.sectionTitle}>MY PROJECTS</h2>
      <div className={styles.projectsContainer}>
        {projects.map((proj) => (
          <div key={proj.title} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              <span>{proj.title}</span>
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  GITHUB ↗
                </a>
              )}
            </h3>
            <p className={styles.projectDesc}>{proj.desc}</p>
            <div className={styles.projectTech}>{proj.tech}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. ARTICLES VIEW
export function ArticlesView() {
  const articles = [
    {
      title: 'How I designed an MCP server for cross-IDE AI context sharing',
      desc: 'Architecture Walkthrough',
      tag: 'ARCHITECTURE • MEDIUM',
      link: 'https://medium.com/@akshatf8lmalik/how-i-designed-an-mcp-server-for-cross-ide-ai-context-sharing-2a3ec6ebb0a7'
    },
    {
      title: 'I built an MCP server to share AI context across IDEs',
      desc: '400 npm downloads in 10 hours told me I wasn’t the only one frustrated.',
      tag: 'DEVELOPMENT • MEDIUM',
      link: 'https://medium.com/@akshatf8lmalik/i-built-an-mcp-server-to-share-ai-context-across-ides-ab63a63727bc'
    },
    {
      title: 'What does writing "Scalable Code" actually mean?',
      desc: '4 min read • May 25, 2026',
      tag: 'SOFTWARE ENGINEERING • MEDIUM',
      link: 'https://medium.com/@akshatf8lmalik/what-does-writing-scalable-code-actually-mean-0007e37e46ef'
    }
  ];

  return (
    <div className={styles.pageView}>
      <h2 className={styles.sectionTitle}>TECHNICAL WRITINGS & PUBLICATIONS</h2>
      
      <div className={styles.articleSection}>
        <h3 className={styles.subSectionTitle}>MEDIUM ARTICLES</h3>
        <ul className={styles.articleList}>
          {articles.map((art) => (
            <li key={art.title}>
              <a
                href={art.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleItem}
              >
                <span className={styles.articleDate}>{art.tag}</span>
                <h3 className={styles.articleTitle}>{art.title}</h3>
                <p className={styles.projectDesc} style={{ marginTop: '0.4rem', fontSize: '0.95rem' }}>{art.desc}</p>
                <span className={styles.articleRead}>READ ARTICLE ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.articleSection} style={{ marginTop: '3.5rem' }}>
        <h3 className={styles.subSectionTitle}>PUBLICATIONS</h3>
        <ul className={styles.articleList}>
          <li>
            <a
              href="https://drive.google.com/file/d/1FgbL2TuScu7BhsIsuyZh-BFhnWWmKmVC/preview"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.articleItem}
            >
              <span className={styles.articleDate}>RESEARCH PAPER • SCOPUS-INDEXED</span>
              <h3 className={styles.articleTitle}>
                Youth Standpoints on Food Wastage at Indian Weddings: A Cross-Sectional Study of Policy Perspectives and Tech-Driven Solutions for a Sustainable Future
              </h3>
              <p className={styles.projectDesc} style={{ marginTop: '0.4rem', fontSize: '0.95rem' }}>
                Published in the TSM Journal. The research paper presents cross-sectional study details and tech-driven solutions for food waste mitigation at wedding events in India.
              </p>
              <span className={styles.articleRead}>READ PUBLICATION ↗</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

// 5. RESUME VIEW
export function ResumeView() {
  const experience = [
    {
      role: 'FULL STACK DEVELOPER INTERN',
      company: 'ZOOLARITY',
      period: 'MAY 2026 - PRESENT',
      details: [
        'Built and maintained RESTful APIs using NestJS in a modular monolithic architecture, improving code maintainability, module isolation, and development scalability.',
        'Resolved 3 high-priority production JIRA tickets in a single sprint, implementing REST API enhancements, database migrations, and frontend UI improvements across NestJS and NextJS.',
        'Optimized backend query performance by designing and implementing database indexes for high-traffic filtering operations, improving response times and user experience.'
      ]
    }
  ];

  const education = [
    {
      degree: 'BACHELOR OF ENGINEERING (COMPUTER SCIENCE)',
      school: 'BIRLA INSTITUTE OF TECHNOLOGY, MESRA',
      period: 'AUG 2023 - PRESENT',
      details: 'CGPA: 8.18 / 10'
    }
  ];

  return (
    <div className={styles.pageView}>
      <div className={styles.resumeSection}>
        <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={item.role} className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineRole}>{item.role}</h3>
                <span className={styles.timelinePeriod}>{item.period}</span>
              </div>
              <h4 className={styles.timelineCompany}>{item.company}</h4>
              <ul className={styles.timelineBullets}>
                {item.details.map((bullet, idx) => (
                  <li key={idx} className={styles.timelineBullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.resumeSection}>
        <h2 className={styles.sectionTitle}>EDUCATION</h2>
        <div className={styles.timeline}>
          {education.map((item) => (
            <div key={item.degree} className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineRole}>{item.degree}</h3>
                <span className={styles.timelinePeriod}>{item.period}</span>
              </div>
              <h4 className={styles.timelineCompany}>{item.school}</h4>
              <p className={styles.timelineDetails}>{item.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.downloadContainer}>
        <a 
          href={resumePdf} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.downloadBtn}
        >
          VIEW / DOWNLOAD FULL RESUME (PDF)
        </a>
      </div>
    </div>
  );
}
