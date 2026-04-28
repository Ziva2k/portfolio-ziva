import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Nguyễn Minh Thái",
  role: "Performance Marketing Specialist",
  bio: "Chuyên gia Marketing với hơn 6 năm kinh nghiệm trong việc xây dựng chiến lược tăng trưởng, tối ưu hóa chuyển đổi và quản lý thương hiệu. Tôi kết hợp giữa tư duy dữ liệu và sự sáng tạo để mang lại kết quả đột phá cho doanh nghiệp.",
  email: "digi.thainguyen00@gmail.com",
  phone: "0898437922",
  linkedin: "linkedin.com/in/minhthai",
  projects: [
    {
      id: "1",
      title: "Dự án Tinh Chất Vàng Mờ Nhăn ABERA",
      category: "Influencer Marketing & Branding",
      description: "Hợp tác chiến lược với Nghệ sĩ Kim Xuân (KOC lớn) trong năm 2024 để đẩy mạnh nhận diện thương hiệu và uy tín cho dòng tinh chất cao cấp.",
      image: "https://i.postimg.cc/L6TPsyjM/429584759-122133962936131983-2055721460539345316-n.jpg",
      tags: ["Influencer Marketing", "KOC", "Branding", "2024"],
      results: ["Tăng hiệu suất chuyển đổi qua Influencer", "Xây dựng lòng tin thương hiệu bền vững", "Tiếp cận >1M khách hàng mục tiêu"]
    },
    {
      id: "2",
      title: "Tối ưu hóa GMVmax TikTok Shop - Kem Mắt Abera",
      category: "Performance Marketing & E-commerce",
      description: "Triển khai giải pháp GMVmax trên TikTok Shop vào năm 2025, tập trung tối ưu hóa doanh thu và quy trình vận hành giỏ hàng.",
      image: "https://i.postimg.cc/05TGr8cM/kemmat.png",
      tags: ["TikTok Shop", "GMVmax", "Performance", "2025"],
      results: ["Tối ưu hóa tỷ lệ ROAS kỷ lục", "Dẫn đầu ngành hàng mỹ phẩm trên TikTok Shop", "Tăng trưởng doanh thu 150%"]
    },
    {
      id: "3",
      title: "Hệ thống Chatbot AI Facebook Messenger",
      category: "Automation & AI Integration",
      description: "Xây dựng và phát triển hệ thống chatbot tự động tích hợp trí tuệ nhân tạo, giúp phản hồi khách hàng 24/7 và tối ưu tỷ lệ chốt đơn.",
      image: "https://i.postimg.cc/2S15fTwc/marquee-agentforce-ai-chatbot.webp",
      tags: ["AI Chatbot", "Automation", "Customer Experience"],
      results: ["Phản hồi tự động 100% tin nhắn đến", "Tiết kiệm 50% thời gian telesale", "Tăng tỷ lệ chuyển đổi trực tiếp trên Messenger"]
    }
  ],
  experience: [
    {
      company: "HV Holdings Global",
      role: "Chuyên viên marketing",
      period: "2023 - T5/2026",
      description: "Phụ trách phát triển Sub-brand cho thương hiệu mỹ phẩm ABERA. Trực tiếp triển khai chiến dịch và tối ưu hóa giỏ hàng trên Tiktok Shop"
    },
    {
      company: "Skylink Group",
      role: "Chuyên viên marketing",
      period: "2019 - 2023",
      description: "Phụ trách marketing cho ngành hàng Mỹ phẩm thương hiệu Hanvely. Thực hiện các chiến dịch Performance Marketing đa kênh tập trung vào Facebook ADS và Google ADS, góp phần mở rộng thị phần thương hiệu."
    }
  ],
  skills: [
    {
      title: "Performance Marketing",
      items: ["Facebook Ads", "TikTok Ads", "Google Ads", "TikTok Shop Optimization", "CRO", "ROAS Optimization"]
    },
    {
      title: "Content",
      items: ["Content Planning", "Creative Strategy", "Copywriting", "Viral Marketing", "Visual Storytelling"]
    },
    {
      title: "AI",
      items: ["AI Content Generation", "Automation Tools", "Chatbot Tools (Botcake, Botbanhang, Pancake)", "Prompt Engineering", "Workflow Optimization"]
    }
  ],
  aboutMe: {
    fullName: "Nguyễn Minh Thái",
    nickname: "Ziva",
    dob: "09/05/2000",
    phone: "0898437922",
    email: "digi.thainguyen00@gmail.com",
    hobbies: ["Đá bánh", "Gym", "Du lịch", "Công nghệ", "Bơi lội"],
    education: ["Tốt nghiệp khóa học Marketing Foundation tại Tomorrow Marketers Academy"],
    images: [
      "https://i.postimg.cc/Jnqw06Wh/1.png",
      "https://i.postimg.cc/Hx2GnZCW/2.png",
      "https://i.postimg.cc/4d5CyLTx/3.png",
      "https://i.postimg.cc/C1Ny5PVL/4.png",
      "https://i.postimg.cc/9Mp308jz/5.png",
      "https://i.postimg.cc/pTZNrGtp/6.png",
      "https://i.postimg.cc/wvVKMfdy/7.png"
    ]
  }
};
