"use client";
import Accordion from "../shared/accordion";

const LegionPrayer = () => {
  // todo: space out these prayers better so they're more readable

  return (
    <>
      <Accordion
        header={
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200 md:text-2xl">
            Opening Prayers
          </h3>
        }
        body={
          <div className="text-sm text-slate-800 dark:text-slate-300 md:text-base">
            <div className="Opening prayers pt-4">
              <p>
                (Make the Sign of the Cross) In the name of the Father, and of
                the Son and of the Holy Spirit. Amen.
              </p>
              <p>
                Come, O Holy Spirit, fill the hearts of Your faithful, and
                enkindle in them the fire of Your love.
              </p>
              <p>
                <b>v</b>. Send forth Your Spirit, O Lord, and they shall be
                created.
              </p>
              <p>
                <b>R</b>. And You shall renew the face of the earth.
              </p>
              <p>Let us pray.</p>
              <p>
                God our Father, pour out the gifts of Your Holy Spirit on the
                world. You sent the Spirit on Your Church to begin the teaching
                of the gospel: now let the Spirit continue to work in the world
                through the hearts of all who believe. Through Christ our Lord.
                Amen.
              </p>
              <p>
                <b>v.</b> You, O Lord, will open my lips.
              </p>
              <p>
                <b>R.</b> And my tongue shall announce Your praise.
              </p>
              <p>
                <b>v.</b> Incline unto my aid, O God.
              </p>
              <p>
                <b>R. </b>O Lord, make haste to help me.
              </p>
              <p>
                <b>v. </b>Glory be to the Father, and to the Son and to the Holy
                Spirit
              </p>
              <p>
                <b>R</b>. As it was in the beginning, is now and ever shall be
                world without end.
              </p>
              <p>Amen.</p>
            </div>
            <div className="Rosary">
              <br />

              <p>
                —Then follow five decades of the Rosary with the Hail, Holy
                Queen.
              </p>
              <p>
                Hail, Holy Queen, Mother of Mercy; hail, our life, our sweetness
                and our hope. To you we cry, poor banished children of Eve, to
                you we send up our sighs, mourning and weeping in this valley of
                tears. Turn then, O most gracious advocate, your eyes of mercy
                towards us, and after this our exile, show us the blessed fruit
                of your womb, Jesus. O clement, O loving, O sweet Virgin Mary.
              </p>
              <p>
                <b>v.</b> Pray for us, O holy Mother of God.
              </p>
              <p>
                <b>R.</b> That we may be made worthy of the promises of Christ.
              </p>
              <p>Let us pray.</p>
              <p>
                O God, Whose only-begotten Son, by His life, death and
                resurrection, has purchased for us the rewards of eternal
                salvation; grant, we beseech You, that meditating upon these
                mysteries in the most holy Rosary of the Blessed Virgin Mary, we
                may imitate what they contain, and obtain what they promise.
                Through the same Christ our Lord. Amen.
              </p>
              <p>
                <b>v.</b> Most Sacred Heart of Jesus
              </p>
              <p>
                <b>R.</b> Have mercy on us.
              </p>
              <p>
                <b>v.</b> Immaculate Heart of Mary
              </p>
              <p>
                <b>R</b>. Pray for us.
              </p>
              <p>
                <b>v. </b>St. Joseph
              </p>
              <p>
                <b>R.</b> Pray for us.
              </p>
              <p>
                <b>v.</b> St John the Evangelist
              </p>
              <p>
                <b>R</b>. Pray for us.
              </p>
              <p>
                <b>v.</b> St. Louis-Marie deMontfort
              </p>
              <p>
                <b>R.</b> Pray for us.
              </p>
              <p>
                (Make the Sign of the Cross) In the name of the Father, and of
                the Son and of the Holy Spirit. Amen.
              </p>
            </div>
          </div>
        }
        wrapperStyles="mb-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800 sm:mb-6"
      />

      <Accordion
        header={
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200 md:text-2xl">
            The Catena Legionis
          </h3>
        }
        body={
          <div className="text-sm text-slate-800 dark:text-slate-300 md:text-base">
            <div className="Catena pt-3">
              <p>
                <b>Antiphon.</b> Who is she that comes forth as the morning
                rising, fair as the moon, bright as the sun, terrible as an army
                set in battle array?
              </p>
              <p>(Make the Sign of the Cross) </p>
              <p>
                <b>v.</b> My soul glorifies the Lord.*
              </p>
              <p>
                <b>R.</b> My spirit rejoices in God, my Saviour.
              </p>
              <p>
                <b>v.</b> He looks on His servant in her lowliness;* henceforth
                all ages will call me blessed.
              </p>
              <p>
                <b>R.</b> The Almighty works marvels for me.* Holy His name!
              </p>
              <p>
                <b>v.</b> His mercy is from age to age,* on those who fear Him.
              </p>
              <p>
                <b>R.</b> He puts forth His arm in strength* and scatters the
                proud-hearted.
              </p>
              <p>
                <b>v.</b> He casts the mighty from their thrones* and raises the
                lowly.
              </p>
              <p>
                <b>R.</b> He fills the starving with good things,* sends the
                rich away empty.
              </p>
              <p>
                <b>v.</b> He protects Israel His servant,* remembering His
                mercy,
              </p>
              <p>
                <b>R.</b> The mercy promised to our fathers,* to Abraham and his
                sons for ever.
              </p>
              <p>
                <b>v.</b> Glory be to the Father, and to the Son and to the Holy
                Spirit.
              </p>
              <p>
                <b>R</b>. As it was in the beginning is now, and ever shall be,
                world without end. Amen.
              </p>
              <p className="mt-3">
                <b>Antiphon.</b> Who is she that comes forth as the morning
                rising, fair as the moon, bright as the sun, terrible as an army
                set in battle array?
              </p>
              <p>
                <b>v.</b> O Mary, conceived without sin.
              </p>
              <p>
                <b>R.</b> Pray for us who have recourse to you.
              </p>
              <p>Let us pray.</p>
              <p>
                O Lord Jesus Christ, our mediator with the Father, Who has been
                pleased to appoint the Most Blessed Virgin, Your mother, to be
                our mother also, and our mediatrix with You, mercifully grant
                that whoever comes to You seeking Your favours may rejoice to
                receive all of them through her. <b>Amen</b>.
              </p>
            </div>
          </div>
        }
        wrapperStyles="mb-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800 sm:mb-6"
      />

      <Accordion
        header={
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200 md:text-2xl">
            Concluding Prayers
          </h3>
        }
        body={
          <div className="text-sm text-slate-800 dark:text-slate-300 md:text-base">
            <div className="ConcludingPrayers pb-2 pt-3">
              <p>
                (Make the Sign of the Cross) In the name of the Father, and of
                the Son and of the Holy Spirit. Amen..
              </p>
              <p>
                We fly to your patronage, O holy Mother of God; despise not our
                prayers in our necessities, but ever deliver us from all
                dangers, O glorious and blessed Virgin.
              </p>
              <p>
                <b>v.</b> Mary Immaculate, Mediatrix of all Graces (
                <i>or Invocation appropriate to Praesidia</i>)
              </p>
              <p>
                <b>R.</b> Pray for us.
              </p>
              <p>
                <b>v. </b>Sts. Michael, Gabriel and Raphael
              </p>
              <p>
                <b>R.</b> Pray for us.
              </p>
              <p>
                <b>v.</b> All you heavenly Powers, Mary’s Legion of Angels
              </p>
              <p>
                <b>R.</b> Pray for us.
              </p>
              <p>
                <b>v. </b>St. John the Baptist
              </p>
              <p>
                <b>R. </b>Pray for us.
              </p>
              <p>
                <b>v.</b> Saints Peter and Paul
              </p>
              <p>
                <b>R. </b>Pray for us.
              </p>
              <p className="pt-3">
                Confer, O Lord, on us, who serve beneath the standard of Mary,
                that fullness of faith in You and trust in her, to which it is
                given to conquer the world. Grant us a lively faith, animated by
                charity, which will enable us to perform all our actions from
                the motive of pure love of You, and ever to see You and serve
                You in our neighbour; a faith, firm and immovable as a rock,
                through which we shall rest tranquil and steadfast amid the
                crosses, toils and disappointments of life; a courageous faith
                which will inspire us to undertake and carry out without
                hesitation great things for your glory and for the salvation of
                souls; a faith which will be our Legion’s Pillar of Fire - to
                lead us forth united - to kindle everywhere the fires of divine
                love - to enlighten those who are in darkness and in the shadow
                of death - to inflame those who are lukewarm - to bring back
                life to those who are dead in sin; and which will guide our own
                feet in the way of peace; so that - the battle of life over -
                our Legion may reassemble, without the loss of any one, in the
                kingdom of Your love and glory. Amen.
              </p>
              <p>
                May the souls of our departed legionaries and the souls of all
                the faithful departed through the mercy of God rest in peace.
                Amen.
              </p>
              <p className="pt-3">
                (Make the Sign of the Cross) In the name of the Father, and of
                the Son and of the Holy Spirit. Amen.
              </p>
            </div>
          </div>
        }
        wrapperStyles="mb-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800 sm:mb-6"
      />
    </>
  );
};

export default LegionPrayer;
