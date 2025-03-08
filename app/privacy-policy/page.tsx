import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Privacy Policy | AntaTube",
    description: "Learn about how we handle your data when using AntaTube's YouTube tools - Trends Explorer and Thumbnail Grabber"
};

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p>Welcome to AntaTube. We provide tools for exploring YouTube trends and downloading thumbnails. This Privacy Policy explains how we handle your data when you use our services: YouTube Trends Explorer and YouTube Thumbnail Grabber.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Our Services</h2>
                    <div className="space-y-4">
                        <p>AntaTube offers two main services:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>YouTube Trends Explorer:</strong> A tool that helps you discover trending videos across different countries</li>
                            <li><strong>YouTube Thumbnail Grabber:</strong> A tool that allows you to download high-quality thumbnails from YouTube videos</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. Information We Process</h2>
                    <div className="space-y-4">
                        <p>When you use our services, we process:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>YouTube video URLs that you input for thumbnail extraction</li>
                            <li>Country selection for trending videos exploration</li>
                            <li>Basic usage data to improve our services</li>
                        </ul>
                        <p className="text-sm text-muted-foreground">Note: We do not store any personal information or video data on our servers.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. How We Use YouTube's API Services</h2>
                    <div className="space-y-4">
                        <p>Our services utilize YouTube's API Services, and by using our tools, you agree to be bound by:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>YouTube Terms of Service (<a href="https://www.youtube.com/t/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.youtube.com/t/terms</a>)</li>
                            <li>Google Privacy Policy (<a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>)</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">5. Data Collection</h2>
                    <div className="space-y-4">
                        <p>We use the following third-party services:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>YouTube Data API: To fetch trending videos and thumbnail data</li>
                            <li>Ahrefs Webmaster Tools: To understand how users interact with our tools</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Use our tools without creating an account</li>
                        <li>Clear your browser data to remove any local storage</li>
                        <li>Control tracking preferences through your browser settings</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
                    <p>We prioritize the security of your interaction with our tools by:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Using HTTPS encryption for all data transfers</li>
                        <li>Not storing any personal information</li>
                        <li>Processing thumbnail downloads server-side</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy as we enhance our tools or modify our practices. Any significant changes will be notified through our website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                    <p>For questions about this Privacy Policy or our tools, please contact us at:{' '}
                        <a href="mailto:contact@antatube.com" className="text-primary hover:underline">contact@antatube.com</a>
                    </p>
                </section>

                <div className="text-sm text-muted-foreground mt-12 pt-8 border-t">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}
