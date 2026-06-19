export interface TimelineEntry {
  year: string;
  title: string;
  description?: string;
  tags?: string[];
}

const timeline: TimelineEntry[] = [
  {
    year: '2025 - Present',
    title: 'Meta Instagram — Software Engineer',
    description:
      "Lead security and integrity work on Instagram's account recovery surface. Shipped policies that cut account compromises 40% (~92K/year) and prevented ~20K account takeovers/year. Drove the team's first Python→Hack backend migration and prototyped an LLM-based system to auto-reverse false-positive enforcements (projected 1.8M MAU/week).",
    tags: ['Hack', 'Python', 'GraphQL', 'LLMs', 'A/B Testing', 'SQL'],
  },
  {
    year: '2021 - 2025',
    title: 'Amazon Pharmacy — Software Development Engineer',
    description:
      "Full-stack development on Amazon Pharmacy's customer onboarding. Designed a micro-frontend architecture for independent team deployments, built a reusable CDK library for centralized monitoring, and led migration of a Java Spring service from a shared to a dedicated AWS account.",
    tags: ['Java', 'Spring', 'React', 'Micro-frontend', 'CDK', 'AWS'],
  },
  {
    year: '2019 - 2021',
    title: 'Amazon Fulfillment — Software Development Engineer',
    description:
      "Built data ingestion infrastructure-as-code for Amazon's fulfillment data platform. Established cross-account ingestion standards via API Gateway and Kinesis, authored reusable CDK components for ETL pipelines, and developed RPA automation on Windows EC2 that saved $500K+/year.",
    tags: ['CDK', 'Lambda', 'Kinesis', 'API Gateway', 'Python', 'Java'],
  },
  {
    year: '2017 - 2018',
    title: 'Latentview Analytics — Decision / Data Scientist',
    description:
      'Designed experimental studies and A/B tests for ad products at Facebook and Google. Built Python pipelines on Presto and Hive, used BigQuery for user segmentation, and shipped Tableau dashboards for campaign performance and sentiment trends.',
    tags: ['Python', 'SQL', 'BigQuery', 'A/B Testing', 'Tableau'],
  },
  {
    year: '2016 - 2017',
    title: 'Oklahoma State University — BI Engineer Intern',
    description:
      'Automated reporting and ETL for the Alumni Association in Python and Tableau, saving 20 hours of analyst work per week. Built dashboards to monitor business KPIs and surface marketing insights.',
    tags: ['Python', 'SQL', 'Tableau'],
  },
  {
    year: '2015 - 2017',
    title: "Master's in Management Information Systems — Oklahoma State University",
  },
  {
    year: '2012 - 2015',
    title: 'Accenture — Software Development Engineer',
    description:
      'Built backend logic in Oracle PL/SQL for a T-Mobile CRM application supporting new telecom initiatives. Resolved critical production issues within SLA.',
    tags: ['Oracle PL/SQL', 'Java'],
  },
  {
    year: '2008 - 2012',
    title: "Bachelor's in Mechanical Engineering — Bangalore University",
  },
];

export default timeline;
