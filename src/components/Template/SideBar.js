import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>David Justice</h2>
        <p>
          <a href="mailto:asu23justice@gmail.com">asu23justice@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi there, I&apos;m David. Most folks just call me Justice. I enjoy continually
        learning and new experiences. I&apos;m an{' '}
        <a href="https://www.appstate.edu/">App State</a> graduate, self-taught
        coder, and enthusiastic adventurer, among many other things. Currently
        traveling around the USA and living and working out of a camper named
        Windy with my dog, Kona.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; David Justice <Link to="/">DJustice23.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
