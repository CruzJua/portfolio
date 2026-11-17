export const projectGroups = [
  {
    id: 'projects-fullstack',
    title: 'Full-Stack Web Applications',
    projects: [
      {
        title: 'Gig Tracker',
        badges: [{ type: 'deploy', text: '\u{1F30E} Live on Render' }],
        href: 'https://github.com/CruzJua/GigTracker',
        image: '/images/gigTracker.png',
        alt: 'Gig Tracker App screenshot',
        description: (
          <>
            A full-stack gig tracking web application built with <strong>Node.js</strong>{' '}
            and <strong>Express</strong>, backed by a <strong>MongoDB</strong> database.
            Features full CRUD operations on gigs, and a clean responsive front-end.
            Deployed to <strong>Render</strong> with environment-based configuration.
          </>
        ),
      },
      {
        title: 'Inventory Tracker+',
        badges: [
          { type: 'deploy', text: '\u{1F30E} Live on Render' },
          { type: 'wip', text: '⚙ In Progress' },
        ],
        href: 'https://github.com/CruzJua/InventoryTrackerPlus',
        image: '/images/invTracker.png',
        alt: 'Inventory Tracker+ screenshot',
        description: (
          <>
            A full-stack inventory management application currently in active development.
            Built with <strong>Node.js</strong> and <strong>Express</strong>, using{' '}
            <strong>EJS</strong> templates for server-side rendering. The application
            follows a <strong>monolithic</strong> architecture where a single root file
            coordinates both frontend and backend routes independently, establishing a
            clean separation between the <strong>API layer</strong> and the{' '}
            <strong>Data Access Layer (DAL)</strong>, this is a pattern shared with the Gig
            Tracker. Data is persisted in <strong>MongoDB</strong> and the
            app is deployed on <strong>Render</strong>.
          </>
        ),
      },
    ],
  },
  {
    id: 'projects-ml',
    title: 'Machine Learning & AI',
    projects: [
      {
        title: 'Predictive Modeling with Regression & Classification',
        badges: [],
        href: 'https://github.com/CruzJua',
        image: '/images/classification.png',
        alt: 'ML Classification project',
        description: (
          <>
            Applied supervised learning techniques to public datasets, sourced from{' '}
            <strong>Kaggle</strong> for a class assignment. Implemented and compared
            multiple models including logistic regression, random forests, Decision Trees,
            K-Nearest Neighbors, and MLP classifiers evaluating performance with metrics such as
            accuracy, precision, recall, and F1-score. Preprocessing pipelines were built
            using <strong>pandas</strong> and <strong>NumPy</strong> to handle missing
            data, feature scaling, and encoding.
          </>
        ),
      },
    ],
  },
  {
    id: 'projects-foundational',
    title: 'Foundational Projects',
    projects: [
      {
        title: 'Scrambler — Encryption Engine',
        badges: [],
        href: 'https://github.com/CruzJua/Scrambler',
        image: '/images/Scrambler.png',
        alt: 'Scrambler encryption project screenshot',
        description: (
          <>
            A cryptography-focused Java application implementing classical encryption
            algorithms, including Caesar cipher and substitution-based methods, to encrypt
            and decrypt arbitrary text. Built during my first programming course, this
            project established my foundation in string manipulation, modular code design,
            and algorithmic thinking.
          </>
        ),
      },
      {
        title: 'Image Manipulation Tool',
        badges: [],
        href: 'https://github.com/CruzJua/ImageManipulation',
        image: '/images/ImageManipulation.png',
        alt: 'Image Manipulation Tool screenshot',
        description: (
          <>
            A Python command-line utility for pixel-level image processing, supporting
            grayscale conversion, brightness adjustment, color channel filtering, and
            edge detection. Originally a course assignment, this tool has grown into a
            personal utility I continue to refine. It reflects my interest in applied
            algorithms and software that solves tangible problems.
          </>
        ),
      },
    ],
  },
]
