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
  },{id: "nav-research",
          title: "research",
          description: "Four threads of my work on machine learning and electronic structure for organometallic chemistry.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Reverse chronological. * denotes equal contribution. Also on Google Scholar and ORCID.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download the PDF with the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-work-on-graph-neural-networks-for-predicting-metal-ligand-coordination-is-out-in-pnas",
          title: 'Our work on graph neural networks for predicting metal–ligand coordination is out in...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-at-aiche-in-boston-on-graph-neural-networks-for-metal-ligand-coordination-in-the-data-science-and-ml-approaches-to-catalysis-session",
          title: 'Gave a talk at AIChE in Boston on graph neural networks for metal–ligand...',
          description: "",
          section: "News",},{id: "news-our-ensemble-learning-approach-to-identifying-dynamic-and-hemilabile-coordination-modes-is-published-in-jacs",
          title: 'Our ensemble-learning approach to identifying dynamic and hemilabile coordination modes is published in...',
          description: "",
          section: "News",},{id: "news-gave-an-invited-talk-to-the-entalpic-lematerial-reading-group-on-exploring-structure-properties-and-reactivity-in-transition-metal-complexes-with-deep-learning-and-quantum-chemistry",
          title: 'Gave an invited talk to the Entalpic LeMaterial Reading Group on exploring structure,...',
          description: "",
          section: "News",},{id: "news-honored-to-be-named-an-entalpic-ai-for-science-fellow",
          title: 'Honored to be named an Entalpic AI for Science Fellow.',
          description: "",
          section: "News",},{id: "news-started-as-an-algorithms-and-applications-intern-at-ibm-research-in-yorktown-heights-working-on-wavefunction-embedding-for-correlated-electronic-structure-and-generative-models-for-proteins",
          title: 'Started as an Algorithms and Applications Intern at IBM Research in Yorktown Heights,...',
          description: "",
          section: "News",},{id: "news-elemenet-is-on-arxiv-a-unified-package-for-molecular-ml-across-elements-1-100-with-built-in-uncertainty-quantification",
          title: 'ElemeNet is on arXiv — a unified package for molecular ML across elements...',
          description: "",
          section: "News",},{id: "projects-metal-ligand-coordination",
          title: 'metal–ligand coordination',
          description: "graph neural networks that predict how a ligand actually binds a metal, and the structure-generation tools that use them",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_coordination/";
            },},{id: "projects-datasets-for-open-shell-chemistry",
          title: 'datasets for open-shell chemistry',
          description: "high-fidelity quantum chemistry data across charge and spin states, where machine learning for organometallics has been starved",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_datasets/";
            },},{id: "projects-models-across-the-periodic-table",
          title: 'models across the periodic table',
          description: "deep learning architectures, generative models, and uncertainty quantification built to survive elements past the second row",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_models/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_jwt.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%77%74@%6D%69%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6920-1105", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=1oeDzDIAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jwtoney", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jacob-w-toney", "_blank");
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
