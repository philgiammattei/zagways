import React from 'react';

export const Footer: React.FC = () => (
  <div className="footer">
    <a href="https://twitter.com/zagways">
      <img src="/img/twitter.svg" alt="Twitter" height="30" width="30" />
    </a>
    <a rel="me" href="https://blue-sky.world/@zagways">
      <img src="/img/mastodon.svg" alt="Mastodon" height="30" width="30" />
    </a>
    <a href="http://feeds.libsyn.com/427340/rss">
      <img src="/img/rss-white.svg" alt="RSS Feed" height="30" width="30" />
    </a>
  </div>
);
