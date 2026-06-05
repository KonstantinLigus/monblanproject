import type { IPostActivity } from "../../types";

export default function ArticleMobile({
  id,
  figmaNodeId,
  image,
  title,
  date,
  uploadLabel,
  uploadDate,
  metrics,
}: IPostActivity) {
  const primaryMetrics = metrics.slice(0, 2);
  const secondaryMetrics = metrics.slice(2);

  return (
    <article
      data-node-id={figmaNodeId}
      className="bg-white font-roboto text-black tablet:max-w-50.75"
    >
      <img
        src={image}
        alt={`${title} post preview`}
        className="aspect-square w-full object-cover"
      />

      <div className="px-5 pt-7 pb-11">
        <div className="flex justify-between">
          <h2 className="leading-none font-medium">{title}</h2>
          <time className="leading-none font-medium">{date}</time>
        </div>

        <div className="flex justify-between">
          <div className="mt-7 flex flex-col gap-2">
            {primaryMetrics.map(({ icon, value, label }) => (
              <span
                key={`${id}-${label}-${value}`}
                className="flex items-center gap-1.5"
                aria-label={`${value} ${label}`}
              >
                <img src={icon} alt="" className="size-4.5" />
                <span className="leading-none font-medium">{value}</span>
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-2">
            {secondaryMetrics.map(({ icon, value, label }) => (
              <span
                key={`${id}-${label}-${value}`}
                className="flex items-center gap-1.5"
                aria-label={`${value} ${label}`}
              >
                <img src={icon} alt="" className="size-4.5" />
                <span className="leading-none font-medium">{value}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6.25 flex justify-between items-center">
          <h2 className="text-sm leading- font-medium">{uploadLabel}</h2>
          <p className="tracking-tighter text-[12px] font-medium">
            {uploadDate}
          </p>
        </div>
      </div>
    </article>
  );
}
