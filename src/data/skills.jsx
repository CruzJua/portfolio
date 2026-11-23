export const skills = [
  {
    title: 'LLM Applications & AI Agents',
    description: (
      <>
        Build applications on top of LLM APIs, including the <strong>Claude API</strong>{' '}
        and <strong>OpenAI</strong> (GPT-4o Vision and embeddings). Experience with prompt
        design, system messages, few-shot examples, and enforcing structured JSON output
        with validation and failure handling. Have implemented a{' '}
        <strong>tool-calling agent loop</strong> from scratch with iteration caps,
        confirmation steps for destructive actions, and error recovery, and built{' '}
        <strong>semantic search</strong> using vector embeddings. For my capstone I am
        building a <strong>RAG</strong> system on a fine-tuned open-source{' '}
        <strong>Llama</strong> model served locally with <strong>Ollama</strong>, with
        per-tenant vector retrieval in MongoDB Atlas.
      </>
    ),
    tags: ['Claude API', 'OpenAI API', 'GPT-4o Vision', 'Prompt Engineering', 'Tool Calling', 'AI Agents', 'RAG', 'Embeddings', 'Semantic Search', 'Vector Search', 'Llama', 'Ollama'],
  },
  {
    title: 'Deep Learning & Computer Vision',
    description: (
      <>
        Train and serve neural networks with <strong>PyTorch</strong>. Have built a CNN
        from scratch and fine-tuned pretrained <strong>Vision Transformer (ViT)</strong>{' '}
        and <strong>ConvNeXt</strong> models with transfer learning for medical image
        classification, then exposed them through REST inference APIs. Comfortable with
        training loops, evaluation, and GPU/CUDA setup.
      </>
    ),
    tags: ['PyTorch', 'torchvision', 'CNNs', 'Vision Transformers', 'Transfer Learning', 'Model Serving', 'CUDA'],
  },
  {
    title: 'Machine Learning',
    description: (
      <>
        Full ML workflow with <strong>scikit-learn</strong>: exploratory analysis,
        preprocessing, feature scaling, stratified splitting, hyperparameter tuning with{' '}
        <strong>GridSearchCV</strong>, and evaluation. Experienced with highly imbalanced
        data, such as fraud detection at 0.17% positives, where I evaluate with
        precision-recall and ROC curves instead of plain accuracy.
      </>
    ),
    tags: ['scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Classification', 'Imbalanced Data', 'Model Evaluation'],
  },
  {
    title: 'Full-Stack Web Development',
    description: (
      <>
        Build and deploy complete web applications with <strong>Node.js</strong>,{' '}
        <strong>Express</strong>, and <strong>EJS</strong>, as well as{' '}
        <strong>React</strong>, <strong>Next.js</strong>, and <strong>Vite</strong> on the
        front end and <strong>FastAPI</strong> on the Python side. Comfortable designing
        RESTful APIs with Swagger documentation, session-based and token-based
        authentication, file uploads, and automated route testing with{' '}
        <strong>Jest</strong>.
      </>
    ),
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'REST APIs', 'Swagger', 'Jest', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Mobile Development',
    description: (
      <>
        Built a cross-platform mobile and web app with <strong>Flutter</strong> and{' '}
        <strong>Dart</strong>, using <strong>Riverpod</strong> for state management, Go
        Router for navigation, and Hive for offline caching. Integrated device features
        such as camera-based barcode scanning (<strong>Google ML Kit</strong>) and push
        notifications through Firebase Cloud Messaging.
      </>
    ),
    tags: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'Google ML Kit', 'Firebase Cloud Messaging'],
  },
  {
    title: 'Databases: PostgreSQL, Supabase & MongoDB',
    description: (
      <>
        Work with both relational and document databases. On the SQL side:{' '}
        <strong>PostgreSQL</strong> on <strong>Supabase</strong> with versioned
        migrations, <strong>row-level security</strong>, triggers, full-text search, and{' '}
        <strong>pgvector</strong> for similarity search, plus Supabase Auth and Edge
        Functions. On the NoSQL side: <strong>MongoDB</strong> with a data access layer
        that keeps database logic separate from the API. I choose between the two based on
        how structured the data is.
      </>
    ),
    tags: ['PostgreSQL', 'Supabase', 'pgvector', 'Row-Level Security', 'SQL Migrations', 'MongoDB', 'NoSQL', 'Data Access Layer'],
  },
  {
    title: 'Docker, Cloud & DevOps',
    description: (
      <>
        Containerize multi-service applications with <strong>Docker</strong> and{' '}
        <strong>Docker Compose</strong>, including frontend, backend, ML inference, and
        database services. Deploy to <strong>Render</strong>,{' '}
        <strong>Cloudflare Workers</strong>, and <strong>Firebase Hosting</strong>, and
        manage secrets through serverless function configuration. Work in team Git
        workflows with feature branches, protected main, and pull-request reviews.
      </>
    ),
    tags: ['Docker', 'Docker Compose', 'Cloudflare Workers', 'Render', 'Firebase Hosting', 'Git', 'Pull Requests', 'Serverless'],
  },
  {
    title: 'Python',
    description: (
      <>
        Python is my primary language for AI and backend work. I use it for ML and deep
        learning pipelines, <strong>FastAPI</strong> services, data analysis, and
        automation scripts, and am comfortable structuring multi-module projects with
        dependency management and tests.
      </>
    ),
    tags: ['Python', 'FastAPI', 'PyTorch', 'OOP', 'Scripting', 'Jupyter'],
  },
  {
    title: 'Languages',
    description: (
      <>
        Fluent in both <strong>English</strong> and <strong>Spanish</strong>, with
        professional written and verbal communication skills in both. Currently
        relearning <strong>French</strong>. Multilingual communication is an asset
        I bring to collaborative and international environments.
      </>
    ),
    tags: ['English', 'Spanish', 'French (learning)'],
  },
]
