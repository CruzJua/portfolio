export const projectGroups = [
  {
    id: 'projects-ai',
    title: 'AI-Powered Applications',
    projects: [
      {
        title: 'OwnHelp — Self-Hosted AI Support Assistant (Capstone)',
        badges: [{ type: 'wip', text: '⚙ Work in Progress' }],
        href: 'https://github.com/ownhelp/OwnHelp',
        alt: 'OwnHelp capstone project',
        description: (
          <>
            My capstone: a private customer-support assistant that businesses install on
            their own hardware and embed on their website as a chat widget. Visitors get
            answers grounded in the business's own documents using{' '}
            <strong>retrieval-augmented generation (RAG)</strong>: a fine-tuned{' '}
            <strong>Llama-3.2-3B</strong> model served locally through{' '}
            <strong>Ollama</strong>, with documents embedded and searched through{' '}
            <strong>MongoDB Atlas Vector Search</strong>. Because the model runs
            on the owner's machine, there is no per-question cloud cost and customer
            questions are never sent to an AI provider. One installation serves multiple
            businesses with <strong>tenant-isolated</strong> retrieval. The system is made
            up of an <strong>Express</strong> gateway, a <strong>Python</strong> chat
            service, a <strong>Next.js</strong> management dashboard, and an embeddable
            widget published to npm as <strong>@ownhelp/widget</strong>, all orchestrated
            with <strong>Docker Compose</strong> and exposed securely through{' '}
            <strong>Cloudflare Tunnel</strong>. Still under active development.
          </>
        ),
      },
      {
        title: 'StockSense — AI Kitchen Inventory',
        badges: [{ type: 'deploy', text: '\u{1F30E} Live' }],
        href: 'https://stocksense.juancruzdev.com',
        repo: 'https://github.com/CruzJua/Stock-Sense',
        image: '/images/StockSense.png',
        alt: 'StockSense app screenshot',
        description: (
          <>
            A cross-platform mobile and web app that turns a single photo of a fridge,
            pantry shelf, or paper receipt into a structured, searchable food inventory.
            Built with <strong>Flutter</strong> and <strong>Riverpod</strong> on top of{' '}
            <strong>Supabase</strong> (PostgreSQL with row-level security). Photos are
            analyzed by <strong>GPT-4o Vision</strong> inside a Supabase{' '}
            <strong>Edge Function</strong>, so API keys never reach the client. Items are
            embedded with OpenAI embeddings and stored with <strong>pgvector</strong> for
            hybrid semantic and full-text search. Also includes on-device barcode scanning
            (<strong>Google ML Kit</strong>), push notifications for expiring items, and an
            offline cache with Hive.
          </>
        ),
      },
      {
        title: 'NeuroScan AI — Brain Tumor Detection',
        badges: [{ type: 'team', text: '\u{1F465} Team of 4' }],
        href: 'https://github.com/CruzJua/PRO201',
        alt: 'NeuroScan AI project',
        description: (
          <>
            A full-stack medical-imaging app where users upload an MRI scan and receive a
            tumor classification (glioma, meningioma, pituitary, or none) with confidence
            scores. The ML pipeline trains and serves three <strong>PyTorch</strong> models
            side by side: a custom <strong>CNN</strong> built from scratch, plus{' '}
            <strong>ViT-B/16</strong> and <strong>ConvNeXt-Tiny</strong> using transfer
            learning. Models are exposed through a <strong>FastAPI</strong> inference service
            behind a second FastAPI backend, with a <strong>Next.js</strong> front end,{' '}
            <strong>Supabase</strong> authentication and storage, and the whole stack
            orchestrated with <strong>Docker Compose</strong>. Developed using a protected
            main branch and pull-request reviews.
          </>
        ),
      },
      {
        title: 'AI Inventory Assistant — Agentic LLM App',
        badges: [],
        href: 'https://github.com/CruzJua/AIE300-Progressive-Lab',
        alt: 'AI Inventory Assistant project',
        description: (
          <>
            A containerized <strong>FastAPI</strong> + <strong>MongoDB</strong> application
            that grew over a series of labs into an AI-driven app. Includes a{' '}
            <strong>PyTorch</strong> classifier served over REST, a conversational assistant
            and structured-JSON analysis endpoint built on the <strong>Claude API</strong>,
            and a hand-built <strong>tool-calling agent</strong> loop (no agent framework)
            that can search, add, and delete inventory items. The agent has guardrails: a
            hard iteration cap, user confirmation before destructive actions, and error
            recovery that feeds failures back to the model.
          </>
        ),
      },
    ],
  },
  {
    id: 'projects-fullstack',
    title: 'Full-Stack Web Applications',
    projects: [
      {
        title: 'Clothes Shop',
        badges: [{ type: 'deploy', text: '\u{1F30E} Live on Render' }],
        href: 'https://clothes-shop-qilu.onrender.com',
        repo: 'https://github.com/CruzJua/Clothes-Shop',
        image: '/images/MomsShop.png',
        alt: 'Clothes Shop screenshot',
        description: (
          <>
            A storefront and admin dashboard I built for my mother's small clothing
            business. Built with <strong>Node.js</strong>, <strong>Express 5</strong>, and{' '}
            <strong>EJS</strong>, with <strong>MongoDB</strong> storage, session-based
            admin login using <strong>bcrypt</strong>-hashed passwords, and image uploads
            through <strong>Cloudinary</strong>. Includes <strong>Swagger</strong> API
            documentation, <strong>Jest</strong> and <strong>Supertest</strong> route tests,
            and is deployed on <strong>Render</strong>.
          </>
        ),
      },
      {
        title: 'Inventory Tracker+',
        badges: [],
        href: 'https://github.com/CruzJua/InventoryTrackerPlus',
        image: '/images/invTracker.png',
        alt: 'Inventory Tracker+ screenshot',
        description: (
          <>
            A full-stack inventory management application with user accounts, so each
            user manages a private catalog. Built with <strong>Node.js</strong> and{' '}
            <strong>Express</strong>, using <strong>EJS</strong> templates for server-side
            rendering. The application follows a <strong>monolithic</strong> architecture
            where a single root file coordinates both frontend and backend routes
            independently, establishing a clean separation between the{' '}
            <strong>API layer</strong> and the <strong>Data Access Layer (DAL)</strong>.
            Data is persisted in <strong>MongoDB</strong> with{' '}
            <strong>session-based authentication</strong>, item images are handled through{' '}
            <strong>Cloudinary</strong>, routes are covered by <strong>Jest</strong> and{' '}
            <strong>Supertest</strong> tests.
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
        title: 'Credit Card Fraud Detection',
        badges: [],
        href: 'https://github.com/CruzJua/ClassificationModelsExploration',
        image: '/images/classification.png',
        alt: 'ML Classification project',
        description: (
          <>
            An end-to-end classification pipeline for detecting fraudulent transactions,
            where fraud makes up only <strong>0.17%</strong> of the data. Covers
            exploratory analysis, stratified splitting and scaling, and hyperparameter
            tuning with <strong>GridSearchCV</strong> across multiple models. Because
            accuracy is misleading on imbalanced data, models were evaluated with{' '}
            <strong>confusion matrices</strong>, <strong>ROC</strong>, and{' '}
            <strong>precision-recall curves</strong> to prioritize catching rare fraud
            events. Built with <strong>pandas</strong>, <strong>NumPy</strong>, and{' '}
            <strong>scikit-learn</strong> in a Jupyter notebook.
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
