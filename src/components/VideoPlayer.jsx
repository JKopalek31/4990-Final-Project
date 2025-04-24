import { motion } from "framer-motion";

/* helper turns any YouTube link (or plain ID) into an embed URL */
const toEmbedUrl = (input) => {
  try {
    // plain video ID
    if (/^[\w-]{11}$/.test(input)) return `https://www.youtube.com/embed/${input}`;

    const url = new URL(input);

    // youtu.be/<id>
    if (url.hostname === "youtu.be") {
      const id = url.pathname.slice(1);
      const t  = url.searchParams.get("t"); // e.g. 26s
      return embed(id, t);
    }

    // youtube.com/watch?v=<id>
    if (url.hostname.includes("youtube.com") && url.searchParams.get("v")) {
      const id = url.searchParams.get("v");
      const t  = url.searchParams.get("t");  // 26s, 1m30s…
      return embed(id, t);
    }
  } catch { /* fall through */ }

  // already an embed URL or invalid → return unchanged
  return input;

  function embed(id, t) {
    const seconds =
      t && t.endsWith("s") ? parseInt(t) :
      t && t.endsWith("m") ? parseInt(t) * 60 :
      t && /^\d+$/.test(t)   ? parseInt(t) : 0;
    return `https://www.youtube.com/embed/${id}${seconds ? `?start=${seconds}` : ""}`;
  }
};

const VideoPlayer = ({
  title     = "Ainu Speaking Example",
  videoLink = "https://www.youtube.com/watch?v=pI1feWHeUq4"
}) => {
  const src = toEmbedUrl(videoLink);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="mx-auto max-w-3xl rounded-2xl bg-salmon p-4 shadow-lg backdrop-blur-lg"
    >
      <h2 className="mb-2 text-center text-4xl sm:text-6xl font-semibold text-black">
        {title}
      </h2>
      <div className="bg-maroon h-1 w-3/4 mx-auto mb-4"/>

      {/* 16:9 wrapper */}
      <div className="relative w-full overflow-hidden rounded-lg pb-[56.25%]">
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
