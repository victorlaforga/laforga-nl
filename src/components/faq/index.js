import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
// import "../styles/styles.scss";
import { Fragment } from "react";

export default function Faq({ defaultOpen, title, description }) {
  return (
    <Disclosure defaultOpen={defaultOpen ? true : false}>
      {({ open }) => (
        <div className="single-faq">
          <Disclosure.Button as={Fragment}>
            <div className="question">
              {" "}
              <h3>{title}</h3>
              <span>
                {!open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="enter"
            enterTo="enter"
            enterFrom="leave"
            leave="leave"
          >
            <Disclosure.Panel>
              <div className="answer">
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}
