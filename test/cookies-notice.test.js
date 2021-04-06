import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import "../cookies-notice";
const elOne = await fixture(
    html`
        <cookies-notice>
            <div>
                <p>Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web.</p>
                <p>Si continúa utilizando este sitio asumiremos que está de acuerdo.</p>
                <button>aceptar y cerrar</button>
                <a href="cookie-policy.html"
                aria-label="Abre en la misma ventana, politica de privadidad" 
                target="_self" 
                rel="noopener noreferrer">Política de privacidad</a>
            </div>
        </cookies-notice>
    `
    );

describe("cookies-notice", () => {

    it("should have the basic template", async () => {
        const el = await fixture(
            html`
                <cookies-notice>
                    <div>
                        <p>Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web.</p>
                        <p>Si continúa utilizando este sitio asumiremos que está de acuerdo.</p>
                        <button>aceptar y cerrar</button>
                        <a href="cookie-policy.html"
                        aria-label="Abre en la misma ventana, politica de privadidad" 
                        target="_self" 
                        rel="noopener noreferrer">Política de privacidad</a>
                    </div>
                </cookies-notice>
            `
            );

        const base = el.shadowRoot.querySelector('.cookies');

        expect(base).not.to.be.null;
    });
    it("should have the basic template, with language attribute", async () => {
        const el = await fixture(
        html`
            <cookies-notice language="es">
                <div>
                    <p>Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web.</p>
                    <p>Si continúa utilizando este sitio asumiremos que está de acuerdo.</p>
                    <button>aceptar y cerrar</button>
                    <a href="cookie-policy.html"
                    aria-label="Abre en la misma ventana, politica de privadidad" 
                    target="_self" 
                    rel="noopener noreferrer">Política de privacidad</a>
                </div>
            </cookies-notice>
        `
        );

        const base = el.shadowRoot.querySelector('.cookies');

        expect(base).not.to.be.null;
    });

 
    it("Call to handleSetCookie method", async () => {
        const el = await fixture(
        html`
            <cookies-notice>
                <div>
                    <p>Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web.</p>
                    <p>Si continúa utilizando este sitio asumiremos que está de acuerdo.</p>
                    <button>aceptar y cerrar</button>
                    <a href="cookie-policy.html"
                    aria-label="Abre en la misma ventana, politica de privadidad" 
                    target="_self" 
                    rel="noopener noreferrer">Política de privacidad</a>
                </div>
            </cookies-notice>
        `
        );

        const acceptCookies = el.shadowRoot.querySelector('.cookies-btn');
        const spy = sinon.spy(el , 'handleSetCookie');
        acceptCookies.click();
      
        expect(spy.called);

    });

    it("Call to handleCloseCookie method", async () => {
        
        const spy = sinon.spy(elOne , 'handleCloseCookie');
        const closePopUpCookies = elOne.shadowRoot.querySelector('.cookies-close');
        closePopUpCookies.click();

        expect(spy.called);
    });

});