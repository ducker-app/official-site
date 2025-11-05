import { Crown, Car, Calendar, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Crown,
    title: "VIP專屬服務",
    titleEn: "VIP Exclusive Service",
    description: "尊榮禮遇，專人服務，為您打造獨一無二的旅程體驗",
  },
  {
    icon: Car,
    title: "頂級車隊",
    titleEn: "Premium Fleet",
    description: "Mercedes、BMW、Tesla等豪華車款，定期保養維護",
  },
  {
    icon: Calendar,
    title: "彈性行程",
    titleEn: "Flexible Itinerary",
    description: "隨心所欲安排行程，專屬客製化旅遊規劃服務",
  },
  {
    icon: UserCheck,
    title: "專業司機",
    titleEn: "Professional Chauffeurs",
    description: "經驗豐富、服務親切，通過嚴格訓練與背景審查",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            為什麼選擇我們
          </h2>
          <p className="text-xl text-muted-foreground">Why Choose Us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-service-${index}`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 font-medium">
                {service.titleEn}
              </p>
              <p className="text-base text-card-foreground/80 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
