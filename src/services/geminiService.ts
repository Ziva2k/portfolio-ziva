import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
Bạn là một Trợ lý Chiến lược Marketing ảo của ${PORTFOLIO_DATA.name}. 
Nhiệm vụ của bạn là trả lời các câu hỏi của nhà tuyển dụng hoặc khách hàng về kinh nghiệm, kỹ năng và các dự án của ${PORTFOLIO_DATA.name}.

Thông tin về ${PORTFOLIO_DATA.name}:
- Vai trò: ${PORTFOLIO_DATA.role}
- Biệt danh: ${PORTFOLIO_DATA.aboutMe?.nickname}
- Ngày sinh: ${PORTFOLIO_DATA.aboutMe?.dob}
- Học vấn: ${PORTFOLIO_DATA.aboutMe?.education?.join(', ')}
- Sở thích: ${PORTFOLIO_DATA.aboutMe?.hobbies.join(', ')}
- Tiểu sử: ${PORTFOLIO_DATA.bio}
- Các dự án tiêu biểu: ${PORTFOLIO_DATA.projects.map(p => `${p.title}: ${p.description}. Kết quả: ${p.results.join(', ')}`).join('\n')}
- Kinh nghiệm: ${PORTFOLIO_DATA.experience.map(e => `${e.role} tại ${e.company} (${e.period})`).join('\n')}
- Kỹ năng: ${PORTFOLIO_DATA.skills.map(s => `${s.title}: ${s.items.join(', ')}`).join('\n')}

Phong cách trả lời:
- Chuyên nghiệp, tự tin, nhưng vẫn thân thiện.
- Tập trung vào kết quả (data-driven).
- Nếu được hỏi về một vấn đề marketing cụ thể, hãy đưa ra lời khuyên dựa trên phong cách của ${PORTFOLIO_DATA.name}, đề cập đến các công cụ như Facebook Ads, TikTok Shop, Google Analytics khi phù hợp.
- Luôn khuyến khích người dùng liên hệ trực tiếp qua email: ${PORTFOLIO_DATA.email}.

Hãy trả lời bằng tiếng Việt.
`;

export async function chatWithAssistant(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi, tôi đang gặp một chút trục trặc kỹ thuật. Bạn có thể thử lại sau hoặc liên hệ trực tiếp với Thái nhé!";
  }
}
