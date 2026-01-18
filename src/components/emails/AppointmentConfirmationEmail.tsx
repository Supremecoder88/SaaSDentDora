import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface AppointmentConfirmationEmailProps {
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
  duration: string;
  price: string;
}

function AppointmentConfirmationEmail({
  doctorName,
  appointmentDate,
  appointmentTime,
  appointmentType,
  duration,
  price,
}: AppointmentConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your DentWise appointment has been confirmed</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src="https://i.ibb.co.com/tRy6cC2/logo.png"
              width="45"
              height="45"
              alt="DentWise"
              style={logo}
            />
            <Text style={logoText}>DentWise</Text>
          </Section>

          <Heading style={h1}>Appointment Confirmed! 🦷</Heading>

          <Text style={text}>Hi there,</Text>

          <Text style={text}>
            Your dental appointment has been successfully booked. Our team is looking forward to seeing you.
          </Text>

          {/* Appointment Summary Card */}
          <Section style={appointmentDetails}>
            <table style={{ width: "100%" }}>
              <tr>
                <td style={detailCell}>
                  <Text style={detailLabel}>DOCTOR</Text>
                  <Text style={detailValue}>{doctorName}</Text>
                </td>
                <td style={detailCell}>
                  <Text style={detailLabel}>TREATMENT</Text>
                  <Text style={detailValue}>{appointmentType}</Text>
                </td>
              </tr>
              <tr>
                <td style={detailCell}>
                  <Text style={detailLabel}>DATE</Text>
                  <Text style={detailValue}>{appointmentDate}</Text>
                </td>
                <td style={detailCell}>
                  <Text style={detailLabel}>TIME</Text>
                  <Text style={detailValue}>{appointmentTime}</Text>
                </td>
              </tr>
              <tr>
                <td style={detailCell}>
                  <Text style={detailLabel}>DURATION</Text>
                  <Text style={detailValue}>{duration}</Text>
                </td>
                <td style={detailCell}>
                  <Text style={detailLabel}>COST</Text>
                  <Text style={detailValuePrice}>{price}</Text>
                </td>
              </tr>
            </table>
            
            <Section style={locationSection}>
              <Text style={detailLabel}>LOCATION</Text>
              <Text style={detailValue}>DentWise Dental Center • 123 Healthcare Ave</Text>
            </Section>
          </Section>

          <Text style={text}>
            <strong>Quick Reminder:</strong> Please arrive 15 minutes early to complete any necessary paperwork. If you need to reschedule, please let us know 24 hours in advance.
          </Text>

          <Section style={buttonContainer}>
            <Link style={button} href={process.env.NEXT_PUBLIC_APP_URL + "/appointments"}>
              Manage Appointment
            </Link>
          </Section>

          <Text style={footer}>
            Best regards,
            <br />
            <strong>The DentWise Team</strong>
          </Text>

          <Section style={footerDivider} />

          <Text style={footerSubText}>
            Questions? Contact us at <Link href="mailto:support@dentwise.com" style={link}>support@dentwise.com</Link>
            <br />
            © 2026 DentWise AI Dental Assistant
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default AppointmentConfirmationEmail;

// --- Refined Dental Blue Styles ---
const main = {
  backgroundColor: "#f4f7f9",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
  margin: "40px auto",
  padding: "40px",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e1e8ed",
};

const logoContainer = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const logo = {
  display: "inline-block",
  verticalAlign: "middle",
};

const logoText = {
  fontSize: "22px",
  fontWeight: "800",
  color: "#3b82f6", // Dental Blue
  margin: "0 0 0 10px",
  display: "inline-block",
  letterSpacing: "-0.5px",
};

const h1 = {
  color: "#1e293b",
  fontSize: "26px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 24px 0",
};

const text = {
  color: "#475569",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "16px 0",
};

const appointmentDetails = {
  backgroundColor: "#eff6ff", // Very light blue tint
  border: "1px solid #dbeafe",
  borderRadius: "12px",
  padding: "20px",
  margin: "24px 0",
};

const detailCell = {
  paddingBottom: "16px",
};

const detailLabel = {
  color: "#60a5fa", // Lighter blue for labels
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.05em",
  margin: "0 0 4px 0",
};

const detailValue = {
  color: "#1e293b",
  fontSize: "15px",
  fontWeight: "600",
  margin: "0",
};

const detailValuePrice = {
  color: "#3b82f6", // Dental Blue for price
  fontSize: "15px",
  fontWeight: "700",
  margin: "0",
};

const locationSection = {
  borderTop: "1px solid #dbeafe",
  marginTop: "8px",
  paddingTop: "16px",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#3b82f6", // Dental Blue
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 28px",
};

const footerDivider = {
  borderTop: "1px solid #e2e8f0",
  margin: "32px 0 24px",
};

const footer = {
  color: "#475569",
  fontSize: "15px",
  lineHeight: "24px",
};

const footerSubText = {
  color: "#94a3b8",
  fontSize: "13px",
  lineHeight: "20px",
  textAlign: "center" as const,
};

const link = {
  color: "#3b82f6",
  textDecoration: "underline",
};