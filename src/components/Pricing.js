import React from "react";

const pricing = [
  { duration: "30 mins", price: 60 },
  { duration: "60 mins", price: 90 },
  { duration: "90 mins", price: 120 },
  { duration: "2 hours", price: 170 },
];

const Pricing = () => (
  <section className="pricing" id="pricing">
    <h2>Pricing</h2>
    <p className="pricing-note">
      Groups of up to 4 people can book a single 2 hour session together at the
      lower rate. Groups of up to 2 may book a 1 hour session together at the
      lower rate. Total time may be divided amongst group members as desired,
      with a minimum of 30 min/person.
    </p>
    <div className="pricing-chart">
      {pricing.map((item) => (
        <div key={item.duration} className="pricing-row">
          <div className="pricing-label">{item.duration}</div>
          <div
            className="pricing-bar"
            style={{ width: `${(item.price / 170) * 100}%` }}
          >
            <span className="pricing-price">${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
