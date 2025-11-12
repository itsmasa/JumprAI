import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
              <p className="text-muted-foreground">
                At JumprAI, we take your privacy seriously. This extension is designed with privacy as a core principle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What We Collect</h2>
              <p className="text-muted-foreground mb-4">
                JumprAI only processes the minimum data necessary to provide the search functionality:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Video ID:</strong> The unique identifier of the YouTube video you're searching in</li>
                <li><strong>Search queries:</strong> The text you enter when searching for moments in videos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What We Don't Collect</h2>
              <p className="text-muted-foreground mb-4">
                We explicitly do NOT collect, store, or share:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Your browsing history</li>
                <li>Personal information or account details</li>
                <li>Tracking cookies or analytics</li>
                <li>Any data from other websites or tabs</li>
                <li>Your YouTube viewing habits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
              <p className="text-muted-foreground">
                The video ID and search query are sent to our backend servers solely to process your search request and return relevant timestamps. This data is processed in real-time and is not permanently stored or used for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground">
                JumprAI operates within YouTube's platform but is not affiliated with YouTube or Google. We do not share any data with third-party services, advertisers, or data brokers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                All communication between the extension and our servers is encrypted using industry-standard protocols to ensure your search queries remain private and secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                Since we don't store personal data, there's no account or profile to manage. You can uninstall the extension at any time to stop using the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy or how we handle data, please contact us at{" "}
                <a href="mailto:support@jumprai.app" className="text-primary hover:underline">
                  support@jumprai.app
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

export default Privacy;
