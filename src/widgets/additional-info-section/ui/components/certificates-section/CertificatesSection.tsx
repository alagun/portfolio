import { Row, Col, Typography, Modal, Image } from 'antd'
import { EyeOutlined, FilePdfOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { CertificateModalState } from '@/shared/types/certificates/types'
import CERTIFICATES from '@/shared/constants/certificates'
import styles from './CertificatesSection.module.scss'

const { Text, Title } = Typography


export const CertificatesSection = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateModalState>(null)

  const handleCertificateClick = (certificate: CertificateModalState) => {
    setSelectedCertificate(certificate)
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
    setSelectedCertificate(null)
  }

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    link.click()
  }

  return (
    <>
      <Row gutter={[24, 24]} justify="center">
        {CERTIFICATES.toReversed().map((certificate) => (
          <Col 
            key={certificate.id} 
            xs={24} 
            md={12} 
            lg={8}
            className={styles.certificateCol}
          >
            <div className={styles.certificateCard}>
              <div 
                className={styles.certificateImage}
                onClick={() => handleCertificateClick(certificate)}
              >
                <Image
                  src={certificate.previewImage}
                  alt={certificate.title}
                  preview={false}
                  className={styles.certificateImg}
                  placeholder={
                    <div className={styles.certificatePlaceholder}>
                      <FilePdfOutlined />
                    </div>
                  }
                />
                <div className={styles.certificateOverlay}>
                  <EyeOutlined className={styles.viewIcon} />
                  <Text className={styles.viewText}>Посмотреть</Text>
                </div>
                
                <div className={styles.pdfBadge}>
                  <FilePdfOutlined />
                  <Text>PDF</Text>
                </div>
              </div>
              
              <div className={styles.certificateInfo}>
                <Text strong className={styles.certificateTitle}>
                  {certificate.title}
                </Text>
                <div className={styles.certificateMeta}>
                  <Text type="secondary">{certificate.issuer}</Text>
                  <Text type="secondary">• {certificate.date}</Text>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Modal
        open={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        width="90%"
        style={{ maxWidth: 1000 }}
        className={styles.certificateModal}
      >
        {selectedCertificate && (
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <Title level={3} className={styles.modalTitle}>
                {selectedCertificate.title}
              </Title>
              <button 
                className={styles.downloadButton}
                onClick={() => handleDownload(selectedCertificate.file, `${selectedCertificate.title}.pdf`)}
              >
                <FilePdfOutlined /> Скачать PDF
              </button>
            </div>
            
            <div className={styles.pdfViewer}>
              <iframe 
                src={selectedCertificate.file}
                title={selectedCertificate.title}
                className={styles.pdfIframe}
              />
            </div>
            
            <div className={styles.modalInfo}>
              <div className={styles.modalMeta}>
                <Text strong>Организация:</Text>
                <Text> {selectedCertificate.issuer}</Text>
              </div>
              <div className={styles.modalMeta}>
                <Text strong>Дата получения:</Text>
                <Text> {selectedCertificate.date}</Text>
              </div>
              <div className={styles.modalDescription}>
                <Text>{selectedCertificate.description}</Text>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}