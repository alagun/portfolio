import { ICertificate } from "@/shared/types/certificates/types";

const CERTIFICATES: ICertificate[] = [
  {
    id: 1,
    title: "JavaScript/FrontEnd",
    issuer: "RS School",
    date: "2022", 
    file: new URL("/static/certificates/rsshool-certificate.pdf", import.meta.url).href,
    previewImage: new URL("/static/certificates/previews/rsshool-preview.jpg", import.meta.url).href,
    description: "Курс JavaScript с практическими заданиями"
  },
  {
    id: 2,
    title: "React Developer Certificate",
    issuer: "Coursera",
    date: "2023",
	file: new URL("/static/certificates/coursera-certificate.pdf", import.meta.url).href,
    previewImage: new URL("/static/certificates/previews/coursera-preview.jpg", import.meta.url).href,
    description: "Комплексный курс по фронтенд разработке"
},
{
	id: 3,
    title: "Frontend Development",
    issuer: "Redev",
    date: "2025",
	file: new URL("/static/certificates/redev-js-certificate.pdf", import.meta.url).href,
	previewImage: new URL("/static/certificates/previews/redev-js-preview.jpg", import.meta.url).href,
    description: "Модуль JavaScript"
  },
]

export default CERTIFICATES
