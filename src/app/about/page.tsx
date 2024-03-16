import { Container } from "@/components/shared/container";
import { Metadata } from "next";

interface SectionProps {
  title: string;
  children: React.ReactNode;

}

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about the Legion of Mary",
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
  </div>
);

// all of the text found below can be found from the following page: https://www.legionofmary.ie/about

const About = () => {
  return (
    <>
       <Container className="max-w-4xl mx-auto p-4 space-y-6">
        <h1 className="text-4xl font-bold text-center mb-12">The Legion of Mary</h1>
        <Section title="Introduction">
        <p className="mb-4">
          The object of the Legion of Mary is the glory of God through the holiness of its members developed by prayer and active co-operation in Mary’s and the Church’s work. The unit of the Legion of Mary is called a praesidium, which holds a weekly meeting, where prayer is intermingled with reports and discussion. Persons who wish to join the Legion must apply for membership in a Praesidium. The Legion sees as its priority the spiritual and social welfare of each individual. The members participate in the life of the parish through visitation of families, the sick, both in their homes and in hospitals and through collaboration in every apostolic and missionary undertaking sponsored by the parish. Every legionary is required to carry out a weekly apostolic work in the spirit of faith and in union with Mary.
        </p>
        </Section>
        <p className="mb-4">
          The Legion of Mary is a lay apostolic association of Catholics who, with the sanction of the Church and under the powerful leadership of Mary Immaculate, Mediatrix of All Graces, serve the Church and their neighbour on a voluntary basis in about 170 countries. The first meeting of the Legion of Mary took place in Myra House, Francis Street, Dublin, Ireland, on 7 September, 1921. This meeting was to have very beneficial consequences for the mission of the Catholic Church and, in a special way, for millions of members of Christ’s lay faithful who would serve in the Legion and for those who would be served by the legionary apostolate. Many persons outside the Catholic Church would also benefit from that apostolate. With the approval and support of the Popes and a great many Bishops, Priests and Religious, as well as the prayers and efforts of legionaries, the Legion, by the grace of God, has grown into a worldwide organisation with several million members.
        </p>
        <p className="mb-4">
          Drawing its inspiration from the True Devotion to Mary, as taught by St. Louis Marie de Montfort, and which had a profound influence on the Founder of the Legion, the Servant of God, Frank Duff, the Legion is at the disposal of the Bishops and Priests for use in the mission of the Church. While essentially a lay association, legionaries look for spiritual and apostolic formation to priests and religious, who, as Legion Spiritual Directors, hold an honoured place in the Legion system. The Legion requires ecclesiastical approval to work in a diocese or parish. Loyalty to the Magisterium and to Ecclesiastical Authority is a basic legionary principle. The Legion aims to bring Mary to the world as the infallible means of winning the world to Jesus and legionary service is based on the doctrine of the Mystical Body of Christ so that in their fellow members and in those they serve, legionaries seek to have the Person of our Lord once again seen and served by Mary, his Mother.
        </p>
        <p className="mb-4">
          The general and essential means by which the Legion of Mary is to effect its object is personal service acting under the influence of the Holy Spirit, having Divine Grace as its moving principle and support, and the glory of God and the salvation of souls as its final end and purpose. Evangelisation, especially the seeking of conversions to the Church, should be a priority for the Legion. Through the visitation of homes and by other means, the Legion must, as a first principle, set out to establish a contact of some sort with every soul everywhere. Seeing and serving Christ in the sick and marginalised is another vital part of the legionary apostolate. While not engaging in the giving of material relief, legionaries will often find opportunities to do works of service for the needy.
        </p>
        <p className="mb-4">
          The basic unit of the Legion is called a praesidium, which is normally based in a parish. A parish may have more than one praesidium. To be an active legionary it is necessary to apply for membership in a praesidium, which holds a weekly meeting and allocates a weekly apostolic task to the members, who generally work in pairs. After a successful period of probation, members are called to make the Legionary Promise (this is only applicable for members over 18 years) which is directed to the Holy Spirit. Realising the necessity for a strong support of prayer, the Legion has Auxiliary members, who associate themselves with the Legion by undertaking a service of prayer in its name. The administration of the Legion is carried out through its various councils at local, regional and national level. The central council, the Concilium Legionis Mariae, meets monthly in Dublin.
        </p>
        <p className="mb-4">
          The Cause for Beatification has been introduced for three legionaries: The Servant of God, Frank Duff (1889-1980), Founder of the Legion, who attended the Second Vatican Council as a Lay Observer; Venerable Edel Quinn (1907-1944), Legion Envoy to East Africa; and the Servant of God, Alfie Lambe (1932-1959), Legion Envoy to South America.
        </p>
      </Container>
    </>
  );
};

export default About;
