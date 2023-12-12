import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Image, Text, Title, Tooltip } from "@mantine/core";
import Header from "../components/Header/Header";
import COLORS from "../theme/color";
import { Link } from "gatsby";

const data = [
  {
    //Radha senthil kumar -1
    name: 'Dr Radha Senthilkumar',
    role: 'Associate Professor',
    email: 'radhasenthilkumar@gmail.com',
    profile: 'https://vidwan.inﬂibnet.ac.in//proﬁle/262780',
    id: '6311/6471',
    scholar_link: 'http://scholar.google.co.in/citations?user=zDaLSU4AAAAJ',
    irns: 'https://annauniv.irins.org/profile/262780',
    research_area: ['Data Mining', 'Knowledge Discovery'],
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
        from: '1998',
        to: '2000',
        location: 'Chennai 3'
      },
      {
        course: 'BE',
        college: 'Bharathidasan University',
        from: '1989',
        to: '1993',
        location: 'Coimbatore'
      },
    ],
    publication:[
      {
        title:'End to End Pedestrian Features Detection for Self Driving Cars',
        desc:`'Sri Krishna, U. Keerthivasan, S. Prudhvi, Kilari Senthilkumar, Radha Vijayalakshmi, U. ' Lecture 
        Notes in Networks and Systems , Volume 645, Year 2023, Pages '603--613 '`
      },
      {
        title:`'Ensemble of Behavioral Features for Early Detection of Autism Spectrum 
        Disorder'`,
        desc:`'Radha, Senthilkumar Abinaya, M. N. Divya Darshini, Kannan Kamalnath, K. N. Jayanthi, P. ' 
        Advances in Intelligent Systems and Computing, Volume 1449, Year 2023, Pages '681--694 ' `
      },{
        title:`Online Feature Selection Using Sparse Gradient`,
        desc:`Nasrin Banu Nazar and Radha Senthilkumar International Journal on Artiﬁcial Intelligence Tools, Volume , Year 2022, Pages`
      },{
        title:`Face Recognition using fuzzy convolutional neural network and grey wolf 
        optimization with hyperspectral images`,
        desc:`Radha Senthilkumar, Ashok Kumar Rai, Sampath AK NeuroQuantology, 
        Volume 20, Year 2022, Pages 5334-5347`
      },{
        title:`Crowd Counting Using Federated Learning and Domain Adaptation`,
        desc:`Senthilkumar, Radha Ritika, S. Manikandan, Mridini Shyam, B. 
        Information, Communication and Computing Technology, Volume , Year 2022, Pages 97-111`
      },{
        title:`Sentimental Analysis of Streaming COVID-19 Twitter Data on Spark-Based 
        Framework`,
        desc:`Preethi S.P.;Senthilkumar R. 
        Smart Innovation, Systems and Technologies, Volume 281, Year 2022, Pages 565-575 `
      },
    ]
  },
  //sumalatha-2
  {
    name: 'Dr. M.R. Sumalatha',
    role: 'Professor and Head',
    email: 'sumalathaaramachandran@gmail.com',
    profile: 'https://annauniv.irins.org/profile/117880',
    irns: 'https://annauniv.irins.org/profile/117880',
    orchid_id: '0000-0002-1169-420X',
    scholar_link: 'http://scholar.google.co.in/citations?user=OkIGkCgAAAAJ',
    research_area: [
      'Distributed Systems',
      'Cloud Computing',
      'Big Data Analytics',
      'Social Internet of things',
      'Data Security and Privacy',
      'Computer Forensics'
  ],
    mobile: '04422516020, 9710814484',
    id: '6312/6472',
    photo: 'https://imgur.com/7FmuuaO.png',
    address: {
      town: '',
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India',
      pincode: '600044'
    },
    expertise: [
      {
        title: 'Computer Science Information Systems',
        desc: 'Distributed Systems, Cloud Computing, Big Data Analytics, Social Internet of things , Data Security and Privacy, Computer Forensics.'
      }
    ],
    experience: [
      {
        college_name: 'Anna University',
        role: 'Professor',
        location: 'Chennai',
        from: '2016',
        to: 'present'
      },
      {
        college_name: 'Madras Institute of Technology',
        role: 'Associate Professor',
        location: 'Chennai',
        from: '2012',
        to: '2016'
      },
      {
        college_name: 'Madras Institute of Technology',
        role: 'Assistant Professor (Grade-III)',
        location: 'Chennai',
        from: '2009',
        to: '2012'
      },
      {
        college_name: 'Madras Institute of Technology',
        role: 'Assistant Professor',
        location: 'Chennai',
        from: '2008',
        to: '2009'
      },
      {
        college_name: 'Madras Institute of Technology',
        role: 'Lecturer',
        location: 'Chennai',
        from: '2004',
        to: '2008'
      },
      {
      college_name: 'Madras Institute of Technology',
      role: 'Research Associate',
      location: 'Chennai',
      from: '2002',
      to: '2004'
    },
    {
      college_name: 'Madras Institute of Technology',
      role: 'Guest Faculty',
      location: 'Chennai',
      from: '2002',
      to: '2002'
    },
    ],
    education: [
      {
        course: 'Ph.D',
        college: 'Anna University',
        from: '2009',
        to: '2009',
        location: 'Chennai'
      },
      {
        course: 'M.E',
        college: 'Anna University',
        from: '1999',
        to: '2001',
        location: 'Chennai'
      },
      {
        course: 'B.E. Computer Science Engineering',
        college: 'Anna University',
        from: '1995',
        to: '1999',
        location: 'Chennai'
      },
    ],
    publication:[
      {
        title:'Towards a More Secure and Transparent Crowdfunding Ecosystem Using Blockchain',
        desc:`Sumalatha M.R. Send mail to Sumalatha M.R.; Berg, Rozen ; Sandeep B.S. ; Tharunraj M.
              Lecture Notes on Data Engineering and Communications Technologies, Volume 171, Year 2023, Pages 401-418`
      },
      {
        title:'Link Prediction Using Fuzzy Computing Model by Analyzing Social Relationship in Criminal Networks',
        desc:`Sumalatha M.R.;Palivela L.H.;Aishwarya G.;Farheen M.R.;Raj A.R.M.
              Lecture Notes in Networks and Systems, Volume 587, Year 2023, Pages 509-521`
      },
      {
        title:'Real-time Speech Emotion Detection using Artificial Intelligence',
        desc:`Yashwanth V. Send mail to Yashwanth V.; Sumalatha M.R. Send mail to Sumalatha M.R.; Yukan A.S. Send mail to Yukan A.S.; Narayan, Aditya B Send mail to Narayan A.B.; Paliyela, Lakshmi Harika Send mail to Paliyela L.H.
              IEEE International Conference on Current Development in Engineering and Technology, Year 2022, Pages 1-5`
      },
      {
        title:'Traffic Control and Management System for Smart City Using Geo-Social Networks',
        desc:`M. R Sumalatha , Lakshmi Harika Palivela , Srimathi Ravisankar , Kanimozhi Mahendran , Srilakshmi A.
              International Journal of Science and Research (IJSR), Year 2022`
      },
      {
        title:'WebRTC-based Decentralized Chat Application with Minimal Latency',
        desc:`Rozen Berg D.;Tharunraj M.;Raj Kumar B.;Sumalatha M.R.;Palivela L.H.;Vijay Vikrama Karthikeyaa P.
              Proceedings of 2022 International Conference on Intelligent Innovations in Engineering and Technology, ICIIET 2022, Year 2022, Pages 210-215`
      },
    ]
  },
  //Anandhakumar-3
{
  name: 'Dr. P. AnandhaKumar',
  role: 'Professor',
  email: '	anandh@mitindia.edu',
  profile: 'https://annauniv.irins.org/profile/117879',
  scholar_link: 'http://scholar.google.co.in/citations?user=8Gry04kAAAAJ',
  irns: 'https://annauniv.irins.org/profile/117879',
  research_area: [
      'Artificial Intelligence',
      'Pattern Recognition'
  ],
  orchid_id: '0000-0002-6380-591x',
  id: '6312/6472',
  mobile: '044 2251 6461',
  photo: 'https://imgur.com/LVChO5q.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600025'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Networks, Digital Image Processing, Artificial Intelligence, Computer Vision, Robotics, Multimedia Networks, Multimedia Data Structures, Artificial Neural Networks'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Professor',
      location: 'Chennai',
      from: '1998',
      to: 'present'
    }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'College of Engineering Guindy Campus, Anna University',
      from: '2006',
      to: '2006',
      location: 'Chennai'
    },
    {
      course: 'M.E',
      college: 'govt. college of Technology',
      from: '1995',
      to: '1997',
      location: 'coimbatore'
    },
    {
      course: 'B.E',
      college: 'govt. college of engineering',
      from: '1990',
      to: '1994',
      location: 'salem'
    },
  ],
  publication:[
    {
      title:'Energy-efficient task scheduling and resource management in a cloud environment using optimized hybrid technology',
      desc:`Kalai Arasan K.;Anandhakumar P.
      Software - Practice and Experience, Year 2023`
    },
    {
      title:'Textual feature ensemble-based sarcasm detection in twitter data',
      desc:`Sundararajan K.;Saravana J.V.;Palanisamy A.
      Advances in Intelligent Systems and Computing, Volume 1167, Year 2021, Pages 443-450`
    },

    {
      title:'Dna: Dynamically negotiable approach—a p2p-based overlay for live multimedia streaming',
      desc:`Evangeline P.;Palanisamy A.;Chelliah P.R.
       Advances in Intelligent Systems and Computing, Volume 1167, Year 2021, Pages 333-339`
    },
    {
      title:'Cauchy Mixture Model-based Foreground Object Detection with New Dynamic Learning Rate Using Spatial and Statistical information for Video Surveillance Applications',
      desc:`Sowmiya D.;Anandhakumar P.
      Proceedings of the National Academy of Sciences India Section A - Physical Sciences, Volume 90, Year 2020, Pages 911-924`
    },

    {
      title:'Multi-rule based ensemble feature selection model for sarcasm type detection in Twitter',
      desc:`Sundararajan K.;Palanisamy A.
      Article Computational Intelligence and Neuroscience, Volume 2020, Year 2020`
    },
  ]
},
//Dhanajay kumar-4
{
  name: 'Dr. Dhananjay Kumar',
  role: 'Professor',
  email: 'dhananjay@annauniv.edu',
  profile: 'https://annauniv.irins.org/profile/117881',
  orchid_id: '0000-0003-3758-1841',
  scholar_link: 'http://scholar.google.co.in/citations?user=OF9U2GMAAAAJ',
        irns: 'https://annauniv.irins.org/profile/117881',
        research_area: [
            'Computer vision',
            'AR/VR Systems',
            'Multimedia Systems',
            'Mobile communication and computing'
        ],
  mobile: '044 -22516019 ',
  id: '6312/6472',
  photo: 'https://imgur.com/K8vuwEJ.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Information and Communication Technology',
      desc: 'Mobile Communication and Computing, Video Streaming and Analysis'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Professor',
      location: 'Chennai',
      from: '2015',
      to: 'present'
    },
    {
      college_name: 'Anna University',
      role: 'Associate Professor',
      location: 'Chennai',
      from: '2012',
      to: '2015'
    },
    {
      college_name: 'Anna University',
      role: 'Assistant Professor',
      location: 'Chennai',
      from: '2006',
      to: '2012'
    },
    {
      college_name: 'Anna University',
      role: 'Lecturer',
      location: 'Chennai',
      from: '2003',
      to: '2008'
    },
    {
      college_name: 'Anna University',
      role: 'Lecturer',
      location: 'Chennai',
      from: '2002',
      to: '2003'   }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Anna University',
      from: '2009',
      to: '2009',
      location: 'Chennai'
    }
  ],
  publication:[
    {
      title:'Efficient Object Detection and Classification Approach Using HTYOLOV4 and M2RFO-CNN',
      desc:`Arulalan V.;Kumar D.
      Computer Systems Science and Engineering, Volume 44, Year 2023, Pages 1703-1717`
    },
    {
      title:'Enhancing User Experience in Pedestrian Navigation Based on Augmented Reality and Landmark Recognition',
      desc:`Kumar D.;Iyer S.;Raja E.;Kumar R.;Kafle V.P.
      2022 ITU Kaleidoscope - Extended Reality - How to Boost Quality of Experience and Interoperability, ITU K 2022 - Proceedings, Year 2022`
    },
    {
      title:'Mining Frequent Serial Positioning Episode Rules with Forward and Backward Search Technique from Event Sequences',
      desc:`Poongodi K, and Dhananjay Kumar.
      The Computer Journal, Year 2022, Pages 01-22`
    },
    {
      title:'Natural Exponent Inertia Weight-based Particle Swarm Optimization for Mining Serial Episode Rules from Event Sequences',
      desc:`Poongodi K.;Kumar D.
      IETE Journal of Research, Year 2022`
    },
    {
      title:'Improving the Quality of Image Captioning using CNN and LSTM Method',
      desc:`Pradeepan Lala M.;Kumar D.
      Proceedings of 2022 International Conference on Intelligent Innovations in Engineering and Technology, ICIIET 2022, Year 2022, Pages 64-70`
    },
  ]
},
//Geetha Ramani-5
{
  name: 'Dr. R.Geetha Ramani',
  role: 'Professor',
  email: 'rgeetha@auist.net',
  profile: 'https://annauniv.irins.org/profile/117865',
  orchid_id: '0000-0003-2283-3428',
  mobile: '',
  photo: 'https://imgur.com/K5rRBpz.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600025'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Machine Learning, Data Mining, Artificial Intelligence, Image Processing, Evolutionary Algorithms'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Professor',
      location: 'Chennai',
      from: '2012',
      to: 'Present'
    }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Pondicherry University',
      from: '2009',
      to: '2009',
      location: 'Pondicherry'
    },
  ],
  publication:[
    {
      title:'Automatic Blood Vessel Segmentation in Retinal Fundus Images Using Image Enhancement and Dynamic Gray-Level Thresholding',
      desc:`Shanthamalar J.J.;Ramani R.G.
       Lecture Notes on Data Engineering and Communications Technologies, Volume 99, Year 2022, Pages 337-348`
    },
    {
      title:'Textural and Statistical Feature Extraction from Segmented Hard Exudates for Diabetic Retinopathy Classification',
      desc:`Geetha Ramani R.;Jeslin Shanthamalar J.
      Smart Innovation, Systems and Technologies, Volume 303 SIST, Year 2022, Pages 293-301`
    },
    {
      title:'Automated image quality appraisal through partial least squares discriminant analysis',
      desc:`Ramani R.G.;Shanthamalar J.J.
      International Journal of Computer Assisted Radiology and Surgery, Volume 17, Year 2022, Pages 1367-1377`
    },
    {
      title:'A novel approach for glaucoma disease identification through optic nerve head feature extraction and random tree classification',
      desc:`Shanthamalar J.J.;Ramani R.G.
      International Journal of Computing and Digital Systems, Volume 10, Year 2021`
    },
    {
      title:'Automatic brain tumour detection using image processing and data mining techniques',
      desc:`Ramani R.G.;Faustina F.;Siddique S.;Sivaselvi K.
      International Journal of Information Technology and Management, Volume 20, Year 2021, Pages 49-65`
    },
  ]
},
//Umamaheswari-6
{
  name: 'Dr. S. Umamaheswari',
  role: 'Associate Professor',
  email: '	uma_sai@mitindia.edu',
  profile: 'https://annauniv.irins.org/profile/117886',
  orchid_id: '0000-0002-9931-9243',
  id: '6304/6474',
  scholar_link: ' http://scholar.google.co.in/citations?user=My9jdJkAAAAJ',
  irns: 'https://annauniv.irins.org/profile/117886',
  research_area: ['VLSI', 'Embedded Systems'],
  mobile: '94444 93377',
  photo: 'https://imgur.com/1GeD1LC.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'VLSI, Embedded Systems, Machine Learning, Image Processing'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Associate Professor',
      location: 'Chennai',
      from: '2017',
      to: 'Present'
    },
    {
      college_name: 'Anna University',
      role: 'Assistant Professor - Selection Grade',
      location: 'Chennai',
      from: '2014',
      to: '2017'
    },
    {
      college_name: 'Anna University',
      role: 'Assistant Professor - Senior Scale',
      location: 'Chennai',
      from: '2009',
      to: '2014'
    },
    {
      college_name: 'Easwari Engineering College',
      role: 'Assistant Professor',
      location: 'Chennai',
      from: '2006',
      to: '2009'
    },
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Anna University',
      from: '2015',
      to: '2015',
      location: 'Chennai'
    },
  ],
  publication:[
    {
      title:'Effective multi-crop disease detection using pruned complete concatenated deep learning model',
      desc:`Arumuga Arun R.;Umamaheswari S.
      Expert Systems with Applications, Volume 213, Year 202`
    },
    {
      title:'MLPRS: A Machine Learning-Based Proactive Re-Routing Scheme for Flow Classification and Priority Assignment',
      desc:`MA Gunavathie, S Umamaheswari
      Journal of Engineering Research, Year 2023`
    },
    {
      title:'MA Gunavathie, S Umamaheswari',
      desc:`Shrijhaa R.; Abitha M.; Sangeetha D.; Umamaheswari S.
      Annamalai International Journal of Business Studies & Research, Volume 14, Year 2023, Pages 18-23`
    },
    {
      title:'Classification of MGMT Promoter Methylation in Glioblastoma Patients Using EfficientNet-RNN',
      desc:`S Manoj, TV Raghavasimhan, S Umamaheswari, D Sangeetha
      EasyChair Preprint, Year 2022`
    },
    {
      title:'BBR - A Novel Bandwidth Based Routing Algorithm in Software Defined Networking',
      desc:`Gunavathie M.A.;Umamaheswari S.
      2022 1st International Conference on Computational Science and Technology, ICCST 2022 - Proceedings, Year 2022, Pages 1038-1041`
    },
  ]
},
//Kola Sujatha-7
//next
{
  name: 'Dr. P. Kola Sujatha',
  role: 'Associate Professor',
  email: 'pkolasujatha@annauniv.edu',
  profile: 'https://annauniv.irins.org/profile/117884',
  orchid_id: '0000-0002-9468-2510',
  scholar_link: 'http://scholar.google.co.in/citations?user=PvVP2IsAAAAJ',
  id: '6311/6471',
  irns: 'https://annauniv.irins.org/profile/117884',
  research_area: ['Intrusion Detection System', 'Artificial Intelligence', 'Machine Learning', 'Data Mining', 'Soft Computing', 'Data Analytics'],
  mobile: '90925 03099',
  photo: 'https://imgur.com/KWsT9Hj.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Intrusion Detection System, Artificial Intelligence, Machine Learning, Data Mining Big Data Analytics and Soft Computing.'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Assistant Professor - Selection Grade',
      location: 'Chennai',
      from: '2004',
      to: 'Present'
    }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'College of Engineering',
      from: '2013',
      to: '2013',
      location: 'Guindy'
    },
  ],
  publication:[
    {
      title:'Development of Deep Learning Based Models for Detecting the Significance of Non-Manual Parameters for Indian Sign Language Interpretation',
      desc:`Kola Sujatha, P., Jayanthi, P., Sandhiya, M., Sowbarnigaa, K.S., Keshini, G.
      Lecture Notes in Networks and Systems book series (LNNS), Volume 665, Year 2023, Pages 327-340`
    },
    {
      title:'Stacking Ensemble-based XSS Attack Detection Strategy Using Classification Algorithms',
      desc:`Perumal S.;Kola Sujatha P.
      Proceedings of the 6th International Conference on Communication and Electronics Systems, ICCES 2021, Year 2021, Pages 897-901`
    },
    {
      title:'Detection Of Alzheimers Disease Using Intelligent Selection And Transfer Learning',
      desc:`P. Kola Sujatha, Reshma. H, Kartick Paramasivan PS and Mohamed Adhil.
      International Journal of Advanced Research In Basic Engineering Sciences And Technology, Volume 6, Year 2020, Pages 20-24`
    },
    {
      title:'Salient Object Detection Using DenseNet Features',
      desc:`Kola Sujatha P.;Nivethan N.;Vignesh R.;Akila G.
      New Trends in Computational Vision and Bio-Inspired Computing - Selected Works Presented at the ICCVBIC 2018, Year 2020, Pages 1641-1648`
    },
    {
      title:'Ameliorated Domain Adaptation Using Adaptive Classification Algorithm',
      desc:`Kola Sujatha P.;Swetha S.;Priyadharshini V.
      Lecture Notes on Data Engineering and Communications Technologies, Volume 31, Year 2020, Pages 720-736`
    },
  ]
},
//Rajesh-8
{
  name: 'Dr. G. Rajesh',
  role: 'Associate Professor',
  email: 'raajiimegce@gmail.com',
  profile: 'https://annauniv.irins.org/profile/97757',
  orchid_id: '	0000-0002-6927-9578',
  id: '6023',
  scholar_link: 'http://scholar.google.co.in/citations?user=8GV1bJEAAAAJ',
  photo: 'https://imgur.com/Q0Gj56n.png',
  irns: 'https://annauniv.irins.org/profile/97757',
  research_area: ['Internet of Things', 'Machine Learning', 'Computational Intelligence', 'Software Engineering'],
  mobile: '97888 56412',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600025'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems, Information Technology',
      desc: 'Internet of Things, Machine Learning, Computational Intelligence, Software Engineering'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Associate Professo',
      location: 'Chennai',
      from: '2021',
      to: 'Present'
    },
    {
      college_name: 'Anna University',
      role: 'Assistant Professor',
      location: 'Chennai',
      from: '2007',
      to: '2021'
    }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Madras Institute of Technology, Anna University',
      from: '2016',
      to: '2016',
      location: 'Chennai'
    },
  ],
  publication:[
    {
      title:'Advanced Driver Assistance System Based on IoT V2V and V2I for Vision Enabled Lane Changing with Futuristic Drivability',
      desc:`Suganthi K.;Kumar M.A.;Harish N.;HariKrishnan S.;Rajesh G.;Reka S.S.
      Sensors, Volume 23, Year 2023`
    },
    {
      title:'Achieving Longevity in Wireless Body Area Network by Efficient Transmission Power Control for IoMT Applications',
      desc:`Rajesh G.;Raajini X.M.;Kritika N.;Kavinkumar A.;Sagayam K.M.;Som M.M.;Wahab M.H.A.
     International Journal of Integrated Engineering, Volume 14, Year 2022, Pages 80-89`
    },
    {
      title:'A joint congestion control mechanism through dynamic alternate route selection algorithm in iot based wireless sensor network',
      desc:`Thyagarajan J.;Suganthi K.;Rajesh G.
      Advances in Parallel Computing, Year 2022, Pages 96-102`
    },
    {
      title:'An integrated approach on verification of signatures using multiple classifiers (SVM and Decision Tree): A multi-classification approach',
      desc:`Jindal et al. and
      Journal of Advanced and Applied Sciences, Volume 9, Year 2022, Pages 99-109`
    },
    {
      title:'Machine learning-based ship detection and tracking using satellite images for maritime surveillance',
      desc:`Yu Wang ., G. Rajesh ., X. Mercilin Raajini ., N. Kritika ., A. Kavinkumar ., Syed Bilal Hussain Shah .,
      Journal of Ambient Intelligence and Smart Environments, Volume 13, Year 2021, Pages 361-371`
    },
  ]
},
// Dhalia Sweetlin-9
{
  name: 'Dr. J. Dhalia Sweetlin',
  role: 'Associate Professor',
  email: 'jdsweetlin@annauniv.edu, jdsweetlin@mitindia.edu',
  profile: 'https://annauniv.irins.org/profile/274287',
  scholar_link: 'https://scholar.google.co.in/citations?user=uMiGifoAAAAJ',
  id: '6015',
  orchid_id: '	0000-0002-3718-8006',
  irns: 'https://annauniv.irins.org/profile/117887',
  research_area: ['Medical Image Processing', 'Algorithm Analysis', 'Bioinspired Computing'],
  mobile: '044-22516015, 9444156624',
  photo: 'https://imgur.com/ghuDJXe.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600025'
  },
  expertise: [
    {
      title: 'Computer Science Artificial Intelligence',
      desc: 'Medical Digital Image Processing, Bio Inspired Systems, Data Analytics, Pattern Recognition, Soft Computing, Cryptography & Security'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Associate Professor',
      location: 'Chennai',
      from: '2021',
      to: 'Present'
    },
    {
      college_name: 'Anna University',
      role: 'Assistant Professor - Selection Grade',
      location: 'Chennai',
      from: '2018',
      to: '2021'
    },
    {
      college_name: 'Anna University',
      role: 'Assistant Professor - Senior Scale',
      location: 'Chennai',
      from: '2014',
      to: '2018'
    },
    {
      college_name: 'Anna University',
      role: 'Assistant Professor',
      location: 'Chennai',
      from: '2009',
      to: '2014'
    },
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Anna University',
      from: '2018',
      to: '2018',
      location: 'Chennai'
    },
  ],
  publication:[
    {
      title:'Preventing Cryptographic Attacks Using AI-hard Password Authentication',
      desc:`T V Raghavasimhan, S Manoj, J Dhalia Sweetlin, Soumik Rakshit
      2023 International Conference on Networking and Communications (ICNWC), Volume 10.1109/ICNWC57852.2023.10127557, Year 2023`
    },
    {
      title:'Recommendation of Crop and Yield Prediction by Assessing Soil Health From Ortho-Photos',
      desc:`J Dhalia Sweetlin, Visali A. L., Sruthi Sreeram, Jyothi Prasanth D. R
      Recommendation of Crop and Yield Prediction by Assessing Soil Health From Ortho-Photos, Year 2022, Pages 42`
    },
    {
      title:'Exploring Human Emotions for Depression Detection from Twitter Data by Reducing Misclassification Rate',
      desc:`DR Jyothi Prasanth, J Dhalia Sweetlin, Sreeram Sruthi
      Proceedings of International Conference on Computational Intelligence: Algorithms for Intelligent Systems, Volume https://doi.org/10.1007/978-981-16-3802-2,`
    },
    {
      title:'A Convolutional Neural Network Model to Predict Air and Water Hazards',
      desc:`A. Akshayarathna., K. Divya Darshini ., J. Dhalia Sweetlin
      Machine Vision and Augmented Intelligence—Theory and Applications, Year 2021, Pages 413-432`
    },
    {
      title:'A review on stroke lesion analysis in MRI datasets',
      desc:`Irish S.;Dhalia Sweetlin J.
      Advances in Parallel Computing, Volume 37, Year 2020, Pages 277-284`
    },
  ]
},
//Lydia Elizabeth-10
{
  name: 'Dr. B. Lydia Elizabeth',
  role: 'Asst. Professor [Sl. Grade]',
  email: 'lydiabenjamin@gmail.com',
  profile: 'https://annauniv.irins.org/profile/117883',
  scholar_link: 'http://scholar.google.co.in/citations?user=N4fVaTsAAAAJ',
  id: '6025',
  irns: 'https://annauniv.irins.org/profile/117883',
  research_area: ['Cryptography & Security', 'Trust', 'Block chain'],
  mobile: '91766 40485',
  orchid_id: '0000-0003-3843-5176',
  photo: 'https://imgur.com/UPwF8Vr.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Trust, Cryptography, Cloud Security and Blockchain'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Assistant Professor',
      location: ' Chennai',
      from: '2009',
      to: 'Present'
    }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Anna University',
      from: '2017',
      to: '2017',
      location: ' Chennai'
    },
  ],
  publication:[
    {
      title:'An efficient list-based task scheduling algorithm for heterogeneous distributed computing environment',
      desc:`Rajarethinam Madhura ., Vaidyanathan Rhymend Uthariaraj ., Benjamin Lydia Elizabeth .,
      Software - Practice and Experience, Volume 53, Year 2023, Pages 390-412`
    },
    {
      title:'HIDE: hyperchaotic image encryption using DNA computing',
      desc:`Elizabeth B.L.;Gayathri J.;Subashini S.;Prakash A.J.
      Journal of Real-Time Image Processing, Volume 19, Year 2022, Pages 429-443`
    },
    {
      title:'Beyond Statistical Analysis in Chaos-Based CSPRNG Design',
      desc:`Security and Communication Networks, Year 2021`
    },
    {
      title:'PINDEX: Private multi-linked index for encrypted document retrieval',
      desc:`Prakash A.J.;Elizabeth B.L.
      PLoS ONE, Volume 16, Year 2021`
    },
    {
      title:'An improved list-based task scheduling algorithm for fog computing environment',
      desc:`R. Madhura ., B. Lydia Elizabeth ., V. Rhymend Uthariaraj .,
      Computing, Volume 103, Year 2021, Pages 1353-1389`
    },
  ]
},
//Sangeetha-11
{
  name: 'Dr. D Sangeetha',
  role: 'Asst. Professor [Sl. Grade]',
  email: 'dsangeethabaskaran@gmail.com, dsangeetha@mitindia.edu',
  profile: 'https://annauniv.irins.org/profile/274287',
  orchid_id: '0000-0001-9226-4668',
  scholar_link: 'https://scholar.google.co.in/citations?user=VEujlAYAAAAJ',
  id: '6352/6472',
  irns: 'https://annauniv.irins.org/profile/117888',
  research_area: ['Cyber Security', 'Mobile Application', 'Data Analysis', 'Web Services', 'Database Management System'],
  mobile: '91766 13264',
  photo: 'https://imgur.com/57rUDSQ.png',
  address: {
    town: 'Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Cloud Computing, Information Security, Cyber security, Mobile Application development, Data analytics, Web Services, Database Management System'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Assistant Professor',
      location: '',
      from: '2010',
      to: 'Present'
    },
    {
      college_name: 'SRM Institute of Science and Technology',
      role: 'Assistant Professor',
      location: '',
      from: '2009',
      to: '2010'
    },
    {
      college_name: 'Sri Muthu Kumaran Institute of Technology',
      role: 'Lecturer',
      location: '',
      from: '2004',
      to: '2009'
    }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Anna University',
      from: '2017',
      to: '2017',
      location: 'Chennai'
    },
    {
      course: 'M.E',
      college: 'Anna University',
      from: '2006',
      to: '2008',
      location: 'Chennai'
    },
    {
      course: 'B.E',
      college: 'University of Madras',
      from: '1997',
      to: '2001',
      location: 'Chennai'
    },
  ],
  publication:[
    {
      title:'Detection of fraudulent marketing of consumer product in social networking service Journal of Intelligent & Fuzzy Systems',
      desc:`T Nathezhtha, , D Sangeetha ,V Vaidehi
      Annals of Telecommunications, Year 2023, Pages 1-13`
    },
    {
      title:'ARTIFICIAL INTELLIGENCE BASED INTERACTIVE VIRTUAL BOARD.',
      desc:`R Shrijhaa, M Abitha, D Sangeetha, S Umamaheswari
      Annamalai International Journal of Business Studies , Year 2023`
    },
    {
      title:'Multi keyword searchable attribute based encryption for efficient retrieval of health Records in Cloud',
      desc:`Sangeetha D.;Chakkaravarthy S.S.;Satapathy S.C.;Vaidehi V.;Cruz M.V.
      Multimedia Tools and Applications, Volume 81, Year 2022, Pages 22065-22085`
    },
    {
      title:'Major and Sub-Class Classification of Arrhythmia using Eigen Vectors in ConvNet',
      desc:`Umamaheswari S.;Sangeetha D.;Sriram S.A.;Nandhinipriva J.
      IBSSC 2022 - IEEE Bombay Section Signature Conference, Year 2022`
    },
    {
      title:'A Trust-Based Handover Authentication in an SDN 5G Heterogeneous Network',
      desc:`Sangeetha D.;Selvi S.;Keerthana A.
      Lecture Notes on Data Engineering and Communications Technologies, Volume 75, Year 2022, Pages 841-852`
    },
  ]
},
//Hemalatha-12
{
  name: 'Dr. M. Hemalatha',
  role: 'Asst. Professor [Sr. Grade]',
  email: 'hemalatham.ch@gmail.com',
  profile: 'https://annauniv.irins.org/profile/117885',
  scholar_link: 'https://scholar.google.co.in/citations?user=FTcANHQAAAAJ',
  id: '6481',
  orchid_id: '0000-0003-1048-3846',
  irns: 'https://annauniv.irins.org/profile/117885',
  research_area: ['Computer Vision', 'Natural Language Processing', 'Pattern Recognition', 'Image Processing'],
  mobile: '98848 74955',
  photo: 'https://imgur.com/8mcIncW.png',
  address: {
    town: '',
    city: 'Kanchipuram',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Artificial Intelligence',
      desc: 'Pattern recognition, computer vision, machine learning'
    }
  ],
  experience: [
    {
      college_name: 'Madras Institute of Technology',
      role: 'Assistant Professor',
      location: 'Chennai',
      from: '2014',
      to: 'Present'
    }
  ],
  education: [
    {
      course: 'M.E',
      college: 'Madras Institute of Technology',
      from: '2011',
      to: '2013',
      location: 'Chennai'
    },
    {
      course: 'B.Tech',
      college: 'Panimalar Engineering College',
      from: '2007',
      to: '2011',
      location: 'Chennai'
    },
  ],
  publication:[
    {
      title:'Video captioning using Semantically Contextual Generative Adversarial Network',
      desc:`Hemalatha Munusamy and Chandra Sekhar C.
      Computer Vision and Image Understanding, Volume 221, Year 2022, Pages 103453`
    },
    {
      title:'FractalCovNet architecture for COVID-19 Chest X-ray image Classification and CT-scan image Segmentation',
      desc:`Hemalatha Munusamy and Karthikeyan Jadarajan Muthukumar and Shriram Gnanaprakasam and Thanga Revathi Shanmugakani and Aravindkumar Sekar.
      Biocybernetics and Biomedical Engineering, Volume 41, Year 2021, Pages 1025-1038`
    },
    {
      title:'Hierarchical Attention based Video Captioning using Key Frames',
      desc:`Karthik P, Hemalatha M
      3rd International Conference on Recent Trends in Advanced Computing- Artificial Intelligence and Technology (ICRTAC-AIT), Year 2020`
    },
    {
      title:'atural Language Description for Videos Using NETVLAD and Attentional LSTM',
      desc:`Jeevitha V.K, Hemalatha M
      International Conference for Emerging Technology (INCET ), Year 2020
      `
    },
  ]
},
//Lavanya-13
{
  name: 'Dr Lavanya Sk',
  role: 'Assistant Professor',
  email: 'sklavanya@annauniv.edu',
  profile: 'https://vidwan.inﬂibnet.ac.in//proﬁle/306896',
  orchid_id: '0000-0002-3022-7287',
  scholar_link: 'https://scholar.google.co.in/citations?user=s3dszaoAAAAJ&hl=en',
  id: '6024',
  irns: 'https://annauniv.irins.org/profile/306896',
  research_area: [
    'Natural Language Processing', 
    'Artificial Intelligence', 
    'Machine Learning', 
    'Deep Learning', 
    'Brain Computer Interface'
  ],
  mobile: '9486083142',
  photo: 'https://imgur.com/TtD6faF.png',
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
      desc: 'Natural Language Processing'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Assistant Professor',
      location: 'Chennai',
      from: '2023',
      to: 'Present'
    },
    {
      college_name: 'SRM Institute of Science and Technology',
      role: 'Assistant Professor',
      location: 'Chennai',
      from: '2021',
      to: '2023'
    },
    {
      college_name: 'Jerusalem College of Engineering',
      role: 'Assistant Professor',
      location: 'Chennai',
      from: '2010',
      to: '2021'
    },
    {
      college_name: 'Jerusalem College of Engineering ',
      role: 'Lecturer',
      location: 'Chennai',
      from: '2007',
      to: '2008'
    },
    {
      college_name: 'IFET College of Engineering',
      role: 'Lecturer',
      location: 'Villupuram',
      from: '2006',
      to: '2006'
    },
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Anna University',
      from: '2020',
      to: '2020',
      location: 'Chennai'
    },
    {
      course: 'M.E',
      college: 'Jerusalem College of Engineering',
      from: '2008',
      to: '2010',
      location: 'Chennai'
    },
    {
      course: 'B.E',
      college: 'Sona College of Technology',
      from: '2000',
      to: '2005',
      location: 'Salem'
    },
  ],
  publication:[
    {
      title:`Building Hindi Text Dataset on Stock Market Tweets and Sentiment Analysis Using NLP`,
      desc:`Choudhary Anushka ., Gupta Mohit ., S. K. Lavanya .,
Lecture Notes on Data Engineering and Communications Technologies, Volume 166, Year 2023, Pages 233-241`
    },
    {
      title:'A Sequential DNN for Sentiment Analysis of Dravidian Code-Mixed Language Comments on YouTube',
      desc:`Samuel A.A.;Kumar L.S.;Navaneethakrishnan S.C.;Sakuntharaj R.
            CEUR Workshop Proceedings, Volume 3395, Year 2022, Pages 177-183`
    },
    {
      title:'Building Tamil Text Dataset on LGBTQIA and Offensive Language Detection using Multilingual BERT',
      desc:`Lavanya S.K.;Navaneethakrishnan S.C.
        5th International Conference on Inventive Computation Technologies, ICICT 2022 - Proceedings, Volume, Year 2022, Pages 489-496`
    },    
    {
      title:'Homophobia, Transphobia Detection in Tamil, Malayalam, English Languages using Logistic Regression and Code-Mixed Data using AWD- LSTM',
      desc:`Sivaprasath S.;Kumar L.S.;Thavareesan S.
      CEUR Workshop Proceedings, Volume 3395, Year 2022, Pages 169-176`

    },
    {
      title:'Sentiment Analysis of YouTube comments in Dravidian Code-Mixed Language using Deep Neural Network',
      desc:`Fadil N.M.;Lavanya S.K.
      CEUR Workshop Proceedings, Volume 3395, Year 2022, Pages 100-105`

    },
  ],
},

