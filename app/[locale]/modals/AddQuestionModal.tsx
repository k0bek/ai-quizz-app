"use client";
import { useModalStore } from "@/store/modalStore";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
  Modal,
  ModalContent,
  ModalFooter,
  Tab,
  Tabs,
} from "@nextui-org/react";
import React from "react";
let questions = [
  { title: "Question2" },
  { title: "Question3" },
  { title: "Question4" },
  { title: "Question5" },
];
function AddQuestionModal() {
  const { closeModal, isOpen } = useModalStore();
  const samplePlaceholder =
    "What is one of the key features of cryptocurrencies?";
  return (
    <Modal
      className="p-6 gap-6 flex"
      isOpen={isOpen}
      onOpenChange={closeModal}
      size="4xl"
    >
      <ModalContent>
        <Tabs
          size="md"
          variant="solid"
          radius="md"
          aria-label="Options"
          className="w-full h-full"
        >
          <Tab className="flex flex-col gap-4" key="photos" title="Manual">
            <div className="flex flex-col gap-4 h-full">
              <h1>Question Title</h1>
              <Input placeholder={samplePlaceholder} />
              <h1>Question Description</h1>
              <Input placeholder={samplePlaceholder} />
              <h1>Answers</h1>
              <section className="flex flex-col gap-2">
                {questions.map((question, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <Checkbox />
                    <Input placeholder={samplePlaceholder} />
                  </div>
                ))}
              </section>
            </div>
          </Tab>
          <Tab className="" key="AIGeneration" title="AI Generation">
            <div className="flex flex-col justify-center items-center h-full">
              <Card className="w-full h-full">
                <CardBody className="flex justify-center items-center text-center">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </div>
          </Tab>
        </Tabs>
        <ModalFooter>
          <Button variant="flat" color="primary" onClick={closeModal}>
            Cancel
          </Button>
          <Button color="primary" variant="solid">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddQuestionModal;
