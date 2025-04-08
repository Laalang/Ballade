import Image from "next/image"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function MenuPage() {
  return (
    <>
      <section
        className="w-full py-24 md:py-32 lg:py-48 bg-cover bg-center relative parallax"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611251070621-ed632a70be4b?q=80&w=1469&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Menu Kami</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl">
                Komponen rahasia dari nikmatnya Ballade Coffee
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <ScrollReveal>
              <Tabs defaultValue="drinks" className="w-full max-w-4xl">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger
                    value="drinks"
                    className="transition-all duration-300 data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
                  >
                    Drinks
                  </TabsTrigger>
                  <TabsTrigger
                    value="food"
                    className="transition-all duration-300 data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
                  >
                    Food
                  </TabsTrigger>
                  <TabsTrigger
                    value="vegan"
                    className="transition-all duration-300 data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
                  >
                    Snacks
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="drinks" className="mt-6 animate-scale-in">
                  <div className="grid gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Coffee</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Espresso</h3>
                              <p className="font-medium">16k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Kopi pekat yang dibuat dari hasil tekanan tinggi
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Americano</h3>
                              <p className="font-medium">11k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Espresso yang dicampur air</p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Cappuccino</h3>
                              <p className="font-medium">22k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Espresso dengan susu dan cream</p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Latte</h3>
                              <p className="font-medium">22k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Espresso dengan susu kental</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Specialty Drinks</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Lavender Latte</h3>
                              <p className="font-medium">24k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Minuman dari susu, kopi dan sirup lavender
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Honey Cardamom Latte</h3>
                              <p className="font-medium">25k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Espresso, susu, madu dan rempah kapulaga
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Matcha Latte</h3>
                              <p className="font-medium">14k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Espresso, matcha, dan susu
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Golden Milk</h3>
                              <p className="font-medium">25k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Minuman susu dengan berbagai campuran rempah
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="food" className="mt-6 animate-scale-in">
                  <div className="grid gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Breakfast</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Avocado Toast</h3>
                              <p className="font-medium">26k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Roti panggan dengan irisan apukat dan bumbu
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Breakfast Burrito</h3>
                              <p className="font-medium">22k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Tortilla dengan isi telur, daging, keju dan sayuran
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Lunch</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Caprese Sandwich</h3>
                              <p className="font-medium">30k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Roti dengan tomat, mozarella dan balsamic italia
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Hummus Plate</h3>
                              <p className="font-medium">16k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Sajian hummus dengan roti dan sayur segar
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Quinoa Bowl</h3>
                              <p className="font-medium">27k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Quinoa dengan tambahan sayur dan saus
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Seasonal Soup</h3>
                              <p className="font-medium">9k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Tanyakan sup apa hari ini ke kasir</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="vegan" className="mt-6 animate-scale-in">
                  <div className="grid gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Ramai-Ramai</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Sharing Platter</h3>
                              <p className="font-medium">26k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Platter untuk berkumpul rame</p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Pizza</h3>
                              <p className="font-medium">33k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Pizza dengan beragam varian</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Buat Sendiri</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Croissant</h3>
                              <p className="font-medium">11k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Croissant buttery klasik atau isi coklat/keju
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Banana Bread</h3>
                              <p className="font-medium">11k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Roti pisang lembut dengan aroma kayu manis
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Granolla Bar</h3>
                              <p className="font-medium">12k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Cemilan berbahan oat, kacang dan madu
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Cookies</h3>
                              <p className="font-medium">7k</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Cookies renyah dengan banyak varian rasa</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <ScrollReveal className="animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Bahan Yang Kami Gunakan</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kami menggunakan bahan terbaik untuk setiap menu tersaji, mulai dari artisan kopi dan rempah serta sayuran lokal pilihan terbaik yang sudah melewati syarat uji kualitas dari kami.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>Kopi artisan lokal</span>
                  </li>
                  <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>Stok segar yang diperbarui setiap hari</span>
                  </li>
                  <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>Mendukung pemasaran produk lokal</span>
                  </li>
                  <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>Bumbu dan sirup ala Ballade Coffee</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal className="animate-slide-in-right">
              <div className="space-y-4">
                <div className="image-hover-zoom rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1607681034540-2c46cc71896d?q=80&w=1470&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="Fresh ingredients from local farms"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Menu Spesial Januari</h2>
              <p className="mt-2 text-muted-foreground md:text-xl">Menu terbatas hanya di bulan januari</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal className="delay-100">
              <div className="bg-white rounded-xl overflow-hidden shadow-md interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1685075811420-457c3d2f186b?q=80&w=1378&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="Spring berry smoothie bowl"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Spring Berry Smoothie Bowl</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Campuran segar dari buah beri, pisang dan susu almond, dilengkapi dengan granolla, serutan kelapa  dan buah-buahan.
                  </p>
                  <p className="mt-4 font-medium">29k</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-200">
              <div className="bg-white rounded-xl overflow-hidden shadow-md interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1695605302406-e51a7f0785ff?q=80&w=1374&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="Maple cardamom cold brew"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Maple Cardamom Cold Brew</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Cold brew ala Ballade Coffe dengan kapulaga dan sirup maple, disajikan dengan es dan susu.
                  </p>
                  <p className="mt-4 font-medium">21k</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
