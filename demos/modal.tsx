'use client';

import { Button } from "@/components/ui/button"
import { Modal, ModalBody, ModalClose, ModalFooter, ModalHeader, ModalTitle } from "@/components/ui/modal"
import { Heading, Text } from "@/components/ui/typography"
import { useState } from "react"

export default function ModalDemo() {
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <div className="flex justify-center">
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalHeader>
              <ModalTitle className="text-foreground">Modal Title</ModalTitle>
              <ModalClose className="text-foreground" onClick={() => setModalOpen(false)} />
            </ModalHeader>
            <ModalBody>
              <Text leading='relaxed' className="mb-4">
                This is a modal dialog. You can close it by clicking the X button, clicking outside the modal, or
                pressing the Escape key.
              </Text>
              <Text leading='relaxed' className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="outline" className="text-foreground" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setModalOpen(false)}>Continue</Button>
            </ModalFooter>
          </Modal>
        </div>
    )
  }
