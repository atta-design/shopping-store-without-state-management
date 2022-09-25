import React from "react";

export default function Colapse() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary mx-auto mt-5"
        data-toggle="collapse"
        data-target="#demo"
      >
        See rules and conditions
      </button>
      <div id="demo" class="collapse">
        <p className="rule-text">
          {" "}
          These General Terms and Conditions for Online Sales (hereinafter
          referred to as “General Terms”) apply to all purchase orders you place
          on the Viscovery® online store located at www.viscovery.net
          (hereinafter referred to as “Website”) and your subsequent agreement
          with Viscovery Software GmbH, Kupelwiesergasse 27, 1130 Wien, Austria
          (hereinafter referred to as “Viscovery”) regarding your purchase of
          Viscovery® software licenses, updates or upgrades (collectively
          referred to as “Software”).
        </p>
        <p className="rule-text">
          (2) In addition to these General Terms, the Viscovery Software license
          agreement regarding the Software use shall apply. You can access the
          corresponding license agreement through the provided link. You must
          also accept this license agreement before you can place your order.
        </p>
        <p className="rule-text">
          (3) These General Terms shall apply exclusively. We do not accept any
          conflicting or deviating terms and conditions, unless this has been
          agreed in the individual case with a legal representative of Viscovery
          in writing. Our General Terms shall apply to deliveries even in the
          event that the conflicting or deviating terms have not been
          contradicted by Viscovery.
        </p>
        <p className="rule-text">
          (4) These General Terms apply equally to commercial entities and
          consumers. Differing provisions for consumers have been made where
          necessary.
        </p>
      </div>
    </div>
  );
}
