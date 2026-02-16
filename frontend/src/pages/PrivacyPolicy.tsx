import React from "react";
import "./LegalPages.css";

export const PrivacyPolicy: React.FC = () => {
  return (
    <main className="legal-page">
      <section className="legal-header">
        <div className="container">
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <article className="legal-article">
            <h2>1. Introduction</h2>
            <p>
              Welcome to InfoVision Portfolio ("we," "us," "our," or "Company").
              We are committed to protecting your privacy and ensuring you have
              a positive experience on our website. This Privacy Policy explains
              our privacy practices, what information we collect, how we use it,
              and your rights.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number (when you contact us)
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent, referrer
                source (via analytics)
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, IP address,
                device type
              </li>
              <li>
                <strong>Cookies:</strong> Persistent and session cookies for
                user preference tracking
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to your inquiries and messages</li>
              <li>Improve website functionality and user experience</li>
              <li>Analyze website traffic and trends</li>
              <li>Send occasional updates about our services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary to
              provide our services. Contact information will be retained until
              you request deletion. Analytics data is typically retained for 26
              months.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We use Google Analytics to understand user behavior. Google may
              collect information about your visits. We do not sell or share
              your personal information with third parties except as required by
              law.
            </p>

            <h2>6. Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              information. However, no method of transmission over the internet
              is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of analytics tracking</li>
            </ul>

            <h2>8. Cookies</h2>
            <p>
              We use cookies for analytics and user preferences. You can disable
              cookies in your browser settings. See our Cookies Policy for more
              details.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at: info@infovision.dev
            </p>

            <h2>10. Policy Updates</h2>
            <p>
              We may update this policy periodically. We will notify you of
              significant changes via email or prominent website notice.
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
