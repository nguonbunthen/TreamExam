# TreamExam (ត្រៀមប្រឡង)

A knowledge testing system designed to help students prepare for Cambodian Ministry and state institution exams.

## Project Structure

Configuration and documentation stay in the repository root. All website
content is located in the `public/` directory:

```text
.
├── .gitignore
├── README.md
└── public/
    ├── index.html
    ├── about.html
    ├── category.html
    ├── quiz.html
    ├── result.html
    ├── under-development.html
    ├── assets/
    │   └── images/
    ├── css/
    │   ├── home.css
    │   ├── quiz.css
    │   ├── responsive.css
    │   └── style.css
    └── js/
        ├── app.js
        ├── culture.js
        ├── data.js
        ├── english.js
        ├── primary.js
        ├── quiz.js
        └── secondary.js
```

- `public/assets`: Contains logos and ministry-related imagery.
- `public/css`: Contains the responsive design styles.
- `public/js/data.js`: Combines question banks into the app data.
- `public/js/app.js`: Handles global navigation and page rendering.
- `public/js/quiz.js`: Handles quiz mechanics, shuffling, and scoring.

## Local Development

1. Clone the repository.
2. Navigate to the `public/` folder.
3. Open `index.html` in your browser.

## Deployment

This project is optimized for hosting via **GitHub Pages** by serving the `public` folder.
