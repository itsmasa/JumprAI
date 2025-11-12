import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By installing and using JumprAI, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the extension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
              <p className="text-muted-foreground">
                JumprAI is a Chrome browser extension that provides semantic search functionality within YouTube videos. The service allows users to search for specific moments in video content using natural language queries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Use of Service</h2>
              <p className="text-muted-foreground mb-4">
                You agree to use JumprAI only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the service in any way that violates any applicable law or regulation</li>
                <li>Attempt to interfere with, disrupt, or create an undue burden on the service</li>
                <li>Attempt to gain unauthorized access to any portion of the service</li>
                <li>Use the service for any commercial purposes without express permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground">
                JumprAI integrates with YouTube to provide its functionality. YouTube is a trademark of Google LLC. JumprAI is not affiliated with, endorsed by, or sponsored by Google or YouTube. Your use of YouTube is subject to YouTube's own terms of service and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                JumprAI is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, timely, secure, or error-free. We do not warrant that the results obtained from using the service will be accurate or reliable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by applicable law, JumprAI and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Availability</h2>
              <p className="text-muted-foreground">
                The service's functionality depends on the availability of video captions on YouTube. JumprAI cannot guarantee that search will work for all videos, as caption availability is determined by video creators and YouTube's auto-caption system.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide notice through the extension or on this page. Your continued use of the service after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-muted-foreground">
                You may stop using JumprAI at any time by uninstalling the extension from your browser. We reserve the right to terminate or suspend access to the service immediately, without prior notice, for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:itsmasa.dev@gmail.com" className="text-primary hover:underline">
                  itsmasa.dev@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
