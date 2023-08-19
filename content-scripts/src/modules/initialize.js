import {
  addCirclesButton,
  addCommunitiesButton,
  addListsButton,
  addTopicsButton,
  addTwitterBlueButton,
} from "./options/navigation";
import removeElement from "./utilities/removeElement";
import { getStorage } from "./utilities/storage";
import throttle from "./utilities/throttle";
import { addGrowButton } from "./options/typefully";

let gt; // Grow Tab timeout

export const addResizeListener = () => {
  window.addEventListener(
    "resize",
    throttle(async () => {
      removeElement("mt-listsButtonNode");
      removeElement("mt-communitiesButton");
      removeElement("mt-topicsButton");
      removeElement("mt-circlesButton");
      removeElement("mt-twitterBlueButton");
      removeElement("mt-typefullyGrowButton");

      const data = await getStorage([
        "listsButton",
        "communitiesButton",
        "topicsButton",
        "circlesButton",
        "twitterBlueButton",
        "typefullyGrowTab",
      ]);

      if (data?.listsButton === "on") addListsButton();
      if (data?.communitiesButton === "on") addCommunitiesButton();
      if (data?.topicsButton === "on") addTopicsButton();
      if (data?.circlesButton === "on") addCirclesButton();
      if (data?.twitterBlueButton === "on") addTwitterBlueButton();
      
        clearTimeout(gt);
        gt = setTimeout(() => {
          addGrowButton();
        });
      
    }, 1000)
  );
};
