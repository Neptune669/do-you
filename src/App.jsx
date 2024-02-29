import { useState } from "react";
import { motion } from "framer-motion";

const MESSAGES = [
  "Are you sure?",
  "Think again ",
  "please try again",
  "I'm sorry, I don't think you do",
  "I don't think you do",
  "That's not quite right...",
  "Just say 'yes' already!",
  "I know you do ",
];

function App() {
  const [currentMessage, setCurrentMessage] = useState("No");
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [yesWidth, setYesWidth] = useState(80); // Initial width
  const [yesHeight, setYesHeight] = useState(40); // Initial height

  const handleNoClick = () => {
    const randomIndex = Math.floor(Math.random() * MESSAGES.length);
    setCurrentMessage(MESSAGES[randomIndex]);

    setYesWidth(yesWidth + 20); // Increase width on click
    setYesHeight(yesHeight + 10); // Increase height on click
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto max-w-7xl">
      <h1 className="text-6xl text-center text-pink-700">Do you love me?</h1>

      <div className="flex items-center gap-4 mt-10">
        <motion.button
          whileTap={{ x: [0, 5, -5, 5, 0] }}
          transition={{ duration: 0.3 }}
          className="h-10 p-2 text-white bg-black rounded-lg w-fit"
          onClick={handleNoClick}
        >
          {currentMessage}
        </motion.button>

        <button
          style={{ width: `${yesWidth}px`, height: `${yesHeight}px` }} // Dynamically set button size
          className="flex items-center justify-center text-white bg-pink-500 rounded-lg"
          onClick={() => {
            setYesWidth(80); // Reset width on click
            setYesHeight(40); // Reset height on click
            setIsYesClicked(true);
          }}
          disabled={isYesClicked}
        >
          Yes 💗
        </button>
      </div>

      {isYesClicked && (
        <>
          <h1 className="my-6 text-3xl text-red-400">I knew you loved me ❤️</h1>
          <button
            className="w-40 h-10 text-white bg-black rounded-lg"
            onClick={() => {
              setYesWidth(80); // Reset width on click
              setYesHeight(40); // Reset height on click
              setIsYesClicked(false);
            }}
          >
            Go back
          </button>
        </>
      )}
    </div>
  );
}

export default App;
