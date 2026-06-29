import { Card, Space, Typography } from "antd";
import styles from "./ExperienceSection.module.scss";

const { Title, Text } = Typography;

const experiences = [
  {
    company: "Self-employed",
    // TODO раскомментить когда зальется на дев
    url: "https://resaver-git-dev-al-agun-s-projects.vercel.app/",
    period: "Апрель 2026 – настоящее время",
    position: "Frontend-разработчик (Next.js + TypeScript)",
    responsibilities: [
      "Корпоративный веб-сайт + админ-панель для компании автоматизации промышленных процессов (АСУТП)",
      "Спроектировал архитектуру проекта с нуля по методологии (FSD)",
      "Разработал дизайн-систему с тёмной/светлой темой на SCSS Modules",
      "Создал админ-панель: авторизация (JWT), CRUD новостей, TipTap rich-text редактор",
      "Настроил SSR + i18n (RU/EN) + защиту роутов через Next.js middleware",
      "Интегрировал MSW для разработки без бэкенда",
      "Реализовал адаптивный дизайн (mobile-first)",
    ],
  },
  {
    company: "EasySales",
    url: "https://easysales.pro/",
    period: "Май 2024 – Сентябрь 2025",
    position: "Frontend-разработчик (React + TypeScript)",
    responsibilities: [
      "Разрабатывал SPA-приложения для CRM-системы с использованием React 18, TypeScript и Redux Toolkit",
      "Оптимизировал производительность ключевых страниц, что сократило время загрузки на 15%",
      "Реализовал сложные интерактивные компоненты (динамические формы, drag'n'drop интерфейсы)",
      "Активно участвовал в код-ревью, поддерживал высокое качество кода (ESLint, Prettier)",
      "Интеграция с бэкендом через REST API",
    ],
  },
  {
    company: "SpeechUp",
    url: "https://speechup.ru/",
    period: "Май 2023 – Май 2024",
    position: "Frontend-разработчик (React + TypeScript)",
    responsibilities: [
      "Разрабатывал интерфейсы образовательной платформы для подготовки к выступлениям",
      "Создал систему интерфейсов для анализа выступлений",
      "Работа с Redux и формами",
      "Активно участвовал в код-ревью, поддерживал высокое качество кода (ESLint, Prettier)",
      "Адаптивная вёрстка",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <Card title="💼 Опыт работы" className={styles.sectionCard}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {experiences.map((exp, index) => (
          <div key={index}>
            <Title level={4}>
              {exp.url ? (
                <a
                  href={exp.url || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {exp.company}
                </a>
              ) : (
                <span className={styles.text}>{exp.company}</span>
              )}{" "}
              ({exp.period})
            </Title>
            <Text strong>{exp.position}</Text>
            <ul className={styles.list}>
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Space>
    </Card>
  );
};
