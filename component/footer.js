const show_Footer = `
<footer class="site-footer">
      <div
        class="skyline"
        role="img"
        aria-label="Cambodia temple skyline at dusk"
      ></div>

      <div class="footer-top">
        <div class="footer-col">
          <h4>Edura</h4>
          <div class="access-box">
            <div class="footer-search">
              <svg viewBox="0 0 24 24">
                <circle cx="10" cy="10" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input type="text" placeholder="Search courses" />
            </div>
            <button class="footer-login-btn">Log in</button>
          </div>
          <p class="footer-blurb">
            Learn new skills with courses built by instructors and learners
            across Cambodia and beyond.
          </p>
          <div class="social-row">
            <span>Follow Edura</span>
            <div class="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"
                />
              </svg>
            </div>
            <div class="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </div>
          </div>
        </div>

        <div class="footer-col">
          <h4>Terms and conditions</h4>
          <a href="#">Free certificates</a>
          <a href="#">30-day refund policy</a>
          <a href="#">All courses self-paced</a>
        </div>

        <div class="footer-col">
          <h4>Information</h4>
          <a href="#">FAQs</a>
          <a href="#">About Edura</a>
          <a href="#">Edura legal</a>
          <a href="#" style="margin-top: 16px">023 988 300</a>
          <a href="#">hello@edura.edu.kh</a>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <p style="color: #ffffff; font-weight: 600; margin-bottom: 2px">
            Edura
          </p>
          <p>Company number: 559063-2377</p>
          <p
            style="
              color: #ffffff;
              font-weight: 600;
              margin-top: 12px;
              margin-bottom: 2px;
            "
          >
            Head office
          </p>
          <p>Norodom Blvd, Sangkat Tonle Bassac,<br />Phnom Penh, Cambodia</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="legal-line">
          Part of Edura Group, supporting learners across Southeast Asia.
        </p>
        <p class="legal-line">hello@edura.edu.kh, 023 988 300</p>

        <div class="badges-row">
          <div class="badge-group">
            <div class="badge-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div class="badge-text">Trusted<br />platform</div>
          </div>
          <div class="badge-group">
            <div class="badge-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 10h18" />
                <path d="M7 15h4" />
              </svg>
            </div>
            <div class="badge-text">PCI DSS<br />compliant</div>
          </div>
          <div class="payment-row">
            <div class="payment-pill">ABA PAY</div>
            <div class="payment-pill">VISA</div>
            <div class="payment-pill">Mastercard</div>
          </div>
        </div>

        <p class="legal-line copyright">
          © 2020-2026 Edura. All rights reserved.
        </p>
      </div>
    </footer>
`

document.getElementById("footer").innerHTML=show_Footer;