export interface DailySales {
  day: string;
  shortDay: string;
  pizzasSold: number;
  revenue: number;
}

export interface PizzaType {
  name: string;
  sold: number;
  percentage: number;
  color: string;
}

export interface RecentOrder {
  id: string;
  time: string;
  pizzaType: string;
  quantity: number;
  total: number;
  status: 'completed' | 'preparing' | 'delivered';
}

// Weekly sales data (Mon Mar 3rd week)
export const weeklySales: DailySales[] = [
  { day: 'Monday', shortDay: 'Mon', pizzasSold: 42, revenue: 588 },
  { day: 'Tuesday', shortDay: 'Tue', pizzasSold: 38, revenue: 532 },
  { day: 'Wednesday', shortDay: 'Wed', pizzasSold: 55, revenue: 770 },
  { day: 'Thursday', shortDay: 'Thu', pizzasSold: 47, revenue: 658 },
  { day: 'Friday', shortDay: 'Fri', pizzasSold: 73, revenue: 1022 },
  { day: 'Saturday', shortDay: 'Sat', pizzasSold: 89, revenue: 1246 },
  { day: 'Sunday', shortDay: 'Sun', pizzasSold: 64, revenue: 896 },
];

// Using ONLY design system colors
export const pizzaTypes: PizzaType[] = [
  { name: 'Pepperoni', sold: 124, percentage: 30.4, color: '#2266F0' },   // blue.60
  { name: 'Margherita', sold: 98, percentage: 24.0, color: '#008066' },   // green.60
  { name: 'BBQ Chicken', sold: 72, percentage: 17.6, color: '#A65E00' },  // yellow.60
  { name: 'Hawaiian', sold: 51, percentage: 12.5, color: '#DB1C3C' },     // red.60
  { name: 'Veggie Supreme', sold: 38, percentage: 9.3, color: '#6C717A' },// gray.60
  { name: 'Meat Lovers', sold: 25, percentage: 6.1, color: '#0E48C4' },   // blue.70
];

export const recentOrders: RecentOrder[] = [
  { id: '#1247', time: '2:45 PM', pizzaType: 'Pepperoni', quantity: 3, total: 42.00, status: 'preparing' },
  { id: '#1246', time: '2:30 PM', pizzaType: 'Margherita', quantity: 1, total: 14.00, status: 'preparing' },
  { id: '#1245', time: '2:15 PM', pizzaType: 'BBQ Chicken', quantity: 2, total: 32.00, status: 'delivered' },
  { id: '#1244', time: '1:50 PM', pizzaType: 'Hawaiian', quantity: 1, total: 15.00, status: 'delivered' },
  { id: '#1243', time: '1:30 PM', pizzaType: 'Veggie Supreme', quantity: 4, total: 56.00, status: 'completed' },
  { id: '#1242', time: '1:15 PM', pizzaType: 'Pepperoni', quantity: 2, total: 28.00, status: 'completed' },
  { id: '#1241', time: '12:45 PM', pizzaType: 'Meat Lovers', quantity: 1, total: 16.00, status: 'completed' },
  { id: '#1240', time: '12:20 PM', pizzaType: 'Margherita', quantity: 3, total: 42.00, status: 'completed' },
];

// Computed stats
export const totalPizzasSold = weeklySales.reduce((sum, day) => sum + day.pizzasSold, 0);
export const totalRevenue = weeklySales.reduce((sum, day) => sum + day.revenue, 0);
export const averagePerDay = Math.round(totalPizzasSold / weeklySales.length);
export const bestDay = weeklySales.reduce((best, day) => day.pizzasSold > best.pizzasSold ? day : best);
export const bestPizza = pizzaTypes.reduce((best, pizza) => pizza.sold > best.sold ? pizza : best);
