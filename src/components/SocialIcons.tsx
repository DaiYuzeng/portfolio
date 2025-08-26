import { Github, Linkedin, Codepen } from 'lucide-react';

export default function SocialIcons() {
  return (
    <ul className="mt-8 flex gap-5">
      <li className="text-xs">
        <a href="https://github.com/daiyuzeng" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-gray-500 hover:text-black" />
          <span className="sr-only">Github</span>
        </a>
      </li>
      <li className="text-xs">
        <a href="https://linkedin.com/in/sde-dai" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">LinkedIn</span>
          <Linkedin className="w-6 h-6 text-gray-500 hover:text-blue-600" />
        </a>
      </li>
      <li className="text-xs">
        <a href="https://instagram.com/cridequeger" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">CodePen</span>
          <Codepen className="w-6 h-6 text-gray-500 hover:text-pink-500" />
        </a>
      </li>
    </ul>
  );
}