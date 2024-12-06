import React from 'react'

const ShoppingCard = () => {
  return (
    <div>
       <div className="w-[1200px] m-auto p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="text-gray-600 text-sm mb-4">
          Home / Shop / <span className="text-gray-800">Shopping Cart</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white shadow rounded-lg p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2 text-gray-800">Products</th>
                  <th className="py-2 text-gray-800">Price</th>
                  <th className="py-2 text-gray-800">Quantity</th>
                  <th className="py-2 text-gray-800">Total</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Barberton Daisy",
                    sku: "1995751877966",
                    price: 119,
                    quantity: 2,
                    total: 238,
                  },
                  {
                    name: "Blushing Bromeliad",
                    sku: "1995751875065",
                    price: 139,
                    quantity: 6,
                    total: 834,
                  },
                  {
                    name: "Aluminum Plant",
                    sku: "1995751877786",
                    price: 179,
                    quantity: 9,
                    total: 1611,
                  },
                ].map((product, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4">
                      <div className="text-gray-800">{product.name}</div>
                      <div className="text-sm text-gray-500">SKU: {product.sku}</div>
                    </td>
                    <td className="py-4">${product.price.toFixed(2)}</td>
                    <td className="py-4 flex items-center gap-2">
                      <button className="px-2 py-1 text-white bg-green-500 rounded-full">-</button>
                      <span>{product.quantity}</span>
                      <button className="px-2 py-1 text-white bg-green-500 rounded-full">+</button>
                    </td>
                    <td className="py-4 text-green-600 font-bold">${product.total.toFixed(2)}</td>
                    <td className="py-4 text-center">
                      <button className="text-red-500 hover:text-red-700">
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-4">
            <div className="text-gray-800 font-bold text-lg mb-4">Cart Totals</div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Coupon Apply</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code here..."
                  className="flex-1 p-2 border rounded"
                />
                <button className="px-4 py-2 text-white bg-green-500 rounded">
                  Apply
                </button>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-gray-800 font-bold">$2,683.00</span>
              </div>
              <div className="flex justify-between">
                <span>Coupon Discount</span>
                <span className="text-gray-800 font-bold">(-) 00.00</span>
              </div>
              <div className="flex justify-between">
                <span>
                  Shipping{" "}
                  <span className="text-green-500 cursor-pointer">
                    View shipping charge
                  </span>
                </span>
                <span className="text-gray-800 font-bold">$16.00</span>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-lg font-bold">
              <span>Total</span>
              <span className="text-green-600">$2,699.00</span>
            </div>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded">
              Proceed To Checkout
            </button>
            <button className="mt-2 w-full text-green-500 py-2 rounded">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ShoppingCard;





