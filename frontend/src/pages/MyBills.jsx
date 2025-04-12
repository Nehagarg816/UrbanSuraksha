import React, { useEffect, useState } from "react";
import "../styles/MyBills.css";

const initialBills = [
  { title: "Monthly Rent", amount: "₹8000", date: "2025-04-01", category: "Rent" },
  { title: "Electricity Bill", amount: "₹1200", date: "2025-04-05", category: "Utilities" },
  { title: "Tiffin Service", amount: "₹3000", date: "2025-04-07", category: "Food" },
  { title: "Internet / WiFi", amount: "₹600", date: "2025-04-06", category: "Utilities" },
  { title: "Laundry Services", amount: "₹400", date: "2025-04-09", category: "Personal Care" },
  { title: "Drinking Water Supply", amount: "₹150", date: "2025-04-03", category: "Utilities" },
  { title: "Gas Cylinder", amount: "₹950", date: "2025-04-11", category: "Kitchen" },
  { title: "Housekeeping Charges", amount: "₹500", date: "2025-04-10", category: "Maintenance" },
  { title: "Maintenance Fee", amount: "₹700", date: "2025-04-12", category: "Maintenance" },
  { title: "Milk Subscription", amount: "₹450", date: "2025-04-02", category: "Food" },
  { title: "Room Heater Electricity Overuse", amount: "₹350", date: "2025-04-04", category: "Utilities" },
  { title: "TV Recharge (Shared)", amount: "₹200", date: "2025-04-08", category: "Entertainment" },
];

const MyBills = () => {
  const getStoredBills = () => {
    const stored = localStorage.getItem("myBills");
    return stored ? JSON.parse(stored) : initialBills;
  };

  const [bills, setBills] = useState(getStoredBills);
  const [selectedBill, setSelectedBill] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    localStorage.setItem("myBills", JSON.stringify(bills));
  }, [bills]);

  const handleMakePayment = (bill) => {
    setSelectedBill(bill);
    setShowDialog(true);
    setPaymentStatus(null);
  };

  const simulatePayment = () => {
    setPaymentStatus("loading");
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      setPaymentStatus(isSuccess ? "success" : "failed");

      if (isSuccess) {
        const newBill = {
          title: selectedBill.title + " (Paid)",
          amount: selectedBill.amount,
          date: new Date().toISOString().split("T")[0],
          category: selectedBill.category,
        };
        setBills((prev) => [...prev, newBill]);
      }

      setTimeout(() => {
        setShowDialog(false);
        setSelectedBill(null);
        setPaymentStatus(null);
      }, 2000);
    }, 1500);
  };

  const handleResetBills = () => {
    localStorage.removeItem("myBills");
    setBills(initialBills);
  };

  return (
    <div className="bills-container">
      <div className="bills-header">
        <h2>My Bills</h2>
        <button className="reset-btn" onClick={handleResetBills}>Reset Bills</button>
      </div>

      <div className="bills-layout">
        <div className="bills-list">
          {bills.map((bill, index) => (
            <div key={index} className="bill-card">
              <h3>{bill.title}</h3>
              <p><strong>Amount:</strong> {bill.amount}</p>
              <p><strong>Date:</strong> {bill.date}</p>
              <p><strong>Category:</strong> {bill.category}</p>
              {!bill.title.includes("(Paid)") && (
                <button onClick={() => handleMakePayment(bill)} className="pay-btn">
                  Make Payment
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="due-card">
          <h3>Next Due</h3>
          {bills.filter(b => !b.title.includes("(Paid)")).length > 0 ? (
            <div>
              <p><strong>{bills[0].title}</strong></p>
              <p>{bills[0].amount}</p>
              <p>{bills[0].date}</p>
              <button onClick={() => handleMakePayment(bills[0])} className="pay-btn">
                Pay Now
              </button>
            </div>
          ) : (
            <p>All bills paid! 🎉</p>
          )}
        </div>
      </div>

      {showDialog && selectedBill && (
        <div className="payment-dialog">
          <div className="dialog-content">
            <h3>Confirm Payment</h3>
            <p><strong>To:</strong> Landlord - Rajesh Kumar</p>
            <p><strong>From:</strong> You (xxxx-xxxx-xxx1234)</p>
            <p><strong>Amount:</strong> {selectedBill.amount}</p>
            <input placeholder="Enter 4-digit PIN" maxLength={4} className="pin-input" />
            <button onClick={simulatePayment} className="confirm-btn">
              Confirm & Pay
            </button>

            {paymentStatus === "loading" && <p className="loading">Processing...</p>}
            {paymentStatus === "success" && <p className="success">&#10003; Payment Successful</p>}
            {paymentStatus === "failed" && <p className="failed">&#10060; Payment Failed</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBills;
