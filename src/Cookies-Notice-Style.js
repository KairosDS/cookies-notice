import { css } from 'lit-element';

export const CookiesNoticeStyles = css`

:host {
  --line-height-text: var(--line-height, 28px ) 
  --font-size-text: var(--base-font-size, 18px );
  --background-cookies: var(--cookies-color, #ffffff)
  --background-button: var(--button-color, #ffffff)
  --text-color-cookies: var(--base-text, #000000);
  --text-color-buttom: var(--buttom-text, #000000);
}


.cookies {
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    padding:0 15px;
    background-color: var(--cookies-color);
    color:var(--base-text);
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9;
    padding-bottom: 40px;
  }

  .cookies-content {
      margin-top: 54px;
  }  

  .cookies-text {
      font-family: ‘avenir’, sans-serif;
      font-size: 16px;
      line-height: 27px;
      margin: 24px 0 19px 0; 
  }

  .cookies-btn {
      background-color:#ffffff;
      border: 0;
      color:#0E3540;
      text-transform:uppercase;
      min-height:35px;
      border-radius:5px;
      font-weight:600;
      font-size:14px;
      margin: 20px 0 0 0;
      text-decoration: none
  }

  .cookies-link {
      color:#FF7900;
      text-decoration: underline;
      font-size: 13px;
      font-weight: 600;
  }

  .cookies-close {
      position: absolute;
      top: 24px;
      right: 15px;
  }

  .cookies-close:after {
    content:url('/assets/close-icon-white.png');
  } 

  @media all and (min-width: 768px) {
    .cookies {
      display:flex;
      flex-direction: row;
      height: 123px;
      justify-content: space-around;
      line-height: 0;
      align-items: center;
      padding: 34px 0 31px 0;
    }

    .cookies-text {
      font-size: 16px;
      line-height: 29px;
      padding: 0;
      margin: 8px 0;
    }

    .cookies-content {
      margin: 0 12px 0 0;
      text-align: left;
    }

    .cookies-link {
      font-size: 16px;
    }
    
    .cookies-btn {
      padding-top: 2px 0;
      margin: 0;
      height: 50px;
    }
    .cookies-close {
      align-self:center;
      position: relative;
      top: 0;
      right: 0;
    }
  }

  @media all and (min-width: 1200px) {
      .cookies {
        justify-content: center;
      }

      .cookies-content {
        margin-top: 0px;
        max-width: 100%;
      }
      
      .cookies-btn {
        cursor: pointer;
        margin: 35px 56px 35px 100px;
        padding-top: 2px 0;
        width: 195px;
      }
      .cookies-close {
        align-self:center;
        cursor: pointer;
        position: relative;
        top: 0;
        right: 0;
      }
    }

`