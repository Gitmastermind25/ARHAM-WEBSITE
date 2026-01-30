import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function OfficeBearers() {
  const [showAll, setShowAll] = useState(false);

  const teamMembers = [
    {
      name: "Aashna Anand",
      role: "President",
      description:
        "Sweet as nature, calm as the breeze, our President Aashna Anand With quiet ambition, she gracefully leads.Rooted in purpose, her vision stays true,Guiding green tomorrows in all that we do. 🌿",
      imgSrc: "/obimages/Aashna.png",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/aashnuhh.__?igsh=emxpdmNlcXR6d2wx", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/aashna-anand-2a1b5b323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Kritagya Nirmal",
      role: "Vice President",
      description:
        "  Calm in approach, firm in purpose, our Vice President Kritagya Nirmal, With dedication and clarity, he strengthens the foundation of our club.Driven by responsibility and shared vision, he supports every step forward,Working together to shape meaningful and greener tomorrows.🌱",
      imgSrc: "/obimages/kritagya.jpg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/kritagya._/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Rishabh jain",
      role: "Secratary",
      description:
        "Commander of precision, our Secretary, Rishabh Jain.Like the graceful Birch, he stands composed and refined, with ordered roots of research and a forward-focused mind.",
      imgSrc: "/obimages/Rishabh.jpg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/jainrishabh.14?igsh=MWRvZ3M0azQ0ZDdycg==", icon: <FaInstagram /> },
        { platform: "Linkedin", url: " https://www.linkedin.com/in/rishabh-jain-0b779b325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Shikhar Khare",
      role: "Joint Secretary",
      description:
        "Grounded in purpose, vibrant in vision, our Joint Secretary, Shikhar Khare brings forest-like resilience and a balanced mind to our mission. By fostering collaboration, he ensures our vision stays evergreen.Leading with natural grace toward a sustainable tomorrow.",
      imgSrc: "/obimages/shikhar.jpg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/khare._11/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/shikhar-khare-3b8780310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Nikhil Gupta",
      role: "Treasurer",
      description:
        "Purpose-driven and detail-oriented, our Treasurer, Nikhil Gupta turns numbers into meaningful action, ensuring transparency while working toward a greener, more aware campus.",
      imgSrc: "/obimages/nikhil.jpeg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/nikhil_gupta_24/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/nikhil-gupta-24n10g2006/", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "https://wa.me/+917827731527", icon: <FaWhatsapp /> },
      ],
    },
  ];

  // Show first 5 members by default, show all if `showAll` is true
  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 5);

  return (
    <section className="team-section">
      <div className="team-container font-font1">
        <h2 className="team-title font-font3 font-black">Meet Our Office Bearers</h2>

        <div className="w-full h-full grid sm:grid-cols-2 lg:grid-cols-5 gap-4 ">
          {displayedMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.imgSrc} alt={member.name} className="team-img h-28 w-28 object-cover" />
              <h3 className="team-name font-font3 text-xl md:text-2xl font-black">{member.name}</h3>
              <p className="team-role text-base sm:text-lg md:text-xl font-semibold">{member.role}</p>
              <p className="team-description md:text-sm text-xs">{member.description}</p>
              <div className="team-social">
                {member.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-link"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {/*<div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-[#D9EFDE] text-black font-semibold rounded-lg shadow-md hover:bg-[#b4f6a0d1]"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>*/}
      </div>
    </section>
  );
}
