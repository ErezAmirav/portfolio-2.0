import React from 'react';
import Link from 'next/link';
import { MdOutlineMail } from 'react-icons/md';

const ContactSection = () => {
  return (
    <section id="contact">
      <h2 className="text-center text-4xl font-bold text-white mt-20 mb-8 md-mb-12">
        Contact Me
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md-gap-12 text-center">
        <div></div>
        <Link href="mailto:erezamirav@gmail.com">
          <div className="text-white rounded-xl mt-3 bg-[#181818] py-6 px-4 flex flex-col items-center hover:bg-[#1f1e1e]">
            <MdOutlineMail className="text-2xl mb-2" />
            <h5 className="text-xl font-semibold mb-2">Email</h5>
            <p className="text-[#ADB7BE]">erezamirav@gmail.com</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
