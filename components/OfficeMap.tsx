import { Navigation, Star, ExternalLink } from "lucide-react";
import { FIRM, directionsUrl, googleReviewUrl, mapEmbedUrl, mapsUrl, type Office } from "../data";

const LINK =
  "inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-[13px] tracking-wide border transition-colors";

/** Live Google map of an office plus directions / listing / review links */
export function OfficeMap({ office }: { office: Office }) {
  const reviewUrl = googleReviewUrl(office);

  return (
    <div className="rounded-sm border border-steel bg-white overflow-hidden">
      <iframe
        title={`Map — ${FIRM.name}, ${office.mapLabel}`}
        src={mapEmbedUrl(office)}
        className="block w-full aspect-[16/10] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-wrap gap-2 p-4 border-t border-steel">
        <a
          href={directionsUrl(office)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${LINK} bg-navy text-white border-navy hover:bg-navy-soft`}
        >
          <Navigation size={14} strokeWidth={2} />
          Get directions
        </a>
        <a
          href={mapsUrl(office)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${LINK} text-navy border-navy/30 hover:border-navy`}
        >
          <ExternalLink size={14} strokeWidth={2} />
          View on Google Maps
        </a>
        {reviewUrl && (
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${LINK} text-gold-deep border-gold/50 hover:border-gold`}
          >
            <Star size={14} strokeWidth={2} />
            Review us on Google
          </a>
        )}
      </div>
    </div>
  );
}
