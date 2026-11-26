
import {
    ArrowUpRight,
    BookOpen,
    Check,
    Clapperboard,
    Lightbulb,
    CarFront,
} from "lucide-react";

const benefits = [
    {
        title: "Код легше читати",
        description:
            "Іншим розробникам простіше зрозуміти, як працює програма.",
    },
    {
        title: "Легше виправляти помилки",
        description:
            "У простішому коді швидше можна знайти причину проблеми.",
    },
    {
        title: "Зручніше вносити зміни",
        description:
            "Додавати нові можливості та змінювати наявні рішення стає легше.",
    },
    {
        title: "Економія часу",
        description:
            "Не потрібно витрачати час на складні рішення, яких можна було уникнути.",
    },
    {
        title: "Зручність для користувачів",
        description:
            "Програма залишається зрозумілою та простою у використанні.",
    },
];

const examples = [
    {
        name: "Uber",
        icon: CarFront,
        description:
            "Користувачеві достатньо відкрити застосунок, вказати місце призначення та замовити поїздку. Не потрібно телефонувати, шукати номер таксі чи довго пояснювати адресу.",
    },
    {
        name: "Netflix",
        icon: Clapperboard,
        description:
            "Замість пошуку фільмів і серіалів на різних сайтах користувач може знайти потрібний контент в одному застосунку та одразу почати перегляд.",
    },
];

