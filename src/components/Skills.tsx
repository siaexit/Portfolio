import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      title: 'UI・UX',
      years: '3年以上',
      description: '要件整理からUI設計まで実装を前提としたデザインに対応します。',
      points: [
        '情報設計・画面設計',
        'ユーザーフロー設計',
        'デザインシステム構築・運用',
      ],
      tools: 'Figma / Adobe XD / Photoshop / Illustrator',
    },
    {
      title: 'フロントエンド',
      years: '5年以上',
      description: '要件理解を踏まえた保守性・拡張性の高いUI実装が強みです。',
      points: [
        'React / Vue を用いたフロントエンド開発',
        'コンポーネント設計・再利用設計',
        'API連携・状態管理',
      ],
      tools: 'HTML / CSS / Sass / JavaScript',
    },
    {
      title: 'バックエンド',
      years: '5年以上',
      description: '小〜中規模案件を中心にフロントエンドと連動した開発が可能です。',
      points: [
        'Java / Spring を用いた開発',
        'API設計',
        'SQLによるデータ設計',
        'フロントエンドとの仕様調整・連携実装',
      ],
      tools: '',
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
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                {category.description}
              </p>
              <ul className="space-y-2 mb-4">
                {category.points.map((point, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start">
                    <span className="text-gray-400 mr-2">・</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {category.tools && (
                <p className="text-gray-500 text-xs mt-4 pt-4 border-t border-gray-100">
                  {category.tools}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}