import gridEnabled from "../assets/grid-enabled.png";
import gridDisabled from "../assets/grid-disabled.png";
import rowEnabled from "../assets/rows-enabled.png";
import rowDisabled from "../assets/rows-disabled.png";

type IView = {
  isRowEnabled: boolean;
  isGridEnabled: boolean;
  onViewBtnClick: () => void;
};

export default function View({
  isRowEnabled,
  isGridEnabled,
  onViewBtnClick,
}: IView) {
  return (
    <div className="hidden tablet:flex gap-5 justify-end">
      <button onClick={onViewBtnClick} className="cursor-pointer">
        <img src={isGridEnabled ? gridEnabled : gridDisabled} alt="grid img" />
      </button>
      <button onClick={onViewBtnClick} className="cursor-pointer">
        <img src={isRowEnabled ? rowEnabled : rowDisabled} alt="rows img" />
      </button>
    </div>
  );
}
