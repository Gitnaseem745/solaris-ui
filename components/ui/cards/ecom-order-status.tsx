"use client";

import { BiPhone } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";

interface OrderStatusCardProps {
  courierName: string;
  courierImage: string;
  packageId: string;
  warehouseLocation: string;
  deliveryAddress: string;
  onCall?: () => void;
  onMessage?: () => void;
}

export default function OrderStatusCard({
  courierName,
  courierImage,
  packageId,
  warehouseLocation,
  deliveryAddress,
  onCall,
  onMessage
}: OrderStatusCardProps) {
  return (
    <div className="bg-black rounded-2xl p-6 shadow-lg max-w-sm">
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
          <button onClick={onCall} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <BiPhone className="w-5 h-5 text-gray-600" />
          </button>
          <button onClick={onMessage} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <FiMessageCircle className="w-5 h-5 text-gray-600" />
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
