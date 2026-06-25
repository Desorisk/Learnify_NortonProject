const show_Footer = `
<footer class="site-footer">
      <div class="footer-top">
        <div class="footer-col">
        <div class="footer-logo"><img src="../public/Leanify logo white bg.png" alt="logo"><h4>Learnify Education</h4></div>
          <div class="access-box">
            <div class="footer-search">
              <input type="text" placeholder="Search courses" />
            </div>
            <button class="footer-login-btn">Log in</button>
          </div>
          <p class="footer-blurb">
            Learn new skills with courses built by instructors and learners
            across Cambodia and beyond.
          </p>
          <div class="social-row">
            <span>Follow Learnify</span>
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
          <a href="#">About Learnify</a>
          <a href="#">Learnify legal</a>
          <a href="#" style="margin-top: 16px">023 988 300</a>
          <a href="#">hello@Leanify.edu.kh</a>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <p style="color: #1a1a2e; font-weight: 600; margin-bottom: 2px">
            Leanrify
          </p>
          <p>Company number: 559063-2377</p>
          <p
            style="
              color: #1a1a2e;
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
          Part of Learnify Group, supporting learners across Southeast Asia.
        </p>

        <p class="legal-line copyright">
          © 2020-2026 Edura. All rights reserved.
        </p>
      </div>
    </footer>
`

document.getElementById("footer").innerHTML=show_Footer;