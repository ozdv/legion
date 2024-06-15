"use client";

import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const faqs = [
    {
      question: "Who is Frank Duff?",
      // https://www.legionofmary.ie/causes/profile/frank-duff
      answer:
        "Frank Duff, Founder of the Legion of Mary, was born in Dublin, Ireland, on June 7, 1889. He entered the Civil Service at the age of 18. At 24 he joined the Society of St. Vincent de Paul where he was led to a deeper commitment to his Catholic faith and at the same time he acquired a great sensitivity to the needs of the poor and underprivileged. Along with a group of Catholic women and Fr. Michael Toher, Dublin Archdiocese, he formed the first Praesidia of the Legion of Mary on September 7, 1921. From that date until his death, November 7, 1980, he guided the world-wide extension of the Legion with heroic dedication.",
    },
    {
      question: "How do I get involved?",
      // https://www.legionofmary.ie/about
      answer:
        "The object of the Legion of Mary is the glory of God through the holiness of its members developed by prayer and active co-operation in Mary’s and the Church’s work. The unit of the Legion of Mary is called a praesidium, which holds a weekly meeting, where prayer is intermingled with reports and discussion. Persons who wish to join the Legion must apply for membership in a Praesidia. The Legion sees as its priority the spiritual and social welfare of each individual. The members participate in the life of the parish through visitation of families, the sick, both in their homes and in hospitals and through collaboration in every apostolic and missionary undertaking sponsored by the parish. Every legionary is required to carry out a weekly apostolic work in the spirit of faith and in union with Mary.",
    },
    {
      question: "How does the Legion of Mary operate within the church?",
      // https://www.legionofmary.ie/about
      answer:
        "Drawing its inspiration from the True Devotion to Mary, as taught by St. Louis Marie de Montfort, and which had a profound influence on the Founder of the Legion, the Servant of God, Frank Duff, the Legion is at the disposal of the Bishops and Priests for use in the mission of the Church. While essentially a lay association, legionaries look for spiritual and apostolic formation to priests and religious, who, as Legion Spiritual Directors, hold an honoured place in the Legion system. The Legion requires ecclesiastical approval to work in a diocese or parish. Loyalty to the Magisterium and to Ecclesiastical Authority is a basic legionary principle. The Legion aims to bring Mary to the world as the infallible means of winning the world to Jesus and legionary service is based on the doctrine of the Mystical Body of Christ so that in their fellow members and in those they serve, legionaries seek to have the Person of our Lord once again seen and served by Mary, his Mother.",
    },
    {
      question: "What is a 'praesidium' or a 'praesidia'?",
      // https://www.legionofmary.ie/about
      answer:
        "The basic unit of the Legion is called a Praesidia (or Praesidium for plural), which is normally based in a parish. A parish may have more than one praesidia. To be an active legionary it is necessary to apply for membership in a praesidia, which holds a weekly meeting and allocates a weekly apostolic task to the members, who generally work in pairs. After a successful period of probation, members are called to make the Legionary Promise (this is only applicable for members over 18 years) which is directed to the Holy Spirit. Realising the necessity for a strong support of prayer, the Legion has Auxiliary members, who associate themselves with the Legion by undertaking a service of prayer in its name. The administration of the Legion is carried out through its various councils at local, regional and national level.",
    },
    {
      question: "Do I have to be 18 years or older to join?",
      // handbook / winged
      answer:
        "Not at all! The Legion of Mary has a variety of special Praesidia, including Junior Praesidium. You can find them scattered throughout our diocese in our Praesidium page titled as such. You can also read more about them in chapter 36 of the Legion Handbook found in our resources page.",
    },
  ];

  return (
    <section
      id="faq"
      aria-label="faq for legion of mary calgary curiae"
      className="pt-20"
    >
      <div className="mx-auto max-w-2xl divide-y border-b pb-6 lg:max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
          Frequently asked questions
        </h2>
        <dl className="mt-6 space-y-6 divide-y md:mt-12">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-800 dark:text-slate-300">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-slate-700 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
