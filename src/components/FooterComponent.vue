<script setup></script>

<template>
  <footer class="footer">
    <section class="social-media">
      <p>Perfiles sociales de Golden Avenue</p>
      <nav>
        <img
          src="../assets/logos/social-media/linkedIn.svg"
          alt="LinkedIn Logo"
          width="48px"
          class="social-media-logo"
        />
        <img
          src="../assets/logos/social-media/twitter.svg"
          alt="Twitter Logo"
          width="48px"
          class="social-media-logo"
        />
        <img
          src="../assets/logos/social-media/instagram.svg"
          alt="Instagram Logo"
          width="48px"
          class="social-media-logo"
        />
        <img
          src="../assets/logos/social-media/facebook.svg"
          alt="Facebook Logo"
          width="48px"
          class="social-media-logo"
        />
      </nav>
    </section>

    <section class="footer--top">
      <article class="info">
        <h3 class="info--title">Golden Avenue Real State</h3>
        <address class="address">
          <p class="address--element">Nombre de la dirección</p>
          <p class="address--element">Nombre y número de la calle</p>
          <p class="address--element">CP y localidad, municipio</p>
          <p class="address--element">Costa del Sol, Spain</p>
        </address>
        <address class="contact-info">
          <p>+34 891 234 567</p>
          <p class="contact-email">goldenavenue@info.com</p>
        </address>
      </article>
      <div class="top-right">
        <article class="newsletter">
          <p class="newsletter--title">Para descubrir nuestras novedades</p>
          <p class="newsletter--text">
            Texto para la subscripción de la <strong>newsletter</strong>
          </p>
          <div class="email">
            <input
              type="email"
              placeholder="Add your e-mail address"
              class="email--input"
            />
            <button class="email--btn">⟶</button>
          </div>
          <div class="accept-newsletter">
            <input
              type="checkbox"
              name="accept-newsletter"
              id="accept-newsletter"
              class="accept-checkbox"
            />
            <label for="accept-newsletter" class="accept-label">
              I agree to the Terms of Use and accept de Privacy Policy
            </label>
          </div>
        </article>
        <div class="back-to-top">
          <a class="to-top-circle" href="#">
            <p class="to-top-content">^</p>
            <p class="to-top-content">BACK TO TOP</p>
          </a>
        </div>
      </div>
    </section>

    <section class="footer--bottom">
      <img
        src="../assets/logos/Positivo.png"
        alt="Goldel Avenue logo"
        height="20px"
      />
      <div>
        <p>ABOUT US</p>
        <p>Legal notice</p>
      </div>
      <div>
        <p>NEWS FEED</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <p>FAQs</p>
        <p>Cookies policy</p>
      </div>
      <div>
        <span>Legal Notice </span>· <span>Privacy Policy </span>·
        <span>Cookies Policy </span>
      </div>
    </section>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: #171719;

  .social-media {
    text-align: center;
    background-color: #45454C;

    .social-media-logo {
      margin: 5px;
    }
  }

  &--top {
    display: flex;
    padding: 15px 0;
    margin: auto 60px;
    border-bottom: 1px solid #eeede8;

    .info {
      flex: 1 1 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &--title {
        font-family: "Cormorant Garamond", serif;
        margin: 0;
      }

      .address {
        &--element {
          line-height: 3px;
          font-size: 0.5em;
        }
      }

      .contact-info {
        margin-top: 15px;
        line-height: 3px;
        font-size: 0.5em;
        font-weight: bold;

        .contact-email {
          margin: 0;
        }
      }
    }

    .top-right {
      flex: 1 1 0;
      display: flex;

      .newsletter {
        background-color: #eeede8;
        color: #171719;
        padding: 15px;
        width: 100%;

        &--title {
          font-family: "Cormorant Garamond", serif;
          font-weight: bold;
          margin: 0;
        }

        &--text {
          font-size: 0.5em;
        }

        .email {
          display: flex;
          margin: 15px auto;

          &--input {
            font-size: 0.7em;
            padding: 5px;
            width: 80%;
            border: 1px solid #171719;
            border-right: none;
          }

          &--btn {
            width: 20%;
            border: 1px solid #171719;
            border-left: none;
            background-color: white;
            cursor: pointer;

            &:active {
              background-color: #eeede8;
            }
          }
        }

        .accept-newsletter {
          display: flex;
          align-items: center;

          .accept-checkbox {
            margin-left: 0;
          }

          .accept-label {
            font-size: 0.5em;
            vertical-align: middle;
          }
        }
      }

      .back-to-top {
        display: flex;
        justify-content: center;
        align-items: center;

        .to-top-circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          margin-left: 15px;
          border: 1px solid #eeede8;
          border-radius: 40px;
          background-color: #45454c;
          cursor: pointer;

          .to-top-content {
            text-align: center;
            margin: 0;
          }
        }
      }
    }
  }

  &--bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin: auto 60px;
    font-size: 0.5em;
    text-align: center;
  }
}
</style>
