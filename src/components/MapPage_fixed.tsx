import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState, useEffect } from "react";
import { ZoomIn, ZoomOut, Navigation, Layers, MapPin, Zap, Users, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export function MapPageFixed({ userRole, onSelectVehicle, hideNearby }: { userRole?: "student" | "driver" | "", onSelectVehicle?: (v: any) => void, hideNearby?: boolean }) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAdmitDialog, setShowAdmitDialog] = useState(false);
  const [selectedPassenger, setSelectedPassenger] = useState<any>(null);
  const [availableSeats, setAvailableSeats] = useState(8);
  const [previewVehicle, setPreviewVehicle] = useState<any>(null);
  const [previewImageVisible, setPreviewImageVisible] = useState(true);
  const [zoom, setZoom] = useState(15);

  const createCustomIcon = (color: string, label: string) => {
    return L.divIcon({
      className: "custom-icon",
      html: `<div style=\"background:${color};width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600\">${label}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
    });
  };

  const userLocationIcon = L.divIcon({
    className: "user-location-icon",
    html: `<div style=\"background:#3b82f6;width:30px;height:30px;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600\">📍</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const passengerIcon = L.divIcon({
    className: "passenger-icon",
    html: `<div style=\"background:#ef4444;width:14px;height:14px;border-radius:9999px;\"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

  // Vehicle data with more realistic positions for better route visualization
  const vehicles = [
    {
      id: 1,
      name: "Jeep #1",
      driverName: "Mr. Juan Dela Cruz",
      plate: "ILY 143",
      type: "regular",
      position: [13.7573, 121.0593] as [number, number], // Slightly north and east
      distance: "1.8 km away",
      status: "En route",
      availableSeats: 3,
      totalSeats: 14,
      color: "#f59e0b",
      icon: "🚐",
    },
    {
      id: 2,
      name: "E-Jeep #2",
      driverName: "Ms. Ana Rodriguez",
      plate: "EJP 202",
      type: "electric",
      position: [13.7553, 121.0613] as [number, number], // Southeast
      distance: "1.2 km away",
      status: "Approaching",
      availableSeats: 8,
      totalSeats: 16,
      color: "#10b981",
      icon: "⚡",
    },
    {
      id: 3,
      name: "E-Jeep #3",
      driverName: "Mr. Pedro Martinez",
      plate: "EJP 303",
      type: "electric",
      position: [13.7593, 121.0573] as [number, number], // Northeast
      distance: "2.5 km away",
      status: "En route",
      availableSeats: 10,
      totalSeats: 16,
      color: "#10b981",
      icon: "⚡",
    },
  ];

  // Passenger data - people waiting to ride
  const passengers = [
    {
      id: 1,
      name: "Maria Santos",
      position: [13.7558, 121.0598] as [number, number],
      waitingTime: "5 min",
      destination: "BSU Main Campus",
    },
    {
      id: 2,
      name: "John Dela Cruz",
      position: [13.7578, 121.0578] as [number, number],
      waitingTime: "3 min",
      destination: "New Market",
    },
    {
      id: 3,
      name: "Ana Rodriguez",
      position: [13.7568, 121.0608] as [number, number],
      waitingTime: "7 min",
      destination: "Grand Terminal",
    },
  ];

  const userLocation: [number, number] = [13.7563, 121.0583];

  // Handle passenger click
  const handlePassengerClick = (passenger: any) => {
    setSelectedPassenger(passenger);
    setShowAdmitDialog(true);
  };

  // Handle admit user
  const handleAdmitUser = () => {
    if (availableSeats > 0) {
      setAvailableSeats(availableSeats - 1);
      setShowAdmitDialog(false);
      setSelectedPassenger(null);
    }
  };

  return (
  <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Welcome Dialog */}
      <Dialog open={showWelcome} onOpenChange={setShowWelcome}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Welcome to Public Transport Tracker! 👋</DialogTitle>
            <DialogDescription className="pt-2 text-slate-600">
              Track jeepneys and e-jeeps in real-time. View available seats, monitor distances, and plan your journey efficiently.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowWelcome(false)} className="w-full bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Admit User Dialog */}
      <Dialog open={showAdmitDialog} onOpenChange={setShowAdmitDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center">Admit this user</DialogTitle>
            <DialogDescription className="pt-2 text-slate-600 text-center">
              {selectedPassenger && (
                <div className="space-y-2">
                  <p className="font-medium text-slate-900">{selectedPassenger.name}</p>
                  <p className="text-sm">Waiting for {selectedPassenger.waitingTime}</p>
                  <p className="text-sm">Going to: {selectedPassenger.destination}</p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="bg-slate-50 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Available Seats</span>
                <span className="text-lg font-semibold text-slate-900">{availableSeats}</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 16 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-3 flex-1 rounded-full ${
                      i < 16 - availableSeats
                        ? 'bg-slate-300'
                        : 'bg-green-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowAdmitDialog(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAdmitUser}
              disabled={availableSeats === 0}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Okay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Header Section */}
      <div className="px-6 py-4 bg-white border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-slate-900 text-2xl font-semibold">Vehicles</h1>
            <p className="text-slate-600 text-sm">Track nearby transportation</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-200">
            <p className="text-xs text-slate-500 font-medium">Balance</p>
            <p className="text-green-600 font-semibold text-lg">₱ 250.00</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="px-6 py-3">
          <h2 className="text-slate-900 text-lg font-semibold">Live Map</h2>
          <p className="text-slate-600 text-sm">Real-time vehicle locations</p>
        </div>
      </div>

  {/* Map Container */}
  <div className="flex-1 min-h-0 relative overflow-hidden bg-slate-100">
        <MapContainer
          center={userLocation}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* User Location Marker */}
          <Marker position={userLocation} icon={userLocationIcon}>
            <Popup>
              <div className="text-center">
                <MapPin className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <p className="font-semibold text-slate-900">You are here</p>
                <p className="text-sm text-slate-600">Alangilan, Batangas City</p>
              </div>
            </Popup>
          </Marker>

          {/* Vehicle Markers */}
          {vehicles.map((vehicle) => (
            <Marker
              key={vehicle.id}
              position={vehicle.position}
              icon={createCustomIcon(vehicle.color, vehicle.icon)}
            >
              <Popup>
                <div className="min-w-[220px]">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: vehicle.color }}
                    ></div>
                    <h3 className="font-semibold text-slate-900">{vehicle.name}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Distance</span>
                      <span className="font-semibold text-red-600">{vehicle.distance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Status</span>
                      <span className={`font-medium ${
                        vehicle.status === 'Approaching' ? 'text-green-600' : 'text-slate-500'
                      }`}>
                        {vehicle.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Available Seats</span>
                      <span className="font-semibold text-slate-900">
                        {vehicle.availableSeats}/{vehicle.totalSeats}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                        <span>Occupied</span>
                        <div className="w-2 h-2 rounded-full ml-2" style={{ backgroundColor: vehicle.color }}></div>
                        <span>Available</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <button
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold"
                      onClick={() => onSelectVehicle && onSelectVehicle(vehicle)}
                    >
                      Ride
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Passenger Markers - Red dots for people waiting to ride (drivers only) */}
          {userRole === 'driver' && passengers.map((passenger) => (
            <Marker
              key={`passenger-${passenger.id}`}
              position={passenger.position}
              icon={passengerIcon}
              eventHandlers={{
                click: () => handlePassengerClick(passenger),
              }}
            />
          ))}
        </MapContainer>

        {/* Nearby vehicles preview removed to allow map to use available space. */}
      </div>
    </div>
  );
}
