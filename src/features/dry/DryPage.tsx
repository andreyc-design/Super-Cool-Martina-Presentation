
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    Lightbulb,
    Check,
} from "lucide-react";

export function DryPageContent() {
    return (
        <main className="min-h-screen border-x border-[#252b32] bg-[#080a0c] text-[#e8ebf0]">
            <article className="mx-auto w-full max-w-[1200px] px-8 py-12 lg:px-14">

                {/* Header */}
                <header>
                    <div className="inline-flex items-center gap-2 rounded-md border border-[#49336f] bg-[#171222] px-3 py-2 text-[11px] font-semibold tracking-[2px] text-[#b795ff]">
                        <span className="size-1.5 rounded-full bg-[#b795ff] shadow-[0_0_10px_#b795ff]" />
                        PRINCIPLE 03
                    </div>

                    <div className="mt-8 flex items-end justify-between gap-6">
                        <div>
                            <h1 className="text-6xl font-light tracking-[-4px] sm:text-7xl lg:text-[80px]">
                                DRY
                            </h1>

                            <h2 className="mt-5 text-xl font-medium text-white sm:text-2xl">
                                Don't Repeat Yourself
                            </h2>

                            <p className="mt-3 text-sm text-[#929ba9] sm:text-base">
                                Не повторюй одну й ту саму логіку — використовуй її повторно.
                            </p>
                        </div>

                        <div className="hidden items-baseline gap-1 text-[#647184] sm:flex">
                            <span className="text-4xl font-semibold">03</span>
                            <span className="text-sm">/04</span>
                        </div>
                    </div>
                </header>

                {/* Main idea */}
                <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
                    <div>
                        <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                            ГОЛОВНА ІДЕЯ
                        </p>

                        <h2 className="mt-6 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                            Кожна частинка знання повинна мати єдине представлення.
                        </h2>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                            <p>
                                Принцип DRY (Don't Repeat Yourself) був сформульований
                                Енді Гантом та Дейвом Томасом у книзі{" "}
                                <em className="text-white">The Pragmatic Programmer</em>,
                                яка була опублікована у 1999 році.
                            </p>

                            <p>
                                Його основна ідея полягає в тому, що кожна частинка
                                знання в системі повинна мати єдине, однозначне та
                                надійне представлення.
                            </p>

                            <p>
                                Простими словами,{" "}
                                <strong className="font-medium text-white">
                                    DRY означає, що не потрібно повторно писати одну
                                    й ту саму логіку в різних частинах коду.
                                </strong>{" "}
                                Якщо певна функціональність уже реалізована, за
                                можливості її варто використовувати повторно,
                                а не створювати копію.
                            </p>

                            <p>
                                На мою думку, цей принцип особливо важливий для
                                підтримки проєкту. Адже чим більше однакової логіки
                                в різних місцях, тим складніше згодом вносити зміни
                                та контролювати, щоб усе працювало однаково.
                            </p>
                        </div>

                        <ul className="mt-7 space-y-4">
                            <li className="flex items-start gap-3 text-sm text-[#929ba9]">
                                <Check size={18} className="mt-0.5 shrink-0 text-[#55e5d5]" />
                                <span>
                                    <strong className="text-white">
                                        Менше дублювання
                                    </strong>{" "}
                                    — використовуй уже реалізовану логіку повторно.
                                </span>
                            </li>

                            <li className="flex items-start gap-3 text-sm text-[#929ba9]">
                                <Check size={18} className="mt-0.5 shrink-0 text-[#55e5d5]" />
                                <span>
                                    <strong className="text-white">
                                        Простіша підтримка
                                    </strong>{" "}
                                    — змінюй логіку в одному місці.
                                </span>
                            </li>

                            <li className="flex items-start gap-3 text-sm text-[#929ba9]">
                                <Check size={18} className="mt-0.5 shrink-0 text-[#55e5d5]" />
                                <span>
                                    <strong className="text-white">
                                        Менше помилок
                                    </strong>{" "}
                                    — зменшуй ризик розбіжностей між реалізаціями.
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
                            «Чи не реалізована ця логіка вже десь раніше?»
                        </p>
                    </aside>
                </section>

                {/* The problem */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ПРОБЛЕМА
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Чому дублювання коду може бути проблемою?
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Уявімо, що певна логіка реалізована в декількох
                            місцях одного проєкту. Спочатку це може здаватися
                            цілком нормальним рішенням, адже кожен фрагмент
                            коду працює окремо.
                        </p>

                        <p>
                            Але згодом виникає необхідність щось змінити.
                            І тоді доводиться шукати всі місця, де використовується
                            ця логіка, та вносити однакові зміни в кожне з них.
                        </p>

                        <p>
                            Якщо пропустити хоча б одне місце, поведінка програми
                            може відрізнятися залежно від того, де саме
                            використовується ця функціональність.
                        </p>

                        <p>У результаті можна зіткнутися з такими проблемами:</p>
                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Однакову логіку доводиться змінювати в декількох місцях.",
                            "Збільшується ризик пропустити одну з реалізацій.",
                            "Різні частини програми можуть працювати по-різному.",
                            "Код стає складнішим для підтримки.",
                            "Витрачається більше часу на перевірку змін.",
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
                        Саме тому краще, коли одна й та сама логіка має єдине
                        місце реалізації, а всі інші частини проєкту можуть
                        використовувати її повторно.
                    </p>
                </section>

                {/* How DRY works */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ЯК ЦЕ ПРАЦЮЄ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Як працює принцип DRY?
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Основне правило DRY досить просте: якщо певна логіка
                            вже реалізована, не потрібно створювати її копію
                            щоразу, коли вона знадобиться в іншому місці.
                        </p>

                        <p>
                            Наприклад, якщо в декількох файлах проєкту потрібно
                            виконувати однакову операцію, можна винести її
                            в окрему функцію та імпортувати там, де вона потрібна.
                        </p>

                        <p>
                            Таким чином, замість декількох однакових реалізацій
                            ми отримуємо одну функцію, яка відповідає за цю
                            логіку та може використовуватися в різних частинах
                            застосунку.
                        </p>

                        <p>
                            Якщо згодом виникне необхідність змінити її поведінку,
                            достатньо буде внести зміни лише в одному місці.
                        </p>

                        <p>
                            Такий підхід робить код більш послідовним,
                            спрощує його підтримку та допомагає уникати
                            непотрібного дублювання.
                        </p>
                    </div>
                </section>

                {/* Not just identical code */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ВАЖЛИВИЙ НЮАНС
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        DRY — це не просто відсутність однакового коду.
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            На перший погляд може здатися, що DRY означає
                            необхідність усувати абсолютно всі повторення
                            в коді. Але це не зовсім так.
                        </p>

                        <p>
                            Важливо розуміти, що цей принцип стосується
                            не стільки однакових рядків коду, скільки
                            повторення однієї й тієї самої логіки або знання.
                        </p>

                        <p>
                            Наприклад, дві функції можуть мати схожу структуру,
                            але виконувати різні завдання. У такому випадку
                            це не обов'язково є порушенням DRY, оскільки
                            за ними стоїть різна логіка.
                        </p>

                        <p>
                            З іншого боку, дві функції з різними назвами
                            можуть виконувати абсолютно однакові дії.
                            І саме тут варто задуматися, чи не дублюється
                            одна й та сама логіка.
                        </p>

                        <p>
                            Тому важливо не просто шукати однакові фрагменти
                            коду, а розуміти, що саме вони роблять і чи
                            представляють одне й те саме знання.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-[#343b43] bg-[#12171b] p-6">
                            <span className="font-mono text-xs tracking-[1px] text-[#55e5d5]">
                                НЕ ОБОВ'ЯЗКОВО DRY
                            </span>

                            <h3 className="mt-4 text-lg font-medium text-white">
                                Схожий код
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[#a0a9b6]">
                                Два фрагменти можуть виглядати схоже, але
                                реалізовувати різну логіку та мати різне призначення.
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#49336f] bg-[#171222] p-6">
                            <span className="font-mono text-xs tracking-[1px] text-[#b795ff]">
                                МОЖЛИВЕ ДУБЛЮВАННЯ
                            </span>

                            <h3 className="mt-4 text-lg font-medium text-white">
                                Однакова логіка
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[#a0a9b6]">
                                Два різні фрагменти можуть виконувати одну
                                й ту саму задачу, навіть якщо їхній код
                                не повністю ідентичний.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Practical application */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ПРАКТИЧНЕ ЗАСТОСУВАННЯ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Як я застосовую DRY на практиці?
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Особисто я намагаюся застосовувати цей принцип
                            ще на етапі планування реалізації. Перед написанням
                            коду думаю над тим, як краще організувати його
                            структуру, де розмістити певну логіку та чи є
                            в проєкті вже готові рішення, які можна використати.
                        </p>

                        <p>
                            Якщо розумію, що певна функція може знадобитися
                            в декількох місцях, намагаюся винести її в окремий
                            файл. Аналогічно, якщо в інтерфейсі повторюється
                            певна структура або поведінка, розглядаю можливість
                            створення перевикористовуваного компонента.
                        </p>

                        <p>
                            Такий підхід допомагає мені не лише уникати
                            зайвого коду, а й краще організовувати проєкт,
                            роблячи його зручнішим для подальшої роботи.
                        </p>
                    </div>
                </section>

                {/* Abstraction */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        АБСТРАКЦІЇ ТА ПЕРЕВИКОРИСТАННЯ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Як абстракції допомагають дотримуватися DRY?
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Одним із способів дотримання DRY є створення
                            абстракцій, які дозволяють винести спільну логіку
                            або структуру в окреме місце та використовувати
                            її повторно.
                        </p>

                        <p>
                            У React для цього використовують звичайні функції,
                            компоненти та кастомні хуки. Функції допомагають
                            перевикористовувати обчислення та обробку даних,
                            компоненти — структуру інтерфейсу, а кастомні
                            хуки — логіку та поведінку.
                        </p>

                        <p>
                            Проте важливо не створювати абстракції лише
                            заради усунення повторень. Якщо вони надмірно
                            ускладнюють код, іноді краще залишити невелике
                            повторення, ніж робити код менш зрозумілим.
                        </p>
                    </div>
                </section>

                {/* Benefits */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        ПЕРЕВАГИ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Що дає використання DRY?
                    </h2>

                    <div className="mt-5 max-w-4xl text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            На мою думку, застосування цього принципу
                            має декілька важливих переваг:
                        </p>
                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Менше помилок",
                                description:
                                    "Зменшується ризик забути оновити одну з копій логіки.",
                            },
                            {
                                title: "Простіша підтримка",
                                description:
                                    "Зміни можна вносити в одному місці, не шукаючи всі повторення.",
                            },
                            {
                                title: "Краща читабельність",
                                description:
                                    "Код стає структурованішим і зрозумілішим завдяки використанню функцій та компонентів з описовими назвами.",
                            },
                            {
                                title: "Економія часу",
                                description:
                                    "Можна повторно використовувати вже написану та перевірену логіку.",
                            },
                            {
                                title: "Командна робота",
                                description:
                                    "Іншим розробникам легше розібратися в коді та працювати з ним.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-[#292f37] bg-[#12171b] p-5"
                            >
                <span className="font-mono text-xs text-[#b795ff]">
                    0{index + 1}
                </span>

                                <h3 className="mt-3 text-base font-medium text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#a0a9b6]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mt-20 border-t border-[#252b32] pt-10">
                    <p className="text-xs font-medium tracking-[2px] text-[#71849a]">
                        МОЇ ДУМКИ
                    </p>

                    <h2 className="mt-5 text-2xl font-medium text-white sm:text-3xl">
                        Мої думки щодо DRY
                    </h2>

                    <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#929ba9] sm:text-base">
                        <p>
                            Особисто мені подобається цей принцип, оскільки
                            він допомагає дивитися на код не лише з погляду
                            того, чи працює певна функціональність, а й
                            того, наскільки зручно буде з нею працювати
                            в майбутньому.
                        </p>

                        <p>
                            Водночас я не вважаю, що потрібно об'єднувати
                            абсолютно все лише заради того, щоб уникнути
                            повторень. Якщо дві частини коду мають різне
                            призначення або можуть розвиватися незалежно,
                            іноді краще залишити їх окремими.
                        </p>

                        <p>
                            Для мене DRY — це насамперед про розумне
                            перевикористання та вміння знаходити баланс
                            між повторенням і надмірною абстракцією.
                        </p>
                    </div>

                    <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#343b43] bg-[#12171b] p-5">
                        <Lightbulb
                            size={20}
                            className="mt-0.5 shrink-0 text-[#b795ff]"
                        />

                        <p className="text-sm leading-7 text-[#a0a9b6]">
                            Не потрібно дублювати одну й ту саму логіку,
                            але й не варто створювати складні абстракції
                            лише заради відсутності повторень. Головне —
                            знайти баланс між перевикористанням,
                            зрозумілістю та простотою підтримки коду.
                        </p>
                    </div>
                </section>


                {/* Navigation */}
                <nav className="mt-10 flex flex-col gap-5 border-b border-[#252b32] pb-16 sm:flex-row sm:items-center sm:justify-between">
                    <a
                        href="/yagni"
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
                            <span className="font-medium text-white">YAGNI</span>
                        </span>
                    </a>

                    <a
                        href="/principles"
                        className="text-sm text-[#929ba9] transition hover:text-white"
                    >
                        До всіх принципів
                    </a>

                    <a
                        href="/principles"
                        className="group flex items-center justify-end gap-3 text-sm text-[#929ba9] transition hover:text-white"
                    >
                        <span className="text-right">
                            <span className="block text-xs text-[#647184]">
                                Усі принципи
                            </span>
                            <span className="font-medium text-white">
                                Переглянути
                            </span>
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
                        <span>
                            Створено для розробників, які цінують якість коду.
                        </span>
                        <span>v1.0 / 2024</span>
                    </div>
                </footer>
            </article>
        </main>
    );
}
