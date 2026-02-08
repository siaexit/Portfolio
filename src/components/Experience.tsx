import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: '通信会社サイトのシステム刷新開発',
      period: '2025年 — 現在',
      description:
        '刷新プロジェクトのフロントエンド開発。vueアプリケーションの設計と製造チームメンバーのメンタリング。',
    },
    {
      title: 'UI/配送システム開発',
       period: '2025年',
      description:
        'クライアント向けにレスポンシブなWebアプリケーションを設計・開発。ユーザーリサーチを実施し、デザインシステムを構築。',
    },
    {
      title: '飲食企業向けルート計画システム',
       period: '2024年',
      description:
        'vueとモダンなweb技術を使用してユーザーインターフェースを構築。デザイナーやバックエンドエンジニアと協力。',
    },
  ];

  return (
    <section id="experience" className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900">経歴</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-100 pb-12 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <h3 className="text-xl text-gray-900">{exp.title}</h3>
                <span className="text-sm text-gray-500 md:text-right">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{exp.company}</p>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}