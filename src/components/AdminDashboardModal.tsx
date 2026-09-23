import React, { useState } from 'react';
import { OrderItem, OrderStatus, UserAccount } from '../types';
import { updateOrderStatus, deleteOrder } from '../utils/orderStorage';
import { VeyraconLogo } from './VeyraconLogo';
import {
  X,
  Search,
  Filter,
  MessageCircle,
  Mail,
  Trash2,
  CheckCircle,
  Clock,
  Briefcase,
  Layers,
  ArrowUpRight,
  TrendingUp,
  FileSpreadsheet,
  RefreshCw,
} from 'lucide-react';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserAccount | null;
  orders: OrderItem[];
  onOrdersChange: (updated: OrderItem[]) => void;
  onLogout: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  orders,
  onOrdersChange,
  onLogout,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);

  if (!isOpen) return null;

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.websiteType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    const updated = updateOrderStatus(orderId, newStatus);
    onOrdersChange(updated);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const handleDelete = (orderId: string) => {
    if (window.confirm(`Are you sure you want to delete order ${orderId}?`)) {
      const updated = deleteOrder(orderId);
      onOrdersChange(updated);
      if (selectedOrder?.id === orderId) {
        setSelectedOrder(null);
      }
    }
  };

  const exportCSV = () => {
    const headers = 'ID,Date,Client,Business,Email,WhatsApp,WebsiteType,Budget,Status,Description\n';
    const rows = orders
      .map(
        (o) =>
          `"${o.id}","${new Date(o.createdAt).toLocaleDateString()}","${o.fullName}","${o.businessName}","${o.email}","${o.whatsappNumber}","${o.websiteType}","${o.budgetRange}","${o.status}","${(o.projectDescription || '').replace(/"/g, '""')}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Veyracon_Orders_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case 'New':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'In Review':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'In Progress':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Completed':
        return 'bg-[#C8A96B]/15 text-[#E2C27D] border-[#C8A96B]/40';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-6xl bg-[#0E0F14] border border-[#232530] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#14151C] border-b border-[#1F2129] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <VeyraconLogo size="sm" />
            <div className="hidden sm:block border-l border-[#262835] pl-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E2C27D] block">
                Owner Dashboard
              </span>
              <span className="text-[11px] text-[#A8A8AD]">
                Signed in as: <strong>{currentUser?.email || 'veyraconwebstudio@gmail.com'}</strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#A8A8AD] bg-[#1A1C25] border border-[#262835] hover:text-white hover:border-[#C8A96B]/40 transition-colors cursor-pointer"
              title="Export all orders to CSV"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#C8A96B]" />
              Export CSV
            </button>

            <button
              onClick={onLogout}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-red-400 bg-red-950/30 border border-red-900/40 hover:bg-red-950/60 transition-colors cursor-pointer"
            >
              Sign Out
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A8A8AD] hover:text-white hover:bg-[#1E2028] transition-colors"
              aria-label="Close dashboard"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 bg-[#111218] border-b border-[#1F2129]">
          <div className="p-3.5 rounded-xl bg-[#0B0B0D] border border-[#1E2028]">
            <span className="text-[11px] text-[#A8A8AD] block mb-1">Total Client Orders</span>
            <div className="text-xl font-bold font-heading text-[#F5F4F0]">{orders.length}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0B0B0D] border border-[#1E2028]">
            <span className="text-[11px] text-[#A8A8AD] block mb-1">New Inquiries</span>
            <div className="text-xl font-bold font-heading text-emerald-400">
              {orders.filter((o) => o.status === 'New').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0B0B0D] border border-[#1E2028]">
            <span className="text-[11px] text-[#A8A8AD] block mb-1">In Production</span>
            <div className="text-xl font-bold font-heading text-blue-400">
              {orders.filter((o) => o.status === 'In Progress' || o.status === 'In Review').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0B0B0D] border border-[#1E2028]">
            <span className="text-[11px] text-[#A8A8AD] block mb-1">Completed</span>
            <div className="text-xl font-bold font-heading text-[#E2C27D]">
              {orders.filter((o) => o.status === 'Completed').length}
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:px-6 bg-[#0E0F14] border-b border-[#1F2129] flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px] max-w-md">
            <Search className="w-4 h-4 text-[#6A6C7B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by client name, business, website type, order ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl pl-9 pr-4 py-2 text-xs text-[#F5F4F0] placeholder-[#555763] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <Filter className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span className="text-[#A8A8AD]">Status:</span>
            {['all', 'New', 'In Review', 'In Progress', 'Completed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-lg capitalize transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-[#C8A96B] text-[#0B0B0D] font-bold'
                    : 'bg-[#16171E] text-[#A8A8AD] hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table & Detail Split */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Orders List Table */}
          <div className="lg:col-span-7 border-r border-[#1F2129] overflow-y-auto">
            {filteredOrders.length === 0 ? (
              <div className="text-center py-16 text-[#6F7180] text-xs">
                No orders match your filter criteria.
              </div>
            ) : (
              <div className="divide-y divide-[#1B1C24]">
                {filteredOrders.map((order) => {
                  const isSelected = selectedOrder?.id === order.id;
                  return (
                    <div
                      key={order.id}
                      onClick={() => setSelectedOrder(order)}
                      className={`p-4 sm:p-5 transition-colors cursor-pointer ${
                        isSelected ? 'bg-[#161720] border-l-4 border-l-[#C8A96B]' : 'hover:bg-[#121319]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#F5F4F0]">
                              {order.fullName}
                            </span>
                            {order.businessName && (
                              <span className="text-[11px] text-[#A8A8AD]">
                                ({order.businessName})
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-[#C8A96B] font-semibold">
                            {order.websiteType}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                          <span className="text-[10px] font-mono text-[#6A6C7B]">
                            {order.id}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#8E909D] line-clamp-2 mb-2">
                        {order.projectDescription || 'No description provided.'}
                      </p>

                      <div className="flex items-center justify-between text-[11px] text-[#6A6C7B] pt-1">
                        <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                        <span className="font-mono text-[#A8A8AD]">{order.budgetRange}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Order Detail View */}
          <div className="lg:col-span-5 bg-[#0D0E13] p-6 overflow-y-auto space-y-6">
            {selectedOrder ? (
              <div className="space-y-6 animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-[#1F2129] pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-[#C8A96B] uppercase tracking-wider block">
                      Order Specifications
                    </span>
                    <h3 className="text-lg font-bold font-heading text-[#F5F4F0]">
                      {selectedOrder.id}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDelete(selectedOrder.id)}
                      className="p-2 rounded-lg text-red-400 bg-red-950/30 border border-red-900/40 hover:bg-red-950/60 transition-colors"
                      title="Delete Order"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Status Selector */}
                <div className="p-4 rounded-xl bg-[#14151C] border border-[#1F2129] space-y-2">
                  <label className="text-xs font-semibold text-[#A8A8AD] block">
                    Update Order Status:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['New', 'In Review', 'In Progress', 'Completed'] as OrderStatus[]).map(
                      (st) => (
                        <button
                          key={st}
                          onClick={() => handleStatusChange(selectedOrder.id, st)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                            selectedOrder.status === st
                              ? 'bg-[#C8A96B] text-[#0B0B0D]'
                              : 'bg-[#1C1E28] text-[#A8A8AD] hover:text-white'
                          }`}
                        >
                          {st}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Client Contact Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${selectedOrder.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hi ${selectedOrder.fullName}, this is Veyracon Web Studio regarding your order ${selectedOrder.id} for the ${selectedOrder.websiteType}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-black bg-[#25D366] hover:bg-[#20b858] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-black" />
                    Reply on WhatsApp
                  </a>

                  <a
                    href={`mailto:${selectedOrder.email}?subject=${encodeURIComponent(
                      `Veyracon Web Studio - Order ${selectedOrder.id} Update`
                    )}&body=${encodeURIComponent(
                      `Dear ${selectedOrder.fullName},\n\nThank you for choosing Veyracon Web Studio. Regarding your ${selectedOrder.websiteType} request...`
                    )}`}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#F5F4F0] bg-[#1C1E28] border border-[#292B38] hover:border-[#C8A96B]/50 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C8A96B]" />
                    Send Email
                  </a>
                </div>

                {/* Specs List */}
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#14151C] border border-[#1F2129]">
                    <span className="text-[#6F7180] block mb-0.5">Client Full Name:</span>
                    <span className="font-semibold text-[#F5F4F0]">{selectedOrder.fullName}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#14151C] border border-[#1F2129]">
                    <span className="text-[#6F7180] block mb-0.5">Business Name:</span>
                    <span className="font-semibold text-[#F5F4F0]">
                      {selectedOrder.businessName || 'Not specified'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#14151C] border border-[#1F2129]">
                      <span className="text-[#6F7180] block mb-0.5">Website Type:</span>
                      <span className="font-semibold text-[#E2C27D]">
                        {selectedOrder.websiteType}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#14151C] border border-[#1F2129]">
                      <span className="text-[#6F7180] block mb-0.5">Budget Tier:</span>
                      <span className="font-semibold text-[#F5F4F0]">
                        {selectedOrder.budgetRange}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#14151C] border border-[#1F2129]">
                      <span className="text-[#6F7180] block mb-0.5">Existing Website:</span>
                      <span className="font-semibold text-[#F5F4F0]">
                        {selectedOrder.hasWebsite}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#14151C] border border-[#1F2129]">
                      <span className="text-[#6F7180] block mb-0.5">Design Style:</span>
                      <span className="font-semibold text-[#F5F4F0]">
                        {selectedOrder.designStyle}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#14151C] border border-[#1F2129]">
                    <span className="text-[#6F7180] block mb-1">Project Brief / Description:</span>
                    <p className="text-[#F5F4F0] leading-relaxed whitespace-pre-wrap">
                      {selectedOrder.projectDescription || 'No description provided.'}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#6F7180] space-y-3">
                <Briefcase className="w-10 h-10 text-[#232530]" />
                <p className="text-xs">
                  Select an order on the left to inspect detailed client requirements, contact information, and update production status.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboardModal;
