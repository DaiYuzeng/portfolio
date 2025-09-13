import { Github, Linkedin, Codepen } from 'lucide-react';

export default function SocialIcons() {
  return (
    <ul className="mt-8 flex gap-5" aria-label="Social links">
      <li className="text-xs">
        <a href="https://github.com/daiyuzeng" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
          <Github className="w-6 h-6 text-gray-500 hover:text-black" aria-hidden="true" />
        </a>
      </li>
      <li className="text-xs">
        <a href="https://linkedin.com/in/sde-dai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
          <Linkedin className="w-6 h-6 text-gray-500 hover:text-blue-600" aria-hidden="true" />
        </a>
      </li>
      <li className="text-xs">
        <a href="https://instagram.com/cridequeger" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)">
          <Codepen className="w-6 h-6 text-gray-500 hover:text-pink-500" aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}
