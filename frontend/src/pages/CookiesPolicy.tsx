import React from "react";
import "./LegalPages.css";

export const CookiesPolicy: React.FC = () => {
  return (
    <main className="legal-page">
      <section className="legal-header">
        <div className="container">
          <h1>Cookies Policy</h1>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <article className="legal-article">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small files that are stored on your computer or mobile
              device when you visit a website. They contain information that can
              be retrieved later to identify you or remember your preferences.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly.
              They enable core functionality such as page navigation and access
              to secure areas. The website cannot function properly without
              these cookies.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We use Google Analytics to understand how visitors interact with
              our website. These cookies track:
            </p>
            <ul>
              <li>Number of visits</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referral sources</li>
            </ul>

            <h3>Preference Cookies</h3>
            <p>
              These cookies remember your preferences, such as theme selection
              or language choice, to improve your user experience on return
              visits.
            </p>

            <h2>3. Google Analytics</h2>
            <p>
              We use Google Analytics to collect information about how you use
              our website. Google Analytics collects information such as:
            </p>
            <ul>
              <li>The type of device you use</li>
              <li>Your browser type and version</li>
              <li>Your IP address (anonymized)</li>
              <li>Pages you visit</li>
              <li>Time and duration of visits</li>
            </ul>
            <p>
              Google processes this data to generate reports that help us
              understand website traffic and usage patterns. For more
              information, visit Google's privacy policy:
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                https://policies.google.com/privacy
              </a>
            </p>

            <h2>4. How to Control Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their
              settings. You can:
            </p>
            <ul>
              <li>Block all cookies</li>
              <li>Accept all cookies</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p>
              Please note that blocking essential cookies may affect website
              functionality.
            </p>

            <h2>5. Opt-Out of Analytics</h2>
            <p>You can opt-out of Google Analytics tracking by:</p>
            <ul>
              <li>
                Installing the Google Analytics Opt-out Browser Add-on:
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </li>
              <li>Disabling cookies in your browser settings</li>
              <li>Adjusting your privacy settings in your browser or device</li>
            </ul>

            <h2>6. Third-Party Cookies</h2>
            <p>
              Our website may contain content or links from third parties who
              may set their own cookies. We do not control these cookies. Please
              refer to their privacy policies for more information.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              Analytics cookies typically expire after 26 months. Preference
              cookies may be retained longer unless you clear your browser
              cookies.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time. We recommend
              reviewing this page periodically for any changes.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us
              at: info@infovision.dev
            </p>

            <div className="legal-footer">
              <p className="last-updated">Last updated: January 2, 2026</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};
