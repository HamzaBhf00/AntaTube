import { Metadata } from "next";



export const metadata: Metadata = {

    title: "Privacy Policy | AntaTube",

    description: "Learn about how we collect, use, and protect your personal information at AntaTube",

};



export default function PrivacyPolicy() {

    return (

        <div className="container mx-auto px-4 py-8 max-w-4xl">

            <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>



            <div className="space-y-8">

                <section>

                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>

                    <p>

                        Welcome to AntaTube. We are committed to protecting your privacy and ensuring



                        the security of your personal information. This Privacy Policy explains how we collect,



                        use, and protect your data when you use our platform.



                    </p>

                </section>



                <section>

                    <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

                    <div className="space-y-4">
                        <p>AntaTube does not directly collect personal information from users. However, we may use third-party services that collect information to enhance your experience on our website.</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Analytics Services: We use services like Google Analytics to monitor and analyze user behavior on our website</li>
                            <li>Advertising Services: We may utilize Google Ads and other advertising platforms to display targeted advertisements</li>
                        </ul>

                    </div>

                </section>



                <section>

                    <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                    <div className="space-y-4">
                        <p>The information collected through third-party services may be used for the following purposes:</p>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>To analyze user activity and improve our website and services</li>

                        <li>To serve relevant advertisements based on user interests</li>

                        </ul>
                    </div>

                </section>



                <section>

                    <h2 className="text-2xl font-bold mb-4">4. Data Protection</h2>

                    <p>

                        We implement appropriate technical and organizational measures to protect your



                        personal information against unauthorized access, alteration, or destruction.



                    </p>

                </section>



                <section>

                    <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>

                    <p>You have the right to:</p>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Access your personal data</li>

                        <li>Correct inaccurate data</li>

                        <li>Request deletion of your data</li>

                        <li>Object to data processing</li>

                        <li>Data portability</li>

                    </ul>

                </section>



                <section>

                    <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>

                    <p>

                        We use cookies to enhance your browsing experience. You can control cookie



                        settings through your browser preferences.



                    </p>

                </section>



                <section>

                    <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>

                    <p>

                        Our platform may include links to third-party websites or services. We are not



                        responsible for their privacy practices.



                    </p>

                </section>



                <section>

                    <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>

                    <p>

                        We may update this Privacy Policy periodically. We will notify you of any



                        material changes by posting the new policy on this page.



                    </p>

                </section>



                <section>

                    <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>

                    <p>

                        If you have questions about this Privacy Policy, please contact us at:{' '}

                        <a

                            href="mailto:contact@antatube.com"

                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"

                        >

                            contact@antatube.com

                        </a>

                    </p>

                </section>



                <div className="text-sm text-muted-foreground mt-12 pt-8 border-t">

                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                </div>

            </div>

        </div>

    );

}


