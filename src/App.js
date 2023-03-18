import { BrowserRouter, Routes, Route,HashRouter } from 'react-router-dom'

// import Footer from './components/Footer.js'

import DashboardScreen from './screens/DashboardScreen.js'
import DemandModuleScreen from './screens/DemandModuleScreen.js'
import DemandSelectionScreen from './screens/DemandSelectionScreen.js'
import BlankScreen from './screens/BlankScreen.js'
import Blank from './screens/Blank.js'
import RevenueListScreen from './screens/RevenueListScreen.js'
import RevenueEditScreen from './screens/RevenueEditScreen.js'
import CategoryEditScreen from './screens/CategoryEditScreen.js'
import CategoryListScreen from './screens/CategoryListScreen.js'
import BatchPreviewScreen from './screens/BatchPreviewScreen.js'
import SpecificPreviewScreen from './screens/SpecificPreviewScreen.js'
import GeneratedListScreen from './screens/GeneratedListScreen.js'
import CreateCategoryScreen from './screens/CreateCategoryScreen.js'
import StateCreateScreen from './screens/StateCreateScreen.js'
import LgaCreateScreen from './screens/LgaCreateScreen.js'
import TenantUserScreen from './screens/TenantUserScreen.js'
import CategoryDetailRevenueScreen from './screens/CategoryDetailRevenueScreen.js'
// import ReportScreen from './screens/ReportScreen.js'
// import CompanyListScreen from './screens/CompanyListScreen.js'
// import CompanyProfileScreen from './screens/CompanyProfileScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import RegisterScreen from './screens/RegisterScreen.js'
import TenancyProfileScreen from './screens/TenancyProfileScreen.js'
// import HomeScreen from './screens/HomeScreen.js'

function App() {
  return (
     <>
       
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/tenancy_profile" element={<TenancyProfileScreen />} />
          {/* <Route exact path="/:id/:name/dashboard/profile" element={<DashboardScreen />} /> */}
          <Route
                     exact
                     path="/dashboard/profile"
                     element={<DashboardScreen />}
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
                     path="/blank"
                     element={<Blank />}
                  />
          <Route
                     exact
                     path="/category"
                     element={<CategoryListScreen />}
                  />
          <Route
                     exact
                     path="/category/create"
                     element={<CreateCategoryScreen />}
                  />
          <Route
                     exact
                     path="/revenuelines/:revenueLineCode/edit"
                     element={<RevenueEditScreen />}
                  />
          <Route
                     exact
                     path="/demand-notice-categories/:id/edit"
                     element={<CategoryEditScreen />}
              />
              
              <Route
                     exact
                     path="/users/admin"
                     element={<TenantUserScreen />}
                  />
              <Route
                     exact
                     path="/locations/states"
                     element={<StateCreateScreen />}
                  />
              <Route
                     exact
                     path="/locations/states/:name"
                     element={<LgaCreateScreen />}
                  />
          <Route
                     exact
                     path="/revenue"
                     element={<RevenueListScreen />}
                  />
          <Route
                     exact
                     path="/demand-notices/:id"
                    //  path="/withdrawals/:id/edit"
                     element={<BatchPreviewScreen />}
                  />
          <Route
                     exact
                     path="/demand-notices/specific/:id"
                   
                     element={<SpecificPreviewScreen />}
                  />
           <Route
                     exact
                     path="demand-notice-categories/:id"
                     element={<CategoryDetailRevenueScreen />}
                  />      
          <Route
                     exact
                     path="/demand-notices/batches"
                    //  path="/withdrawals/:id/edit"
                     element={<GeneratedListScreen />}
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
