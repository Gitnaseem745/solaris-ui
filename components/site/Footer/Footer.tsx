import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-10 text-foreground text-center font-semibold px-3'> <span className='font-sans'>
            {footerText[0]}
        </span>
            <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                <Link
                    target='_blank'
                    href={'https://www.linkedin.com/in/naseem-ansari-25474b269/'}>
                    {footerText[1]}
                </Link>
            </span>
            <span className='font-sans'>
            {footerText[2]}
            </span>
        </div>
    )
}
const footerText = ["Brought to life by ", "Naseem Ansari", " – Building Experiences that Inspire"];
export default Footer
