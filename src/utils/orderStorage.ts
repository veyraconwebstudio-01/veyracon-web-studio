import { OrderItem, UserAccount } from './types';

const ORDERS_STORAGE_KEY = 'veyracon_orders_v1';
const CURRENT_USER_KEY = 'veyracon_current_user_v1';
const USERS_STORAGE_KEY = 'veyracon_users_v1';

// Initial sample orders so the owner sees how it works right away
const INITIAL_ORDERS: OrderItem[] = [
  {
    id: 'ORD-9821',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    fullName: 'Sophia Laurent',
    businessName: 'L’Ambroisie Reserve',
    email: 'sophia@ambroisie.com',
    whatsappNumber: '+33 6 12 34 56 78',
    websiteType: 'Restaurant Website',
    budgetRange: 'Premium Project',
    hasWebsite: 'No',
    designStyle: 'Luxury',
    projectDescription: 'Seeking an exclusive fine-dining website with degustation menu and WhatsApp table reservation desk.',
    status: 'In Progress',
  },
  {
    id: 'ORD-7419',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    fullName: 'David Sterling',
    businessName: 'Sterling Capital Advisors',
    email: 'david@sterlingadvisors.com',
    whatsappNumber: '+1 415 890 2234',
    websiteType: 'Business Website',
    budgetRange: 'Standard Project',
    hasWebsite: 'Yes',
    designStyle: 'Corporate',
    projectDescription: 'Complete corporate redesign. We need trust indicators, executive leadership directory, and consultation booking.',
    status: 'New',
  },
  {
    id: 'ORD-6204',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    fullName: 'Elena Rostova',
    businessName: 'Atelier Rostova',
    email: 'elena@rostova-design.com',
    whatsappNumber: '+44 7911 123456',
    websiteType: 'Portfolio Website',
    budgetRange: 'Standard Project',
    hasWebsite: 'No',
    designStyle: 'Minimal',
    projectDescription: 'Architectural and interior design portfolio with dark theme aesthetic and client inquiry portal.',
    status: 'Completed',
  }
];

export const getStoredOrders = (): OrderItem[] => {
  try {
    const data = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(INITIAL_ORDERS));
      return INITIAL_ORDERS;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_ORDERS;
  }
};

export const saveOrder = (newOrder: Omit<OrderItem, 'id' | 'createdAt' | 'status'> & { id?: string; status?: OrderItem['status'] }): OrderItem => {
  const orders = getStoredOrders();
  const order: OrderItem = {
    ...newOrder,
    id: newOrder.id || `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    createdAt: new Date().toISOString(),
    status: newOrder.status || 'New',
  };
  const updated = [order, ...orders];
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
  return order;
};

export const updateOrderStatus = (orderId: string, status: OrderItem['status']): OrderItem[] => {
  const orders = getStoredOrders();
  const updated = orders.map((o) => (o.id === orderId ? { ...o, status } : o));
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteOrder = (orderId: string): OrderItem[] => {
  const orders = getStoredOrders();
  const updated = orders.filter((o) => o.id !== orderId);
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const getCurrentUser = (): UserAccount | null => {
  try {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const setCurrentUser = (user: UserAccount | null) => {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};
