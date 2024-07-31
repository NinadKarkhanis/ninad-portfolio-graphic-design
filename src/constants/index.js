import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `As a cybersecurity enthusiast, I am deeply passionate about the field and have extensive hands-on experience with a variety of network security devices. My expertise includes working with Cisco routers and switches, which has given me a solid foundation in networking fundamentals and advanced configurations. Additionally, I have practical experience with Palo Alto firewalls, Checkpoint firewalls, and ASA (Adaptive Security Appliance), allowing me to effectively manage and secure network environments. I am also familar with Kali Linux and Wireshark, enhancing my ability to conduct security assessments and analyze network traffic. `;

export const ABOUT_TEXT = `I have completed my Bachelor's in Computer Applications from Somaiya Vidyavihar University. Currently, I am pursuing a Cyber Security course from Connecting Cybernetworks in Andheri. Through this course, I have learned about networking fundamentals and gained hands-on experience with switches, routers, and firewalls, including Check Point and Palo Alto.

I have also completed several virtual labs throughout the course, which have significantly strengthened my practical skills in cybersecurity. These labs allowed me to simulate real-world scenarios, troubleshoot issues, and apply theoretical knowledge in a controlled environment. In my free time, I enjoy sketching, which helps me develop my attention to detail and creativity.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Graphic Designer Internship",
    company: "Chartered Studies",
    description: `At Chartered Studies, I created engaging social media posts, especially for Instagram, to promote events and activities, enhancing my skills in graphic design and online communication.`,
    technologies: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
  },
  {
    year: "2023 ",
    role: "Part-Time Faculty",
    company: "Raj Computer Academy",
    description: `Trained students in Adobe Photoshop, C programming, and AutoCAD fundamentals, covering essential tools, techniques, and workflows for image editing, programming, and 2D design.`,
    technologies: ["Auto CAD", "Adobe Photoshop", "C"],
  }
];

export const EDUCATION = [
  {
    year: "2021 - 2024",
    role: "Bachelor Of Computer Applications",
    company: "S K Somaiya College, Vidyavihar",
  },
  {
    year: "2024",
    role: "AWS re/start : Fundamentals Of Cloud Services",
    company: "Anudip Foundation, Online",
  },
  {
    year: "2023 - 2024",
    role: "Cyber Security Course",
    company: "Connecting Cyber Networks, Andheri",
  },
  {
    year: "2021",
    role: "Higher Secondary Certificate",
    company: "CHM College, Ulhasnagar",
  },
  {
    year: "2019",
    role: "Secondary School Certificate",
    company: "P.M.M Rotary School, Ambernath",
  }
];

export const PROJECTS = [
  {
    title: "Layer 2 - Security.",
    image: project1,
    description:
      "In this virtual lab, I have implemented Layer 2 security on the switch device. A Kali Linux machine within the network was used to conduct various attacks. We then applied appropriate security measures on the switch to prevent these attacks.",
    technologies: ["Kali Linux", "Cisco Switch","Cisco Router"],
  },
  {
    title: "Securing Network Traffic with Palo Alto Firewall and NAT configuration.",
    image: project2,
    description:
      "In this virtual lab, I have configured policies on a Palo Alto Firewall to ensure that only the required traffic is allowed to flow in and out. Routing protocols such as OSPF and RIP are used to establish and maintain network connectivity. Additionally, we have implemented various types of NAT. For example, internal machines can access external networks using a public IP address. Furthermore, we set up policies to allow external access to services in the DMZ",
    technologies: ["Palo Alto Firewall","Cisco Switch","Cisco Router"],
  },
  {
    title: "Palo Alto Firewall Failover.",
    image: project3,
    description:
      "In this virtual lab, I have configured failover on the Palo Alto Firewall. This ensures that if one firewall fails for any reason, the other will take over seamlessly, preventing downtime and avoiding network inconvenience.",
    technologies: ["Palo Alto Firewall","Cisco Switch","Cisco Router"],
  },
  {
    title: "Securing Network Traffic with CheckPoint Firewall and NAT configuration.",
    image: project4,
    description:
      "In this virtual lab, I have configured policies on a Checkpoint Firewall to ensure that only the required traffic is allowed to flow in and out. Routing protocols such as OSPF, EIGRP, and RIP are used to establish and maintain network connectivity. Additionally, we have implemented various types of NAT. For example, internal machines can access external networks using a public IP address. Furthermore, we set up policies to allow external access to services in the DMZ",
    technologies: ["Checkpoint Firewall","Cisco Switch","Cisco Router"],
  },
  {
    title: "Treasure Quest",
    image: project5,
    description:
      "A cross-platform 2D platformer game designed for competitive play, where players compete for the highest score or the fastest completion time. This project was developed as part of my final year project.",
    technologies: ["C#", "Unity"],
  }
];

export const CONTACT = {
  phoneNo: "+91 9823377138 ",
  email: "ninadkarkhanis2003@gmail.com",
};
