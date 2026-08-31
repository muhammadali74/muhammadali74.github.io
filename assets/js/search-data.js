// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Conference presentations, publications, and preprint reports",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Some of the projects that I have done during my undergraduate",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Github Repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Please refer to the pdf for the full CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I have taught, and some advice for students taking them.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-research-internship-at-texas-a-amp-m-university",
          title: 'Research Internship at Texas A&amp;amp;M University',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-won-the-faysal-bank-fintech-hackathon-2024",
          title: 'Won the Faysal Bank Fintech Hackathon 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-graduated-with-distinction-from-habib-university",
          title: 'Graduated with distinction from Habib University',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-joined-covolv-ai-as-an-autonomous-vehicle-algorithms-engineer",
          title: 'Joined Covolv.ai as an Autonomous Vehicle Algorithms Engineer',
          description: "",
          section: "News",},{id: "news-presented-my-paper-at-18th-international-conference-on-bioinformatics-and-computational-biology",
          title: 'Presented my paper at 18th International Conference on Bioinformatics and Computational Biology',
          description: "",
          section: "News",},{id: "news-joined-farmevo-technologies-as-an-ai-and-robotics-engineer",
          title: 'Joined Farmevo Technologies as an AI and Robotics Engineer',
          description: "",
          section: "News",},{id: "projects-alif",
          title: 'ALIF',
          description: "Series of Urdu Pretrained Generative Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-bin-pick-place-pipeline-pincher-x",
          title: 'Bin Pick Place pipeline | Pincher X',
          description: "a vision-assisted algorithm pipeline for bin-picking task using PincherX arm.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-risc-v-processor-design",
          title: 'RISC-V Processor Design',
          description: "32-bit RISC-V processor with single-cycle and pipelined implementations in Verilog",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-navigation-smart-cane",
          title: 'Navigation Smart Cane',
          description: "An indoor navigation assistive device for the visually impaired, built using embedded systems, computer vision, and pathfinding algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-basys3-joystick-interfacing-via-xadc",
          title: 'Basys3 Joystick Interfacing via XADC',
          description: "Interfacing a non-PMOD joystick with the Basys3 FPGA using its built-in XADC analog-to-digital converter.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-territorial-wars-basys3-fpga-game",
          title: 'Territorial Wars — Basys3 FPGA Game',
          description: "A two-player competitive territory-building game implemented on the Basys3 FPGA using VGA display, dual-joystick input, and multiple custom digital design modules.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-cas13b-crrna-discovery-amp-machine-learning-pipeline-for-dengue-virus",
          title: 'CAS13b crRNA Discovery &amp;amp; Machine Learning Pipeline for Dengue Virus',
          description: "An end-to-end computational pipeline for designing high-efficacy CRISPR-Cas13b guide RNAs targeting all four Dengue virus serotypes using genome analysis, biochemical optimization, and machine learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%69%6D%75%68%61%6D%6D%61%64%37%34%36%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/muhammadali74", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/muhammad-a1i", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
