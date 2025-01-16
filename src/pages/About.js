import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Main from '../layouts/Main';

const LinkRenderer = ({ ...children }) => {
  <Link {...children} />;
};

const About = () => {
  const [markdown, setMarkdown] = useState('');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    fetch('/data/about.md')
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);

        const count = text
          .split(/\s+/)
          .map((s) => s.replace(/\W/g, ''))
          .filter((s) => s.length).length;
        setWordCount(count);
      })
      .catch((err) => console.error('Error fetching about.md:', err));
  }, []);

  return (
    <Main title="About" description="Learn about David Justice">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading">
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {wordCount} words)</p>
          </div>
        </header>
        <ReactMarkdown components={{ a: LinkRenderer }}>
          {markdown}
        </ReactMarkdown>
      </article>
    </Main>
  );
};

export default About;
