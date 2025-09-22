export interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  file: string
  previewImage: string
  description: string
}

export type CertificateModalState = Certificate | null