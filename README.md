<p align="center"><img src="docs/app/assets/wordmark.png" alt="Re:Order" width="350"></p>

# Re:Order

A lightweight, browser-based daily log for sleep, nutrition, physical symptoms, and medication. All data is saved locally in the browser using LocalStorage without requiring accounts or backend servers.

## Why I made it

I built this project to lower the friction of daily habit and health tracking. To support users sensitive to over-monitoring or OCD-related anxiety, the interface emphasizes minimal required fields, togglable detail, neutral language, and an explicit lack of streaks or gamified rewards.

## Explore

Quick Links
Live Project Page (https://www.google.com/search?q=docs/index.html) (Requires GitHub Pages enabled)
Web App Launch (https://www.google.com/search?q=docs/app/index.html)
Design Decisions & Limitations (https://www.google.com/search?q=PROJECT_NOTES.md)
Deployment
Set GitHub Pages source to main branch /docs folder.

## Implemented features

### Key Features

| Section | Key Functionality |
| --- | --- |
| Sleep | Sleep/nap interval tracking, total duration calculation, optional mood ratings, and notes |
| Food & Drink| Custom routines, meal logging, optional calorie counting (can be hidden or disabled), water/caffeine intake, and local image attachments |
| Body | Symptom logging with 1–10 intensity scale, habit-urge counter, and optional weight/temperature fields |
| Medication | Daily prescriptions, press-and-hold timestamp logging, inventory tracking, undo option, and collapsed care notes |
| History | Calendar view for browsing past records by date |
| Data & Export | Date-filtered print layout and local JSON import/export for backups |
| Settings | System light/dark theme detection with manual override |

## My contribution and use of AI

I defined the problem, selected features and priorities, specified the interaction recordings and visual direction, directed revisions, designed the UI, and made code changes. OpenAI ChatGPT assisted with implementation, automated checks, and preparing this repository. I do not claim to have written every line of code independently.

## How it works

### Technical Architecture & Data Storage

* Tech Stack: Plain HTML, CSS, and vanilla JavaScript (no frameworks or build steps)
* Data Persistence: Records and user preferences are stored strictly in browser `localStorage`
* Media Handling: Client-side image resizing prior to local storage
* Privacy: Zero analytics, remote processing, AI calls, or cloud sync
* Security & Limitations: Records are unencrypted and subject to standard browser storage constraints (e.g., clearing site data or using Incognito mode will reset state). Regular JSON exports are recommended for backups.
* Hosting: Static hosting (network access metadata may be logged at the edge server level)


## Run locally

From this repository's root, with Python 3 installed:

```sh
python3 -m http.server 8000 --directory docs
```

Open `http://localhost:8000/` for the project page, or `http://localhost:8000/app/` for the app. Use an HTTP server rather than opening HTML files directly for consistent browser-storage behavior.

## Check the logic

With Node.js 20 or newer:

```sh
node --test tests/body.test.cjs tests/export.test.cjs tests/food.test.cjs tests/medicine.test.cjs
```

The included checks cover optional inputs, routines, calorie visibility, record and inventory updates, hold cancellation, export ranges and escaping, and system appearance changes. They are logic and mocked-interaction tests, not a complete browser, accessibility, security, or clinical evaluation.

## Scope and limitations

Important Notice

Purpose: Designed solely for personal self-reporting; not intended for clinical diagnosis, medical advice, or dosing guidance.
Data Verification: Timestamps record user input and do not independently verify medication ingestion.
Regulatory Status: This project is an uncertified prototype created for usability and accessibility research, not a medical device.

## Repository structure

```text
README.md          Project overview and authorship
PROJECT_NOTES.md   Design decisions, development scope, limitations
docs/index.html    Minimal English project page
docs/app/          Complete static app source and branding assets
tests/             Node.js logic and mocked-interaction checks
```

This upload contains source files and branding assets, not browser records, personal photos, backup files, deployment credentials, or reconstructed Git history.