//Sunil Retmin Raj-14
{
  name: 'Dr. Sunil Retmin Raj',
  role: 'Teaching Fellow',
  email: '	retmin2001@gmail.com',
  profile: 'https://annauniv.irins.org/profile/274287',
  orchid_id: '	0000-0002-5649-5466',
  scholar_link: 'http://scholar.google.co.in/citations?user=AqZC2XcAAAAJ',
  id: '6467',
  irns: 'https://annauniv.irins.org/profile/274287',
  research_area: ['Digital Image Processing'],
  mobile: '94456 53804',
  photo: 'https://imgur.com/uSmObwK.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Digital Image Processing'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Teaching Fellow',
      location: 'Chennai',
      from: '2007',
      to: 'Present'
    }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Anna University',
      from: '2014',
      to: '2014',
      location: 'Chennai'
    },
  ],
  publication:[
    {
      title:'Human action recognition using fusion-based discriminative features and long short term memory classification',
      desc:`Karuppannan K.;Darmanayagam S.E.;Cyril S.R.R.
      Concurrency and Computation: Practice and Experience, Year 2022`
    },
    {
      title:'An enhanced approach for segmentation of liver from computed tomography images',
      desc:`Rajamanickam P.;Darmanayagam S.E.;Sarangapany T.;Raj S.R.R.C.
      Journal of Scientific and Industrial Research, Volume 81, Year 2022, Pages 287-293`
    },
    {
      title:'Automatic Segmentation of Liver from Abdominal Computed Tomography Images Using Energy Feature',
      desc:`Rajamanickam P.;Darmanayagam S.E.;Raj S.R.R.C.
      Computers, Materials and Continua, Volume 67, Year 2021, Pages 709-722`
    },
    {
      title:'An Enhanced Approach for Skin Lesion Smoothening and Segmentation from Dermoscopic Images',
      desc:`Sarangapany, Thamaraiselvam and Darmanayagam, Shiloah Elizabeth and Rajamanickam, Prabakaran and Raj, Sunil Retmin Raj Cyril
      Solid State Technology, Volume 64, Year 2021, Pages 2645--2658`
    },
    {
      title:'Automatic Representative Framelets Selection for Human Action Recognition in Surveillance Videos',
      desc:`Kiruba K.;Shiloah Elizabeth D.;Raj C.S.R.
      Advances in Intelligent Systems and Computing, Volume 1118, Year 2020, Pages 383-391`
    },
  ]
},
//Pugazhendi-15
{
  name: 'Dr. E.Pugazhendi',
  role: '	Teaching Fellow',
  email: 'pugazh@mitindia.edu',
  profile: 'https://annauniv.irins.org/profile/271371',
  orchid_id: '0000-0002-4507-6880',
  scholar_link: 'http://scholar.google.co.in/citations?user=U2fkiAUAAAAJ',
  id: '6470',
  irns: 'https://annauniv.irins.org/profile/271371',
  research_area: ['OOPS', 'Data Structures', 'C#', '.NET', 'Java Programming'],
  mobile: '95002 58735',
  photo: 'https://imgur.com/0oNIbFF.png',
  address: {
    town: '',
    city: 'Kanchipuram',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600025'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'OOPS, Data Structures, C#.NET, Java Programming'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Teaching Fellow',
      location: 'Chennai',
      from: '2010',
      to: 'Present'
    }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Anna University',
      from: '2021',
      to: '2021',
      location: 'Chennai'
    },
  ],
  publication:[
    {
      title:'Cloud Storage Performance Improvement Using Deduplication and Compression Techniques',
      desc:`P M Ashok Kumar ., E. Pugazhendhi ., Rudra Kalyan Nayak .,
       Proceedings - 4th International Conference on Smart Systems and Inventive Technology, ICSSIT 2022, Year 2022, Pages 443-449`
    },
    {
      title:'Cloud Data Storage Optimization by Using Novel De-Duplication Technique',
      desc:`Kumar P.M.A.;Pugazhendhi E.;Lakshmi K.V.
      Proceedings - 4th International Conference on Smart Systems and Inventive Technology, ICSSIT 2022, Year 2022, Pages 436-442`
    },
  ]
},
// Vivekanandan-16
{
  name: 'Dr. D. Vivekanandan',
  role: 'Teaching Fellow',
  email: 'vivek.acm@mitindia.edu',
  profile: 'https://annauniv.irins.org/profile/274288',
  orchid_id: '0000-0002-1438-4063',
  scholar_link: 'http://scholar.google.co.in/citations?user=aoRfC4wAAAAJ',
  id: '6464',
  irns: 'https://annauniv.irins.org/profile/274288',
  research_area: [
    'Databases',
   'Image Processing', 
   'Operating System'
  ],
  mobile: '76673 54354',
  photo: 'https://imgur.com/BLnrdTS.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Databases, Image Processing, Operating Systems'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Teaching Fellow',
      location: 'Chennai',
      from: '2011',
      to: 'Present'
    }
  ],
  education: [
    {
      course: 'Ph.D',
      college: 'Anna University',
      from: '2020',
      to: '2020',
      location: 'Chennai'
    },
    {
      course: 'M. Tech',
      college: 'Madras Institute of Technology',
      from: '2009',
      to: '2011',
      location: 'Chennai'
    },
    {
      course: 'Bachelor in Engineering',
      college: 'Madras Institute of Technology',
      from: '2003',
      to: '2007',
      location: 'Chennai'
    },
  ],
  publication:[
    {
      title:'Hybrid feature selection model for classification of lung disorders',
      desc:`Dharmalingam V.;Kumar D.
      Journal of Ambient Intelligence and Humanized Computing, Volume 13, Year 2021, Pages 5609-5625`
    },
    {
      title:'A model based segmentation approach for lung segmentation from chest computer tomography images',
      desc:`Dharmalingham V.;Kumar D.
      Multimedia Tools and Applications, Volume 79, Year 2020, Pages 10003-10028`
    },
    {
      title:'Elderly Health Monitoring System with Fall Detection Using Multi-Feature Based Person Tracking',
      desc:`Kumar D.;Ravikumar A.K.;Dharmalingam V.;Kafle V.P.
      11th Academic Conference ITU Kaleidoscope: ICT for Health: Networks, Standards and Innovation, ITU K 2019, Year 2019`
    },
    {
      title:'A feature extraction model for assessing the growth of lung cancer in Computer Aided Diagnosis',
      desc:`Vivekanandan D.;Raj S.R.
      International Conference on Recent Trends in Information Technology, ICRTIT 2011, Year 2011, Pages 953-958`
    },
 
  ]

},
//Eliza Femi Sherley-17
{
  name: 'Mrs. Eliza Femi Sherley S',
  role: 'Teaching Fellow',
  email: ' selizafemisherley@gmail.com',
  profile: 'https://annauniv.irins.org/profile/264983',
  orchid_id: '0000-0002-6295-696X',scholar_link: 'http://scholar.google.co.in/citations?user=qDF14jsAAAAJ',
  id: '6479',
  irns: 'https://annauniv.irins.org/profile/264983',
  research_area: ['Data Science', 'Image Processing', 'Database Systems', 'Computer Graphics', 'Applied Remote Sensing'],
  mobile: '044 22516479',
  photo: 'https://imgur.com/I3gp2HO.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Image Processing, Data Analytics'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Teaching Fellow',
      location: 'Chennai',
      from: '2013',
      to: 'Present'
    },
  ],
  education: [
    {
      course: 'M.E',
      college: 'College of Engineering, Anna University',
      from: '2010',
      to: '2012',
      location: 'Chennai'
    }
  ],
    publication:[
      {
        title:`Diagnosis of COVID-19 from Multimodal Imaging Data Using Optimized Deep Learning Techniques`,
        desc:`S Ezhil Mukhi, R Thanuja Varshini, S Eliza Femi Sherley
        SN computer science, Volume 4, Year 2023, Pages
`
      },
      {
        title:`Smart Teaching-Learning Framework for Higher Education`,
        desc:`S Eliza Femi Sherley, Prabakaran R, Lakshmi, S. V. V.
        Annamalai International Journal of Business Studies & Research, Volume 14, Year 2023, Pages 199-207
`
      },
      {
        title:`Unsupervised change detection analysis using deep clustering frameworks`,
        desc:`Sherley, S. Eliza Femi and Harshitha., K and Subetha, R.Siva and Thanigaivasan, T and Prabakaran, R and Lakshmi, S.V.V.
        2023 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT), Volume , Year 2023, Pages 1-6`
      },
      {
        title:`Railway Track Fault Detection using Deep Neural Networks`,
        desc:`Soumik Rakshit, Sandeep BS, Eliza Femi Sherley S
        2022 IEEE 6th Conference on Information and Communication Technology (CICT), Volume , Year 2022, Pages 1-5`
      },
  ],
},
//jeyanthi-18
{
  name: 'Ms. Jayanthi P',
  role: 'Teaching Fellow',
  email: ' pjayanthi@mitindia.edu',
  profile: 'https://annauniv.irins.org/profile/272840',
  orchid_id: '0000-0002-3879-4534',
  scholar_link: 'http://scholar.google.co.in/citations?user=JZ3GBVkAAAAJ',
  irns: 'https://annauniv.irins.org/profile/272840',
  research_area: ['Video Processing analysis', 'Deep Learning'],
  id: '6468',
  mobile: '044 22516468',
  photo: 'https://imgur.com/m4oSroF.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Artificial Intelligence',
      desc: 'Deep Learning, Video Processing Analytics, Computer Vision'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Teaching Fellow',
      location: 'Chennai',
      from: '2014',
      to: 'Present'
    },
    {
      college_name: 'DMI College of Engineering',
      role: 'Assistant Professor ',
      location: 'Kancheepuram',
      from: '2012',
      to: '2013'
    },
    {
      college_name: 'Easwari Engineering College',
      role: 'Lecturer ',
      location: 'Chennai',
      from: '2004',
      to: '2008'
    },
  ],
  education: [
    {
      course: 'M.E',
      college: 'College of Engineering',
      from: '2002',
      to: '2004',
      location: 'Chennai'
    },
    {
      course: 'B.E',
      college: 'Government College of Technology',
      from: '1995',
      to: '1999',
      location: 'Coimbatore'
    },
  ],
  publication:[
    {
      title:`Ensemble of Behavioral Features for Early Detection of Autism Spectrum Disorder`,
      desc:`Radha, Senthilkumar Abinaya, M. N. Divya Darshini, Kannan Kamalnath, K. N. Jayanthi, P. 
Advances in Intelligent Systems and Computing, Volume 1449, Year 2023, Pages '681--694' 
`
    },
    {
      title:`Sign Language Recognition using Deep CNN with Normalised Keyframe Extraction and Prediction using LSTM`,
      desc:`Jayanthi P, Ponsy RK Sathia Bhama & Madhubalasri B
Journal of Scientific & Industrial Research (JSIR), Volume 82, Year 2023, Pages 745-755
`
    },
    {
      title:`Development of Deep Learning Based Models for Detecting the Significance of Non-Manual Parameters for Indian Sign Language Interpretation `,
      desc:`Kola Sujatha, P. Jayanthi, P. Sandhiya, M. Sowbarnigaa, K. S. Keshini, G. 
Lecture Notes in Networks and Systems , Volume 665, Year 2022, Pages '327--340' `
    },
    {
      title:`An Interactive Voicebot for Visually Challenged: Empowering the Realm Among Deaf-Mute and Normal Community `,
      desc:`Bhama, Ponsy R. K. Sathia Jayanthi, P. Ulagammal, S. Gupta, Kriti Kaushik, K. Sai 
Smart Innovation, Systems and Technologies, Volume 351, Year 2022, Pages'139--151 `
    },
    {
      title:`Real Time Static and Dynamic Sign Language Recognition using Deep Learning`,
      desc:`Jayanthi, P, Bhama, Ponsy RK Sathia, Swetha, K & Subash, S A
Journal of Scientific & Industrial Research, Volume 81, Year 2022, Pages 1186-1194`
    },
  ],
},
//shanmugapriya-19
{
  name: 'Ms R. Shanmuga priya',
  role: 'Teaching Fellow',
  email: 'shanmurajendran2@gmail.com',
  profile: 'https://annauniv.irins.org/profile/264980',
  orchid_id: '0000-0002-6317-8864',
  id: '6466',
  scholar_link: 'http://scholar.google.co.in/citations?user=fnq71JYAAAAJ',
  irns: 'https://annauniv.irins.org/profile/264980',
  research_area: ['Deep Learning', 'Image Processing', 'Computer Vision'],
  mobile: '044-26451702, 9790883617',
  photo: 'https://imgur.com/qq0Nkd3.png',
  address: {
    town: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600023'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Deep Learning, Image Processing, Computer Vision'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Teaching Fellow',
      location: 'Chennai',
      from: '2019',
      to: 'Present'
    },
  ],
  education: [
    {
      course: 'M.E',
      college: 'CEG, Anna University',
      from: '2017',
      to: '2019',
      location: 'Chennai'
    }
  ],
  publication:[
    {
      title:`Deep learning based forest fire classification and detection in satellite images`,
      desc:`Priya R.S.;Vani K.
Proceedings of the 11th International Conference on Advanced Computing, ICoAC 2019, Volume , Year
2019, Pages 61-65`
    },      
  ]
},
//seethalakshmi-20
{
  name: 'Ms P. Seethalakshmi',
  role: '	Teaching Fellow',
  email: 'seethalaxmiperumal@gmail.com',
  profile: 'https://annauniv.irins.org/profile/268938',
  orchid_id: '0000-0002-1044-7178',
  scholar_link: 'https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=1&user=jRZ3qF4AAAAJ',
  id: '6480',
  irns: 'https://annauniv.irins.org/profile/268938',
  research_area: ['Web Security', 'Data Sciences'],
  mobile: '75987 68168',
  photo: 'https://imgur.com/1OQX7w6.png',
  address: {
    town: '',
    city: 'Kanchipuram',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600044'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems',
      desc: 'Web Security, Data Sciences'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Teaching Fellow',
      location: 'Chennai',
      from: '2020',
      to: 'Present'
    }
  ],
  education: [
    {
      course: 'M.Tech',
      college: 'Anna University Regional Campus',
      from: '2011',
      to: '2013',
      location: 'Coimbatore'
    },
    
  ],
  publication:[
    {
      title:'Stacking Ensemble-based XSS Attack Detection Strategy Using Classification Algorithms',
      desc:`Perumal S.;Kola Sujatha P.
      Proceedings of the 6th International Conference on Communication and Electronics Systems, ICCES 2021, Year 2021, Pages 897-901`
    },
  ]
},
// Govindasamy
{
  name: 'Mr K. Govindasamy',
  role: 'Teaching Fellow',
  email: 'kgswamy77@gmail.com',
  profile: 'https://annauniv.irins.org/profile/271390',
  orchid_id: '0000-0001-7870-3410',
  scholar_link: '',
  id: '6482',
  irns: 'https://annauniv.irins.org/profile/271390',
  research_area: ['Block Chain', 'Data mining', 'Database', 'Knowledge management'],
  mobile: '63808 11898',
  photo: 'https://imgur.com/JYvhfgq.png',
  address: {
    town: 'Rosali Nagar',
    city: 'Tambaram, Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600064'
  },
  expertise: [
    {
      title: 'Computer Science Information Systems ',
      desc: 'Blockchain'
    }
  ],
  experience: [
    {
      college_name: 'Anna University',
      role: 'Teaching Fellow',
      location: 'Chennai',
      from: '2014',
      to: 'Present'
    }
  ],
  education: [
    {
      course: 'M.E',
      college: 'Anna University',
      from: '2006',
      to: '2008',
      location: 'Chennai'
    },
  ],
},
//non teaching staffs --Technical Staffs
{
  name: 'Mr. V. Kannan',
  designation: 'Professional Assistant - I',
  mail: 'kannanathan@gmail.com',
  mobile: '97908 85471',
  role: 'Technical Staff',
  image:'https://imgur.com/CRYEfJq.png',
},
{
  name: 'Mr. J. Babu',
  designation: 'Professional Assistant - I',
  mail: 'babuj88@gmail.com',
  mobile: '96008 84569',
  role: 'Technical Staff',
  image:'https://imgur.com/f47wOzv.png',
},
{
  name: 'Mr. V. Saravanan',
  designation: 'Professional Assistant - II',
  mail: 'vsaravananmit@gmail.com',
  mobile: '99401 85747',
  role: 'Technical Staff',
  image:'https://imgur.com/VlFepuG.png',
},
{
  name: 'Ms. G. Senbagam',
  designation: 'Professional Assistant - II',
  mail: 'sarahsenba118@gmail.com',
  mobile: '82207 09008',
  role: 'Technical Staff',
  image:'https://imgur.com/aaAOZEY.png',
},
//Administrative staffs 
{
  name: 'Mrs. M. Eswari',
  designation: 'M.S.G.C',
  mail: '',
  mobile: '94443 64629',
  role: 'Administrative Staff',
  image:'https://imgur.com/8Gd2bW3.png'
},
{
  name: 'Mr. A. Augustin',
  designation: 'Professional Assistant - II',
  mail: 'augustinmlr2007@gmail.com',
  mobile: '98400 85473',
  role: 'Administrative Staff',
  image:'https://imgur.com/D6lfDbc.png',
},
{
  name: 'Mr. Nallathambi .K',
  designation: 'Peon',
  mail: '',
  mobile: '70940 14103',
  role: 'Administrative Staff',
  image:'https://imgur.com/xHoo0JL.png'
},

]


