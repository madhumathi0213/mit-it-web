// gatsby-node.js
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const teachers = [
    {
      name: 'Dr. M.R. Sumalatha',
      role: 'Professor and Head',
      scholar_link: 'http://scholar.google.co.in/citations?user=OkIGkCgAAAAJ',
      irns: 'https://annauniv.irins.org/profile/117880',
      research_area: [
        'Distributed Systems',
        'Cloud Computing',
        'Big Data Analytics',
        'Social Internet of things',
        'Data Security and Privacy',
        'Computer Forensics'
      ],
      mobile: '97108 14484',
      id: '6312/6472',
      staff_id: 1,
      image: 'https://imgur.com/S8rur5P.jpg',
      mail: 'sumalathaaramachandran@gmail.com',
    },
    {
      name: 'Dr. P.  AnandhaKumar',
      role: 'Professor',
      staff_id: 1,
      scholar_link: 'http://scholar.google.co.in/citations?user=8Gry04kAAAAJ',
      irns: 'https://annauniv.irins.org/profile/117879',
      research_area: [
        'Artificial Intelligence',
        'Pattern Recognition'
      ],
      mail: 'anandh@mitindia.edu',
      mobile: '044 2251 6461',
      id: '6312/6472',
      image: 'https://imgur.com/DIg08hz.png',
    },
    {
      name: 'Dr. Dhananjay Kumar',
      role: 'Professor',
      staff_id: 1,

      scholar_link: 'http://scholar.google.co.in/citations?user=OF9U2GMAAAAJ',
      irns: 'https://annauniv.irins.org/profile/117881',
      research_area: [
        'Computer vision',
        'AR/VR Systems',
        'Multimedia Systems',
        'Mobile communication and computing'
      ],
      mail: 'dhananjay@annauniv.edu',
      mobile: '044 -22516019 ',
      id: '6312/6472',
      image: 'https://imgur.com/gLt3R4W.png',
    },
    {
      name: 'Dr Radha Senthilkumar',
      role: 'Associate Professor',
      id: '6311/6471',
      staff_id: 1,

      scholar_link: 'http://scholar.google.co.in/citations?user=zDaLSU4AAAAJ',
      image: 'https://imgur.com/nB7YbLC.png',
      mail: 'radhasenthilkumar@gmail.com',
      irns: 'https://annauniv.irins.org/profile/262780',
      research_area: ['Data Mining', 'Knowledge Discovery'],
      mobile: '98841 59414'
    },
    {
      name: 'Dr. P. Kola Sujatha',
      role: 'Associate Professor',
      scholar_link: 'http://scholar.google.co.in/citations?user=PvVP2IsAAAAJ',
      id: '6311/6471',
      staff_id: 1,

      image: 'https://imgur.com/Z0GlnUy.png',
      mail: 'pkolasujatha@annauniv.edu',
      irns: 'https://annauniv.irins.org/profile/117884',
      research_area: ['Intrusion Detection System', 'Artificial Intelligence', 'Machine Learning', 'Data Mining', 'Soft Computing', 'Data Analytics'],
      mobile: '90925 03099'
    },
    {
      name: 'Dr. S. Umamaheswari',
      role: 'Associate Professor',
      id: '6304/6474',
      scholar_link: ' http://scholar.google.co.in/citations?user=My9jdJkAAAAJ',
      image: 'https://imgur.com/fzUrx4O.png',
      mail: 'uma_sai@mitindia.edu',
      irns: 'https://annauniv.irins.org/profile/117886',
      research_area: ['VLSI', 'Embedded Systems'],
      mobile: '94444 93377'
    }, {
      name: 'Dr. G. Rajesh',
      role: 'Associate Professor',
      id: '6023',
      scholar_link: 'http://scholar.google.co.in/citations?user=8GV1bJEAAAAJ',
      image: 'https://imgur.com/92VWXml.png',
      mail: 'raajiimegce@gmail.com',
      irns: 'https://annauniv.irins.org/profile/97757',
      research_area: ['Internet of Things', 'Machine Learning', 'Computational Intelligence', 'Software Engineering'],
      mobile: '97888 56412'
    }, {
      name: 'Dr. J. Dhalia Sweetlin',
      role: 'Associate Professor',
      scholar_link: 'https://scholar.google.co.in/citations?user=uMiGifoAAAAJ',
      id: '6015',
      image: 'https://imgur.com/fAaF97V.png',
      mail: 'jdsweetlin@annauniv.edu',
      irns: 'https://annauniv.irins.org/profile/117887',
      research_area: ['Medical Image Processing', 'Algorithm Analysis', 'Bioinspired Computing'],
      mobile: '044 22516015'
    }, {
      name: 'Dr. B. Lydia Elizabeth',
      role: 'Asst. Professor [Sl. Grade]',
      scholar_link: 'http://scholar.google.co.in/citations?user=N4fVaTsAAAAJ',
      id: '6025',
      image: 'https://imgur.com/xwY9mye.png',
      mail: 'lydiabenjamin@gmail.com',
      irns: 'https://annauniv.irins.org/profile/117883',
      research_area: ['Cryptography & Security', 'Trust', 'Block chain'],
      mobile: '91766 40485'
    }, {
      name: 'Dr. D Sangeetha',
      role: 'Assistant Professor [Sl. Grade]',
      scholar_link: 'https://scholar.google.co.in/citations?user=VEujlAYAAAAJ',
      id: '6352/6472',
      image: 'https://imgur.com/ULDPEmo.png',
      mail: 'dsangeethabaskaran@gmail.com',
      irns: 'https://annauniv.irins.org/profile/117888',
      research_area: ['Cyber Security', 'Mobile Application', 'Data Analysis', 'Web Services', 'Database Management System'],
      mobile: '91766 13264'
    }, {
      name: 'Ms. M. Hemalatha',
      role: 'Assistant Professor [Sr. Grade]',
      scholar_link: 'https://scholar.google.co.in/citations?user=FTcANHQAAAAJ',
      id: '6481',
      image: 'https://imgur.com/dQkrQXn.png',
      mail: 'hemalatham.ch@gmail.com',
      irns: 'https://annauniv.irins.org/profile/117885',
      research_area: ['Computer Vision', 'Natural Language Processing', 'Pattern Recognition', 'Image Processing'],
      mobile: '98848 7495'
    },
    {
      name: 'Dr. S. K. Lavanya',
      role: 'Assistant Professor',
      scholar_link: 'https://scholar.google.co.in/citations?user=s3dszaoAAAAJ&hl=en',
      id: '6024',
      image: 'https://imgur.com/1ofopGW.png',
      mail: 'sklavanya@annauniv.edu',
      irns: 'https://annauniv.irins.org/profile/306896',
      research_area: ['Natural Language Processing', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Brain Computer Interface'],
      mobile: '94860 83142'
    }, {
      name: 'Dr. Sunil Retmin Raj',
      role: 'Teaching Fellow',
      scholar_link: 'http://scholar.google.co.in/citations?user=AqZC2XcAAAAJ',
      id: '6467',
      image: 'https://imgur.com/9hwpEoV.png',
      mail: 'retmin2001@gmail.com',
      irns: 'https://annauniv.irins.org/profile/274287',
      research_area: ['Digital Image Processing'],
      mobile: '94456 53804'
    }, {
      name: 'Dr. E. Pughazendhi',
      role: 'Teaching Fellow',
      scholar_link: 'http://scholar.google.co.in/citations?user=U2fkiAUAAAAJ',
      id: '6470',
      image: 'https://imgur.com/QljjXAI.png',
      mail: 'pugazh@mitindia.edu',
      irns: 'https://annauniv.irins.org/profile/271371',
      research_area: ['OOPS', 'Data Structures', 'C#', '.NET', 'Java Programming'],
      mobile: '95002 58735'
    }, {
      name: 'Dr. D. Vivekanandan',
      role: 'Teaching Fellow',
      scholar_link: 'http://scholar.google.co.in/citations?user=aoRfC4wAAAAJ',
      id: '6464',
      image: 'https://imgur.com/hdlcQh2.png',
      mail: 'vivek.acm@mitindia.edu',
      irns: 'https://annauniv.irins.org/profile/274288',
      research_area: ['Databases', 'Image Processing', 'Operating System'],
      mobile: '76673 54354'
    },
    {
      name: 'Ms S. Eliza Femi Sherley',
      role: 'Teaching Fellow',
      scholar_link: 'http://scholar.google.co.in/citations?user=qDF14jsAAAAJ',
      id: '6479',
      image: 'https://imgur.com/28ZPpfo.png',
      mail: 'selizafemisherley@mitindia.edu',
      irns: 'https://annauniv.irins.org/profile/264983',
      research_area: ['Data Science', 'Image Processing', 'Database Systems', 'Computer Graphics', 'Applied Remote Sensing'],
      mobile: '044 22516479'
    },
    {
      name: 'Ms P. Jayanthi',
      role: 'Teaching Fellow',
      scholar_link: 'http://scholar.google.co.in/citations?user=JZ3GBVkAAAAJ',
      id: '6468',
      image: 'https://imgur.com/XHYZw9w.png',
      mail: 'pjayanthi@mitindia.edu',
      irns: 'https://annauniv.irins.org/profile/272840',
      research_area: ['Video Processing analysis', 'Deep Learning'],
      mobile: '89398 51999'
    },
    {
      name: 'Ms R. Shanmuga priya',
      role: 'Teaching Fellow',
      id: '6466',
      scholar_link: 'http://scholar.google.co.in/citations?user=fnq71JYAAAAJ',
      image: 'https://imgur.com/5jRx3kF.png',
      mail: 'shanmurajendran2@gmail.com',
      irns: 'https://annauniv.irins.org/profile/264980',
      research_area: ['Deep Learning', 'Image Processing', 'Computer Vision'],
      mobile: '97908 83617'
    },
    {
      name: 'Ms P. Seethalakshmi',
      role: 'Teaching Fellow',
      scholar_link: 'https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=1&user=jRZ3qF4AAAAJ',
      id: '6480',
      image: 'https://imgur.com/cgs960v.png',
      mail: 'seethalaxmiperumal@gmail.com',
      irns: 'https://annauniv.irins.org/profile/268938',
      research_area: ['Web Security', 'Data Sciences'],
      mobile: '75987 68168'
    },
    {
      name: 'Mr K. Govindasamy',
      role: 'Teaching Fellow',
      scholar_link: '',
      id: '6482',
      image: 'https://imgur.com/qJwiZ3G.png',
      mail: 'kgswamy77@gmail.com',
      irns: 'https://annauniv.irins.org/profile/271390',
      research_area: ['Block Chain', 'Data mining', 'Database', 'Knowledge management'],
      mobile: '63808 11898'
    },
    {
      id: '6311/6471',
      name: 'Dr Radha Senthilkumar',
      role: 'Associate Professor',
      email: 'radhasenthilkumar@gmail.com',
      profile: 'https://vidwan.inﬂibnet.ac.in//proﬁle/262780',
      orchid_id: '0000-0003-2656-4237',
      mobile: '044-22516311',
      photo: 'https://imgur.com/nB7YbLC.png',
      address: {
        town: '',
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India',
        pincode: '600044'
      },
      expertise: [
        {
          title: 'Computer Science Artiﬁcial Intelligence',
          desc: 'The main research interests are Data Mining and Knowledge Discovery, focusing on developing novel methods that produce interpretable models. '
        }
      ],
      experience: [
        {
          college_name: 'Anna University',
          role: 'Associate Professor',
          location: 'Chennai',
          from: '2015',
          to: 'present'
        },
        {
          college_name: 'Madras Institute of Technology',
          role: 'Assistant Professor - Selection Grade',
          location: 'Chennai',
          from: '2012',
          to: '2015'
        },
        {
          college_name: 'Madras Institute of Technology',
          role: 'Assistant Professor - Senior Scale',
          location: 'Chennai',
          from: '2008',
          to: '2012'
        },
        {
          college_name: 'Madras Institute of Technology',
          role: 'Assistant Professor',
          location: 'Chennai',
          from: '2003',
          to: '2008'
        },
        {
          college_name: 'Panimalar Institute of Technology',
          role: 'Assistant Professor',
          location: 'Thiruvallur',
          from: '2002',
          to: '2003'
        },
        {
          college_name: 'industry',
          role: 'Software Engineer',
          location: 'Chennai',
          from: '2001',
          to: '2002'
        },
        {
          college_name: 'INDUSTRY',
          role: 'Software Engineer',
          location: 'Chennai',
          from: '2000',
          to: '2001'
        },
        {
          college_name: 'Velammal College of Engineering and Technology',
          role: 'Lecturer - Senior Scale',
          location: 'Madurai',
          from: '1996',
          to: '1998'
        },
        {
          college_name: 'St Peters College of Engineering and Technology',
          role: 'Lecturer',
          location: 'Thiruvallur',
          from: '1994',
          to: '1996'
        },
      ],
      education: [
        {
          course: 'Ph.D',
          college: 'College of Engineering Guindy, Anna University',
          from: '2012',
          to: '2012',
          location: 'Chennai 2'
        },
        {
          course: 'ME',
          college: 'College of Engineering Guindy, Anna University',
          from: '',
          to: '',
          location: 'Chennai 3'
        },
        {
          course: 'BE',
          college: 'Bharathidasan University',
          from: '',
          to: '',
          location: 'Coimbatore'
        },
      ],
      publication: [
        {
          title: 'End to End Pedestrian Features Detection for Self Driving Cars',
          desc: `'Sri Krishna, U. Keerthivasan, S. Prudhvi, Kilari Senthilkumar, Radha Vijayalakshmi, U. ' Lecture 
            Notes in Networks and Systems , Volume 645, Year 2023, Pages '603--613 '`
        },
        {
          title: `'Ensemble of Behavioral Features for Early Detection of Autism Spectrum 
            Disorder'`,
          desc: `'Radha, Senthilkumar Abinaya, M. N. Divya Darshini, Kannan Kamalnath, K. N. Jayanthi, P. ' 
            Advances in Intelligent Systems and Computing, Volume 1449, Year 2023, Pages '681--694 ' `
        }, {
          title: `Online Feature Selection Using Sparse Gradient`,
          desc: `Nasrin Banu Nazar and Radha Senthilkumar International Journal on Artiﬁcial Intelligence Tools, Volume , Year 2022, Pages`
        }, {
          title: `Face Recognition using fuzzy convolutional neural network and grey wolf 
            optimization with hyperspectral images`,
          desc: `Radha Senthilkumar, Ashok Kumar Rai, Sampath AK NeuroQuantology, 
            Volume 20, Year 2022, Pages 5334-5347`
        }, {
          title: `Crowd Counting Using Federated Learning and Domain Adaptation`,
          desc: `Senthilkumar, Radha Ritika, S. Manikandan, Mridini Shyam, B. 
            Information, Communication and Computing Technology, Volume , Year 2022, Pages 97-111`
        }, {
          title: `Sentimental Analysis of Streaming COVID-19 Twitter Data on Spark-Based 
            Framework`,
          desc: `Preethi S.P.;Senthilkumar R. 
            Smart Innovation, Systems and Technologies, Volume 281, Year 2022, Pages 565-575 `
        }, {
          title: ``,
          desc: ``
        }
      ]
    }
    // Add more teachers as needed
  ];

  await Promise.all(
    teachers.map(async (teacher) => {
      console.log(`creating page for ${teacher?.name}`);
      await createPage({
        path: `/people/${teacher.name}`,
        component: require.resolve('./src/templates/teacher.js'),
        context: teacher,
      });
    })
  );
};