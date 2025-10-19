import { Map, Info, User } from "lucide-react";

type NavigationPage = "home" | "map" | "information" | "account";

interface BottomNavigationProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

export function BottomNavigation({ currentPage, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: "home" as NavigationPage, icon: Map, label: "Map" },
    { id: "information" as NavigationPage, icon: Info, label: "Information" },
    { id: "account" as NavigationPage, icon: User, label: "Account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-around h-20 max-w-md mx-auto px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id || (item.id === "home" && currentPage === "map");
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                isActive 
                  ? "text-blue-600" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <div className={`p-2 rounded-xl transition-all duration-200 ${
                isActive ? "bg-blue-50" : "hover:bg-slate-50"
              }`}>
                <Icon className={`h-6 w-6 ${isActive ? "stroke-[2.5]" : ""}`} />
              </div>
              <span className={`text-xs font-medium mt-1 ${isActive ? "text-blue-600" : "text-slate-500"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
