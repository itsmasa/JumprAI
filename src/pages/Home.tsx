import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Video, Shield, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-image.png";
import screen1 from "@/assets/screen-1.png";
import screen2 from "@/assets/screen-2.png";
import screen3 from "@/assets/screen-3.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Jumpr<span className="text-[#FF0000]">AI</span>
                  </h1>
                  <p className="text-2xl md:text-3xl mt-2 text-muted-foreground/80">
                    Jump to the moments that matter
                  </p>
                </div>
                <p className="text-xl text-muted-foreground">
                  Search inside YouTube videos and instantly jump to the exact part you need — powered by AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a
                      href="https://chromewebstore.google.com/detail/jumprai-search-inside-you/gdbhmaleanophabknldoenkohbmlbdkg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Install on Chrome
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="JumprAI Extension Demo"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Search like never before
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                JumprAI brings semantic search to YouTube videos, making it easy to find exactly what you're looking for.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Find moments fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Search any part of a YouTube video semantically. No more manual scrubbing through timelines.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Video className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Works on long videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Handles transcripts automatically for videos of any length, from quick clips to hours-long lectures.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Privacy-first</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Only sends search queries + video ID. No tracking, no data collection, no compromises.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Search className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>One-click workflow</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Click the 🔍 button directly in the YouTube player. Simple, fast, and intuitive.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How it works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Four simple steps to find any moment in any video
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold">Open any YouTube video</h3>
                <p className="text-muted-foreground">
                  Navigate to any video on YouTube as you normally would.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold">Click the JumprAI 🔍 button</h3>
                <p className="text-muted-foreground">
                  Find the search button integrated directly into the player.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold">Type what you're looking for</h3>
                <p className="text-muted-foreground">
                  Describe the moment you need in natural language.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  4
                </div>
                <h3 className="text-xl font-semibold">Jump directly to that moment</h3>
                <p className="text-muted-foreground">
                  Click on any result to instantly jump to that timestamp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section id="screenshots" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See JumprAI in action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the power of semantic video search
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <img
                  src={screen1}
                  alt="Search interface"
                  className="w-full h-auto"
                />
              </Card>
              <Card className="overflow-hidden">
                <img
                  src={screen2}
                  alt="Search results"
                  className="w-full h-auto"
                />
              </Card>
              <Card className="overflow-hidden">
                <img
                  src={screen3}
                  alt="Extension button"
                  className="w-full h-auto"
                />
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently asked questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Does it work on every video?</AccordionTrigger>
                <AccordionContent>
                  JumprAI works on any YouTube video that has captions available. This includes most videos with auto-generated or manually uploaded subtitles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What if there are no captions?</AccordionTrigger>
                <AccordionContent>
                  Search will not work if captions are disabled or unavailable for a video. The extension requires transcript data to perform searches.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Is my data private?</AccordionTrigger>
                <AccordionContent>
                  Yes, absolutely. JumprAI only processes the video ID and your search query to find relevant moments. We don't track your browsing history, collect personal data, or share any information with third parties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What languages are supported?</AccordionTrigger>
                <AccordionContent>
                  JumprAI works with any video that has captions available, regardless of the language.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to skip the scrubbing?
            </h2>
              <Button size="lg" asChild>
                <a
                  href="https://chromewebstore.google.com/detail/jumprai-search-inside-you/gdbhmaleanophabknldoenkohbmlbdkg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install on Chrome
                </a>
              </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
