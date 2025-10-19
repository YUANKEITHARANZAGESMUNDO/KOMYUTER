import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

type UserRole = "student" | "driver" | "";

export function MapPage({ userRole, onSelectVehicle, hideNearby }: { userRole?: UserRole; onSelectVehicle?: (v: any) => void; hideNearby?: boolean }) {
  const [previewVehicle, setPreviewVehicle] = useState<any>(null);

  const createCustomIcon = (color: string, label: string) => {
    return L.divIcon({
      className: "custom-icon",
      html: '<div style="background:' + color + ';width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600">' + label + '</div>',
      iconSize: [36, 36],
      iconAnchor: [18, 36],
    });
  };

  const userLocationIcon = L.divIcon({
    className: "user-location-icon",
    html: '<div style="background:#3b82f6;width:30px;height:30px;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600">📍</div>',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const passengerIcon = L.divIcon({
    className: "passenger-icon",
    html: '<div style="background:#ef4444;width:14px;height:14px;border-radius:9999px;"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

  const vehicles = [
    { id: 1, name: "Jeep #1", position: [13.7573, 121.0593], color: "#f59e0b", icon: "🚐", availableSeats: 3, totalSeats: 14, distance: "1.8 km away", status: "En route", driverName: "Mr. Juan" },
    { id: 2, name: "E-Jeep #2", position: [13.7553, 121.0613], color: "#10b981", icon: "⚡", availableSeats: 8, totalSeats: 16, distance: "1.2 km away", status: "Approaching", driverName: "Ms. Ana" },
  ];

  const passengers = [
    { id: 1, name: "Maria Santos", position: [13.7558, 121.0598] },
    { id: 2, name: "John Dela Cruz", position: [13.7578, 121.0578] },
  ];

  const userLocation: [number, number] = [13.7563, 121.0583];

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 pb-24">
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

      <div className="h-[60vh] relative overflow-hidden bg-slate-100">
        import { useState } from "react";
        import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
        import L from "leaflet";

        // Minimal, clean MapPage implementation — no duplicated fragments
        type UserRole = "student" | "driver" | "";

        export function MapPage({ userRole, onSelectVehicle, hideNearby }: { userRole?: UserRole; onSelectVehicle?: (v: any) => void; hideNearby?: boolean }) {
          const [previewVehicle, setPreviewVehicle] = useState<any>(null);

          const createCustomIcon = (color: string, label: string) => {
            return L.divIcon({
              className: "custom-icon",
              html: '<div style="background:' + color + ';width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600">' + label + '</div>',
              iconSize: [36, 36],
              iconAnchor: [18, 36],
            });
          };

          const userLocationIcon = L.divIcon({
            className: "user-location-icon",
            html: '<div style="background:#3b82f6;width:30px;height:30px;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600">📍</div>',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
          });

          const passengerIcon = L.divIcon({
            className: "passenger-icon",
            html: '<div style="background:#ef4444;width:14px;height:14px;border-radius:9999px;"></div>',
            iconSize: [14, 14],
            iconAnchor: [7, 7],
          });

          const vehicles = [
            { id: 1, name: "Jeep #1", position: [13.7573, 121.0593], color: "#f59e0b", icon: "🚐", availableSeats: 3, totalSeats: 14, distance: "1.8 km away", status: "En route", driverName: "Mr. Juan" },
            { id: 2, name: "E-Jeep #2", position: [13.7553, 121.0613], color: "#10b981", icon: "⚡", availableSeats: 8, totalSeats: 16, distance: "1.2 km away", status: "Approaching", driverName: "Ms. Ana" },
          ];

          const passengers = [
            { id: 1, name: "Maria Santos", position: [13.7558, 121.0598] },
            { id: 2, name: "John Dela Cruz", position: [13.7578, 121.0578] },
          ];

          const userLocation: [number, number] = [13.7563, 121.0583];

          return (
            <div className="flex-1 overflow-y-auto bg-slate-50 pb-24">
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

              <div className="h-[60vh] relative overflow-hidden bg-slate-100">
                <MapContainer center={userLocation} zoom={15} style={{ height: '100%', width: '100%' }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  <Marker position={userLocation} icon={userLocationIcon}>
                    <Popup>You are here</Popup>
                  </Marker>

                  {vehicles.map((vehicle) => (
                    <Marker key={vehicle.id} position={vehicle.position as [number, number]} icon={createCustomIcon(vehicle.color, vehicle.icon)}>
                      <Popup>
                        <div style={{ minWidth: 220 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                            <div>
                              <strong>{vehicle.name}</strong>
                              <div style={{ fontSize: 12, color: '#6b7280' }}>{vehicle.driverName} • {vehicle.distance}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>{vehicle.availableSeats}/{vehicle.totalSeats}</div>
                          </div>
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold" onClick={() => onSelectVehicle && onSelectVehicle(vehicle)}>Ride</button>
                        </div>
                      </Popup>
                    </Marker>
                  ))}

                  {userRole === 'driver' && passengers.map((p) => (
                    <Marker key={p.id} position={p.position as [number, number]} icon={passengerIcon} />
                  ))}
                </MapContainer>

                {!hideNearby && (
                  <div className="absolute left-4 right-4 bottom-4 max-h-[35vh] overflow-auto">
                    <div className="bg-white border-b border-slate-200 px-6 py-4">
                      <h2 className="text-slate-900 text-lg font-semibold">Nearby Vehicles</h2>
                      <p className="text-slate-600 text-sm">Select a vehicle to view details</p>
                    </div>
                    <div className="p-6 space-y-4 bg-slate-50">
                      {vehicles.map((v) => (
                        <div key={v.id} className="p-4 bg-white rounded-2xl shadow" onMouseEnter={() => setPreviewVehicle(v)} onMouseLeave={() => setPreviewVehicle(null)}>
                          <div className="flex items-center justify-between">
                            <div>
                              export function MapPageMinimal() {
                                return <div />;
                              }
