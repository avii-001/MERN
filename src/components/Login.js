import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  function handleLogin(event) {
    console.log(event.target.email.value);
  }
  const [email, setEmail] = useState("");

  return (
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Login
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="container-login">
                <div className="mb-3 row">
                  <label
                    htmlFor="email"
                    className="col-sm-2 col-htmlForm-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      readonly
                      className="htmlForm-control-plaintext"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-htmlForm-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="htmlForm-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-light my-3"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Signup
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="container-login">
              <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-htmlForm-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    readonly
                    className="htmlForm-control-plaintext"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-htmlForm-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="htmlForm-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <button
                type="button"
                class="btn btn-light my-3"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
