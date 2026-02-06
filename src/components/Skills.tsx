import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      title: 'UI/UXデザイン',
      years: '8年以上',
      description: 'Figma、Adobe XD、Photoshop、Illustrator、Sketchを使用したUI/UXデザイン。ユーザー中心のデザインアプローチとプロトタイピング。',
    },
    {
      title: 'フロントエンド',
      years: '8年以上',
      description: 'HTML、JavaScript、CSS、Sass/SCSSを基盤に、React、Vue3を活用したモダンなWebアプリケーション開発。',
    },
    {
      title: 'バックエンド',
      years: '5年以上',
      description: 'Java、SQL、Springを中心としたサーバーサイド開発。堅牢でスケーラブルなシステムの設計と実装。',
    },
  ];

  return (
    <section id="skills" className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900">スキル</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl text-gray-900">{category.title}</h3>
                <span className="text-sm text-gray-500">{category.years}</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}