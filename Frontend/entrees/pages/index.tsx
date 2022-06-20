import React, { memo } from "react";

export const Home = memo(() => {
  return (
      <div className="pt-6">
        <article>
          <h3>Co mozna jeszcze dorzucić</h3>
          <ul>
            <li>fingerprint do rozpoznania kto wchodzi z jakiego sprzetu</li>
            <li>pobranie komend glosowych z backendu</li>
            <li>hostowanie za free na netlify</li>
          </ul>
        </article>
      </div>
  );
});

Home.displayName = "Home";

export default Home;