const StaffProfile = () => {
  return (
    <Box>
      <Header />
      <Box px={150} mt={250} style={{ justifyContent: 'space-between', alignItems: 'center' }} >
        <Box bg={COLORS.background} p={20}>
          {
            data?.map((item, index) => {
              return (
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Image mt={8} src={item?.photo} height={400} width={300} style={{ objectFit: 'contain' }} />
                  <Box sx={{ flex: 1 }}>
                    <Text align="center" size={32}>{item?.name}</Text>
                    <Text align="center" size={24}>{item?.role}</Text>
                    <Text align="center" size={20}>{item?.email}</Text>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Text align="center" ml={20} size={20}>{item?.mobile}</Text>
                      <Text mx={20} size={20}>|</Text>
                      <Tooltip label={item?.orchid_id} withArrow offset={-6}>
                        <Text align="center" color={COLORS.textBlueLight} size={20}>Orchid ID</Text>
                      </Tooltip>
                      <Text mx={20} size={20}>|</Text>
                      <Link target="_blank" to={item.profile} style={{ textDecoration: 'none' }}>
                        <Text align="center" size={20} color={COLORS.textBlueLight}>Profile</Text>
                      </Link>
                    </Box>
                    <Text align="center" size={20}>{item?.address?.town} {item?.address?.city}, {item?.address?.state}, {item?.address?.country} - {item?.address?.pincode}</Text>
                    <Box m={40}>
                      <Box>
                        <Text color={COLORS.primaryBg} size={32}>Expertise</Text>
                        {
                          item?.expertise?.map((expertise, i) => {
                            return (
                              <Box key={i} mt={12} ml={48}>
                                <Text size={24}>{expertise?.title}</Text>
                                <Text size={16}>{expertise?.desc}</Text>
                              </Box>
                            )
                          })
                        }
                      </Box>
                      <Box mt={20}>
                        <Text color={COLORS.primaryBg} size={32}>Experience</Text>
                        {
                          item?.experience?.map((experience, j) => {
                            return (
                              <Box key={j} mt={20} ml={48}>
                                <Text size={24}>{experience?.role} ({experience?.from} - {experience?.to})</Text>
                                <Text size={16}>{experience?.college_name}, {experience.location}</Text>
                              </Box>
                            )
                          })
                        }
                      </Box>
                      <Box mt={20}>
                        <Text color={COLORS.primaryBg} size={32}>Experience</Text>
                        {
                          item?.education?.map((education, j) => {
                            return (
                              <Box key={j} mt={20} ml={48}>
                                <Text size={24}>{education?.course} ({education?.from})</Text>
                                <Text size={16}>{education?.college}, {education.location}</Text>
                              </Box>
                            )
                          })
                        }
                      </Box>
                      <Box mt={20}>
                        <Text color={COLORS.primaryBg} size={32}>Publications</Text>
                        {
                          item?.publication?.map((publication, j) => {
                            return (
                              <Box key={j} mt={20} ml={48}>
                                <Text size={24}>{publication?.title}</Text>
                                <Text size={16}>{publication?.desc}</Text>
                              </Box>
                            )
                          })
                        }
                      </Box>
                    </Box>
                  </Box>

                </Box>
              )
            })
          }
        </Box>
      </Box>
    </Box>
  )
}
export default StaffProfile