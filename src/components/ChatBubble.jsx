import { Link } from 'react-router-dom';

export default function ChatBubble() {
  return (
    <Link className="chat-bubble" to="/contact" aria-label="Chat with us">
      {/* Put your chat avatar at public/images/avatar.jpg */}
      <img
        src="/images/avatar.jpg"
        alt=""
        width="56"
        height="56"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
    </Link>
  );
}