# Email Checker 📧

An advanced browser extension designed to instantly identify whether an email offer is an acceptance or a rejection.

This tool leverages a keyword-matching algorithm to provide instant feedback on your email content, saving time and reducing uncertainty.

---

> ⚠️ **Important Reminder:**
> While this extension provides quick insights to help you identify the status of your email offers, it is crucial to carefully read and understand your emails to ensure no important details are overlooked.

## Table of Contents 📚

1. [Features](#features)
2. [Installation Guide](#installation-guide)
3. [Contribution Guidelines](#contribution-guidelines)
   - [Adding Keywords](#adding-keywords)
   - [Submitting Changes](#submitting-changes)
4. [Feedback and Support](#feedback-and-support)
5. [License](#license)

---

## Features 🎯

- **Rejection Detection:** If the email contains keywords commonly associated with rejections, the extension will display a clear rejection message:

  ![Rejection Screenshot](https://github.com/OsamaNagi/email-checker/assets/63210048/55a5ad22-0599-419a-9b7e-82edd03a7b76)

- **Acceptance Detection:** Similarly, if the email contains keywords related to acceptance, a success message will be shown:

  ![Acceptance Screenshot](https://github.com/OsamaNagi/email-checker/assets/63210048/a352a465-b16b-4bff-b796-7858f415bbc1)

---

## Installation Guide 🛠️

Follow these steps to set up the extension:

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:OsamaNagi/email-checker.git
   ```

2. **Enable Developer Mode:**

   - Open your browser settings.
   - Navigate to `Extensions` and enable `Developer mode`.

3. **Load the Extension:**

   - Click on `Load unpacked` and select the cloned repository folder.

4. **Start Using:**
   - Open your email inbox, click the extension icon, and let it analyze your emails instantly.

> **Pro Tip:** Ensure the keywords in the code match the language used in your email communications for optimal results.

---

## Contribution Guidelines 🤝

We welcome contributions to make the extension smarter and more inclusive! Here's how you can help:

### Adding Keywords 📝

Enhance detection accuracy by expanding the keyword lists in the code:

#### For Rejections:

```javascript
const rejectionKeywords = [
  'Regret',
  "We're sorry",
  'Unfortunately',
  'Declined',
  // Add more rejection-related keywords here
];
```

#### For Acceptances:

```javascript
const acceptanceKeywords = [
  'Accepted',
  'Approved',
  'Congratulations',
  'Welcome aboard',
  'Offer extended',
  // Add more acceptance-related keywords here
];
```

### Submitting Changes 📥

1. Fork the repository.
2. Create a new branch for your updates.
3. Submit a pull request with a clear description of your changes.

---

## Feedback and Support 💬

Your feedback is invaluable! If you encounter any issues or have suggestions, please open an issue in the repository or reach out via the contact details provided in the GitHub profile.

---

### License 📜

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the extension responsibly.

---

Make your email management smarter with **Email Checker**! 📧🚀
