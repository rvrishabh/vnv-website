export type EnquiryPayload = {
  name: string;
  org: string;
  phone: string;
  email: string;
  type: string;
  city: string;
  message: string;
};

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your environment (see .env.example).",
    );
  }

  const subject = `Website enquiry — ${payload.name}`;

  const res = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: payload.name,
      email: payload.email,
      replyto: payload.email,
      name: payload.name,
      organization: payload.org || "—",
      phone: payload.phone,
      property_type: payload.type || "—",
      city: payload.city || "—",
      message: payload.message || "—",
    }),
  });

  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
}
