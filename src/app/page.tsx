import { cn } from "@/utils/cn";
import { headerFont } from "./fonts";

export default function Home() {
  return (
    <main className="mx-auto px-6 max-w-[1200px]">
      <section className="py-4">
        <div className={cn("mt-[140px] mb-4 text-8xl", headerFont.className)}>
          <p>Мира</p>
          <p>Кода</p>
        </div>

        <div className="mb-[100px] flex gap-4">
          <div className="px-2 max-w-[150px] border-l-2 border-l-blue-700">
            Клинический психолог
          </div>
          <div className="px-2 max-w-[150px] border-l-2 border-l-blue-700">
            Семейный психолог
          </div>
          <div className="px-2 max-w-[150px] border-l-2 border-l-blue-700">
            Гештальт - терапевт
          </div>
        </div>
      </section>

      <section id="about" className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Давайте познакомимся
        </h2>
      </section>

      <section id="problems" className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Какие проблемы решаю
        </h2>
      </section>

      <section className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Мне важно помочь Вам найти свой путь и показать новые стратегии
        </h2>
      </section>

      <section className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Важно не просто любить свое дело, а быть в этом профессионалом
        </h2>
      </section>

      <section id="reviews" className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Ваша обратная связь и искренние эмоции{" "}
        </h2>
      </section>

      <section id="price" className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Записаться на консультацию
        </h2>
      </section>
    </main>
  );
}
