'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { SiAmazonaws, SiApachekafka, SiApachespark, SiPython, SiReact } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: 'AIS Datalake Project',
      description: 'Built automated data pipeline for daily TV data ingestion (channels, schedules, user activity, billing) from S3/SFTP using AWS, Python, and Spark, implementing Bronze/Silver/Gold data lake architecture for analytics in Redshift.',
      technologies: ['AWS S3', 'AWS Glue', 'PySpark', 'Amazon Redshift', 'Python', 'ETL Pipelines'],
      icon: SiAmazonaws,
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Bronze/Silver/Gold data lake architecture',
        'Automated daily data ingestion',
        'S3/SFTP integration',
        'Redshift analytics optimization',
      ],
    },
    {
      title: 'Cloud Infrastructure Optimization',
      description: 'Optimized cloud infrastructure by implementing Auto Scaling Groups and Elastic Load Balancer across multiple Availability Zones, reducing costs by 30% and improving system uptime to 99.9%.',
      technologies: ['AWS EC2', 'Auto Scaling', 'Load Balancer', 'CloudWatch', 'Availability Zones'],
      icon: SiAmazonaws,
      gradient: 'from-blue-500 to-purple-500',
      features: [
        '30% cost reduction',
        '99.9% system uptime',
        'Multi-AZ deployment',
        'CloudWatch monitoring',
      ],
    },
    {
      title: 'Real-time YouTube Analytics Pipeline',
      description: 'Engineered end-to-end real-time streaming pipeline using Kafka and AWS MSK to process influencer metrics. Achieved 99.9% data completeness and 70% reduction in manual reporting.',
      technologies: ['Apache Kafka', 'AWS MSK', 'PySpark', 'BigQuery', 'Python'],
      icon: SiApachekafka,
      gradient: 'from-green-500 to-teal-500',
      features: [
        '99.9% data completeness',
        '70% manual reporting reduction',
        'Real-time metric processing',
        'BigQuery integration',
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                  <Icon className="w-12 h-12 text-white mb-4 relative z-10" />
                  <h3 className="text-2xl font-bold text-white relative z-10">{project.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[100px]">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
