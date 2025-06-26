import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { DashboardMenu } from "./components/DashboardMenu";
import { Dashboard } from "./Pages/Dashboard";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { Users } from "./Pages/Users";
import { Events } from "./Pages/Events";
import { Donations } from "./Pages/Donations";
import { Reports } from "./Pages/Reports";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 font-sans">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar
                      onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    />
                    <div className="flex flex-col md:flex-row">
                      {/* Mobile Sidebar Overlay */}
                      {isSidebarOpen && (
                        <div
                          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                          onClick={() => setIsSidebarOpen(false)}
                        />
                      )}

                      {/* Sidebar */}
                      <aside
                        className={`fixed md:static inset-y-0 left-0 transform ${
                          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } md:translate-x-0 transition duration-200 ease-in-out z-30 w-64 min-h-screen`}
                      >
                        <DashboardMenu />
                      </aside>

                      {/* Main Content */}
                      <main className="flex-1 p-4 md:p-6 overflow-hidden max-w-full">
                        <Routes>
                          <Route
                            path="/"
                            element={<Navigate to="/Dashboard" replace />}
                          />
                          <Route path="/Dashboard" element={<Dashboard />} />
                          <Route
                            path="/users"
                            element={<Users />}
                          />
                          <Route
                            path="/campaign"
                            element={<div>Campaign Content</div>}
                          />
                          <Route
                            path="/agency"
                            element={<div>Agency Content</div>}
                          />
                          <Route
                            path="/quotation"
                            element={<div>Quotation Content</div>}
                          />
                          <Route
                            path="/payment"
                            element={<div>Payment Content</div>}
                          />
                          <Route
                            path="/configurations"
                            element={<div>Configurations Content</div>}
                          />
                          <Route
                            path="/reports"
                            element={<Reports />}
                          />
                          <Route
                            path="/events"
                            element={<Events />}
                          />
                          <Route
                            path="/donations"
                            element={<Donations />}
                          />
                        </Routes>
                      </main>
                    </div>
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Analytics />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
