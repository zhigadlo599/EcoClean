import React from 'react';
import { motion } from 'framer-motion';
import Article from './Article';

// Дані статей (замінити на динамічні дані пізніше)
const articles = [
  {
    title: "Переваги екологічного прибирання",
    description: "Дізнайтеся, чому екологічне прибирання не лише краще для довкілля, а й корисніше для вашого здоров'я та самопочуття.",
    image: "/images/articles/eco-cleaning.jpg",
    date: "15 Березня 2024",
    readTime: "5 хв",
    category: "Екологія",
    slug: "avantages-nettoyage-ecologique"
  },
  {
    title: "Техніки професійного прибирання",
    description: "Методи та техніки, які використовують наші професіонали для бездоганного прибирання ваших приміщень.",
    image: "/images/articles/pro-cleaning.jpg",
    date: "12 Березня 2024",
    readTime: "4 хв",
    category: "Техніки",
    slug: "techniques-nettoyage-professionnel"
  },
  {
    title: "Догляд за зеленими зонами",
    description: "Як підтримувати зелені зони в ідеальному стані, дотримуючись екологічних норм та зберігаючи біорізноманіття.",
    image: "/images/articles/green-spaces.jpg",
    date: "10 Березня 2024",
    readTime: "6 хв",
    category: "Зелені зони",
    slug: "entretien-espaces-verts"
  },
  {
    title: "Інноваційні рішення для прибирання",
    description: "Останні інновації у продуктах та техніках прибирання, що дбайливо ставляться до довкілля.",
    image: "/images/articles/innovations.jpg",
    date: "8 Березня 2024",
    readTime: "5 хв",
    category: "Інновації",
    slug: "solutions-nettoyage-innovantes"
  }
];

const ArticlesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-eco-green-950 to-black">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Наші статті та новини
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Огляньте наші останні статті про екологічне прибирання, професійні методики та інновації у сфері.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Article {...article} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-6 py-3 bg-eco-green-500 hover:bg-eco-green-400 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-eco-green-500/30">
            Переглянути всі статті
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection; 