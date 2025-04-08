import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in">
                  A Plant-Filled Oasis for Coffee Lovers
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in delay-200">
                  Bloom & Brew is your cozy retreat near campus, offering artisanal coffee, healthy snacks, and a
                  vibrant community space.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in delay-300">
                <Button size="lg" asChild className="group transition-all duration-300 hover:pr-6">
                  <Link href="/menu">
                    View Our Menu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="transition-all duration-300 hover:bg-green-100">
                  <Link href="/events">Upcoming Events</Link>
                </Button>
              </div>
            </div>
            <div className="animate-float">
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={550}
                height={800}
                alt="Coffee shop interior with plants and comfortable seating"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-2 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded by two plant-loving college graduates, Bloom & Brew was created to provide a welcoming space
                  where nature meets community. Our mission is to serve exceptional coffee in a sustainable, green
                  environment that inspires creativity and connection.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What started as a small pop-up has grown into a beloved campus institution, where students, faculty,
                  and locals gather to study, socialize, and enjoy thoughtfully crafted food and drinks.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="grid grid-cols-2 gap-4">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Coffee being poured into a cup with latte art"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Plants hanging from the ceiling in the coffee shop"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Barista carefully preparing coffee"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Cozy reading nook with plants and bookshelves"
                  className="object-cover w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <ScrollReveal>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Menu</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our seasonal favorites and signature drinks
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <ScrollReveal className="delay-100">
                <Card className="overflow-hidden interactive-card">
                  <div className="image-hover-zoom">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Lavender Latte with oat milk"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Lavender Latte</h3>
                    <p className="text-sm text-muted-foreground">
                      House-made lavender syrup with espresso and your choice of milk
                    </p>
                    <p className="mt-2 font-medium">$5.50</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal className="delay-200">
                <Card className="overflow-hidden interactive-card">
                  <div className="image-hover-zoom">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Avocado Toast with microgreens"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Avocado Toast</h3>
                    <p className="text-sm text-muted-foreground">
                      Sourdough bread with smashed avocado, microgreens, and chili flakes
                    </p>
                    <p className="mt-2 font-medium">$8.95</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal className="delay-300">
                <Card className="overflow-hidden interactive-card">
                  <div className="image-hover-zoom">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Matcha Chia Pudding"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Matcha Chia Pudding</h3>
                    <p className="text-sm text-muted-foreground">
                      Vegan chia pudding with ceremonial grade matcha and coconut milk
                    </p>
                    <p className="mt-2 font-medium">$6.75</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <Button variant="outline" className="mt-8 btn-hover-expand" asChild>
                <Link href="/menu">
                  View Full Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <ScrollReveal>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upcoming Events</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for community gatherings, workshops, and live music
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              <ScrollReveal className="delay-100">
                <Card className="interactive-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-md bg-green-100 p-2 text-green-600 animate-pulse-slow">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Plant Propagation Workshop</h3>
                        <p className="text-sm text-muted-foreground">
                          Learn how to grow your plant family with simple propagation techniques
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>April 15, 2025</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>6:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal className="delay-200">
                <Card className="interactive-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-md bg-green-100 p-2 text-green-600 animate-pulse-slow">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Acoustic Night</h3>
                        <p className="text-sm text-muted-foreground">
                          Local musicians perform in our cozy space. Free entry with any purchase
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>April 20, 2025</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>7:30 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <Button variant="outline" className="mt-8 btn-hover-expand" asChild>
                <Link href="/events">
                  View All Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <ScrollReveal className="animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Visit Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Find Us Near Campus</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're conveniently located just a 5-minute walk from the main university entrance. Come study, meet
                  friends, or simply enjoy a moment of calm.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>123 College Avenue, Campus Town</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span>Mon-Fri: 7AM-9PM | Sat-Sun: 8AM-8PM</span>
                  </div>
                </div>
                <Button className="mt-4 transition-all duration-300 hover:shadow-md" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal className="animate-slide-in-right">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Map showing the location of Bloom & Brew coffee shop near campus"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Space</h2>
              <p className="mt-2 text-muted-foreground md:text-xl">A peek inside our plant-filled coffee shop</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScrollReveal className="delay-100">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Coffee shop counter with plants"
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
                  alt="Cozy seating area with hanging plants"
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
                  alt="Study area with natural light and plants"
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
                  alt="Outdoor patio seating area"
                  className="object-cover w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
