import React from "react";
import testi_bg_3_1 from "../assets/img/bg/testi-bg-3-1.png";
import pricingCardShape2_1 from "../assets/img/shape/pricing-card-shape2-1.png";
const pricingData = [
  {
    id: 1,
    title: "Standard",
    monthlyPrice: 35,
    yearlyPrice: 350,
    features: [
      "Access AI tools",
      "Exclusive features",
      "Discord access",
      "24/7 support",
    ],
    monthlyUnavailable: [3], // index of unavailable feature
  },
  {
    id: 2,
    title: "Professional",
    monthlyPrice: 62,
    yearlyPrice: 620,
    features: [
      "Access AI tools",
      "Exclusive features",
      "Discord access",
      "24/7 support",
    ],
  },
  {
    id: 3,
    title: "Business",
    monthlyPrice: 86,
    yearlyPrice: 860,
    features: [
      "Access AI tools",
      "Exclusive features",
      "Discord access",
      "24/7 support",
    ],
  },
  {
    id: 4,
    title: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Access AI tools",
      "Exclusive features",
      "Discord access",
      "24/7 support",
    ],
  },
];

const PricingCard = ({ plan, isActive }) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className={`price-card style2 ${isActive ? "active" : ""}`}>
        <div
          className="card-bg-img"
          data-mask-src="assets/img/shape/pricing-card-shape2-1.png"
          style={{
            WebkitMaskImage: `url(${pricingCardShape2_1})`,
            maskImage: `url(${pricingCardShape2_1})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
        />
        <div className="box-icon">
          <img src="assets/img/normal/price-thumb2-1.png" alt="icon" />
          <ul className="nav nav-tabs pricing-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target={`#priceAnnualTab${plan.id}`}
                type="button"
                role="tab"
              >
                Annual
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target={`#priceMonthTab${plan.id}`}
                type="button"
                role="tab"
              >
                Monthly
              </button>
            </li>
          </ul>
        </div>

        <div className="tab-content">
          <div
            className="tab-pane fade"
            id={`priceAnnualTab${plan.id}`}
            role="tabpanel"
          >
            <h3 className="box-title">{plan.title}</h3>
            <p className="box-text">Ideal for personal projects</p>
            <h4 className="price-card_price">
              ${plan.yearlyPrice}
              <span className="duration">/Per Year</span>
            </h4>
            <div className="checklist">
              <ul>
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={
                      plan.monthlyUnavailable?.includes(idx)
                        ? "unavailable"
                        : ""
                    }
                  >
                    <i className="fas fa-check-double" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade show active"
            id={`priceMonthTab${plan.id}`}
            role="tabpanel"
          >
            <h3 className="box-title">{plan.title}</h3>
            <p className="box-text">Ideal for personal projects</p>
            <h4 className="price-card_price">
              ${plan.monthlyPrice}
              <span className="duration">/Per Month</span>
            </h4>
            <div className="checklist">
              <ul>
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={
                      plan.monthlyUnavailable?.includes(idx)
                        ? "unavailable"
                        : ""
                    }
                  >
                    <i className="fas fa-check-double" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="btn-wrap">
          <a href="contact.html" className="th-btn style-gradient3">
            Choose Package
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section
      className="space overflow-hidden position-relative"
      style={{
        backgroundImage: `url(${testi_bg_3_1})`,

        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5 col-lg-8">
            <div className="title-area text-lg-start text-center">
              <span className="sub-title2 text-gradient text-uppercase mb-30">
                Popular Package
              </span>
              <h2 className="sec-title style2 fw-bold text-uppercase text-anim2">
                Competitive package best Ai Expertise
              </h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn">
              <a href="about.html" className="th-btn style-gradient">
                More About Us <i className="far fa-long-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="row gy-30 justify-content-center">
          {pricingData.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} isActive={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
