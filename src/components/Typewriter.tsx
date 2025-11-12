import { useEffect, useState } from 'react';

type Props = {
  words: string[];
  typingSpeed?: number; // ms per char
  pauseTime?: number;   // ms at end of word
};

export default function Typewriter({ words, typingSpeed = 70, pauseTime = 900 }: Props) {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length] || '';

    if (!deleting && display === current) {
      const pause = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (deleting && display === '') {
      setDeleting(false);
      setWordIndex((idx) => (idx + 1) % words.length);
      return;
    }

    const step = () => {
      if (deleting) {
        setDisplay((d) => d.slice(0, -1));
      } else {
        setDisplay(current.slice(0, display.length + 1));
      }
    };

    const timer = setTimeout(step, deleting ? typingSpeed / 1.5 : typingSpeed);
    return () => clearTimeout(timer);
  }, [display, deleting, wordIndex, words, typingSpeed, pauseTime]);

  return (
    <span>
      {display}
      <span className="typewriter-caret" aria-hidden="true">|</span>
    </span>
  );
}