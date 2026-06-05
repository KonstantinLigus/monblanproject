import commentIcon from "../assets/commentIcon.svg";
import heartIcon from "../assets/heartIcon.svg";
import postPreview from "../assets/postPreview.png";
import postPreviewCar from "../assets/postPreviewCar.png";
import postPreviewForest from "../assets/postPreviewForest.png";
import postPreviewMountain from "../assets/postPreviewMountain.png";
import postPreviewSky from "../assets/postPreviewSky.png";
import type { IPostActivity } from "../../types";
import ArticleDesktop from "./ArticleDesktop";
import ArticleMobile from "./ArticleMobile";
import View from "./Veiw";
import { useEffect, useState } from "react";

const metrics = [
  { icon: heartIcon, value: 128, label: "likes" },
  { icon: commentIcon, value: 31, label: "comments" },
  { icon: heartIcon, value: 67, label: "likes" },
  { icon: commentIcon, value: 22, label: "comments" },
];

const postActivities: IPostActivity[] = [
  {
    id: "sky-post",
    figmaNodeId: "1:61",
    image: postPreviewSky,
    title: "Today",
    date: "9-08-2016",
    uploadLabel: "Image upload",
    uploadDate: "11-04-2016",
    metrics,
  },
  {
    id: "today-post",
    figmaNodeId: "1:82",
    image: postPreview,
    title: "Today",
    date: "9-08-2016",
    uploadLabel: "Image upload",
    uploadDate: "11-04-2016",
    metrics,
  },
  {
    id: "forest-post",
    figmaNodeId: "1:103",
    image: postPreviewForest,
    title: "Today",
    date: "9-08-2016",
    uploadLabel: "Image upload",
    uploadDate: "11-04-2016",
    metrics,
  },
  {
    id: "mountain-post",
    figmaNodeId: "1:124",
    image: postPreviewMountain,
    title: "Today",
    date: "9-08-2016",
    uploadLabel: "Image upload",
    uploadDate: "11-04-2016",
    metrics,
  },
  {
    id: "car-post",
    figmaNodeId: "1:166",
    image: postPreviewCar,
    title: "Today",
    date: "9-08-2016",
    uploadLabel: "Image upload",
    uploadDate: "11-04-2016",
    metrics,
  },
];

export default function PostActivityList() {
  const [isGridEnabled, setIsGridEnabled] = useState(true);
  const [isRowEnabled, setIsRowEnabled] = useState(false);

  const onViewBtnClick = () => {
    setIsGridEnabled((prev) => !prev);
    setIsRowEnabled((prev) => !prev);
  };

  useEffect(() => {
    (() => {
      const styles = getComputedStyle(document.documentElement);
      const tablet = styles.getPropertyValue("--breakpoint-tablet");
      if (window.matchMedia(`(width < ${tablet})`).matches) {
        setIsGridEnabled(() => true);
        setIsRowEnabled(() => false);
      }
    })();
  }, []);

  return (
    <section className="mx-auto pt-5 desktop:ml-87.5 flex w-full gap-2 max-w-209 flex-col font-roboto text-black desktop:pt-37.5">
      <View
        isGridEnabled={isGridEnabled}
        isRowEnabled={isRowEnabled}
        onViewBtnClick={onViewBtnClick}
      />

      <div className="flex flex-wrap gap-2 justify-center">
        {postActivities.map((activity) => (
          <div key={activity.id}>
            <div className={`${isGridEnabled ? "block" : "hidden"}`}>
              <ArticleMobile {...activity} />
            </div>
            <div className={`${isRowEnabled ? "block" : "hidden"}`}>
              <ArticleDesktop {...activity} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
