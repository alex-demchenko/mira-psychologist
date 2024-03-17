import { cn } from "@/utils/cn";
import { headerFont } from "./fonts";

export default function Home() {
  return (
    <main className="mx-auto px-6 max-w-[1200px]">
      <section className="py-4">
        <div className={cn("mt-[140px] mb-4 text-8xl", headerFont.className)}>
          <p>Міра</p>
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
          Давайте познайомимось
        </h2>
      </section>

      <section id="problems" className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Які проблеми вирішую
        </h2>
      </section>

      <section className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Мені важливо допомогти Вам знайти свій шлях та показати нові стратегії
        </h2>
      </section>

      <section className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Важливо не просто любити свою справу, а бути у цьому професіоналом
        </h2>
      </section>

      <section id="reviews" className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Ваш зворотний зв'язок та щирі емоції
        </h2>
      </section>

      <section id="price" className="py-6 h-[600px]">
        <h2 className={cn("text-4xl", headerFont.className)}>
          Записатися на консультацію
        </h2>
      </section>
    </main>
  );
}
