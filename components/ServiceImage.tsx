import type { ServiceItem } from "../data";

type ServiceImageProps = {
  service: ServiceItem;
  className?: string;
};

export function ServiceImage({ service, className = "" }: ServiceImageProps) {
  return (
    <img
      src={`/images/services/${service.image}`}
      alt=""
      role="presentation"
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
