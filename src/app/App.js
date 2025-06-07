import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./auth/AuthWrapper";

const App = () => (
  <BrowserRouter>
    <AuthWrapper />
    {/* <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/signin" element={<LoginPage />} />
      <Route exact path="/signup" element={<RegisterPage />} />
      <Route exact path="/backoffice" element={<BackOfficePage />} />
      <Route exact path="/404" element={<NotFoundPage />} />
    </Routes> */}
  </BrowserRouter>
);

export default App;
