import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'ECプラットフォーム',
      year: '2025',
      role: 'リードデザイナー＆フロントエンドエンジニア',
      description:
        '大規模ECプラットフォームのエンドツーエンドでの再設計。ユーザーリサーチを実施し、デザインシステムを構築、レスポンシブなフロントエンドを実装。',
      link: '#',
    },
    {
      title: 'デザインシステム',
      year: '2024',
      role: 'デザインシステムリード',
      description:
        '50以上のコンポーネント、ドキュメント、ガイドラインを含む包括的なデザインシステムを構築。5つのプロダクトチームで採用。',
      link: '#',
    },
    {
      title: 'タスク管理アプリ',
      year: '2024',
      role: 'UI/UXデザイナー＆開発者',
      description:
        'リアルタイム更新と直感的なドラッグ＆ドロップインターフェースを備えたコラボレーティブなタスク管理ツールの設計と開発。',
      link: '#',
    },
    {
      title: 'モバイルバンキングアプリ',
      year: '2023',
      role: 'シニアUXデザイナー',
      description:
        'モバイルバンキングアプリケーションの完全なUX/UIデザイン。ユーザーリサーチを実施し、ワイヤーフレームと高精度プロトタイプを作成。',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900">実績</h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-100 pb-16 last:border-b-0"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl text-gray-900">{project.title}</h3>
                <span className="text-sm text-gray-500">{project.year}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{project.role}</p>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-flex items-center space-x-1 text-gray-900 hover:text-gray-600 transition-colors text-sm group"
              >
                <span>詳細を見る</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}