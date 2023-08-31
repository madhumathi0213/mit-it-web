import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Image, Text, Title, Tooltip } from "@mantine/core";
import Header from "../components/Header/Header";
import COLORS from "../theme/color";
import { Link } from "gatsby";

const data = [
  {
    name: 'Dr Radha Senthilkumar',
    role: 'Professor',
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
      },{
        title:``,
        desc:``
      }
    ]
  }
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