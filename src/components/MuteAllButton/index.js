export default function muteAllButton({ participants }) {
  const muteAll = () => {
    if (participants) {
      participants.map(participant => {
        participant.camera.disableAudio();
      });
    }
  };

  return (
    <button className="buttons" onClick={muteAll}>
      Mute all
    </button>
  );
}
