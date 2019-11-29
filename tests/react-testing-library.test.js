import React from "react";
import "babel-polyfill";
import App from "../src/app";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

afterEach(cleanup);

test("renders a message", () => {
  const { container, getByText } = render(<App />);

  expect(getByText("React boilerplate")).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <section
      class="sc-bdVaJa loRihK"
    >
      <div
        class="sc-htpNat sc-bxivhb cgztxR"
      >
        <div
          class="sc-htpNat bYWDEK"
        >
          <ul>
            <li>
              <a
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="sc-bwzfXH cLbPwn"
      >
        <h2>
          React boilerplate
        </h2>
        <svg
          height="200px"
          id="Layer_2"
          viewBox="0 0 3618.6 3618.6"
          width="200px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>
            .st0
            {
            fill:#222
            }
            .st1
            {
            fill:#00d8ff
            }
            .st2
            {
            fill:none;stroke:#00d8ff;stroke-width:144.7456;stroke-miterlimit:10
            }
          </style>
          <path
            class="st0"
            d="M0 0h3618.6v3618.6H0z"
          />
          <circle
            class="st1"
            cx="1806.5"
            cy="1807.1"
            r="302.6"
          />
          <path
            class="st2"
            d="M1806.5 1191.9c406.2 0 783.6 58.3 1068.1 156.2 342.8 118 553.6 296.9 553.6 458.9 0 168.8-223.4 358.9-591.5 480.8-278.3 92.2-644.6 140.4-1030.2 140.4-395.4 0-769.7-45.2-1051.2-141.4-356.1-121.7-570.6-314.2-570.6-479.8 0-160.7 201.3-338.2 539.3-456 285.6-99.5 672.3-159.1 1082.5-159.1z"
          />
          <path
            class="st2"
            d="M1271 1501.3c202.9-351.9 442-649.7 669-847.2 273.5-238 533.8-331.2 674.1-250.3 146.2 84.3 199.3 372.8 121 752.7-59.2 287.2-200.4 628.5-393.1 962.6-197.5 342.5-423.7 644.2-647.6 840-283.3 247.7-557.3 337.3-700.7 254.6-139.2-80.3-192.4-343.3-125.7-695 56.4-297.4 198-662.1 403-1017.4z"
          />
          <path
            class="st2"
            d="M1271.5 2119.8c-203.5-351.6-342.1-707.4-399.9-1002.7-69.6-355.8-20.4-627.9 119.8-709 146.1-84.6 422.5 13.5 712.5 271 219.3 194.7 444.4 487.5 637.6 821.3 198.1 342.2 346.6 688.8 404.3 980.5 73.1 369.2 13.9 651.3-129.4 734.2-139.1 80.5-393.5-4.7-664.9-238.2-229.2-197.3-474.5-502.1-680-857.1z"
          />
        </svg>
      </div>
    </section>
  `);
});
