# 📄 API Documentation

### 🌐 Base URL
```
http://localhost:5000
```

---

### 📘 Questions

#### `GET /questions`
Fetch all coding questions.

#### `GET /questions/:id`
Fetch a specific coding question by its unique ID.

---

### 📘 Code Submissions

#### `POST /code/submit`
Submits user-written code for execution and testing.

**Request Body Example**:
```json
{
  "code": "function add(a, b) { return a + b; }",
  "language": "javascript",
  "testCases": [
    {
      "input": [1, 2],
      "expectedOutput": 3
    }
  ]
}
```

**Response Example**:
```json
{
  "status": "passed",
  "output": ["3"]
}
```

---

### 📘 Topics

#### `GET /topics`
Get a list of all learning topics.

#### `GET /topics/:topicSlug/subtopics`
Get all subtopics related to a specific topic.

---

### 📘 Subtopics

#### `GET /subtopics/:subtopicSlug/features`
Get features (e.g., lessons or challenges) under a given subtopic.
