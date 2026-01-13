export interface ICertificate {
  id: number
  title: string
  issuer: string
  date: string
  file: string
  previewImage: string
  description: string
}

export type CertificateModalState = ICertificate | null