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
        style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1600')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Menu</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl">
                Carefully crafted drinks and food made with quality ingredients
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
                    Vegan Options
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
                              <p className="font-medium">$3.50</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Double shot of our signature espresso blend
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Americano</h3>
                              <p className="font-medium">$4.00</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Espresso with hot water</p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Cappuccino</h3>
                              <p className="font-medium">$4.75</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Espresso with steamed milk and foam</p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Latte</h3>
                              <p className="font-medium">$5.00</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Espresso with steamed milk</p>
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
                              <p className="font-medium">$5.50</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              House-made lavender syrup with espresso and milk
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Honey Cardamom Latte</h3>
                              <p className="font-medium">$5.75</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Local honey, cardamom, espresso, and steamed milk
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Matcha Latte</h3>
                              <p className="font-medium">$5.50</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Ceremonial grade matcha whisked with steamed milk
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Golden Milk</h3>
                              <p className="font-medium">$5.25</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Turmeric, ginger, cinnamon, and steamed milk
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
                              <p className="font-medium">$8.95</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Sourdough bread with smashed avocado, microgreens, and chili flakes
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Breakfast Burrito</h3>
                              <p className="font-medium">$9.50</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Scrambled eggs, black beans, cheese, and salsa in a flour tortilla
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Lunch & Snacks</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Caprese Sandwich</h3>
                              <p className="font-medium">$10.95</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Fresh mozzarella, tomato, basil, and balsamic glaze on ciabatta
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Hummus Plate</h3>
                              <p className="font-medium">$8.50</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              House-made hummus with vegetables and pita bread
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Quinoa Bowl</h3>
                              <p className="font-medium">$11.95</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Quinoa with roasted vegetables, feta, and lemon tahini dressing
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Seasonal Soup</h3>
                              <p className="font-medium">$6.50</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Ask about our daily soup selection</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="vegan" className="mt-6 animate-scale-in">
                  <div className="grid gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Vegan Drinks</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Oat Milk Latte</h3>
                              <p className="font-medium">$5.50</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Espresso with steamed oat milk</p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Coconut Matcha</h3>
                              <p className="font-medium">$5.75</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Matcha with coconut milk</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Vegan Food</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Vegan Avocado Toast</h3>
                              <p className="font-medium">$8.95</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Sourdough bread with smashed avocado, microgreens, and nutritional yeast
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Matcha Chia Pudding</h3>
                              <p className="font-medium">$6.75</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Chia seeds soaked in coconut milk with matcha and maple syrup
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Vegan Buddha Bowl</h3>
                              <p className="font-medium">$12.95</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Quinoa, roasted vegetables, avocado, and tahini dressing
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="interactive-card">
                          <CardContent className="p-6">
                            <div className="flex justify-between">
                              <h3 className="font-bold">Vegan Banana Bread</h3>
                              <p className="font-medium">$4.50</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">House-made banana bread with walnuts</p>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Ingredients</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We source our ingredients locally whenever possible, working with farmers and producers who share our
                  values of sustainability and quality.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>Locally roasted coffee beans</span>
                  </li>
                  <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>Organic dairy and plant-based milks</span>
                  </li>
                  <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>Seasonal produce from regional farms</span>
                  </li>
                  <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>House-made syrups and sauces</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal className="animate-slide-in-right">
              <div className="space-y-4">
                <div className="image-hover-zoom rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Seasonal Specials</h2>
              <p className="mt-2 text-muted-foreground md:text-xl">Limited time offerings you won't want to miss</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal className="delay-100">
              <div className="bg-white rounded-xl overflow-hidden shadow-md interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Spring berry smoothie bowl"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Spring Berry Smoothie Bowl</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    A refreshing blend of seasonal berries, banana, and almond milk topped with granola, coconut flakes,
                    and fresh fruit.
                  </p>
                  <p className="mt-4 font-medium">$11.95</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="delay-200">
              <div className="bg-white rounded-xl overflow-hidden shadow-md interactive-card">
                <div className="image-hover-zoom">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Maple cardamom cold brew"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Maple Cardamom Cold Brew</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Our signature cold brew infused with cardamom and sweetened with local maple syrup. Served over ice
                    with your choice of milk.
                  </p>
                  <p className="mt-4 font-medium">$6.25</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
