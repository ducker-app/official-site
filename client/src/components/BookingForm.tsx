import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

export default function BookingForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    passengers: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "預訂已送出",
      description: "我們將盡快與您聯繫，感謝您的預訂！",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      passengers: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            立即預訂
          </h2>
          <p className="text-xl text-muted-foreground">Book Now</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">姓名 / Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="請輸入您的姓名"
                  data-testid="input-name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">電話 / Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="請輸入您的電話"
                  data-testid="input-phone"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">電子郵件 / Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="請輸入您的電子郵件"
                  data-testid="input-email"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">日期 / Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    data-testid="input-date"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">時間 / Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    data-testid="input-time"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="passengers">乘客人數 / Passengers *</Label>
                <Select
                  value={formData.passengers}
                  onValueChange={(value) => handleChange('passengers', value)}
                  required
                >
                  <SelectTrigger id="passengers" data-testid="select-passengers">
                    <SelectValue placeholder="請選擇人數" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 人</SelectItem>
                    <SelectItem value="3-4">3-4 人</SelectItem>
                    <SelectItem value="5-7">5-7 人</SelectItem>
                    <SelectItem value="7+">7+ 人</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">特殊需求 / Special Requests</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="請告訴我們您的特殊需求或行程安排"
                  className="min-h-[120px]"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full"
                size="lg"
                data-testid="button-submit"
              >
                送出預訂 / Submit Booking
              </Button>
            </form>
          </Card>
          
          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                聯絡資訊
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">24小時服務專線</p>
                    <p className="text-muted-foreground">+886 2 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">電子郵件</p>
                    <p className="text-muted-foreground">booking@vipcharter.com.tw</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">服務地址</p>
                    <p className="text-muted-foreground">台北市信義區信義路五段7號</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-primary/5">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                服務時間
              </h3>
              <div className="space-y-2 text-card-foreground">
                <p>24小時全年無休服務</p>
                <p className="text-sm text-muted-foreground">
                  建議提前3天預訂以確保車輛調度
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
