import * as React from "react"

interface OtpEmailTemplateProps {
  otp: string
}

const containerStyle: React.CSSProperties = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  padding: '20px',
  backgroundColor: '#f8f8f8',
  borderRadius: '8px',
  border: '1px solid #eee',
  maxWidth: '400px',
  margin: '20px auto',
  textAlign: 'center',
} as const

const headingStyle: React.CSSProperties = {
  color: '#333',
  fontSize: '20px',
  marginBottom: '15px',
}

const otpContainerStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '15px',
  margin: '20px 0',
  borderRadius: '5px',
  border: '1px dashed #ccc',
}

const otpTextStyle: React.CSSProperties = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#111',
  letterSpacing: '4px', // Add spacing between digits
  margin: '0', // Reset margin for the paragraph
}

const paragraphStyle: React.CSSProperties = {
  color: '#555',
  fontSize: '14px',
  lineHeight: '1.5',
}

const expiryStyle: React.CSSProperties = {
  color: '#777',
  fontSize: '12px',
  marginTop: '20px',
}

export const OtpEmailTemplate: React.FC<Readonly<OtpEmailTemplateProps>> = ({ otp }) => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>Your Harmony Verification Code</h1>
    <p style={paragraphStyle}>Please use the following code to verify your email address for the Harmony waitlist:</p>
    
    <div style={otpContainerStyle}>
      <p style={otpTextStyle}>{otp}</p>
    </div>
    
    <p style={paragraphStyle}>This code is valid for 5 minutes.</p>
    <p style={expiryStyle}>If you didn&apos;t request this code, you can safely ignore this email.</p>
  </div>
)

export default OtpEmailTemplate 