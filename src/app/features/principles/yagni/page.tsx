
"use client";

import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    Check,
    Lightbulb,
} from "lucide-react";

export default function YagniPage() {
    return (
        <main className="min-h-screen border-x border-[#252b32] bg-[#080a0c] text-[#e8ebf0]">
            <article className="mx-auto w-full max-w-[1200px] px-8 py-12 lg:px-14">

                {/* Header */}
                <header>
                    <div className="inline-flex items-center gap-2 rounded-md border border-[#49336f] bg-[#171222] px-3 py-2 text-[11px] font-semibold tracking-[2px] text-[#b795ff]">
                        <span className="size-1.5 rounded-full bg-[#b795ff] shadow-[0_0_10px_#b795ff]" />
                        PRINCIPLE 02
                    </div>

                    <div className="mt-8 flex items-end justify-between gap-6">
                        <div>
                            <h1 className="text-6xl font-light tracking-[-4px] sm:text-7xl lg:text-[80px]">
                                YAGNI
                            </h1>

                            <h2 className="mt-5 text-xl font-medium text-white sm:text-2xl">
                                You Aren't Gonna Need It
                            </h2>

                            <p className="mt-3 text-sm text-[#929ba9] sm:text-base">
                                Створюй лише те, що потрібно, і тоді, коли це потрібно.
                            </p>
                        </div>

                        <div className="hidden items-baseline gap-1 text-[#647184] sm:flex">
                            <span className="text-4xl font-semibold">02</span>
                            <span className="text-sm">/04</span>
                        </div>
                    </div>
                </header>

                {/* Idea */}
                <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
                    <div>
                        <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                            ГОЛОВНА ІДЕЯ
                        </p>

                        <h2 className="mt-6 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                            Не створюй те, що тобі поки не потрібно.
                        </h2>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                            <p>
                                У розробці програмного забезпечення важливо не лише
                                створювати якісний код, а й правильно використовувати
                                свій час та ресурси. Один із принципів, який допомагає
                                в цьому, — YAGNI (You Aren't Gonna Need It), що
                                перекладається як «Вам це не знадобиться».
                            </p>

                            <p>
                                Цей принцип походить із методології Extreme Programming
                                (XP). Його головна ідея — не додавати функції, які
                                наразі не потрібні, навіть якщо здається, що вони
                                можуть знадобитися в майбутньому.
                            </p>

                            <p>
                                Простими словами,{" "}
                                <strong className="font-medium text-white">
                                    YAGNI — це уникнення витрат часу та грошей на
                                    надмірне ускладнення рішень, які, на вашу думку,
                                    можуть знадобитися пізніше.
                                </strong>
                            </p>

                            <p>
                                На мою думку, це дуже корисний принцип, адже під час
                                розробки легко захопитися ідеєю зробити все наперед.
                                Але не завжди те, що здається потрібним сьогодні,
                                справді знадобиться в майбутньому.
                            </p>
                        </div>

                        <ul className="mt-7 space-y-4">
                            <li className="flex items-start gap-3 text-sm text-[#929ba9]">
                                <Check size={18} className="mt-0.5 shrink-0 text-[#55e5d5]" />
                                <span>
                                    <strong className="text-white">
                                        Менше зайвого коду
                                    </strong>{" "}
                                    — не додавай те, що поки не потрібно.
                                </span>
                            </li>

                            <li className="flex items-start gap-3 text-sm text-[#929ba9]">
                                <Check size={18} className="mt-0.5 shrink-0 text-[#55e5d5]" />
                                <span>
                                    <strong className="text-white">
                                        Краща читабельність
                                    </strong>{" "}
                                    — залишай код зрозумілим і простим.
                                </span>
                            </li>

                            <li className="flex items-start gap-3 text-sm text-[#929ba9]">
                                <Check size={18} className="mt-0.5 shrink-0 text-[#55e5d5]" />
                                <span>
                                    <strong className="text-white">
                                        Економія часу
                                    </strong>{" "}
                                    — зосереджуйся на поточних завданнях.
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
                            «Чи справді нам це потрібно?»
                        </p>
                    </aside>
                </section>

                {/* The problem */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ПРОБЛЕМА
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        У чому полягає проблема?
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Іноді розробники намагаються передбачити всі можливі
                            потреби майбутнього проєкту. Вони додають функції,
                            створюють складні структури та використовують різні
                            підходи, хоча для цього ще немає реальної потреби.
                        </p>

                        <p>
                            На перший погляд, це може здаватися хорошою ідеєю.
                            Адже краще підготуватися заздалегідь, чи не так?
                            Але на практиці такий підхід часто створює більше
                            проблем, ніж користі.
                        </p>

                        <p>Наприклад:</p>
                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Витрачається більше часу на розробку.",
                            "Збільшується кількість зайвого коду.",
                            "Проєкт стає складнішим для розуміння.",
                            "Підтримувати та змінювати код стає важче.",
                            "З'являється більше можливостей для помилок.",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-[#292f37] bg-[#12171b] p-5"
                            >
                                <span className="font-mono text-xs text-[#b795ff]">
                                    0{index + 1}
                                </span>
                                <p className="mt-3 text-sm leading-6 text-[#a0a9b6]">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 max-w-4xl text-sm leading-7 text-[#929ba9] sm:text-base">
                        Я вважаю, що немає сенсу витрачати час на те, що може
                        ніколи не бути використаним. Краще зосередитися на
                        поточних завданнях і виконати їх добре.
                    </p>
                </section>

                {/* How YAGNI works */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ЯК ЦЕ ПРАЦЮЄ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Як працює принцип YAGNI?
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Основне правило YAGNI досить просте: не потрібно
                            реалізовувати те, чого ще ніхто не потребує.
                        </p>

                        <p>
                            Наприклад, якщо зараз проєкту потрібна лише базова
                            функціональність, не варто одразу додавати десятки
                            додаткових можливостей тільки тому, що вони можуть
                            стати корисними в майбутньому.
                        </p>

                        <p>
                            Якщо згодом з'явиться така потреба, можна буде
                            повернутися до цього питання та реалізувати
                            відповідне рішення.
                        </p>

                        <p>
                            Це не означає, що потрібно ігнорувати майбутній
                            розвиток проєкту. Просто не варто витрачати ресурси
                            на те, що поки що не має практичного застосування.
                        </p>
                    </div>
                </section>

                {/* Avoid overengineering */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ПРОСТОТА КОДУ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Чому не варто ускладнювати код завчасно?
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Ще одна важлива частина YAGNI — уникнення зайвих
                            абстракцій та складних рішень.
                        </p>

                        <p>
                            Іноді розробники створюють універсальні компоненти,
                            додаткові класи або складні структури, хоча для
                            поточного завдання достатньо простішого рішення.
                        </p>

                        <p>
                            Я не вважаю, що складні рішення або абстракції —
                            це погано. Вони можуть бути дуже корисними, коли
                            справді потрібні. Але якщо можна вирішити завдання
                            простіше, навіщо ускладнювати його без причини?
                        </p>

                        <p>
                            На мою думку, хороший код не обов'язково має бути
                            складним. Він має бути зрозумілим, зручним для
                            підтримки та відповідати реальним потребам проєкту.
                        </p>
                    </div>
                </section>

                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ЯКІСТЬ КОДУ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Чи означає YAGNI, що потрібно нехтувати якістю коду?
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Ні. І це важливо розуміти.
                        </p>

                        <p>
                            YAGNI не означає, що можна писати неякісний код,
                            ігнорувати безпеку, тестування або перевірку даних.
                            Цей принцип стосується саме непотрібної
                            функціональності та передчасних рішень.
                        </p>

                        <p>
                            Не потрібно створювати щось лише заради можливої
                            майбутньої потреби. Але водночас важливо
                            дотримуватися хороших практик програмування
                            та писати код, який буде легко підтримувати.
                        </p>

                        <p>
                            Я вважаю, що тут важливо знайти баланс між
                            простотою та якістю.
                        </p>
                    </div>
                </section>

                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ПОРІВНЯННЯ ПРИНЦИПІВ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        YAGNI та KISS: у чому різниця?
                    </h2>

                    <p className="mt-5 max-w-4xl text-sm leading-7 text-[#929ba9] sm:text-base">
                        YAGNI та KISS (Keep It Simple, Stupid) — два принципи,
                        які мають багато спільного. Обидва допомагають уникати
                        зайвої складності під час розробки.
                    </p>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-[#49336f] bg-[#171222] p-6">
                            <h3 className="text-2xl font-medium text-[#b795ff]">
                                YAGNI
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#a0a9b6]">
                                Не потрібно створювати функціональність,
                                яка поки що не потрібна.
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#343b43] bg-[#12171b] p-6">
                            <h3 className="text-2xl font-medium text-[#55e5d5]">
                                KISS
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#a0a9b6]">
                                Рішення потрібно робити якомога простішими
                                та зрозумілішими.
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 max-w-4xl text-sm leading-7 text-[#929ba9] sm:text-base">
                        Я б пояснила це так: YAGNI допомагає зрозуміти,
                        що не потрібно реалізовувати, а KISS — як зробити
                        потрібне рішення простішим. На мою думку, ці
                        принципи добре доповнюють один одного.
                    </p>
                </section>

                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        МОЇ ДУМКИ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Мої думки щодо YAGNI
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Особисто мені подобається ідея цього принципу,
                            оскільки він нагадує, що не потрібно ускладнювати
                            роботу без реальної причини.
                        </p>

                        <p>
                            Я думаю, що важливо навчитися розуміти, коли
                            певний інструмент або підхід справді потрібен,
                            а коли можна обійтися простішим рішенням.
                        </p>

                        <p>
                            Водночас не варто сприймати YAGNI занадто
                            буквально. Це не означає, що потрібно думати
                            лише про сьогоднішній день і зовсім не враховувати
                            можливість змін у майбутньому. Просто не потрібно
                            реалізовувати те, для чого ще немає конкретної потреби.
                        </p>
                    </div>

                    <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#343b43] bg-[#12171b] p-5">
                        <Lightbulb
                            size={20}
                            className="mt-0.5 shrink-0 text-[#b795ff]"
                        />

                        <p className="text-sm leading-7 text-[#a0a9b6]">
                            Не потрібно намагатися передбачити абсолютно все.
                            Спочатку варто вирішити реальну проблему, а вже
                            потім думати про додаткові можливості.
                        </p>
                    </div>
                </section>


                {/* Navigation */}
                <nav className="mt-10 flex flex-col gap-5 border-b border-[#252b32] pb-16 sm:flex-row sm:items-center sm:justify-between">
                    <a
                        href="/kiss"
                        className="group flex items-center gap-3 text-sm text-[#929ba9] transition hover:text-white"
                    >
                        <ArrowLeft
                            size={18}
                            className="transition group-hover:-translate-x-1"
                        />
                        <span>
                            <span className="block text-xs text-[#647184]">
                                Попередній принцип
                            </span>
                            <span className="font-medium text-white">KISS</span>
                        </span>
                    </a>

                    <a
                        href="/principles"
                        className="text-sm text-[#929ba9] transition hover:text-white"
                    >
                        До всіх принципів
                    </a>

                    <a
                        href="/dry"
                        className="group flex items-center justify-end gap-3 text-sm text-[#929ba9] transition hover:text-white"
                    >
                        <span className="text-right">
                            <span className="block text-xs text-[#647184]">
                                Наступний принцип
                            </span>
                            <span className="font-medium text-white">DRY</span>
                        </span>
                        <ArrowRight
                            size={18}
                            className="transition group-hover:translate-x-1"
                        />
                    </a>
                </nav>

                {/* Footer */}
                <footer className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl border border-[#536174] text-xl font-bold text-white">
                            P
                        </div>

                        <div>
                            <p className="font-semibold text-[#929ba9]">
                                principled
                            </p>
                            <p className="mt-1 text-[10px] tracking-[2px] text-[#71849a]">
                                CLEAN CODE ACADEMY
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-xs text-[#71849a]">
                        <span>Створено для розробників, які цінують якість коду.</span>
                        <span>v1.0 / 2024</span>
                    </div>
                </footer>
            </article>
        </main>
    );
}
