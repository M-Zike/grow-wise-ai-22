import { Home, Leaf, Camera, Bot, User } from "lucide-react";
import { useState } from "react";

const tabs = [
  { icon: Home, label: "ပင်မ" },
  { icon: Leaf, label: "သီးနှံ" },
  { icon: Camera, label: "စကင်" },
  { icon: Bot, label: "အကြံပေး" },
  { icon: User, label: "ပရိုဖိုင်" },
];

const BottomNav = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border px-2 pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
              active === i
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            {i === 2 ? (
              <div className="w-12 h-12 -mt-6 rounded-2xl gradient-hero flex items-center justify-center shadow-elevated">
                <tab.icon className="w-6 h-6 text-primary-foreground" />
              </div>
            ) : (
              <tab.icon className="w-5 h-5" />
            )}
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
