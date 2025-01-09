"use client";

import { Phone, MessageCircle } from "lucide-react";

interface OrderStatusCardProps {
  courierName: string;
  courierImage: string;
  packageId: string;
  warehouseLocation: string;
  deliveryAddress: string;
}

export default function OrderStatusCard({
  courierName,
  courierImage,
  packageId,
  warehouseLocation,
  deliveryAddress,
}: OrderStatusCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src={courierImage}
            alt={courierName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{courierName}</h3>
            <p className="text-gray-600 text-sm">Courier</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Phone className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <MessageCircle className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Regular Package</span>
          <span className="text-gray-400 text-sm">{packageId}</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-1">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Order Process</p>
              <p className="font-medium">{warehouseLocation}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-1">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">To your home</p>
              <p className="font-medium">{deliveryAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
