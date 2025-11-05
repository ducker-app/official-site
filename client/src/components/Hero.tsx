import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Luxury_sedan_hotel_entrance_hero_f26693f4.png";

export default function Hero() {
  const handleBookNow = () => {
    console.log('Book Now clicked');
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewFleet = () => {
    console.log('View Fleet clicked');
    const fleetSection = document.getElementById('fleet');
    fleetSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              尊榮包車旅遊服務
            </h1>
            <p className="text-3xl md:text-5xl font-serif font-medium text-white/90">
              VIP Charter Travel Experience
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            專業司機 · 頂級車隊 · 彈性行程 · 尊榮體驗
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={handleBookNow}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg min-w-[200px]"
              data-testid="button-book-now"
            >
              立即預訂 / Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleViewFleet}
              className="bg-background/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg min-w-[200px]"
              data-testid="button-view-fleet"
            >
              查看車隊 / View Fleet
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
