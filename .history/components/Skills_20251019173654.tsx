'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiPython, 
  SiApachekafka, 
  SiApachespark, 
  SiAmazon,
  SiMysql,
  SiApacheairflow,
  SiDatabricks,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiGooglecloud
} from 'react-icons/si';
import { Database, Server, Code } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: 'Programming & Scripting',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', icon: SiPython, level: 95 },
        { name: 'Unix Shell', icon: Code, level: 85 },
      ],
    },
    {
      title: 'Data Engineering & ETL',
      icon: Database,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Apache Kafka', icon: SiApachekafka, level: 90 },
        { name: 'PySpark', icon: SiApachespark, level: 90 },
        { name: 'AWS Glue', icon: SiAmazonaws, level: 85 },
        { name: 'Apache Airflow', icon: SiApacheairflow, level: 85 },
        { name: 'Databricks', icon: SiDatabricks, level: 80 },
      ],
    },
    {
      title: 'Databases & Warehousing',
      icon: Server,
      gradient: 'from-green-500 to-teal-500',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 85 },
        { name: 'BigQuery', icon: SiGooglecloud, level: 90 },
        { name: 'Firestore', icon: SiGooglecloud, level: 80 },
        { name: 'Redshift', icon: SiAmazonaws, level: 85 },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: SiAmazonaws,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS S3', icon: SiAmazonaws, level: 95 },
        { name: 'AWS EC2', icon: SiAmazonaws, level: 85 },
        { name: 'AWS MSK', icon: SiAmazonaws, level: 90 },
        { name: 'Auto Scaling', icon: SiAmazonaws, level: 80 },
      ],
    },
    {
      title: 'Analytics & Frameworks',
      icon: SiPandas,
      gradient: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Pandas', icon: SiPandas, level: 95 },
        { name: 'NumPy', icon: SiNumpy, level: 90 },
        { name: 'Flask', icon: SiFlask, level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`bg-gradient-to-r ${category.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <CategoryIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <SkillIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'ETL Pipelines',
              'Data Lake Architecture',
              'Bronze/Silver/Gold',
              'Kafka Connect',
              'Real-time Streaming',
              'CloudWatch',
              'Load Balancer',
              'Availability Zones',
              'JWT Authentication',
              'REST APIs',
              'Agile Methodology',
              'Git',
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
