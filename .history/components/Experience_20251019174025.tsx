'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      company: 'Vhub.ai',
      role: 'Data Engineer',
      period: 'Dec 2024 - Present',
      location: 'India',
      achievements: [
        'Engineered end-to-end YouTube real-time streaming pipeline using AWS MSK (Kafka), Kafka Connect, and Python to ingest influencer metrics (views, likes, comments, subscribers)',
        'Designed S3 sink connectors with partitioning and BigQuery sync via AWS Glue, achieving 99.9% data completeness',
        'Reduced manual reporting by 70% for brands like Dot & Key through automated data pipelines',
        'Implemented AWS Glue ETL jobs using PySpark for data cleansing, transformation, and aggregation, improving data accuracy by 30%',
        'Developed Python scripts (Requests, Pandas, BigQuery) to track Instagram ROI, improving reporting efficiency by 25%',
        'Built scalable sales dashboard backend using Flask, BigQuery, and Firestore, reducing API latency by 40% and supporting 500+ concurrent users',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'Vodafone Intelligent Solutions (VOIS)',
      role: 'Graduate Engineer Trainee',
      period: 'Aug 2023 - Mar 2024',
      location: 'India',
      achievements: [
        'Collaborated within Development team to create Python programs for efficiently loading CSV file data into Oracle tables',
        'Reduced data processing errors by 20% through optimized data loading scripts',
        'Conducted 10+ Root Cause Analyses (RCAs) to determine system failure causes and implement preventive measures',
        'Followed Agile methodology for timely project delivery and continuous improvement',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 to-purple-600" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5" />
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                    </div>
                    <p className="text-xl font-semibold mb-3">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                        >
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-600 mt-2" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-600" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
