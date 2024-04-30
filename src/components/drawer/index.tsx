import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"
import { TaskProps } from "../../models/task"
import { labelOptions } from "../../helpers/constants"

interface DrawerrProps {
  ref: any
  disclosure: any
  data: TaskProps
}

const Drawerr: React.FC<DrawerrProps> = ({ ref, disclosure, data }) => {
  const { isOpen, onClose } = disclosure

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        // @ts-ignore
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Detail Task</DrawerHeader>

          <DrawerBody>
            <table>
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>:</td>
                  <td>{data?.title}</td>
                </tr>
                <tr>
                  <td>Due Date</td>
                  <td>:</td>
                  <td>{data?.dueDate || '-'}</td>
                </tr>
                <tr>
                  <td>Label</td>
                  <td>:</td>
                  <td>{labelOptions.find((r) => r.value === data?.label)?.label}</td>
                </tr>
                <tr>
                  <td>Complete</td>
                  <td>:</td>
                  <td>{data?.isComplete ? "Completed" : "Not Completed"}</td>
                </tr>
              </tbody>
            </table>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Back
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Drawerr