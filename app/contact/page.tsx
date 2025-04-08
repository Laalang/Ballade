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
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?q=80&w=1470&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Hubungi Kami</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl">
                kami sangat berterima kasih atas kritik dan saran dari anda.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Kritik dan Saran</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Memiliki masukan? bantu kami agar bisa terus berkembang untuk mencapai visi dari Ballade Coffee.
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
                        <h3 className="text-xl font-bold">Kunjungi Kami</h3>
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
                        <h3 className="text-xl font-bold">Hubungi Kami</h3>
                        <p className="text-sm text-muted-foreground">
                          Phone: 0831 4489 1782
                          <br />
                          Kami siap melayani panggilan anda
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
                          Kepentingan Umum: info@balladecoffee.com
                          <br />
                          Events: events@balladecoffee.com
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
              <p className="mt-2 text-muted-foreground md:text-xl">Kami berada di pusat komersil di Jember</p>
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
              <p className="mt-2 text-muted-foreground md:text-xl">Jawaban untuk pertanyaan umum</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            <ScrollReveal className="delay-100">
              <div className="space-y-2 group">
                <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                  Di sana ada Wi-Fi?
                </h3>
                <p className="text-muted-foreground">
                  Pastinya, kami memiliki Wi-Fi gratis untuk pengunjung kami.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-200">
              <div className="space-y-2 group">
                <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                  Boleh saya membawa laptop untuk bekerja?
                </h3>
                <p className="text-muted-foreground">
                  Kami menyediakan tempat khusus yang tenang untuk memudahkan anda bekerja.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-300">
              <div className="space-y-2 group">
                <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                  Apakah boleh beri pesanan custom?
                </h3>
                <p className="text-muted-foreground">
                  Pastinya dong, kami percaya diri dengan kemampuan barista kami dalam menyajikan pesanan.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-400">
              <div className="space-y-2 group">
                <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
                  Boleh saya menyewa tempat untuk kepentingan acara?
                </h3>
                <p className="text-muted-foreground">
                  Tentu saja boleh, kami menawarkan berbagai pilihan untuk event organizer.
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">Menjadi Bagian Dari Kami</h2>
              <p className="text-muted-foreground md:text-xl mb-8">
                Kami sangat membutuhkan tenaga professional untuk bisa terus memberikan layanan terbaik bagi pengunjung. Kirimkan CV mu ya!
              </p>
              <Button variant="outline" className="btn-hover-expand transition-all duration-300 hover:bg-green-100">
                Lihat lowongan
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
