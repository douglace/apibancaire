import React, { useState } from "react";
import BalanceTab from "./Tabs/BalanceTab";
import CustomerTab from "./Tabs/CustomerTab";
import HomeTab from "./Tabs/HomeTab";
import PaymentTab from "./Tabs/PaymentTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");
  const handleTab = (ev) => {
      setActiveTab(ev.target.dataset.tab)
  }
  return (
    <div className="tabs container">
      {/* Tab nav */}
      <ul className="nav">
        <li onClick={handleTab} data-tab="home" className={activeTab === "home" ? "active" : ""}>Home</li>
        <li onClick={handleTab} data-tab="payment" className={activeTab === "payment" ? "active" : ""}>Payment</li>
        <li onClick={handleTab} data-tab="balance" className={activeTab === "balance" ? "active" : ""}>Balance</li>
        <li onClick={handleTab} data-tab="customer" className={activeTab === "customer" ? "active" : ""}>Customer</li>
      </ul>
      <div className="outlet">
        {activeTab == "home" && <HomeTab />}
        {activeTab == "payment" && <PaymentTab />}
        {activeTab == "balance" && <BalanceTab />}
        {activeTab == "customer" && <CustomerTab />}
      </div>
    </div>
  );
};
export default Tabs;