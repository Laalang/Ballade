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
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1597158520886-43e23f1acb1e?q=80&w=1470&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Events & Community</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl">
                Bergabung dan menjadi bagian dari komunitas kami
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Event Mendatang</h2>
              <p className="mt-2 text-muted-foreground md:text-xl">
                Kosongkan jadwal anda dan nikmati keseruan bersama Ballade Coffee
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="delay-100">
              <Card className="interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1484876065684-b683cf17d276?q=80&w=1374&auto=format&fit=crop"
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
                  <h3 className="text-xl font-bold">Live Music Butan</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Perfomance dari band lokal kampusan di jember.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>6:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Halaman Utama</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 transition-all duration-300 hover:shadow-md">Ingatkan</Button>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal className="delay-200">
              <Card className="interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1543436115-0d6fbe97ece0?q=80&w=1528&auto=format&fit=crop"
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
                  <h3 className="text-xl font-bold">Thrift Shop</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Event thrift pakaian branded.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>7:30 PM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Halaman Utama</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 transition-all duration-300 hover:shadow-md">Daftar</Button>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal className="delay-300">
              <Card className="interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1703531297357-ab23f011e2b3?q=80&w=1487&auto=format&fit=crop"
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
                  <h3 className="text-xl font-bold">Billiard Tournament</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Kejuaraan billiard dengan hadiah 40jt.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>5:30 PM - 7:30 PM</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Halaman Utama</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 transition-all duration-300 hover:shadow-md">Daftar</Button>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Event Bulanan</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bergabung bersama kami memeriahkan event bulanan kami
                </p>
                <div className="grid gap-6">
                  <div className="group">
                    <div className="flex items-start gap-4 transition-all duration-300 group-hover:bg-green-50 p-4 rounded-lg">
                      <div className="rounded-md bg-green-100 p-2 text-green-600 animate-pulse-slow">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                          Live Performance Band Lokal
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          setiap hari senin dan kamis. Saksikan keseruannya
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
                          Blind Date Challange
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Setiap Tanggal 17. Ayo jatuh cinta bareng
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
                          Coffee Workshop
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Setiap tanggal 20. Belajar bareng soal kopi
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
                  <h3 className="text-xl font-bold mb-2">Ajukan Acaramu</h3>
                  <p className="text-muted-foreground">
                    Lagi cari tempat buat gelar event? Ballade Coffee akan menyediakan semua yang kamu butuhin. booking sekarang!
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 btn-hover-expand transition-all duration-300 hover:bg-green-100"
                    asChild
                  >
                    <Link href="/contact">
                      Hubungi Kami
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
              <p className="mt-2 text-muted-foreground md:text-xl">Highlights dari event kami sebelumnya</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScrollReveal className="delay-100">
              <div className="image-hover-zoom rounded-lg overflow-hidden">
                <Image
                  src="https://motomobinews.id/wp-content/uploads/2024/06/Turnamen-Biliar-Mercedes-Benz-Club-Tangerang-Raya_3.jpg"
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
                  src="https://www.rukita.co/stories/wp-content/uploads/2020/02/tempat-live-music-jakarta-header-2.png"
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
                  src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/12/07/2748695857.jpg"
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
                  src="https://cdns.klimg.com/resized/476x/p/kim-tae-hee_rain_1507048222_kth.jpg"
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">Jangan Ketinggalan</h2>
              <p className="text-muted-foreground md:text-xl mb-8">
                Daftar untuk terus mendapatkan kabar dari event yang di adakan di Ballade Coffee
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
