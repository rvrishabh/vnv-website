import type { ServiceItem } from "../data";

type ServiceImageProps = {
  service: ServiceItem;
  className?: string;
  eager?: boolean;
};

export function ServiceImage({ service, className = "", eager = false }: ServiceImageProps) {
  return (
    <img
      src={`/images/services/${service.image}`}
      alt={service.imageAlt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
