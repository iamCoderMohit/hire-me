# 🚀 Hire-me

> AI-powered job matching platform for students and early-career professionals.

Hire-me analyzes your resume using AI and matches you with the most relevant jobs using semantic similarity — not basic keyword search.

Instead of searching endlessly, let AI find the right opportunities for you.

---

## 🧠 How It Works

Hire-me uses a three-step intelligence pipeline:

1. **Resume Processing**

   * User uploads resume (PDF)
   * Raw text is extracted
   * AI generates structured JSON (skills, experience, domain, etc.)
   * Resume embedding vector is generated and stored

2. **Job Processing**

   * Jobs are ingested (API/manual/recruiter)
   * Job text is cleaned
   * Job embedding vector is generated and stored

3. **AI Matching**

   * Resume embedding is compared with job embeddings
   * Cosine similarity ranking is performed
   * Top matching jobs are returned

No keyword hacks.
No manual filtering.
Just semantic similarity search.

---

## 🏗 Tech Stack

### Frontend

* Next.js
* Tailwind CSS

### Backend

* Node.js
* Express
* Drizzle ORM

### Database

* PostgreSQL
* pgvector (for vector similarity search)
* Supabase (DB + Auth + Storage)

### AI

* LLM for structured resume parsing
* Embeddings model for semantic matching

---

## 🔐 Authentication

* Google OAuth via Supabase
* JWT verification on backend
* Automatic user syncing into application database

---

## 📂 Core Features

### ✅ Authentication

* Google Sign-in
* Secure JWT-based backend verification

### ✅ Resume Management

* Upload multiple resumes
* Raw text storage
* AI-structured JSON generation
* Embedding generation
* Resume status tracking (processing/ready)

### ✅ AI Job Matching

* Vector similarity search using pgvector
* Cosine similarity ranking
* Match percentage score
* Filtering (job type, location, etc.)
* Pagination support

### ✅ Job System

* Job ingestion (API/manual/recruiter)
* Embedding generation for each job
* Active/inactive job handling
* Deduplication using external IDs

---

## 🧮 Database Design Overview

### Users

* id (UUID from Supabase)
* email
* role
* created_at

### Resumes

* id
* user_id
* raw_text
* structured_json
* embedding (vector)
* status
* created_at

### Jobs

* id
* external_id
* title
* description
* company
* location
* job_type
* embedding (vector)
* is_active
* posted_at
* created_at

---

## 🔍 Matching Logic

```sql
SELECT *,
       1 - (embedding <=> resume_embedding) AS similarity
FROM jobs
WHERE is_active = true
ORDER BY embedding <=> resume_embedding
LIMIT 10;
```

Similarity is calculated using cosine distance via pgvector.

---

## 🚦 Project Status

Current Version Includes:

* Authentication
* Resume upload & processing
* Structured AI parsing
* Resume embeddings
* Job embeddings
* Vector-based job matching
* Pagination support

Planned Improvements:

* Skill gap analysis
* Match explanation (why this job matches you)
* Resume score system
* Recruiter job posting dashboard
* Application tracking
* AI-powered learning roadmap

---

## 🎯 Vision

Hire-me is not a traditional job board.

It is a personalized AI job recommendation engine that:

* Understands your resume
* Understands job requirements
* Matches based on meaning, not keywords

The goal is to reduce job search noise and increase relevance.

---

## ⚙️ Setup Instructions (Example)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run backend
npm run dev
```

Make sure:

* PostgreSQL with pgvector is enabled
* Supabase project is configured
* Environment variables are set

---

## 🌟 Why Hire-me?

Traditional job portals:

* Rely on keyword matching
* Show thousands of irrelevant jobs

Hire-me:

* Uses embeddings
* Performs semantic similarity ranking
* Focuses on high-quality matches

---

## 📜 License

MIT License