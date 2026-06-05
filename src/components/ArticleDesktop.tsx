import type { IPostActivity } from "../../types";

export default function ArticleDesktop({
  id,
  figmaNodeId,
  image,
  title,
  date,
  uploadLabel,
  uploadDate,
  metrics,
}: IPostActivity) {
  return (
    <article
      key={id}
      data-node-id={figmaNodeId}
      className="grid min-h-21.5 grid-cols-[86px_1fr] bg-white text-sm tablet:grid-cols-[86px_270px_273px_1fr]"
    >
      <img
        src={image}
        alt={`${title} post preview`}
        className="size-21.5 object-cover"
      />

      <div className="flex flex-col justify-center gap-2.5 px-5 tablet:pl-7.5 tablet:pr-0">
        <h2 className="text-base leading-none font-medium">{title}</h2>
        <div className="flex gap-5.5">
          {metrics.slice(0, 2).map(({ icon, value, label }) => (
            <span
              key={`${id}-${label}-${value}`}
              className="flex items-center gap-2"
            >
              <img src={icon} alt="" className="size-4.5" />
              <span className="leading-none font-medium">{value}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="col-start-2 flex flex-col justify-center gap-2.5 px-5 tablet:col-start-auto tablet:px-0">
        <h2 className="text-base leading-none font-medium">{date}</h2>
        <div className="flex gap-5.5">
          {metrics.slice(2).map(({ icon, value, label }) => (
            <span
              key={`${id}-${label}-${value}`}
              className="flex items-center gap-2"
            >
              <img src={icon} alt="" className="size-4.5" />
              <span className="leading-none font-medium">{value}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="col-start-2 flex flex-col justify-center gap-2.5 px-5 pb-4 tablet:col-start-auto tablet:px-0 tablet:pb-0">
        <h2 className="text-base leading-none font-medium">{uploadLabel}</h2>
        <p className="text-sm leading-none font-medium">{uploadDate}</p>
      </div>
    </article>
  );
}
