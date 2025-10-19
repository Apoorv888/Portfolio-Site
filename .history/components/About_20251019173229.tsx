'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Cloud, Code, TrendingUp } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Database,
      title: 'Data Pipeline Expert',
      description: 'Built real-time streaming pipelines processing millions of events using Kafka & PySpark',
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Extensive experience with AWS services: S3, Glue, MSK, Redshift, EC2, and Auto Scaling',
    },
    {
      icon: Code,
      title: 'ETL Orchestration',
      description: 'Automated data workflows with Airflow, reducing manual effort and improving reliability',
    },
    {
      icon: TrendingUp,
      title: 'Impact Driven',
      description: '70% reduction in manual reporting, 30% improvement in data accuracy, 40% API latency reduction',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Data Engineer with a Passion for Innovation
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
              <p>
                With <span className="font-semibold text-primary-600 dark:text-primary-400">1.5 years of hands-on experience</span>, 
                I specialize in designing and implementing real-time data streaming pipelines and cloud-based data lakes.
              </p>
              <p>
                Currently at <span className="font-semibold">Vhub.ai</span>, I've engineered end-to-end YouTube streaming 
                pipelines using AWS MSK (Kafka), achieving <span className="font-semibold text-primary-600 dark:text-primary-400">99.9% data completeness</span> and 
                reducing manual reporting by <span className="font-semibold text-primary-600 dark:text-primary-400">70%</span> for 
                major brands like Dot & Key.
              </p>
              <p>
                My expertise spans across <span className="font-semibold">AWS ecosystem</span>, 
                <span className="font-semibold"> Apache Kafka</span>, <span className="font-semibold">PySpark</span>, 
                and <span className="font-semibold">Python</span>, with a strong focus on automation, scalability, and data quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Education</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Bachelor of Engineering
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">Computer Engineering</p>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      Sinhgad Academy of Engineering
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2020 - 2023</p>
                    <p className="text-lg font-bold text-primary-600 dark:text-primary-400 mt-2">
                      CGPA: 8.40
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
