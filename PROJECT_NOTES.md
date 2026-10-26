# Re:Order — project notes

# Project Overview & Design Philosophy

The objective is to maintain daily self-monitoring through a simple, nonjudgmental interface. Users retain full control over the granularity of the information they record and display. The system is designed for individuals facing challenges in self-care organization, with user requirements informed by OCD-related considerations.

## Key Design Decisions

- **Local-First Architecture:** Eliminates account setup barriers by storing data directly on the device. (*Trade-off: Lack of automated cloud synchronization or remote recovery.*)
- **Granular Data Visibility:** Allows optional tracking for symptom intensity, notes, and vitals. Missing data points are handled explicitly rather than recorded as numerical zeroes.
- **User-Controlled Display:** Features customizable interface controls (e.g., toggling caloric data and collapsing detailed logs). Full data exports remain unredacted regardless of display settings.
- **Routine Templates:** Enables single-tap logging for recurring meals to minimize repetitive input friction.
- **Visual Sleep Tracking:** Translates traditional paper-style sleep logs into interactive interval and nap visualizations.
- **Medication Interaction:** Utilizes a press-and-hold action to timestamp records and adjust inventory simultaneously, complete with cancellation and undo functionality. (*Note: Logged timestamps represent self-reported interaction events and do not verify physical ingestion.*)
- **Neutral Interface Design:** Excludes gamification mechanics (e.g., streaks, badges, or judgmental labeling) to maintain a stress-free user experience.
- **Flexible Data Export:** Offers a compact calendar overview, a detailed timeline view, and JSON-based export/import functionality for data portability.
- **System Aesthetics:** Built on a monochrome foundation with system fonts and native light/dark mode support.

## Implementation & System Scope

The overall concept, feature scope, interface logic, and iterative revisions were designed and directed by the project lead, utilizing LLM tools for code implementation and refactoring. The repository contains executable source code alongside targeted unit and integration tests.

This documentation serves as a technical overview and does not assert measured clinical efficacy or widespread user adoption.

## Known Limitations

- Functional impact and cognitive load on individuals with OCD remain unverified.
- Broad accessibility compliance (e.g., screen reader compatibility across diverse device/browser environments) requires further validation.
- Long-term data integrity depends on local device storage reliability.

## Future Work

- Conduct structured, consent-based usability evaluations using synthetic data to iterate on user feedback.
- Assess whether confirmation interaction patterns mitigate or inadvertently encourage repetitive checking behaviors.
- Expand cross-browser compatibility and accessibility testing.
