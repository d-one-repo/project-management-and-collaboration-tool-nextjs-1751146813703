import '../styles/globals.css';
import { useState } from 'react';
import { SidebarContext } from '../components/SidebarContext';
function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <Component {...pageProps} />
    </SidebarContext.Provider>
  );
}
export default MyApp;