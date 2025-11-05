import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "半日包車",
    nameEn: "Half-Day Charter",
    duration: "4小時",
    price: "NT$ 4,800起",
    features: [
      "專業司機服務",
      "高級車款選擇",
      "市區景點遊覽",
      "免費等候30分鐘",
    ],
  },
  {
    name: "全日包車",
    nameEn: "Full-Day Charter",
    duration: "8小時",
    price: "NT$ 8,800起",
    features: [
      "專業司機服務",
      "豪華車款任選",
      "彈性行程規劃",
      "免費等候1小時",
      "提供礦泉水",
    ],
    featured: true,
  },
  {
    name: "多日行程",
    nameEn: "Multi-Day Tour",
    duration: "客製化",
    price: "另行報價",
    features: [
      "專屬旅遊顧問",
      "頂級車款專屬",
      "完整行程規劃",
      "住宿安排建議",
      "VIP專屬禮遇",
    ],
  },
];

export default function Packages() {
  const handleSelectPlan = (packageName: string) => {
    console.log(`Selected package: ${packageName}`);
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            服務方案
          </h2>
          <p className="text-xl text-muted-foreground">Service Packages</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col ${
                pkg.featured ? 'border-primary shadow-lg' : ''
              }`}
              data-testid={`card-package-${index}`}
            >
              {pkg.featured && (
                <div className="mb-4 -mt-4 -mx-4">
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    最受歡迎
                  </div>
                </div>
              )}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {pkg.nameEn}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {pkg.duration}
                  </p>
                </div>
                
                <div className="py-4">
                  <p className="text-3xl font-bold text-foreground">
                    {pkg.price}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button
                className="w-full mt-8"
                variant={pkg.featured ? "default" : "outline"}
                onClick={() => handleSelectPlan(pkg.name)}
                data-testid={`button-select-package-${index}`}
              >
                選擇方案 / Select Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
