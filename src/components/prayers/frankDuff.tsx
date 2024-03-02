"use client";

import Accordion from "../shared/accordion";

const FrankDuff = () => {
  return (
    <Accordion
      header={
        <h3 className="text-lg font-bold md:text-2xl">
          Prayer for the Beatification of the Servant of God, Frank Duff
        </h3>
      }
      body={
        <div className="pt-3 text-sm md:text-base">
          <div className="Opening prayers space-y-2">
            <p>
              <b>
                <i>God our Father,</i>
              </b>
            </p>
            <p>
              You inspired your servant Frank Duff with a profound insight into
              the mystery of your Church, the Body of Christ, and of the place
              of Mary the Mother of Jesus in this mystery.
            </p>
            <p>
              In his immense desire to share this insight with others and in
              filial dependance on Mary, he formed her Legion to be a sign of
              her maternal love for the world and a means of enlisting all her
              children in the Church’s evangelising work.
            </p>
            <p>
              We thank you Father for the graces conferred on him and for the
              benefits accruing to the Church from his courageous and shining
              faith.
            </p>
            <p>
              With confidence we beg you that through his intercession, you
              grant the petition we lay before you .........
            </p>
            <p>
              We ask too that if it be in accordance with your will, the
              holiness of his life may be acknowledged by the Church for the
              glory of your Name.
            </p>
            <p>
              <b>
                <i>Through Christ Our Lord, Amen</i>
              </b>
            </p>
          </div>
        </div>
      }
      wrapperStyles="mb-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800 sm:mb-6"
    />
  );
};

export default FrankDuff;
