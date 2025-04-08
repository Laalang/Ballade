import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ContactPage() {
  return (
    <>
      <section
        className="w-full py-24 md:py-32 lg:py-48 bg-cover bg-center relative parallax"
        style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1600')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Contact Us</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl">
                We'd love to hear from you. Reach out with any questions or feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <ScrollReveal className="animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question or feedback? Fill out the form and we'll get back to you as soon as possible.
                </p>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="transition-all duration-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="transition-all duration-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      className="transition-all duration-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-32 transition-all duration-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full transition-all duration-300 hover:shadow-md hover:bg-green-700"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>
            <ScrollReveal className="animate-slide-in-right">
              <div className="space-y-6">
                <Card className="interactive-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-md bg-green-100 p-2 text-green-600">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Visit Us</h3>
                        <p className="text-sm text-muted-foreground">
                          Jember Town Square, Jl. Sumatra No.1
                          <br />
                          Sumbersari, Jember, Jawa Timur, Indonesia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="interactive-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-md bg-green-100 p-2 text-green-600">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 7:00 AM - 9:00 PM
                          <br />
                          Saturday - Sunday: 8:00 AM - 8:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="interactive-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-md bg-green-100 p-2 text-green-600">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Call Us</h3>
                        <p className="text-sm text-muted-foreground">
                          Phone: (555) 123-4567
                          <br />
                          We're happy to answer any questions
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="interactive-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-md bg-green-100 p-2 text-green-600">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Email Us</h3>
                        <p className="text-sm text-muted-foreground">
                          General Inquiries: info@bloomandbrewcafe.com
                          <br />
                          Events: events@bloomandbrewcafe.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Find Us</h2>
              <p className="mt-2 text-muted-foreground md:text-xl">We're conveniently located near campus</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4024313141684!2d113.7201344!3d-8.1669646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695b617d8f623%3A0xf6c4437632474338!2sJember%20Town%20Square!5e0!3m2!1sen!2sid!4v1712598122283!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Bloom & Brew Coffee Shop Location"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-2 text-muted-foreground md:text-xl">Answers to common questions</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            <ScrollReveal className="delay-100">
              <div className="space-y-2 group">
                <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                  Do you offer Wi-Fi?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer free high-speed Wi-Fi to all our customers. Just ask for the password at the counter.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-200">
              <div className="space-y-2 group">
                <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                  Can I bring my laptop to work?
                </h3>
                <p className="text-muted-foreground">
                  We have plenty of outlets and comfortable seating designed for those who want to work or study.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-300">
              <div className="space-y-2 group">
                <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                  Do you have plant-based milk options?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer a variety of plant-based milks including oat, almond, soy, and coconut at no extra
                  charge.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-400">
              <div className="space-y-2 group">
                <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                  Can I book the space for a private event?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer private bookings during select hours. Please contact us for availability and pricing.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">Join Our Team</h2>
              <p className="text-muted-foreground md:text-xl mb-8">
                We're always looking for passionate individuals to join our team. If you love coffee, plants, and
                community, we'd love to hear from you.
              </p>
              <Button variant="outline" className="btn-hover-expand transition-all duration-300 hover:bg-green-100">
                View Open Positions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
