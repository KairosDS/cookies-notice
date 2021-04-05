import { html, LitElement } from 'lit-element';

import { CookiesNoticeStyles } from './Cookies-Notice-Style';
import { HTMLChildrenMixin } from './HTMLChildrenMixin';

const SESSION_COOKIE_NAME = 'cookies_notice_close';
const PERMANENT_COOKIE_NAME = 'cookies_notice_accepted';

/**
 * `cookies-notice`
 * CookiesNotice
 *
 * @customElement cookies-notice
 * @litElement
 */
export class CookiesNotice extends HTMLChildrenMixin(LitElement) {
  static get is() {
    return 'cookies-notice';
  }

  static get styles() {
    return [CookiesNoticeStyles];
  }

  static get properties() {
    return {
      /**
       * Object with the data to fill label and input attributes
       * @property
       * @type Object
       */
      data: {
        type: Object,
      },
      /**
       * Bolean to show the componet
       * @property
       * @type String
       */
      showPopup: {
        type: Boolean,
        default: true,
      },
      /**
       * String atribute with the lenguage value
       * @property
       * @type { String }
       */
      language: {
        type: String,
        atribute: 'language',
      },
      /**
       * Number atribute days of cookie duration
       * @property
       * @type {Number}
       */
      daysExpiry: {
        type: Number,
        attribute: 'days-expiry',
      },
    };
  }

  constructor() {
    super();
    this.data = null;
    const cookiesClose = sessionStorage.getItem(SESSION_COOKIE_NAME);
    const cookiesAccepted = document.cookie.indexOf(PERMANENT_COOKIE_NAME) !== -1;
    this.showPopup = cookiesClose ? !cookiesClose : !cookiesAccepted;
    this.firstParagraph = '';
    this.secondParagraph = '';
    this.button = '';
    this.policyLink = {};
    this.language = 'es';
    this.daysExpiry = 730;
  }

  connectedCallback() {
    super.connectedCallback();
    this.data = this._HTMLChildren();
    const dataCookies = this.data[0];
    this.firstParagraph = dataCookies[0];
    this.secondParagraph = dataCookies[1];
    this.button = dataCookies[2];
    this.policyLink = dataCookies[3];
  }

  
  createCookie(expire) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (expire * 24 * 60 * 60 * 1000));
    const baseDomain = window.location.hostname;
    document.cookie = `${PERMANENT_COOKIE_NAME}=true; expires=${expirationDate}; domain=${baseDomain}; path=/`;
  }

  handleSetCookie() {
    this.createCookie(this.daysExpiry);
    this.showPopup = false;
  }

  handleCloseCookie() {
    sessionStorage.setItem(SESSION_COOKIE_NAME, 'true');
    this.showPopup = false;
  }

  render() {
    
    const urlLInk = `/${this.language}/${this.policyLink.href}`;
    return html`
      ${this.showPopup ? html`
          <div class="cookies">  
            <div class="cookies-content">
              <p class="cookies-text">${this.data && this.firstParagraph}</p>
              <p class="cookies-text">
                ${this.data && this.secondParagraph}
                <a
                  href="${urlLInk}" 
                  class="cookies-link"
                  rel="noopener noreferrer"
                >
                  ${this.data && this.policyLink.content}
                </a>
              </p>
            </div>

            <button aria-label="Accept cookies" name="button" class="cookies-btn" @click="${this.handleSetCookie}">${this.data && this.button}</button>
            <span class="cookies-close" @click="${this.handleCloseCookie}"></span> 
          </div>    
        ` : null}`;
  }
}