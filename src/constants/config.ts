type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Aakash Sundar — Portfolio",
    fullName: "Aakash Sundar S",
    email: "saakashsundar007@gmail.com",
  },
  hero: {
    name: "Aakash Sundar",
    p: ["I build scalable backend systems,", "ML models, and data solutions"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "Let's get in touch!",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a seasoned Software Developer with over 4 years of experience specializing in backend engineering and data analytics. My expertise spans the MEAN stack, Python, and cloud platforms like AWS and GCP. I excel at developing scalable systems, implementing ML models, and optimizing performance. From enhancing influencer scoring algorithms to architecting microservices, I bring a blend of technical depth and practical problem-solving to every project.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `These projects showcase my expertise in backend development, machine learning, and system architecture. From building data automation tools like SQL2Sheet to implementing secure remote access solutions with AnywhereDrive, each project demonstrates my ability to deliver robust, scalable solutions that solve real business challenges. My work in sentiment analysis and scoring algorithms highlights my proficiency in ML and data analytics.`,
    },
  },
};
