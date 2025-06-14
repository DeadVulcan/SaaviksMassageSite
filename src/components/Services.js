import React from 'react';

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Deep Tissue Massage</h3>
          <p>Target chronic muscle tension and knots using slow, deep strokes to promote long-term relief and improved mobility.</p>
        </div>
        <div className="service-item">
          <h3>Sports Massage</h3>
          <p>Ideal for athletes and active individuals to reduce soreness, prevent injury, and improve performance.</p>
        </div>
        <div className="service-item">
          <h3>Swedish Relaxation</h3>
          <p>Relax and unwind with long, gliding strokes that reduce stress, improve circulation, and promote deep relaxation.</p>
        </div>
        <div className="service-item">
          <h3>Mobile Chair Massage</h3>
          <p>Perfect for events, offices, and quick treatments — focused on upper body tension in a convenient seated position.</p>
        </div>
        <div className="service-item">
          <h3>Custom Therapeutic Sessions</h3>
          <p>Personalized treatments combining various techniques to meet your body’s specific needs and goals.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;