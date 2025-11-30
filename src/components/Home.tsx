import { useNavigate } from '@solidjs/router';
import styles from './Home.module.scss';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <main class={styles.homepageMain}>
                <header class={styles.headerSection}>
                    <h1 class={styles.headerTitle}>
                        🩺 Hospital 24/7 Platform
                    </h1>
                    <p class={styles.headerSubtitle}>
                        Your seamless link to personalized healthcare.
                    </p>
                </header>

                <section class={styles.featureCardsContainer}>
                    <div class={styles.featureCard}>
                        <h2 class={styles.cardTitle}>👩‍⚕️ Find a Doctor</h2>
                        <p class={styles.cardText}>
                            Search for specialists, view profiles, and read patient reviews to find the perfect match for your needs.
                        </p>
                        <button class={`${styles.cardButton} ${styles.primaryButton}`} onClick={()=> navigate('/findDoctor')}>Search Now</button>
                    </div>

                    <div class={styles.featureCard}>
                        <h2 class={styles.cardTitle}>🗓️ Book Appointments</h2>
                        <p class={styles.cardText}>
                            Schedule your appointments instantly online, 24/7. Get reminders so you never miss a visit.
                        </p>
                        <button class={`${styles.cardButton} ${styles.primaryButton}`} onclick={()=> navigate('/bookAnAppointment')}>Book Appointment</button>
                    </div>

                    <div class={styles.featureCard}>
                        <h2 class={styles.cardTitle}>📝 Access Records</h2>
                        <p class={styles.cardText}>
                            Securely view your medical history, test results, and prescriptions all in one place.
                        </p>
                        <button class={`${styles.cardButton} ${styles.primaryButton}`}>My Records</button>
                    </div>
                </section>

                <hr class={styles.sectionDivider} />

                <section class={styles.popularServicesSection}>
                    <h2 class={styles.sectionHeading}>Key Medical Services</h2>
                    <p class={styles.sectionText}>Explore our wide range of services designed to cover all your health needs.</p>

                    <div class={styles.serviceGrid}>
                        <div class={styles.serviceItem}>
                            <h3>Cardiology Care</h3>
                            <p>Advanced heart health diagnostics and treatment plans.</p>
                        </div>
                        <div class={styles.serviceItem}>

                            <h3>Mental Wellness</h3>
                            <p>Confidential access to therapy, counseling, and psychiatric support.</p>
                        </div>
                        <div class={styles.serviceItem}>
                            <h3>Emergency Services</h3>
                            <p>24/7 immediate care for critical and urgent medical conditions.</p>
                        </div>
                        <div class={styles.serviceItem}>

                            <h3>Pediatric Health</h3>
                            <p>Specialized care for infants, children, and adolescents.</p>
                        </div>
                    </div>
                    <button class={`${styles.primaryButton} ${styles.ctaButton}`}>View All Services</button>
                </section>

                <hr class={styles.sectionDivider} />

                <section class={styles.patientTestimonialsSection}>
                    <h2 class={styles.sectionHeading}>Hear From Our Patients</h2>
                    <div class={styles.testimonialContainer}>
                        <blockquote class={styles.testimonialCard}>
                            <p>"The virtual visit feature saved me hours. The doctor was knowledgeable and I received my prescription digitally in minutes. Truly 24/7 support!"</p>
                            <footer>— Sarah M., Seattle</footer>
                        </blockquote>
                        <blockquote class={styles.testimonialCard}>
                            <p>"Accessing my lab results was incredibly fast and secure. Hospital 24/7 makes managing my chronic condition so much easier."</p>
                            <footer>— David T., New York</footer>
                        </blockquote>
                    </div>

                </section>

                <hr class={styles.sectionDivider} />

                <section class={styles.healthNewsSection}>
                    <h2 class={styles.sectionHeading}>Latest Health Insights</h2>
                    <div class={styles.newsGrid}>
                        <article class={styles.newsArticle}>
                            <h3 class={styles.newsTitle}>Understanding Seasonal Allergies</h3>
                            <p class={styles.newsExcerpt}>Learn how to manage common triggers and the best preventative measures for the coming season...</p>
                            <a href="#" class={styles.newsLink}>Read More »</a>
                        </article>
                        <article class={styles.newsArticle}>
                            <h3 class={styles.newsTitle}>The Importance of Annual Checkups</h3>
                            <p class={styles.newsExcerpt}>A quick guide on why regular physicals are crucial for long-term health and early detection...</p>
                            <a href="#" class={styles.newsLink}>Read More »</a>
                        </article>
                    </div>
                </section>

                <section class={styles.whyChooseUsSection}>
                    <h2 class={styles.sectionHeading}>
                        Why Choose Hospital 24/7?
                    </h2>
                    <p class={styles.sectionText}>
                        We connect you with a vast network of verified healthcare professionals, offering convenience, security, and quality care right at your fingertips.
                    </p>
                    <p class={`${styles.sectionText} ${styles.emphasis}`}>
                        Health is important. Let's make it easy.
                    </p>
                </section>

            </main>

            <footer class={styles.pageFooter}>
                <div class={styles.footerContent}>

                    <div class={styles.footerBrand}>
                        <h3>Hospital 24/7</h3>
                        <p>Your Health, Simplified.</p>
                        <p>&copy; {new Date().getFullYear()} Hospital 24/7 Platform.</p>
                    </div>

                    <div class={styles.footerLinks}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#" class={styles.footerLink}>Find a Doctor</a></li>
                            <li><a href="#" class={styles.footerLink}>Services</a></li>
                            <li><a href="#" class={styles.footerLink}>FAQs</a></li>
                            <li><a href="#" class={styles.footerLink}>Contact Us</a></li>
                        </ul>
                    </div>

                    <div class={styles.footerLinks}>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#" class={styles.footerLink}>Privacy Policy</a></li>
                            <li><a href="#" class={styles.footerLink}>Terms of Service</a></li>
                            <li><a href="#" class={styles.footerLink}>Disclaimer</a></li>
                        </ul>
                    </div>

                </div>

                <div class={styles.footerBottom}>
                    <p>This platform does not provide medical advice. Always consult with a qualified healthcare professional.</p>
                </div>
            </footer>
        </>
    );
}