import React from 'react';
import { OrderItem, UserAccount } from '../types';
import { VeyraconLogo } from './VeyraconLogo';
import {
  X,
  Package,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface UserPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserAccount;
  orders: OrderItem[];
  onNewOrder: () => void;
  onLogout: () => void;
}

export const UserPortalModal: React.FC<UserPortalModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  orders,
  onNewOrder,
  onLogout,
}) => {
  if (!isOpen) return null;

  // Filter orders for this client (by email or userId)
  const myOrders = orders.filter(
    (o) =>
      o.email.toLowerCase() === currentUser.email.toLowerCase() ||
      o.userId === currentUser.id
  );

  const getStatusBadge = (status: OrderItem['status']) => {
    switch (status) {
      case 'New':
        return {
          bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          desc: 'Brief received by studio. Preparing quote and layout concept.',
        };
      case 'In Review':
        return {
          bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          desc: 'Initial concept undergoing structure and design review.',
        };
      case 'In Progress':
        return {
          bg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
          desc: 'Website is currently in active development and coding phase.',
        };
      case 'Completed':
        return {
          bg: 'bg-[#C8A96B]/15 text-[#E2C27D] border-[#C8A96B]/40',
          desc: 'Project completed and prepared for client deployment.',
        };
      default:
        return {
          bg: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
          desc: 'Status update pending.',
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0E0F14] border border-[#232530] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#14151C] border-b border-[#1F2129] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <VeyraconLogo size="sm" />
            <div>
              <h3 className="text-sm font-bold font-heading text-[#F5F4F0]">
                Client Portal
              </h3>
              <p className="text-[11px] text-[#A8A8AD]">
                Welcome, {currentUser.fullName} ({currentUser.email})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onLogout}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-red-400 bg-red-950/30 border border-red-900/40 hover:bg-red-950/60 transition-colors"
            >
              Sign Out
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A8A8AD] hover:text-white hover:bg-[#1E2028] transition-colors"
              aria-label="Close portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#14151C] border border-[#1F2129]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E2C27D] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
                Your Project Orders
              </span>
              <p className="text-xs text-[#A8A8AD] mt-0.5">
                Track your website milestones, review details, or start a new order.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onNewOrder();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-colors cursor-pointer"
            >
              New Order
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Orders List */}
          {myOrders.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-xl border border-dashed border-[#232530] space-y-3">
              <Package className="w-10 h-10 text-[#444654] mx-auto" />
              <div className="text-sm font-semibold text-[#F5F4F0]">
                No Orders Placed Yet
              </div>
              <p className="text-xs text-[#A8A8AD] max-w-sm mx-auto">
                You haven't submitted any website projects with this email address yet. Click below to start your first project.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNewOrder();
                }}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-colors cursor-pointer"
              >
                Create Website Request
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {myOrders.map((order) => {
                const badge = getStatusBadge(order.status);
                return (
                  <div
                    key={order.id}
                    className="p-5 rounded-xl bg-[#111218] border border-[#1E2028] space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#1A1C25] pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#E2C27D]">
                            {order.id}
                          </span>
                          <span className="text-xs text-[#8E909D]">•</span>
                          <span className="text-xs font-semibold text-[#F5F4F0]">
                            {order.websiteType}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#6A6C7B]">
                          Submitted on {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <span
                        className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${badge.bg}`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <p className="text-xs text-[#A8A8AD] leading-relaxed">
                      {order.projectDescription || 'No project description attached.'}
                    </p>

                    <div className="p-3 rounded-lg bg-[#0B0B0D] border border-[#1C1E26] text-[11px] text-[#8E909D] flex items-center justify-between">
                      <span><strong>Status Note:</strong> {badge.desc}</span>
                      <a
                        href={`https://wa.me/923453088393?text=${encodeURIComponent(
                          `Hi Veyracon, checking status on my order ${order.id} (${order.websiteType}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#25D366] hover:underline font-semibold"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserPortalModal;
