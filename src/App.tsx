import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { MapPage } from "./components/MapPage";
import { InformationPage } from "./components/InformationPage";
import { AccountPage } from "./components/AccountPage";
import { BottomNavigation } from "./components/BottomNavigation";

type Page = "landing" | "map" | "information" | "account";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [userRole, setUserRole] = useState<"student" | "driver" | "">("");
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [hideNearby, setHideNearby] = useState<boolean>(false);

  const handleGetStarted = (role?: "student" | "driver" | "") => {
    if (role) setUserRole(role);
    setHideNearby(false);
    setCurrentPage("map");
  };

  const handleSelectVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setHideNearby(true);
    setCurrentPage('information');
  };

  const handleSignOut = () => {
    setHideNearby(false);
    setCurrentPage("landing");
  };

  const handleNavigate = (page: "home" | "map" | "information" | "account") => {
    // Map "home" to "map" since map is now the main page
    if (page === "home") {
      setHideNearby(false);
      setCurrentPage("map");
    } else if (page === 'map') {
      setHideNearby(false);
      setCurrentPage('map');
    } else {
      setCurrentPage(page);
    }
  };

  // Render landing page
  if (currentPage === "landing") {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  // Render main app with navigation
  return (
    <div className="flex flex-col h-screen bg-slate-50 max-w-md mx-auto shadow-2xl rounded-t-3xl overflow-hidden">
      {/* Page Content */}
  {currentPage === "map" && <MapPage userRole={userRole} onSelectVehicle={handleSelectVehicle} hideNearby={hideNearby} />}
  {currentPage === "information" && <InformationPage userRole={userRole} selectedVehicle={selectedVehicle} />}
  {currentPage === "account" && <AccountPage onSignOut={handleSignOut} userRole={userRole} />}

      {/* Bottom Navigation */}
      <BottomNavigation 
        currentPage={currentPage === "map" ? "home" : currentPage as "home" | "map" | "information" | "account"} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}
