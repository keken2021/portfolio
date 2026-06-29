import { Mail } from "lucide-react";

const socials = [
    {
        // icon: <Github size={18} />,
        label: "GitHub",
        href: "https://github.com/keken2021",
    },
    {
        label: "Facebook",
        href: "https://facebook.com/kurt.grava.35",
    },
    {
        // icon: <Linkedin size={18} />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kurtken/",
    },
    {
        icon: <Mail size={18} />,
        label: "kengrava@gmail.com",
        href: "mailto:kengrava@gmail.com",
    },
];

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* CTA Block */}
                <div className="footer-cta">


                    <h2 className="footer-heading">
                        Let's build something great
                    </h2>
                    <p className="footer-subheading">
                        Get to know more about me through my socials, or reach out directly.
                    </p>

                    <div className="footer-actions">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=kengrava@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-btn footer-btn--outline"
                        >
                            <Mail size={16} />
                            <span>Send an email</span>
                        </a>

                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider" />

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Ken Grava. All rights reserved.
                    </p>

                    <div className="footer-socials">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label={s.label}
                            >
                                {s.icon}
                                <span>{s.label}</span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}