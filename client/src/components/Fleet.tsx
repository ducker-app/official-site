import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mercedesSClass from "@assets/generated_images/Mercedes_S-Class_studio_shot_d83a64f5.png";
import bmw7Series from "@assets/generated_images/BMW_7-Series_studio_shot_f5a01a3c.png";
import teslaModelS from "@assets/generated_images/Tesla_Model_S_studio_shot_1a333533.png";
import mercedesVClass from "@assets/generated_images/Mercedes_V-Class_studio_shot_747a0613.png";
import lexusLS from "@assets/generated_images/Lexus_LS_studio_shot_c33a3158.png";
import audiA8 from "@assets/generated_images/Audi_A8_studio_shot_1e84bd6d.png";

const vehicles = [
  {
    name: "Mercedes-Benz S-Class",
    nameZh: "賓士 S-Class",
    capacity: 4,
    image: mercedesSClass,
  },
  {
    name: "BMW 7-Series",
    nameZh: "BMW 7系列",
    capacity: 4,
    image: bmw7Series,
  },
  {
    name: "Tesla Model S",
    nameZh: "特斯拉 Model S",
    capacity: 4,
    image: teslaModelS,
  },
  {
    name: "Mercedes-Benz V-Class",
    nameZh: "賓士 V-Class",
    capacity: 7,
    image: mercedesVClass,
  },
  {
    name: "Lexus LS",
    nameZh: "凌志 LS",
    capacity: 4,
    image: lexusLS,
  },
  {
    name: "Audi A8",
    nameZh: "奧迪 A8",
    capacity: 4,
    image: audiA8,
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            豪華車隊
          </h2>
          <p className="text-xl text-muted-foreground">Premium Fleet</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-vehicle-${index}`}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-primary text-primary-foreground">
                    查看詳情
                  </Badge>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {vehicle.nameZh}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {vehicle.name}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">最多 {vehicle.capacity} 人</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
