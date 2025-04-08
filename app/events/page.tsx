import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function EventsPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Events & Community</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl">
                Join us for workshops, live music, and community gatherings
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upcoming Events</h2>
              <p className="mt-2 text-muted-foreground md:text-xl">
                Mark your calendar for these exciting community gatherings
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="delay-100">
              <Card className="interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Plant propagation workshop"
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>April 15, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold">Plant Propagation Workshop</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Learn how to grow your plant family with simple propagation techniques. All materials provided.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>6:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Main Space</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 transition-all duration-300 hover:shadow-md">Register</Button>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal className="delay-200">
              <Card className="interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Acoustic night with local musicians"
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>April 20, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold">Acoustic Night</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Local musicians perform in our cozy space. Free entry with any purchase.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>7:30 PM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Main Space</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 transition-all duration-300 hover:shadow-md">RSVP</Button>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal className="delay-300">
              <Card className="interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Coffee brewing workshop"
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>April 28, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold">Coffee Brewing Workshop</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Learn different brewing methods from our expert baristas. Includes coffee tasting.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>5:30 PM - 7:30 PM</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Brew Bar</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 transition-all duration-300 hover:shadow-md">Register</Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <ScrollReveal className="animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Monthly Events</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for these recurring community gatherings that happen every month
                </p>
                <div className="grid gap-6">
                  <div className="group">
                    <div className="flex items-start gap-4 transition-all duration-300 group-hover:bg-green-50 p-4 rounded-lg">
                      <div className="rounded-md bg-green-100 p-2 text-green-600 animate-pulse-slow">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                          Book Club
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          First Tuesday of every month. Join us to discuss our monthly book selection.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>6:30 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-start gap-4 transition-all duration-300 group-hover:bg-green-50 p-4 rounded-lg">
                      <div className="rounded-md bg-green-100 p-2 text-green-600 animate-pulse-slow">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                          Open Mic Night
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Last Friday of every month. Share your talents with our supportive community.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>7:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-start gap-4 transition-all duration-300 group-hover:bg-green-50 p-4 rounded-lg">
                      <div className="rounded-md bg-green-100 p-2 text-green-600 animate-pulse-slow">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                          Study Group
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Every Wednesday. A dedicated quiet time for students to study together.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>4:00 PM - 8:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="animate-slide-in-right">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Community gathering at Bloom & Brew"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                />
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Host Your Event</h3>
                  <p className="text-muted-foreground">
                    Looking for a space to host your own event? Our coffee shop is available for private bookings during
                    select hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 btn-hover-expand transition-all duration-300 hover:bg-green-100"
                    asChild
                  >
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Event Gallery</h2>
              <p className="mt-2 text-muted-foreground md:text-xl">Highlights from our past events</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScrollReveal className="delay-100">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Poetry reading event"
                  className="object-cover w-full h-full"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-200">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Plant swap event"
                  className="object-cover w-full h-full"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-300">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Live music performance"
                  className="object-cover w-full h-full"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-400">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Coffee tasting workshop"
                  className="object-cover w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">Stay Updated</h2>
              <p className="text-muted-foreground md:text-xl mb-8">
                Sign up for our newsletter to receive updates about upcoming events and special promotions
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-green-500"
                />
                <Button className="transition-all duration-300 hover:shadow-md">Subscribe</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
