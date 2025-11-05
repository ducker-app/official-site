import { Facebook, Instagram, Mail } from "lucide-react";
import { SiLine, SiWechat } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-foreground">
              尊榮包車
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              提供最優質的包車旅遊服務，讓每一段旅程都成為難忘的回憶。
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                aria-label="LINE"
                data-testid="link-line"
              >
                <SiLine className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                aria-label="WeChat"
                data-testid="link-wechat"
              >
                <SiWechat className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">快速連結</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#fleet"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-fleet"
                >
                  車隊介紹
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-booking"
                >
                  立即預訂
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-about"
                >
                  關於我們
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-contact"
                >
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">聯絡資訊</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>24小時服務專線</p>
              <p className="font-medium text-foreground">+886 2 1234 5678</p>
              <p className="pt-2">電子郵件</p>
              <p className="font-medium text-foreground">booking@vipcharter.com.tw</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} 尊榮包車旅遊服務. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              隱私權政策
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              服務條款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
