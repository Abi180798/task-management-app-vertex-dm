import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"

interface ModalProps {
  disclosure: any
  title: string
  content: JSX.Element
  footer: JSX.Element
}
const Modall: React.FC<ModalProps> = ({ disclosure, title, content, footer }) => {
  const { isOpen, onClose } = disclosure
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {content}
          </ModalBody>
          <ModalFooter>
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Modall