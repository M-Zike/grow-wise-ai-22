import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const suggestions = [
  "When should I irrigate my rice field?",
  "Best fertilizer for tomatoes?",
  "How to prevent blight naturally?",
];

const AIAdvisoryCard = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your AI farming assistant. Ask me anything about your crops, soil, or farming practices. 🌾" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "Based on your current soil moisture (42%) and the upcoming rain forecast for Wednesday, I recommend delaying irrigation for 2 days. This will save water and prevent waterlogging. 💧" },
    ]);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="rounded-2xl bg-card p-6 shadow-card flex flex-col"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">🤖 AI Advisory</h3>
          <p className="text-xs text-muted-foreground">Powered by smart farming AI</p>
        </div>
      </div>

      <div className="flex-1 space-y-3 mb-4 max-h-48 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
              msg.role === "user"
                ? "gradient-hero text-primary-foreground rounded-br-md"
                : "bg-muted text-foreground rounded-bl-md"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => setInput(s)}
            className="text-xs px-3 py-1.5 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Lightbulb className="w-3 h-3 inline mr-1" />{s}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask your farming question..."
          className="flex-1"
        />
        <Button onClick={handleSend} size="icon" className="gradient-hero text-primary-foreground border-0">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default AIAdvisoryCard;
