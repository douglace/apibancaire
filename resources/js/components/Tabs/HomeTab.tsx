import React from "react";
import AverageCart from "./homeComponents/AverageCart";
import AverageTransactions from "./homeComponents/AverageTransactions";

import Ca from "./homeComponents/Ca";
import Cart from "./homeComponents/Cart";
import CartSucceed from "./homeComponents/CartSucceed";
import NewCustomer from "./homeComponents/NewCustomer";
import Transactions from "./homeComponents/Transactions";

const HomeTab = () => {
  return (
    <div className="home-tab">
      <div className="graph-ca home-graph-item">
        <Ca />
      </div>
      <div className="graph-customer home-graph-item">
        <NewCustomer />
      </div>
      <div className="graph-cart home-graph-item">
        <Cart />
      </div>
      <div className="graph-cart-successed home-graph-item">
        <CartSucceed />
      </div>
      <div className="graph-transaction home-graph-item">
        <Transactions />
      </div>
      <div className="graph-average-transacton home-graph-item">
        <AverageTransactions />
      </div>
      <div className="graph-average-cart home-graph-item">
        <AverageCart />
      </div>
    </div>
  );
};
export default HomeTab;
