// src/components/ReviewsMarquee.tsx
import { Marquee } from "./marquee";
import "./marquee-reviews.css";

const reviews = [
  { name: "Jack",  username: "@jack",  body: "I've never seen anything like this before. It's amazing. I love it.", img: "https://avatar.vercel.sh/jack" },
  { name: "Jill",  username: "@jill",  body: "I don't know what to say. I'm speechless. This is amazing.", img: "https://avatar.vercel.sh/jill" },
  { name: "John",  username: "@john",  body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/john" },
  { name: "Jane",  username: "@jane",  body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jane" },
  { name: "Jenny", username: "@jenny", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jenny" },
  { name: "James", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({
  img, name, username, body,
}: { img: string; name: string; username: string; body: string }) {
  return (
    <figure className="review-card">
      <div className="review-header">
        <img className="review-avatar" width="32" height="32" alt={name} src={img} />
        <div className="review-user-info">
          <figcaption className="review-name">{name}</figcaption>
          <p className="review-username">{username}</p>
        </div>
      </div>
      <blockquote className="review-body">{body}</blockquote>
    </figure>
  );
}

export default function ReviewsMarquee() {
  return (
    <div className="marquee-reviews-container">
      {/* Heading Section */}
      <div className="reviews-heading">
        <h2>Customer Reviews</h2>
        <p>See what our clients are saying about us</p>
      </div>
      
      <Marquee pauseOnHover className="marquee-row [--duration:20s]">
        {firstRow.map((r) => <ReviewCard key={r.username} {...r} />)}
      </Marquee>
      <Marquee reverse pauseOnHover className="marquee-row [--duration:20s] mt-4">
        {secondRow.map((r) => <ReviewCard key={r.username} {...r} />)}
      </Marquee>

      {/* soft edge fades */}
      <div className="edge-fade-left"></div>
      <div className="edge-fade-right"></div>
    </div>
  );
}
