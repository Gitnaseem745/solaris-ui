"use client";

import { FiMessageCircle } from "react-icons/fi";

interface OrderStatusCardProps {
  courierName: string;
  courierImage: string;
  packageId: string;
  warehouseLocation: string;
  deliveryAddress: string;
  onMessage?: () => void;
}

export default function OrderStatusCard({
  courierName,
  courierImage,
  packageId,
  warehouseLocation,
  deliveryAddress,
  onMessage,
}: OrderStatusCardProps) {
  const statusSteps = [
    {
      title: "Order Process",
      description: warehouseLocation,
      statusColor: "bg-neutral-400",
    },
    {
      title: "To your home",
      description: deliveryAddress,
      statusColor: "bg-gray-400",
    },
  ];

  return (
    <div className="bg-foreground rounded-2xl p-6 shadow-lg max-w-sm">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-y-4">
        <div className="flex items-center gap-3">
          <img
            src={courierImage}
            alt={courierName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg text-background">{courierName}</h3>
            <p className="text-neutral-600 text-sm">Courier</p>
          </div>
        </div>
        <button
          onClick={onMessage}
          className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-400 transition-colors"
        >
          <FiMessageCircle className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-background">
          <span>Regular Package</span>
          <span className="text-sm text-neutral-600">{packageId}</span>
        </div>

        <div className="space-y-3">
          {statusSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-1">
                <span className={`w-2 h-2 rounded-full ${step.statusColor}`}></span>
              </div>
              <div>
                <p className="text-background text-sm">{step.title}</p>
                <p className="font-medium text-neutral-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
