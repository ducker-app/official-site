// Content Data Module

export const services = [
    {
        icon: 'crown',
        title: 'VIP專屬服務',
        titleEn: 'VIP Exclusive Service',
        description: '尊榮禮遇，專人服務，為您打造獨一無二的旅程體驗'
    },
    {
        icon: 'car',
        title: '頂級車隊',
        titleEn: 'Premium Fleet',
        description: 'Mercedes、BMW、Tesla等豪華車款，定期保養維護'
    },
    {
        icon: 'calendar',
        title: '彈性行程',
        titleEn: 'Flexible Itinerary',
        description: '隨心所欲安排行程，專屬客製化旅遊規劃服務'
    },
    {
        icon: 'user-check',
        title: '專業司機',
        titleEn: 'Professional Chauffeurs',
        description: '經驗豐富、服務親切，通過嚴格訓練與背景審查'
    }
];

export const vehicles = [
    {
        name: 'Mercedes-Benz S-Class',
        nameZh: '賓士 S-Class',
        capacity: 4,
        image: 'assets/images/Mercedes_S-Class_studio_shot_d83a64f5.png'
    },
    {
        name: 'BMW 7-Series',
        nameZh: 'BMW 7系列',
        capacity: 4,
        image: 'assets/images/BMW_7-Series_studio_shot_f5a01a3c.png'
    },
    {
        name: 'Tesla Model S',
        nameZh: '特斯拉 Model S',
        capacity: 4,
        image: 'assets/images/Tesla_Model_S_studio_shot_1a333533.png'
    },
    {
        name: 'Mercedes-Benz V-Class',
        nameZh: '賓士 V-Class',
        capacity: 7,
        image: 'assets/images/Mercedes_V-Class_studio_shot_747a0613.png'
    },
    {
        name: 'Lexus LS',
        nameZh: '凌志 LS',
        capacity: 4,
        image: 'assets/images/Lexus_LS_studio_shot_c33a3158.png'
    },
    {
        name: 'Audi A8',
        nameZh: '奧迪 A8',
        capacity: 4,
        image: 'assets/images/Audi_A8_studio_shot_1e84bd6d.png'
    }
];

export const packages = [
    {
        name: '半日包車',
        nameEn: 'Half-Day Charter',
        duration: '4小時',
        price: 'NT$ 4,800起',
        features: [
            '專業司機服務',
            '高級車款選擇',
            '市區景點遊覽',
            '免費等候30分鐘'
        ],
        featured: false
    },
    {
        name: '全日包車',
        nameEn: 'Full-Day Charter',
        duration: '8小時',
        price: 'NT$ 8,800起',
        features: [
            '專業司機服務',
            '豪華車款任選',
            '彈性行程規劃',
            '免費等候1小時',
            '提供礦泉水'
        ],
        featured: true
    },
    {
        name: '多日行程',
        nameEn: 'Multi-Day Tour',
        duration: '客製化',
        price: '另行報價',
        features: [
            '專屬旅遊顧問',
            '頂級車款專屬',
            '完整行程規劃',
            '住宿安排建議',
            'VIP專屬禮遇'
        ],
        featured: false
    }
];

export const contactInfo = [
    {
        icon: 'phone',
        title: '24小時服務專線',
        content: '+886 2 1234 5678'
    },
    {
        icon: 'mail',
        title: '電子郵件',
        content: 'booking@vipcharter.com.tw'
    },
    {
        icon: 'map-pin',
        title: '服務地址',
        content: '台北市信義區信義路五段7號'
    }
];

export const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'LINE', icon: 'line', url: '#' },
    { name: 'WeChat', icon: 'wechat', url: '#' }
];

export const footerLinks = [
    { text: '車隊介紹', url: '#fleet' },
    { text: '立即預訂', url: '#booking' },
    { text: '關於我們', url: '#' },
    { text: '聯絡我們', url: '#' }
];

export const legalLinks = [
    { text: '隱私權政策', url: '#' },
    { text: '服務條款', url: '#' }
];
