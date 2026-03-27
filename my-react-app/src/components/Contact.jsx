function Contact(){
  return(
    <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Contact Me</h2>

      <div class="contact-content">
        <div class="contact-info">
          <h3 class="info-title">Let's Get In Touch</h3>
          <p class="info-text">
            I'm open to discussing web development projects or partnership opportunities.
          </p>

          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>duncankipkoech12@gmail.com</span>
          </div>

          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>+254 769 930 350</span>
          </div>

          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Nairobi, Kenya</span>
          </div>
        </div>

         
        <div class="contact-form-wrapper">
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter Your Name" required />
            </div>

            <div class="form-group">
              <label for="email">Email <span class="required">*</span></label>
              <input type="email" id="email" placeholder="Enter Your Email" required />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" rows="5" placeholder="Enter Your Message"></textarea>
            </div>

            <div class="form-submit">
              <button type="submit" class="submit-btn">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
    
    
}
export default Contact