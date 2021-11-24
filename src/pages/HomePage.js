import styled from "styled-components";
import { useState, useEffect } from "react";

import SiteHeader from "../components/SiteHeader";
import WorksBlock from "../components/WorksBlock";
import SiteBanner from "../components/SiteBanner";

import { getWorks, getPictureURL } from "../global/webAPI";
import { typeNameData } from "../global/staticData";

const Container = styled.div`
  position: relative;
  width: 1080px;
  margin: 0 auto;
  padding: 30px 0px;
`;

const HomePage = () => {
  const [works, setWorks] = useState({ art: [], comic: [] });
  useEffect(() => {
    (async () => {
      try {
        const data = await getWorks("art");
        if (data.ok === 0) return;
        const newArt = data.works.reduce((array, work) => {
          const {
            id,
            type,
            title,
            User: { nickname, photo },
          } = work;
          const { directory } = work[type.replace(/^./, type[0].toUpperCase())];
          const pictureURL = getPictureURL(directory);
          const photoURL = getPictureURL(photo);
          array.push({
            id,
            type,
            title,
            nickname,
            photo: photoURL,
            cover: pictureURL,
          });

          return array;
        }, []);
        setWorks((previous) => ({
          ...previous,
          art: [...previous.art, ...newArt],
        }));
      } catch (err) {
        console.log(err);
      }
    })();
    (async () => {
      try {
        const data = await getWorks("comic");
        if (data.ok === 0) return;
        const newComic = data.works.reduce((array, work) => {
          const {
            id,
            type,
            title,
            User: { nickname, photo },
          } = work;
          const { directory } = work[type.replace(/^./, type[0].toUpperCase())];
          const pictureURL = getPictureURL(directory);
          const photoURL = getPictureURL(photo);
          array.push({
            id,
            type,
            title,
            nickname,
            photo: photoURL,
            cover: pictureURL,
          });

          return array;
        }, []);
        setWorks((previous) => ({
          ...previous,
          comic: [...previous.comic, ...newComic],
        }));
      } catch (err) {
        console.log(err);
      }
    })();
    return () => setWorks({ art: [], comic: [] });
  }, []);
  return (
    <Container>
      <SiteHeader />
      <SiteBanner />
      {works &&
        Object.keys(works).map((type, index) => (
          <WorksBlock
            title={typeNameData[type]}
            works={works[type]}
            key={index}
          />
        ))}
    </Container>
  );
};

export default HomePage;
