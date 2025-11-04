import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, Users, Zap, CheckCircle2, BarChart3, Sparkles } from "lucide-react";

export default function Home() {
  const calendlyUrl = "https://calendly.com/danutmitrut/45min";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with CTA */}
      <section className="relative bg-gradient-to-br from-[hsl(168,82%,28%)] via-[hsl(262,83%,58%)] to-[hsl(201,90%,23%)] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Ad Optimization GPT
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
              Transformarea reclamelor bune în reclame care convertesc
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-[hsl(20,95%,53%)] hover:bg-[hsl(20,95%,48%)] text-white font-semibold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => window.open(calendlyUrl, '_blank')}
              >
                Programează o întâlnire gratuită
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ce este Ad Optimization GPT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[hsl(201,90%,23%)]">
              Ce este Ad Optimization GPT?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              Ad Optimization GPT este un specialist în optimizarea reclamelor, cu un singur scop: să transforme reclame bune în reclame care convertesc. Spre deosebire de abordările generale, această componentă se concentrează exclusiv pe identificarea și îmbunătățirea mesajelor publicitare, folosind principii testate de persuasiune și structuri inspirate din "Breakthrough Advertising" de Eugene Schwartz.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-2 border-[hsl(168,82%,28%)] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-[hsl(168,82%,28%)] rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[hsl(201,90%,23%)]">Specializare</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Spre deosebire de sistemele generice de copywriting, Ad Optimization GPT este specializat exclusiv în analiza și optimizarea reclamelor pentru maximizarea conversiilor.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-[hsl(262,83%,58%)] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-[hsl(262,83%,58%)] rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[hsl(201,90%,23%)]">Rezultate măsurabile</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Nu vizează doar reclame "mai frumoase" sau "mai creative", ci reclame care determină acțiuni concrete și măsurabile din partea audienței.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-[hsl(162,94%,30%)] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-[hsl(162,94%,30%)] rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[hsl(201,90%,23%)]">Rolul în ecosistemul Hello Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Ad Optimization GPT reprezintă elementul de finisare al strategiilor de marketing digital, intervenind în etapa critică de convertire a atenției în acțiune.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-[hsl(168,82%,28%)]/5 border-l-4 border-[hsl(168,82%,28%)] rounded-r-lg">
              <p className="text-lg text-gray-700">
                <strong className="text-[hsl(201,90%,23%)]">Când intervine:</strong> după ce My Hero 2.3 a definit avatarul clientului ideal, Breakthrough Copy GPT a creat structura de bază a mesajelor, iar Market&Funnels a stabilit strategia generală.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologii de Optimizare */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[hsl(201,90%,23%)]">
              Metodologii de optimizare
            </h2>
            
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[hsl(262,83%,58%)]">
                Fundamentele din Breakthrough Advertising
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Ad Optimization GPT implementează principiile esențiale definite de Eugene Schwartz:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(201,90%,23%)]">Stadiile de conștientizare</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Adaptarea mesajului publicitar în funcție de cât de conștient este publicul de problema sa și soluțiile disponibile.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(201,90%,23%)]">Intensificarea dorințelor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Amplificarea unei dorințe existente mai degrabă decât crearea uneia noi din nimic.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(201,90%,23%)]">Forța copy-ului</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Puterea unui mesaj publicitar de a genera o tensiune mentală care poate fi rezolvată doar prin acțiune.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(201,90%,23%)]">Mecanisme de convingere</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Utilizarea mecanismelor psihologice clare care transformă interesul în decizie și acțiune.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[hsl(262,83%,58%)]">
                Tehnici specifice de optimizare
              </h3>

              <div className="space-y-6">
                <TechniqueCard 
                  icon={<Zap className="h-6 w-6" />}
                  title="Intensificarea"
                  description="Amplificarea aspectelor emoționale ale unei probleme sau beneficiu pentru a crește impactul și urgența reclamei."
                  example='De la "Economisește timp" la "Recuperează ore prețioase în fiecare zi pentru ceea ce contează cu adevărat"'
                />

                <TechniqueCard 
                  icon={<Users className="h-6 w-6" />}
                  title="Identificarea"
                  description="Crearea unui sentiment de conexiune personală între cititor și mesaj, făcându-l să simtă că reclama îi vorbește direct lui."
                  example='De la "Pentru antreprenori" la "Pentru antreprenorul care știe că e capabil de mai mult, dar se simte blocat în rutina zilnică"'
                />

                <TechniqueCard 
                  icon={<CheckCircle2 className="h-6 w-6" />}
                  title="Gradualizarea"
                  description="Împărțirea unei promisiuni mari în pași mai mici și credibili, făcând oferta mai ușor de acceptat."
                  example='De la "Transformă-ți complet sănătatea" la "Începe cu doar 10 minute pe zi: Pasul 1: Elimină o băutură carbogazoasă. Pasul 2: Adaugă un mic exercițiu. Pasul 3: Observă primele rezultate în doar 7 zile."'
                />

                <TechniqueCard 
                  icon={<Sparkles className="h-6 w-6" />}
                  title="Redefinirea"
                  description="Prezentarea produsului/serviciului într-un context nou, schimbând perspectiva cititorului asupra valorii oferite."
                  example='De la "Un curs de investiții" la "Un sistem de creare a libertății financiare în care învățarea despre investiții este doar primul pas"'
                />

                <TechniqueCard 
                  icon={<BarChart3 className="h-6 w-6" />}
                  title="Mecanizarea"
                  description="Transformarea unui concept vag într-un sistem concret, specific și ușor de înțeles."
                  example='De la "Te ajutăm să slăbești" la "Formula 3-2-1: 3 mese echilibrate, 2 gustări sănătoase, 1 zi de detox săptămânal = Rezultate garantate în 30 de zile"'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proces de Analiză */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[hsl(201,90%,23%)]">
              Proces de analiză și restructurare
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">Metodologia în 5 pași</p>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Diagnosticarea reclamei actuale",
                  description: "Analizarea detaliată a reclamelor existente pentru identificarea punctelor slabe în structură, claritate și persuasiune.",
                  focus: "Aspecte precum headline-ul slab, lipsa de specificitate, beneficii neclarificate, CTA neclar."
                },
                {
                  step: "2",
                  title: "Alinierea cu stadiul de conștientizare",
                  description: "Determinarea nivelului de cunoaștere al pieței și adaptarea mesajului pentru a se potrivi perfect cu așteptările publicului.",
                  focus: "O piață foarte conștientă va răspunde mai bine la comparații directe și oferte concrete, în timp ce o piață inconștientă necesită educație și construirea problemei."
                },
                {
                  step: "3",
                  title: "Aplicarea tehnicilor de transformare",
                  description: "Utilizarea combinată a celor 5 tehnici (intensificare, identificare, gradualizare, redefinire, mecanizare) pentru a îmbunătăți elementele cheie ale reclamei.",
                  focus: "Restructurarea headline-ului, subheadline-ului, corpului reclamei și call-to-action-ului pentru maximizarea impactului."
                },
                {
                  step: "4",
                  title: "Design de teste A/B",
                  description: "Generarea de variante multiple ale reclamei optimizate, fiecare explorând un aspect psihologic diferit al audienței.",
                  focus: "Testarea sistematică a diferitelor headline-uri, structuri, apeluri la acțiune sau mecanisme de persuasiune, pentru identificarea celei mai eficiente abordări."
                },
                {
                  step: "5",
                  title: "Optimizare continuă",
                  description: "Analiza rezultatelor testelor și iterarea pentru îmbunătățiri continue ale performanței.",
                  focus: "Măsurare → Analiză → Optimizare → Testare → Repetare pentru îmbunătățire perpetuă."
                }
              ].map((item) => (
                <ProcessStep key={item.step} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficii și Rezultate */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(168,82%,28%)]/10 to-[hsl(262,83%,58%)]/10">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[hsl(201,90%,23%)]">
              Beneficii și rezultate măsurabile
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center border-2 border-[hsl(162,94%,30%)] hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-[hsl(162,94%,30%)] mb-2">+42%</div>
                  <CardTitle className="text-xl text-[hsl(201,90%,23%)]">Creștere CTR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Creșterea medie a ratei de click-through pentru reclamele optimizate prin tehnicile Ad Optimization GPT.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-[hsl(20,95%,53%)] hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-[hsl(20,95%,53%)] mb-2">-33%</div>
                  <CardTitle className="text-xl text-[hsl(201,90%,23%)]">Reducere CPA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Reducerea medie a costului per achiziție prin optimizarea psihologică a mesajelor publicitare.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-[hsl(262,83%,58%)] hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-[hsl(262,83%,58%)] mb-2">+67%</div>
                  <CardTitle className="text-xl text-[hsl(201,90%,23%)]">Creștere ROAS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Îmbunătățirea medie a Return on Ad Spend pentru campaniile optimizate.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-[hsl(262,83%,58%)]">
                Dincolo de cifre: beneficii strategice
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(201,90%,23%)]">Diferențiere clară</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Reclamele optimizate se disting clar în peisajul aglomerat al publicității, captând atenția și stimulând acțiunea.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(201,90%,23%)]">Relevantă context-specifică</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Mesajele sunt adaptate perfect la contextul audienței și stadiul ei de conștientizare, crescând rezonanța și impactul.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(201,90%,23%)]">Insight-uri acționabile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Testele A/B oferă insight-uri valoroase despre psihologia audienței, aplicabile în toate aspectele marketingului.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(201,90%,23%)]">Îmbunătățire perpetuă</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Fiecare campanie și test construiește pe rezultatele anterioare, ducând la o creștere exponențială a performanței în timp.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(168,82%,28%)] to-[hsl(262,83%,58%)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Transformăm reclamele bune în reclame care convertesc
            </h2>
            <p className="text-xl text-white/90">
              Descoperă cum Ad Optimization GPT poate îmbunătăți performanța campaniilor tale publicitare.
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-[hsl(20,95%,53%)] hover:bg-[hsl(20,95%,48%)] text-white font-semibold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => window.open(calendlyUrl, '_blank')}
              >
                Programează o întâlnire gratuită
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(201,90%,23%)] text-white py-8">
        <div className="container">
          <div className="text-center">
            <p className="text-sm md:text-base">
              © 2024 parte a ecosistemului Hello Business, dezvoltat de Mitruț Dănuț
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function TechniqueCard({ icon, title, description, example }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  example: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[hsl(168,82%,28%)] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
            {icon}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl text-[hsl(201,90%,23%)] mb-2">{title}</CardTitle>
            <p className="text-gray-600 mb-3">{description}</p>
            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[hsl(262,83%,58%)]">
              <p className="text-sm text-gray-700">
                <strong className="text-[hsl(201,90%,23%)]">Exemplu:</strong> {example}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

function ProcessStep({ step, title, description, focus }: {
  step: string;
  title: string;
  description: string;
  focus: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[hsl(168,82%,28%)] to-[hsl(262,83%,58%)] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
        {step}
      </div>
      <Card className="flex-1 hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl text-[hsl(201,90%,23%)]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-gray-700">{description}</p>
          <div className="bg-[hsl(168,82%,28%)]/5 p-3 rounded-lg border-l-4 border-[hsl(168,82%,28%)]">
            <p className="text-sm text-gray-600">
              <strong className="text-[hsl(201,90%,23%)]">Focus:</strong> {focus}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
