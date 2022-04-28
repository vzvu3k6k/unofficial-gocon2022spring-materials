export function SpeakerDeck({ src }) {
  return (
    <iframe
      className="speakerdeck-iframe"
      style={{
        border: "0px none",
        background: "rgba(0, 0, 0, 0.1) none repeat scroll 0% 0% padding-box",
        margin: 0,
        padding: 0,
        borderRadius: "6px",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
        width: "560px",
        height: "315px",
      }}
      src={src}
      allowFullScreen={true}
      mozallowfullscreen={true}
      webkitallowfullscreen={true}
      data-ratio="1.7777777777777777"
      frameBorder="0"
    ></iframe>
  );
}
