import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface DeleteModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function DeleteModal({
  isOpen,
  onOpenChange,
}: DeleteModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="5xl"
      >
        <ModalContent className="bg-content2">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col justify-start">
                <p className="text-lg text-foreground-700 font-semibold">
                  Are you sure?
                </p>
                <p className="text-base text-foreground-500 font-medium mt-1">
                  This action cannot be undone. Once you delete the quizz, there
                  is no going back.
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="bg-white py-2 px-4 rounded-lg border-dashed border-2">
                  <p className="text-foreground-700 font-semibold">
                    Quiz title, we will see if we settle down with 3 cards or 4
                  </p>
                  <p className="text-foreground-600">Quiz description</p>
                </div>
                <div className=" bg-blue-600 text-white px-2 py-1 rounded-lg max-w-36 text-center">
                  <p className="text-white text-small">Total 5 questions</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="bordered" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="danger" onPress={onClose}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
