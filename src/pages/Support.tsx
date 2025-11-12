import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              JumprAI Support
            </h1>
            <p className="text-xl text-muted-foreground">
              Having trouble? We're here to help. Check out our troubleshooting guide below or reach out to us directly.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>🔍 Button not showing</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>If the JumprAI search button isn't appearing on YouTube:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Refresh the YouTube page</li>
                        <li>Make sure the extension is enabled in your browser</li>
                        <li>Try restarting your browser</li>
                        <li>Check if you're on the video player page (not the YouTube homepage)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>No results showing up</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>If your search isn't returning any results:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Ensure the video has captions available (check the CC button on YouTube)</li>
                        <li>Try rephrasing your search query</li>
                        <li>Make sure you're connected to the internet</li>
                        <li>The video might not have content matching your search terms</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Does it work on Shorts?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes! JumprAI works on YouTube Shorts as long as captions exist for the Short. 
                      Not all Shorts have captions, so if search doesn't work, it's likely because 
                      captions aren't available for that particular Short.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Search is slow or timing out</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>If searches are taking too long:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Check your internet connection speed</li>
                        <li>Very long videos may take a few extra seconds to process</li>
                        <li>Try closing other tabs to free up browser resources</li>
                        <li>Wait a moment and try your search again</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Extension not installing</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>If you're having trouble installing JumprAI:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Make sure you're using Google Chrome (other browsers aren't supported yet)</li>
                        <li>Check that you're signed into your Google account</li>
                        <li>Try clearing your browser cache and cookies</li>
                        <li>Restart Chrome and try installing again</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
              <p className="text-muted-foreground mb-4">
                If you're still experiencing issues or have questions not covered above, 
                feel free to reach out to our support team.
              </p>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="font-semibold mb-2">Contact us:</p>
                <a 
                  href="mailto:support@jumprai.app" 
                  className="text-primary hover:underline"
                >
                  support@jumprai.app
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
