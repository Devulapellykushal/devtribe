import React from 'react';
import Squares from '../Squares';
import './marquee-reviews.css';

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure className="review-card">
      <div className="review-header">
        <img className="review-avatar" width="32" height="32" alt="" src={img} />
        <div className="review-info">
          <figcaption className="review-name">{name}</figcaption>
          <p className="review-username">{username}</p>
        </div>
      </div>
      <blockquote className="review-body">{body}</blockquote>
    </figure>
  );
};

const Marquee = ({ 
  children, 
  reverse = false, 
  pauseOnHover = false, 
  vertical = false, 
  repeat = 4,
  className = ""
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  className?: string;
}) => {
  return (
    <div
      className={`marquee-container ${vertical ? 'marquee-vertical' : 'marquee-horizontal'} ${className}`}
      style={{ '--repeat': repeat } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`marquee-item ${reverse ? 'marquee-reverse' : ''} ${pauseOnHover ? 'marquee-pause-on-hover' : ''}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

const ReviewsMarquee: React.FC = () => {
  return (
    <section className="reviews-section">
      {/* Squares Background - Only for Customer Reviews */}
      <div className="reviews-squares-background">
        <Squares
          speed={0.5}
          squareSize={80}
          direction='diagonal'
          borderColor='rgba(220, 38, 38, 0.3)'
          hoverFillColor='rgba(220, 38, 38, 0.1)'
          className="reviews-squares"
        />
      </div>

      <div className="reviews-container">
        {/* Left Side - DevTribe Content */}
        <div className="reviews-content">
          <div className="reviews-header">
            <h2 className="reviews-title">
              Just Build it for all your
            </h2>
            <div className="reviews-categories">
              <span>Web Apps</span>
              <span>Mobile Apps</span>
              <span>AI Solutions</span>
              <span>Startups</span>
            </div>
            <h2 className="reviews-title">
              with
            </h2>
            <h1 className="reviews-brand">DevTribe</h1>
            <p className="reviews-subtitle">
              India's First & Fastest Full-Stack Development Service
            </p>
            <p className="reviews-description">
              Code, Deploy, Scale in Minutes!
            </p>
          </div>
          
          <div className="reviews-cta">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Hire Developer</button>
          </div>
          
          <div className="reviews-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.95/5</span>
              <span className="stat-label">Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Developers</span>
            </div>
          </div>
        </div>

        {/* Right Side - Marquee Reviews */}
        <div className="reviews-marquee">
          <div className="marquee-wrapper">
            <Marquee pauseOnHover={false} vertical className="marquee-vertical-left">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover={false} vertical className="marquee-vertical-right">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsMarquee;