export function KissPageContent() {
    return (
        <article className="mx-auto w-full max-w-[1200px] px-8 py-12 text-[#e8ebf0] lg:px-14">
            {/* Header */}
            <header>
                <div className="inline-flex items-center gap-2 rounded-md border border-[#245b56] bg-[#10201f] px-3 py-2 text-[11px] font-semibold tracking-[2px] text-[#55e5d5]">
                    <span className="size-1.5 rounded-full bg-[#55e5d5] shadow-[0_0_10px_#55e5d5]" />
                    ПРИНЦИП 01
                </div>

                <div className="mt-8 flex items-end justify-between gap-6">
                    <div>
                        <h1 className="text-6xl font-light tracking-[-4px] sm:text-7xl lg:text-[80px]">
                            KISS
                        </h1>

                        <h2 className="mt-5 text-xl font-medium text-white sm:text-2xl">
                            Keep It Simple, Stupid
                        </h2>

                        <p className="mt-3 text-sm text-[#929ba9] sm:text-base">
                            Віддавай перевагу простим рішенням замість зайвого ускладнення.
                        </p>
                    </div>

                    <div className="hidden items-baseline gap-1 text-[#647184] sm:flex">
                        <span className="text-4xl font-semibold">01</span>
                        <span className="text-sm">/04</span>
                    </div>
                </div>
            </header>

            <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
                <div>
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ОСНОВНА ІДЕЯ
                    </p>

                    <h2 className="mt-6 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                        Простота замість зайвої складності.
                    </h2>

                    <div className="mt-5 space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            На мою думку, простота — одна з найважливіших складових
                            якісного програмного забезпечення. Вона означає, що потрібно
                            зосереджуватися на головному та не додавати зайвих деталей,
                            які ускладнюють роботу програми.
                        </p>

                        <p>
                            <strong className="font-medium text-white">
                                KISS (Keep It Simple, Stupid)
                            </strong>{" "}
                            — це принцип розробки програмного забезпечення, який означає
                            «роби простіше». Його суть полягає в тому, щоб не ускладнювати
                            код, структуру програми та її функції без реальної потреби.
                        </p>

                        <p>
                            Не завжди складніше рішення є кращим. Часто простий підхід
                            дозволяє досягти того самого результату, але з меншими
                            зусиллями.
                        </p>
                    </div>

                    <ul className="mt-7 space-y-4">
                        <li className="flex items-start gap-3 text-sm text-[#929ba9]">
                            <Check size={18} className="mt-0.5 shrink-0 text-[#55e5d5]" />
                            <span>
                <strong className="text-white">Менше складності</strong> —
                зосереджуйся на тому, що справді важливо.
              </span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-[#929ba9]">
                            <Check size={18} className="mt-0.5 shrink-0 text-[#55e5d5]" />
                            <span>
                <strong className="text-white">Більше зрозумілості</strong> —
                роби рішення простими для сприйняття.
              </span>
                        </li>
                    </ul>
                </div>

                {/* Ask yourself */}
                <aside className="h-fit rounded-xl border border-[#343b43] bg-[#12171b] p-5 lg:mt-[-10px]">
                    <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-[#19302e] text-[#55e5d5]">
                            <BookOpen size={19} />
                        </div>

                        <h3 className="text-sm font-semibold text-white">
                            Запитай себе
                        </h3>
                    </div>

                    <p className="mt-4 pl-12 font-mono text-sm text-[#55e5d5]">
                        «Чи можна зробити це простіше?»
                    </p>
                </aside>
            </section>

            <section className="mt-24 border-t border-[#252b32] pt-12">
                <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                    ЧОМУ ЦЕ ВАЖЛИВО
                </p>

                <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                    Переваги принципу KISS
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#929ba9]">
                    Дотримання цього принципу допомагає створювати програмне
                    забезпечення, з яким простіше працювати як розробникам,
                    так і користувачам.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.title}
                            className="rounded-xl border border-[#292f37] bg-[#101419] p-5"
                        >
              <span className="font-mono text-xs text-[#55bfb3]">
                0{index + 1}
              </span>

                            <h3 className="mt-5 font-semibold text-white">
                                {benefit.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#929ba9]">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Examples */}
            <section className="mt-24 border-t border-[#252b32] pt-12">
                <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                    У РЕАЛЬНОМУ ЖИТТІ
                </p>

                <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                    Приклади використання KISS
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#929ba9]">
                    Цей принцип можна побачити в багатьох відомих програмах
                    і сервісах.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {examples.map((example) => {
                        const Icon = example.icon;

                        return (
                            <div
                                key={example.name}
                                className="rounded-xl border border-[#292f37] bg-[#101419] p-6"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex size-11 items-center justify-center rounded-lg bg-[#19302e] text-[#55e5d5]">
                                        <Icon size={22} />
                                    </div>

                                    <ArrowUpRight size={19} className="text-[#647184]" />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-white">
                                    {example.name}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#929ba9]">
                                    {example.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-5 flex items-start gap-4 rounded-xl border border-[#343b43] bg-[#12171b] p-5">
                    <Lightbulb
                        size={21}
                        className="mt-0.5 shrink-0 text-[#55e5d5]"
                    />

                    <p className="text-sm leading-7 text-[#a0a9b6]">
                        Простота не означає, що продукт повинен мати мало можливостей.
                        Він може бути складним усередині, але водночас залишатися
                        зрозумілим і зручним для користувача.
                    </p>
                </div>
            </section>

            <section className="mt-24 border-t border-[#252b32] pb-12 pt-12">
                <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                    ГОЛОВНА ДУМКА
                </p>

                <h2 className="mt-5 max-w-3xl text-2xl font-medium text-white sm:text-3xl">
                    Простота — це постійна робота над собою та своїм продуктом.
                </h2>

                <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                    <p>
                        Досягти простоти не завжди легко. Іноді простіше додати ще одну
                        функцію, ніж подумати, чи справді вона потрібна. Тому розробникам
                        важливо час від часу переглядати свою роботу, шукати зайві
                        елементи та думати, що можна зробити зрозумілішим.
                    </p>

                    <p>
                        Також потрібно враховувати думку користувачів, адже саме вони
                        найкраще можуть показати, що в програмі зручно, а що викликає
                        труднощі.
                    </p>
                </div>

                <div className="mt-8 max-w-3xl">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        МОЄ РОЗУМІННЯ ПРИНЦИПУ KISS
                    </p>

                    <div className="mt-4 space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Нещодавно я почала працювати з кодом у справжньому комерційному
                            проєкті й намагаюся дотримуватися цього принципу у своїй роботі.
                            Для мене важливо писати код так, щоб він був зрозумілим не лише
                            мені, а й іншим розробникам. Іноді для цього краще розділити
                            функціональність на кілька невеликих файлів, зберігаючи просту
                            та зрозумілу структуру.
                        </p>

                        <p>
                            Я помітила, що навіть невелику функцію можна реалізувати надто
                            складно. Але якщо є простіше рішення, яке добре виконує свою
                            задачу, навіщо ускладнювати? Мені близький вислів «на хлопський
                            розум» — тобто зробити так, щоб рішення було зрозумілим і не
                            вимагало зайвих пояснень. На мою думку, саме така простота
                            допомагає іншим розробникам швидше орієнтуватися в коді та
                            полегшує подальшу роботу над проєктом.
                        </p>
                    </div>
                </div>

                <blockquote className="mt-8 max-w-3xl rounded-xl border-l-2 border-[#55e5d5] bg-[#11191a] px-6 py-5">
                    <p className="text-base leading-7 text-white">
                        Не потрібно ускладнювати щось лише для того, щоб воно виглядало
                        професійніше. Набагато важливіше знайти просте рішення, яке добре
                        виконує свою задачу, легко сприймається іншими та не створює зайвих
                        проблем у майбутньому.
                    </p>

                    <footer className="mt-4 text-xs tracking-wide text-[#55bfb3]">
                        МОЯ ДУМКА ПРО ПРИНЦИП KISS
                    </footer>
                </blockquote>
            </section>
        </article>
    );
}
