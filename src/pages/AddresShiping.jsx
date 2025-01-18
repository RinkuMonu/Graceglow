import { useState } from "react";
import { Package, CreditCard, Truck, Wallet } from "lucide-react";

export default function AddresShiping({ cartItems, onClose }) {
  // useEffect(() => {
  //   onClose();
  // }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    address: "",
    shippingMethod: "",
    paymentMethod: "",
    orderNotes: "",
    requiresInvoice: false,
  });
  const total = cartItems.reduce(
    (sum, item) => {
      console.log(item)  
      if (!item) return sum; // Ensure `item` is valid
      return sum + item.price * item.quantity;
    },
    0
  );

  const Tax = total* 0.012
  const Shippingfee = total*0.001
  const finalPrice =total+ Tax + Shippingfee

 

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Define payment options
    const options = {
      key: "rzp_test_qWAN0qGk5syg5o", // Razorpay Test Key ID
      amount: finalPrice * 100, // Amount in paise (100 INR)
      currency: "INR",
      name: "DigihubTech",
      description: "Transaction",
      image: "https://your-logo-url.com/logo.png", // Optional logo
      handler: function (response) {
        Swal.fire({
          title: "Payment Successful",
          html: `
            <p><strong>Payment ID:</strong> ${response.razorpay_payment_id}</p>
            <p>Thank you for your payment!</p>
          `,
          icon: "success",
        });
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
      },
      theme: {
        color: "#4d44dd",
      },
    };

    const razorpay = new Razorpay(options);

    razorpay.on("payment.failed", function (response) {
      Swal.fire({
        title: "Payment Failed",
        html: `
          <p><strong>Code:</strong> ${response.error.code}</p>
          <p><strong>Description:</strong> ${response.error.description}</p>
          <p><strong>Reason:</strong> ${response.error.reason}</p>
        `,
        icon: "error",
      });
    });

    razorpay.open();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Shipping Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-8">
                <Package className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900 ml-3">
                  Shipping Information
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 rounded-md border-gray-300  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none ring-2 ring-indigo-500"
                    />
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none ring-2 ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none ring-2 ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Contact & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none ring-2 ring-indigo-500"
                    >
                      <option value="delhi">Delhi</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="karnataka">Karnataka</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none ring-2 ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none ring-2 ring-indigo-500"
                    />
                  </div>
                {/* Shipping Method */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Truck className="h-6 w-6 text-indigo-600" />
                    <h2 className="text-lg font-semibold ml-2">
                      Shipping Method
                    </h2>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="free"
                        checked={formData.shippingMethod === "free"}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-900">
                        Free Shipping
                      </span>
                    </label>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CreditCard className="h-6 w-6 text-indigo-600" />
                    <h2 className="text-lg font-semibold ml-2">
                      Payment Method
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="phonepe"
                        checked={formData.paymentMethod === "phonepe"}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-900">
                        Pay online via PhonePe
                      </span>
                    </label>

                    <label className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="payu"
                        checked={formData.paymentMethod === "payu"}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-900">
                        Pay online via PayU
                      </span>
                    </label>

                    <label className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-900">
                        Cash on delivery (COD)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Order Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Order Notes
                  </label>
                  <textarea
                    name="orderNotes"
                    rows="4"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none ring-2 ring-indigo-500"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                  />
                </div>

                {/* Company Invoice */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="requiresInvoice"
                    checked={formData.requiresInvoice}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded "
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Requires company invoice
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-between items-center pt-6">
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    ← Back to cart
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <div className="flex items-center">
                      <Wallet className="h-5 w-5 mr-2" />
                      Process Payment
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Product(s):</h2>
                <div className="flex gap-4 border-b pb-4">
                  <ul>
                    {cartItems.map((elem) => {
                      return (
                        <>
                          <div className="relative w-24 h-24 flex-shrink-0">
                            <img
                              src={elem.image}
                              alt={elem.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <span className="absolute -top-2 -right-2 bg-gray-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                              1
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">
                              {elem.name}
                            </h3>
                            <p className="text-lg font-semibold text-gray-900 mt-2">
                              {elem.price}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Price Summary */}
              <div className="space-y-3 border-b pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total 
                  </span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium">₹{Tax}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping fee:</span>
                  <span className="font-medium">₹{Shippingfee}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between py-4 text-lg font-semibold">
                <span>FinalPrice:</span>
                <span>₹ {finalPrice}</span>
              </div>

              {/* Coupon Section */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 text-indigo-600">
                  <Package size={20} />
                  <span className="font-medium">Coupon codes (6)</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 whitespace-nowrap">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
