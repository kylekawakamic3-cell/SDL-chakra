import { Flex } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navigation, type NavLink } from '@/components/ui/navigation'
import { PageHeader as SDLPageHeader } from '@/components/ui/page-header'
import Dashboard from '@/pages/Dashboard'
import Orders from '@/pages/Orders'
import Analytics from '@/pages/Analytics'
import Menu from '@/pages/Menu'
import Settings from '@/pages/Settings'
import Help from '@/pages/Help'
import {
  FaChartLine,
  FaCartShopping,
  FaArrowTrendUp,
  FaPizzaSlice,
  FaGear,
  FaCircleQuestion,
} from 'react-icons/fa6'

// Map of paths to titles for the PageHeader
const pageTitles: Record<string, string> = {
  '/': 'Pizza Sales Dashboard',
  '/orders': 'Orders',
  '/analytics': 'Analytics',
  '/menu': 'Menu Management',
  '/settings': 'Settings',
  '/help': 'Help & Support',
}

const navLinks: NavLink[] = [
  { label: 'Dashboard', href: '/', icon: FaChartLine },
  { label: 'Orders', href: '/orders', icon: FaCartShopping },
  { label: 'Analytics', href: '/analytics', icon: FaArrowTrendUp },
  { label: 'Menu', href: '/menu', icon: FaPizzaSlice },
]

const footerNavLinks: NavLink[] = [
  { label: 'Settings', href: '/settings', icon: FaGear },
  { label: 'Help', href: '/help', icon: FaCircleQuestion },
]

function LayoutShell() {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'Pizza Dashboard'

  return (
    <Flex h="100vh" w="full" overflow="hidden">
      {/* Side Navigation: Persistent across all pages */}
      <Navigation
        links={navLinks}
        footerLinks={footerNavLinks}
        flexShrink={0}
      />

      {/* Main Content Column */}
      <Flex direction="column" flex="1" minW="0">
        {/* Page Header: Persistent across all pages */}
        <SDLPageHeader title={title} flexShrink={0} />

        {/* Dynamic Page Content */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Flex>
    </Flex>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LayoutShell />
    </BrowserRouter>
  )
}

export default App
