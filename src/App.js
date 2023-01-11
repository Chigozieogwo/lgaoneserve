import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Footer from './components/Footer.js'

import DemandNoticeScreen from './screens/DemandNoticeScreen.js'
import DemandModuleScreen from './screens/DemandModuleScreen.js'
import DemandSelectionScreen from './screens/DemandSelectionScreen.js'
import BlankScreen from './screens/BlankScreen.js'
import RevenueListScreen from './screens/RevenueListScreen.js'
// import ReportScreen from './screens/ReportScreen.js'
// import CompanyListScreen from './screens/CompanyListScreen.js'
// import CompanyProfileScreen from './screens/CompanyProfileScreen.js'
import LoginScreen from './screens/LoginScreen.js'
// import HomeScreen from './screens/HomeScreen.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route
                     exact
                     path="/dashboard/profile"
                     element={<DemandNoticeScreen />}
                  />
          <Route
                     exact
                     path="/demand_module"
                     element={<DemandModuleScreen />}
                  />
          <Route
                     exact
                     path="/demand_selection"
                     element={<DemandSelectionScreen />}
                  />
          <Route
                     exact
                     path="/DemandNotice"
                     element={<BlankScreen />}
                  />
          <Route
                     exact
                     path="/revenue"
                     element={<RevenueListScreen />}
                  />
          {/* <Route path="/home" element={<HomeScreen />} />
          <Route path="dashboard" element={<DashboardScreen />} />
          <Route path="list" element={<CompanyListScreen />} />
          <Route path="profile" element={<CompanyProfileScreen />} />
          <Route path="reports" element={<ReportScreen />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
}

export default App
