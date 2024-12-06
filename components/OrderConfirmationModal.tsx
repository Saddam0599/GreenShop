import React from 'react';
import Image from 'next/image';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    orderNumber: string;
    date: string;
    total: number;
    paymentMethod: string;
    products: Array<{
      id: string;
      name: string;
      sku: string;
      quantity: number;
      price: number;
      image: string;
    }>;
    shipping: number;
  };
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({ isOpen, onClose, orderDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center mb-6">
          <Image src="/thank-you-icon.svg" alt="Thank you" width={64} height={64} />
          <h2 className="text-2xl font-bold mt-4">Your order has been received</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="font-semibold">{orderDetails.orderNumber}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Date</p>
            <p className="font-semibold">{orderDetails.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total</p>
            <p className="font-semibold">${orderDetails.total.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Payment Method</p>
            <p className="font-semibold">{orderDetails.paymentMethod}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4">Order Details</h3>
        <div className="space-y-4 mb-6">
          {orderDetails.products.map((product) => (
            <div key={product.id} className="flex items-center">
              <Image src={product.image} alt={product.name} width={60} height={60} className="rounded-md" />
              <div className="ml-4 flex-grow">
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-gray-600">SKU: {product.sku}</p>
              </div>
              <div className="text-right">
                <p>(x {product.quantity})</p>
                <p className="font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${(orderDetails.total - orderDetails.shipping).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${orderDetails.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${orderDetails.total.toFixed(2)}</span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Track your order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;