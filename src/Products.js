
  export function Products () {
  return (
    <div>
  
      <div className="title">
      <h1>XYZ Digital Services</h1>
      <h2> Membership Details</h2>
      </div>
  
  
    <div className="store-container">

      <div className="hoverme">
      <div className="product-list">
        <section className="product-name">Free </section>
        <section className="price">$0<span className = "price-label">/month</span></section>
        <hr className="ruler" />
        <ul className="access-list">
          <li className="acc-given">Single User</li>
          <li className="acc-given">5 GB Storage</li>
          <li className="acc-given">Unlimited Public Projects</li>
          <li className="acc-given">Community Access</li>
          <li className="acc-not-given">Unlimited Private Projects</li>
          <li className="acc-not-given">Dedicated Phone Support</li>
          <li className="acc-not-given">Free Subdomain</li>
          <li className="acc-not-given">Monthly Status Reports</li>
        </ul>

        <button className="buy-button"> Buy Now </button>
      
      </div>
       </div>

       <span>
      <div className="product-list">
        <section className="product-name">Plus</section>
        <section className="price">$9<span className = "price-label">/month</span></section>
        <hr className="ruler" />
        <ul className="access-list">
          <li className="acc-given">5 Users</li>
          <li className="acc-given">50GB Storage</li>
          <li className="acc-given">Unlimited Public Projects</li>
          <li className="acc-given">Community Access</li>
          <li className="acc-given">Unlimited Private Projects</li>
          <li className="acc-given">Dedicated Phone Support</li>
          <li className="acc-given">Free Subdomain</li>
          <li className="acc-not-given">Monthly Status Reports</li>
        </ul>

        <button className="buy-button"> Buy Now </button>
      </div>
      </span>
      <span>
      <div className="product-list">
      
        <section className="product-name">Pro</section>
        <section className="price">$49<span className = "price-label">/month</span></section>
        <hr className="ruler" />
        <ul className="access-list">
          <li className="acc-given">Unlimited Users</li>
          <li className="acc-given">150GB Storage</li>
          <li className="acc-given">Unlimited Public Projects</li>
          <li className="acc-given">Community Access</li>
          <li className="acc-given">Unlimited Private Projects</li>
          <li className="acc-given">Dedicated Phone Support</li>
          <li className="acc-given">Unlimited Free Subdomain</li>
          <li className="acc-given">Monthly Status Reports</li>
        </ul>

        <button className="buy-button"> Buy Now </button>
      </div>
      </span>
      </div>
    
    </div>
  );
  }

