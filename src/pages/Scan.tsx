import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Camera, Upload, History, AlertTriangle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const scanHistory = [
  { date: "၂၀၂၆ မတ် ၂၅", crop: "စပါး", result: "ရွက်ညှိုး ရောဂါ", severity: "high", confidence: 94 },
  { date: "၂၀၂၆ မတ် ၂၀", crop: "ပဲတီစိမ်း", result: "ကျန်းမာသည်", severity: "low", confidence: 98 },
  { date: "၂၀၂၆ မတ် ၁၅", crop: "ချည်မျှင်", result: "ပိုးမွှား တွေ့ရှိ", severity: "medium", confidence: 87 },
];

const Scan = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"scan" | "history">("scan");

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="gradient-hero px-5 pt-12 pb-6">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="text-primary-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-primary-foreground">သီးနှံ စကင်ဖတ်ရန်</h1>
        </div>
      </div>

      <div className="px-5 mt-5">
        {/* Tabs */}
        <div className="flex bg-muted rounded-xl p-1 mb-5">
          <button
            onClick={() => setActiveTab("scan")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "scan" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            စကင်ဖတ်ရန်
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "history" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            မှတ်တမ်း
          </button>
        </div>

        {activeTab === "scan" ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="bg-card rounded-2xl border-2 border-dashed border-border p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mb-4">
                <Camera className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">သီးနှံ ဓာတ်ပုံ ရိုက်ပါ</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AI က ရောဂါနှင့် ပိုးမွှားများကို စစ်ဆေးပေးပါမည်
              </p>
              <div className="flex gap-3 w-full">
                <Button className="flex-1 gradient-hero text-primary-foreground">
                  <Camera className="w-4 h-4 mr-1" /> ဓာတ်ပုံရိုက်
                </Button>
                <Button variant="outline" className="flex-1">
                  <Upload className="w-4 h-4 mr-1" /> ရွေးချယ်
                </Button>
              </div>
            </div>

            <div className="bg-accent/50 rounded-xl p-4">
              <h4 className="text-sm font-medium text-accent-foreground mb-2">💡 အကြံပြုချက်</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• ရွက်ကို နီးနီးကပ်ကပ် ရိုက်ပါ</li>
                <li>• အလင်းရောင် ကောင်းသောနေရာတွင် ရိုက်ပါ</li>
                <li>• ရောဂါ လက္ခဏာ ရှိသော နေရာကို ဦးစားပေး ရိုက်ပါ</li>
              </ul>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {scanHistory.map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-4 shadow-card border border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-foreground">{item.crop}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.date}</p>
                  </div>
                  {item.severity === "low" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertTriangle className={`w-5 h-5 ${item.severity === "high" ? "text-destructive" : "text-secondary"}`} />
                  )}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    item.severity === "low" ? "text-green-600" : item.severity === "high" ? "text-destructive" : "text-secondary"
                  }`}>
                    {item.result}
                  </span>
                  <span className="text-xs text-muted-foreground">ယုံကြည်မှု {item.confidence}%</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Scan;
