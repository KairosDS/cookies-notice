import { expect, fixture, html } from '@open-wc/testing';
// import sinon from 'sinon';
import "../cookies-notice";


describe("cookies-notice", () => {
    it("should have the basic template", async () => {
          const el = await fixture(
          html`
            <cookies-notice>
                
            </cookies-notice>
          `
          );

    const base = el.shadowRoot.querySelector('.cookies');

    expect(base).not.to.be.null;
    });

    
});