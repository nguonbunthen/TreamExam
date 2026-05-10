# TreamExam

A knowledge testing system designed to help students prepare for Cambodian
Ministry and state institution exams.

## Project Structure

Configuration and documentation stay in the repository root. All website
content is located in the `public/` directory:

```text
.
|-- .gitignore
|-- README.md
`-- public/
    |-- index.html
    |-- about.html
    |-- category.html
    |-- quiz.html
    |-- result.html
    |-- under-development.html
    |-- assets/
    |   `-- images/
    |       |-- brand/
    |       `-- ministries/
    |-- css/
    |   |-- home.css
    |   |-- quiz.css
    |   |-- responsive.css
    |   `-- style.css
    `-- js/
        |-- app.js
        |-- data.js
        |-- quiz.js
        `-- questions/
            |-- culture/
            |-- foreign-language/
            |-- preschool-primary-teacher/
            |-- lower-secondary-teacher/
            |-- high-school-teacher/
            `-- culture.js
```

Question folders in `public/js/questions/`:

- `foreign-language`: English and French question files.
- `preschool-primary-teacher`: Khmer and math question files.
- `lower-secondary-teacher`: Lower-secondary teacher question files by subject.
- `high-school-teacher`: High-school teacher question files by subject.

Other important folders:

- `public/assets/images/brand`: TreamExam logo files.
- `public/assets/images/ministries`: Ministry-related imagery.
- `public/css`: Responsive design styles.
- `public/js/app.js`: Global navigation and page rendering.
- `public/js/data.js`: Combines question banks into the app data.
- `public/js/quiz.js`: Quiz mechanics, shuffling, and scoring.

## Local Development

1. Clone the repository.
2. Navigate to the `public/` folder.
3. Open `index.html` in your browser.

## Deployment

This project is optimized for hosting via GitHub Pages by serving the `public`
folder.
