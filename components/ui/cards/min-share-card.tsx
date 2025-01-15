'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaLink, FaLinkedin, FaPinterest, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

interface MinShareCardProps {
  onClose?: () => void;
  onCopy?: () => void;
  title?: string;
  subtitle?: string;
}

export default function MinShareCard({
  onClose,
  onCopy,
  title = 'Share On Social Media',
  subtitle = 'Share link via'
}: MinShareCardProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const socialLinks = [
    { name: 'Twitter', icon: FaXTwitter, link: "https://x.com" },
    { name: 'Facebook', icon: FaFacebook, link: "https://facebook.com" },
    { name: 'LinkedIn', icon: FaLinkedin, link: "https://linkedin.com" },
    { name: 'Pinterest', icon: FaPinterest, link: "https://pinterest.com" },
    { name: 'Telegram', icon: FaTelegramPlane, link: "https://telegram.org" },
  ];

  return (
    <div className="w-full max-w-sm bg-[#1C1C1E] rounded-xl p-6 max-sm:p-3 shadow-lg">
      <div className="flex justify-between items-center mb-6 max-sm:mb-3">
        <h2 className="text-white text-xl font-semibold max-sm:text-[16px]">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <IoMdClose size={20} />
        </button>
      </div>

      <div className="space-y-6 max-sm:space-y-3">
        <div>
          <p className="text-gray-400 text-sm mb-4 max-sm:mb-3">{subtitle}</p>
          <div className="flex gap-4 flex-wrap max-sm:gap-2">
            {socialLinks.map((link, i) => (
              <Link
                href={link.link}
                target='_blank'
                key={i}
                className="w-10 h-10 bg-[#2C2C2E] rounded-full flex items-center justify-center hover:bg-[#3C3C3E] transition-colors"
              >
                <div className="relative">
                  <link.icon
                    />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-2">Direct link</p>
          <div onClick={onCopy}>
          <button
          onClick={() => setClicked(true)}
          className="w-full bg-[#2C2C2E] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#3C3C3E] transition-all max-sm:py-2 max-sm:px-2 max-sm:text-sm max-sm:rounded-sm">
            {!clicked && <div className='flex justify-center items-center gap-2'>
                <FaLink className='size-4' />
                Copy link
                </div>
                }
                {clicked && <p>Link Copied</p>}
          </button>
            </div>
        </div>
      </div>
    </div>
  );
}
