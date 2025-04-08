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
                  Tempat Untuk Berlabuh dan Mendayung
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in delay-200">
                  Ballade Kopi akan menjadi tempat berbagi tawa dan menjadi wadah bagi para pemimpi. Menawarkan layanan, tempat dan jamuan terbaik bagi anda.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in delay-300">
                <Button size="lg" asChild className="group transition-all duration-300 hover:pr-6">
                  <Link href="/menu">
                    Menu Kami
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="transition-all duration-300 hover:bg-green-100">
                  <Link href="/events">Event Mendatang</Link>
                </Button>
              </div>
            </div>
            <div className="animate-float">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1478&auto=format&fit=crop"
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Cerita Kami</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ide dari Ballade Coffee terinspirasi oleh karya dari Chopin - Ballade No. 1 in G minor, sebuah seni musikal yang membawakan nuansa ketenangan dan keberanian. Ballade Coffee mengadopsi nilai pesan dari Chopin dan ingin menginspirasi generasi muda untuk tetap berani berkarya.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Berawal dari seorang mahasiswa yang ingin terjun di dunia bisnis FnB, berbekal ambisi dan doa dari bapak-ibu, dukungan dan bantuan yang luar biasa dari teman-teman, Ballade Coffee ada. Terima untuk semua yang telah mendukung saya :)
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="grid grid-cols-2 gap-4">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=1374&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Coffee being poured into a cup with latte art"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1602094689189-a7cb72dc1ff9?q=80&w=1374&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Plants hanging from the ceiling in the coffee shop"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1583124252465-d281e51012bf?q=80&w=1374&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Barista carefully preparing coffee"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518810300173-625a9c46f7d2?q=80&w=1374&auto=format&fit=crop"
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Menu Terbaik Kami</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nikmati menu terbaik pilihan dari pelanggan kami
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <ScrollReveal className="delay-100">
                <Card className="overflow-hidden interactive-card">
                  <div className="image-hover-zoom">
                    <Image
                      src="https://images.unsplash.com/photo-1514066637891-498034f5a154?q=80&w=1374&auto=format&fit=crop"
                      width={400}
                      height={300}
                      alt="Lavender Latte with oat milk"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Cappuccino Latte</h3>
                    <p className="text-sm text-muted-foreground">
                      Perpaduan espresso dengan susu steam dan lapisan foam
                    </p>
                    <p className="mt-2 font-medium">26k</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal className="delay-200">
                <Card className="overflow-hidden interactive-card">
                  <div className="image-hover-zoom">
                    <Image
                      src="https://images.unsplash.com/photo-1632217471220-a661da2ae319?q=80&w=1374&auto=format&fit=crop"
                      width={400}
                      height={300}
                      alt="Avocado Toast with microgreens"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Avocado Toast</h3>
                    <p className="text-sm text-muted-foreground">
                      Roti panggang dengan topping alpukat segar yang diiris dengan bumbu khusus
                    </p>
                    <p className="mt-2 font-medium">20k</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal className="delay-300">
                <Card className="overflow-hidden interactive-card">
                  <div className="image-hover-zoom">
                    <Image
                      src="https://images.unsplash.com/photo-1596984140799-91fef1d72e62?q=80&w=1470&auto=format&fit=crop"
                      width={400}
                      height={300}
                      alt="Matcha Chia Pudding"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Matcha Chia Pudding</h3>
                    <p className="text-sm text-muted-foreground">
                      Pudding matcha dengan topping coklat dan caramel
                    </p>
                    <p className="mt-2 font-medium">14k</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <Button variant="outline" className="mt-8 btn-hover-expand" asChild>
                <Link href="/menu">
                  Lihat Menu Lengkap
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Event Mendatang</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bergabung ke dalam komunitas kami dan turut memeriahkan event
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
                        <h3 className="text-xl font-bold">Angkasa Live Performance</h3>
                        <p className="text-sm text-muted-foreground">
                          Live music dari band kampusan lokal
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
                        <h3 className="text-xl font-bold">Nobar Piala Dunia</h3>
                        <p className="text-sm text-muted-foreground">
                          Nonton bareng sepak bola piala dunia
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
                  Lihat Semua Event
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Temukan Kami di Jember Town Square</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Berada di titik komersil di jember, dengan lokasi strategis dan fasilitas terbaik. Datang dan menjadi bagian dari komunitas kami.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>Jetos, Jl. Kaliurang,Sumbersari, Jember</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>0832 4249 9718</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span>Mon-Fri: 7AM-9PM | Sat-Sun: 8AM-8PM</span>
                  </div>
                </div>
                <Button className="mt-4 transition-all duration-300 hover:shadow-md" asChild>
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal className="animate-slide-in-right">
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1573157268794-d13e94d325e6?q=80&w=1470&auto=format&fit=crop"
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Galeri Tamu</h2>
              <p className="mt-2 text-muted-foreground md:text-xl">Pengunjung dan customer Ballade Coffee</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScrollReveal className="delay-100">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/76/51/9f/76519fcc3f8590a2bb1d933ad6fa95d3.jpg"
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
                  src="https://i.pinimg.com/736x/1f/72/2e/1f722eebd61212a9ca74677d3cd330a4.jpg"
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
                  src="https://i.pinimg.com/736x/40/08/d2/4008d2e6e850251153b598876be82295.jpg"
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
                  src="https://i.pinimg.com/736x/54/cc/4a/54cc4af5a8ea9d3917b18b18ff041e12.jpg"
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
