import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Mail, Lock, MessageSquare, MapPin, Zap } from "lucide-react";
import { useState, type ChangeEvent } from "react";

export function LandingPage({ onGetStarted }: { onGetStarted: (role?: "student" | "driver" | "") => void }) {
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<"student" | "driver" | "">("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 overflow-y-auto">
      <div className="w-full max-w-md mx-auto my-8">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center mb-6 shadow-xl">
            {/* Modern Minimalistic Icon */}
            <div className="relative">
              <MapPin className="w-10 h-10 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <Zap className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-slate-900 text-3xl font-semibold mb-2 tracking-tight">Public Transport Tracker</h1>
          <p className="text-slate-600 text-base font-medium">Track jeepneys in real-time</p>
        </div>

        {/* Account Access Header */}
        <div className="text-center mb-8">
          <h2 className="text-slate-900 text-xl font-semibold mb-3">Welcome Back</h2>
          <p className="text-slate-600 text-sm">Sign in to your account or create a new one</p>
        </div>

        {/* Auth Tabs */}
        <div className="space-y-8">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1 rounded-xl">
              <TabsTrigger 
                value="signin"
                className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-600 font-medium rounded-lg"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-600 font-medium rounded-lg"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/* Sign In Tab */}
            <TabsContent value="signin" className="space-y-6 mt-8">
              <div className="space-y-3">
                <Label htmlFor="signin-email" className="text-slate-700 font-medium">Email / Name</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input 
                    id="signin-email" 
                    placeholder="Enter your email or name"
                    value={signinEmail}
                    onChange={(e) => setSigninEmail((e.target as HTMLInputElement).value)}
                    className="pl-12 h-12 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="signin-password" className="text-slate-700 font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input 
                    id="signin-password" 
                    type="password"
                    placeholder="Enter your password"
                    value={signinPassword}
                    onChange={(e) => setSigninPassword((e.target as HTMLInputElement).value)}
                    className="pl-12 h-12 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="text-right">
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Forgot Password?
                </button>
              </div>

              <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg" onClick={() => onGetStarted(role)}>
                Sign In
              </Button>
            </TabsContent>

            {/* Sign Up Tab */}
            <TabsContent value="signup" className="space-y-6 mt-8">
              <div className="space-y-3">
                <Label htmlFor="signup-email" className="text-slate-700 font-medium">Email / Name</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input 
                    id="signup-email" 
                    placeholder="Enter your email or name"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail((e.target as HTMLInputElement).value)}
                    className="pl-12 h-12 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="signup-password" className="text-slate-700 font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input 
                    id="signup-password" 
                    type="password"
                    placeholder="Create a password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword((e.target as HTMLInputElement).value)}
                    className="pl-12 h-12 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              {/* Phone input (added) */}
              <div className="space-y-3">
                <Label htmlFor="signup-phone" className="text-slate-700 font-medium">Phone Number</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="signup-phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    className="pl-12 h-12 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              {/* Role selector (Student / Jeepney Driver) */}
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Account Type</Label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`px-3 py-1.5 rounded-full border ${role === 'student' ? 'bg-blue-600 text-white border-transparent' : 'bg-white text-slate-700 border-slate-200'}`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('driver')}
                    className={`px-3 py-1.5 rounded-full border ${role === 'driver' ? 'bg-blue-600 text-white border-transparent' : 'bg-white text-slate-700 border-slate-200'}`}
                  >
                    Jeepney Driver
                  </button>
                </div>
              </div>

              <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg" onClick={() => onGetStarted(role)}>
                Sign Up
              </Button>
            </TabsContent>
          </Tabs>

          {/* Removed social login block per design request */}

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-slate-500">
              By continuing, you agree to our{" "}
              <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">Terms of Service</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
