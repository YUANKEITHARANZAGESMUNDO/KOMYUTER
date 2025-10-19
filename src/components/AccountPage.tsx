import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { QrCode, Wallet, LogOut, User, Phone, CreditCard, MapPin, DollarSign, TrendingUp } from "lucide-react";
import { Bracelet3D } from "./Bracelet3D";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function AccountPage({ onSignOut, userRole }: { onSignOut: () => void, userRole?: "student" | "driver" | "" }) {
  const [showQRDialog, setShowQRDialog] = useState(false);
  const [showTopUpDialog, setShowTopUpDialog] = useState(false);
  const [showWithdrawDialog, setShowWithdrawDialog] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-6 pb-24">
      {/* QR Code Camera Permission Dialog */}
      <Dialog open={showQRDialog} onOpenChange={setShowQRDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Camera Access Required</DialogTitle>
            <DialogDescription className="pt-2">
              Allow to use Camera to proceed on scanning the QR
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowQRDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowQRDialog(false)}>
              Allow Camera
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Top Up Dialog */}
      <Dialog open={showTopUpDialog} onOpenChange={setShowTopUpDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Top Up Your Wallet</DialogTitle>
            <DialogDescription className="pt-2">
              Select an Application which you will use to top up
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3 py-4">
            {/* GCash */}
            <Button 
              variant="outline" 
              className="w-full h-16 justify-start gap-4 hover:bg-blue-50 border-2"
              onClick={() => setShowTopUpDialog(false)}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                </svg>
              </div>
              <span className="text-lg">GCash</span>
            </Button>

            {/* Maya */}
            <Button 
              variant="outline" 
              className="w-full h-16 justify-start gap-4 hover:bg-green-50 border-2"
              onClick={() => setShowTopUpDialog(false)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <span className="text-lg">Maya</span>
            </Button>

            {/* QR PH */}
            <Button 
              variant="outline" 
              className="w-full h-16 justify-start gap-4 hover:bg-purple-50 border-2"
              onClick={() => setShowTopUpDialog(false)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v3h-3v-3zm0 5h3v3h-3v-3z"/>
                </svg>
              </div>
              <span className="text-lg">QR Ph</span>
            </Button>

            {/* Other Online Wallet */}
            <Button 
              variant="outline" 
              className="w-full h-16 justify-start gap-4 hover:bg-gray-50 border-2"
              onClick={() => setShowTopUpDialog(false)}
            >
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <span className="text-lg">Other Online Wallet</span>
            </Button>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTopUpDialog(false)} className="w-full">
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Withdraw Earnings Dialog */}
      <Dialog open={showWithdrawDialog} onOpenChange={setShowWithdrawDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Withdraw Earnings</DialogTitle>
            <DialogDescription className="pt-2">
              Select an Application which you will use to withdraw your earnings
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3 py-4">
            {/* GCash */}
            <Button 
              variant="outline" 
              className="w-full h-16 justify-start gap-4 hover:bg-blue-50 border-2"
              onClick={() => setShowWithdrawDialog(false)}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                </svg>
              </div>
              <span className="text-lg">GCash</span>
            </Button>

            {/* Maya */}
            <Button 
              variant="outline" 
              className="w-full h-16 justify-start gap-4 hover:bg-green-50 border-2"
              onClick={() => setShowWithdrawDialog(false)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <span className="text-lg">Maya</span>
            </Button>

            {/* QR PH */}
            <Button 
              variant="outline" 
              className="w-full h-16 justify-start gap-4 hover:bg-purple-50 border-2"
              onClick={() => setShowWithdrawDialog(false)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v3h-3v-3zm0 5h3v3h-3v-3z"/>
                </svg>
              </div>
              <span className="text-lg">QR Ph</span>
            </Button>

            {/* Other Online Wallet */}
            <Button 
              variant="outline" 
              className="w-full h-16 justify-start gap-4 hover:bg-gray-50 border-2"
              onClick={() => setShowWithdrawDialog(false)}
            >
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <span className="text-lg">Other Online Wallet</span>
            </Button>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowWithdrawDialog(false)} className="w-full">
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <h2 className="text-slate-900 text-2xl font-semibold mb-6">Account Details</h2>
      
      {/* User Details Card */}
      <Card className="p-6 mb-6 border-0 shadow-sm bg-white rounded-2xl">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-slate-900 text-xl font-semibold">John Doe</h3>
              <p className="text-slate-500 text-sm">User Account</p>
            </div>
          </div>
          
          <Separator className="bg-slate-100" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600 text-sm font-medium">Full Name</span>
              </div>
              <span className="text-slate-900 font-medium">John Doe</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600 text-sm font-medium">Contact Number</span>
              </div>
              <span className="text-slate-900 font-medium">+63 912 345 6789</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600 text-sm font-medium">Bracelet Code</span>
              </div>
              <span className="text-slate-900 font-medium">BRC-2025-001</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Wallet className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600 text-sm font-medium">Balance</span>
              </div>
              <span className="text-green-600 font-semibold text-lg">₱ 250.00</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Bracelet Cards for commuter (Physical + Digital) */}
      <div className="space-y-4 mb-6">
        {/* Physical Bracelet */}
        <Card className="p-4 border-0 shadow-sm bg-white rounded-2xl">
          <h4 className="text-slate-900 text-sm font-medium mb-3">Physical Bracelet</h4>
          <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-center">
            {/* 3D placeholder component */}
              <div className="w-full max-w-xs">
              <Bracelet3D code="BRC-2025-001" />
              <div className="-mt-6 mx-auto w-40 rounded-lg bg-white shadow-md p-3 text-center">
                <div className="text-xs text-slate-400">Bracelet Code</div>
                <div className="font-semibold text-slate-900">BRC-2025-001</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Digital Bracelet */}
        <Card className="p-0 border-0 shadow-sm overflow-hidden rounded-2xl">
          <div className="p-6 bg-gradient-to-br from-blue-500 to-violet-500 text-white">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs opacity-80">RFID BRACELET</div>
                <div className="text-lg font-semibold mt-2">Bracelet ID</div>
                <div className="text-xl font-bold mt-1">BRC-2025-001</div>
              </div>
              <div className="text-right">
                <div className="text-sm">Balance</div>
                <div className="text-lg font-semibold">₱ 250.00</div>
                <div className="mt-2 inline-flex items-center gap-2 text-xs font-medium bg-white/10 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-green-300 rounded-full block"></span>
                  Active
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Total Earnings Card (drivers only) */}
      {userRole === 'driver' && (
        <Card className="p-6 mb-6 border-0 shadow-sm overflow-hidden bg-white rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-slate-900 text-lg font-semibold">Total Earnings</h3>
          <TrendingUp className="w-6 h-6 text-green-600" />
        </div>
        
        <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-700 rounded-2xl p-6 relative overflow-hidden shadow-lg">
          {/* Earnings Design */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white/90 text-xs tracking-wider font-medium uppercase">DRIVER EARNINGS</span>
              <span className="text-white/90 text-xs tracking-wider font-medium uppercase">TODAY</span>
            </div>
            
            <div className="mb-6">
              <p className="text-white/70 text-xs mb-2 font-medium">Total Earnings</p>
              <p className="text-white text-3xl font-bold">₱ 2,450.00</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-white/70 text-xs mb-2 font-medium">This Week</p>
                <p className="text-white text-lg font-semibold">₱ 15,680.00</p>
              </div>
              <div>
                <p className="text-white/70 text-xs mb-2 font-medium">This Month</p>
                <p className="text-white text-lg font-semibold">₱ 67,200.00</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
          <div className="absolute top-1/2 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
        </div>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 shadow-lg border-0 rounded-xl font-semibold"
            onClick={() => setShowQRDialog(true)}
          >
            <QrCode className="mr-3 h-5 w-5" />
            Use QR Code
          </Button>
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 py-4 shadow-lg border-0 rounded-xl font-semibold"
            onClick={() => setShowTopUpDialog(true)}
          >
            <Wallet className="mr-3 h-5 w-5" />
            Top Up
          </Button>
        </div>
        
        <Button 
          className="w-full bg-emerald-600 hover:bg-emerald-700 py-4 shadow-lg border-0 rounded-xl font-semibold"
          onClick={() => setShowWithdrawDialog(true)}
        >
          <DollarSign className="mr-3 h-5 w-5" />
          Withdraw Earnings
        </Button>
        
        <Button 
          variant="destructive" 
          className="w-full py-4 shadow-lg border-0 rounded-xl font-semibold"
          onClick={onSignOut}
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
