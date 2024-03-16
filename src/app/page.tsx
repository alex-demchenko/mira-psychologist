export default function Home() {
  return (
    <main className="mx-auto px-4 max-w-[1200px]">
      <section>
        <div className="mt-[140px] mb-4 text-8xl">
          <p>Мира</p>
          <p>Кода</p>
        </div>

        <div className="flex gap-4">
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
    </main>
  );
}
