import { useRef, useState } from "react"
import { Edit, Trash } from "react-feather"
import { Badge, Box, Button, IconButton, Switch, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import { useTaskStore } from "../../helpers/hooks"
import { Drawer, Modal } from ".."
import { TaskProps } from "../../models/task"
import { useNavigate } from "react-router-dom"

const Tablee: React.FC = () => {
  const btnRef = useRef()
  const navigate = useNavigate()

  const [selected, setSelected] = useState<TaskProps>()

  const { tasks, editTask, deleteTask } = useTaskStore((state) => state)

  const disclosure = useDisclosure()
  const disclosureDetail = useDisclosure()
  const { onOpen: onOpenDetail } = disclosureDetail
  const { onOpen, onClose } = disclosure

  return (
    <>
      {selected &&
        <Drawer ref={btnRef} disclosure={disclosureDetail} data={selected} />
      }
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Manage your task</TableCaption>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Title</Th>
              <Th>Due Date</Th>
              <Th textAlign={'center'}>Label</Th>
              <Th textAlign={'right'}>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map(({ title, label, dueDate, id, isComplete }, i) => (
              <Tr>
                <Td>{i + 1}</Td>
                <Td>
                  <Box>
                    <Text onClick={() => {
                      setSelected({
                        title, label, dueDate, id, isComplete
                      })
                      onOpenDetail()
                    }} color={'#0984e3'} fontWeight={'bold'} cursor={'pointer'}>{title}</Text>
                  </Box>
                </Td>
                <Td>{dueDate}</Td>
                <Td>
                  <Box textAlign={'center'}>
                    <Badge
                      bg={label === 'done' ? '#00b894' : label === 'doing' ? '#0984e3' : '#dfe6e9'}
                      color={label === 'done' ? 'white' : label === 'doing' ? 'white' : '#636e72'}
                    >
                      {label}
                    </Badge>
                  </Box>
                </Td>
                <Td>
                  <Box display={'flex'} justifyContent={'right'} alignItems={'center'} gap={2}>
                    <IconButton aria-label="edit" size={'sm'} bg={'#636e72'} icon={<Edit size={16} color="white" />}
                      onClick={() => navigate(`/edit-task/${id}`)}
                      isDisabled={isComplete} />
                    <IconButton aria-label="delete" size={'sm'} bg={'#d63031'} icon={<Trash size={16} color="white" />}
                      onClick={() => {
                        onOpen()
                        setSelected({
                          title, label, dueDate, id, isComplete
                        })
                      }}
                      isDisabled={isComplete} />
                    <Switch checked={isComplete} onChange={(e) => {
                      editTask({ title, label, dueDate, id, isComplete: !isComplete })
                    }}
                      isDisabled={label !== "done"}
                    />
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal disclosure={disclosure} title={'Delete Task'}
        content={
          <Box>
            Are you sure to delete this task?
          </Box>
        }
        footer={
          <Box display={'flex'} gap={2}>
            <Button onClick={onClose}>Cancel</Button>
            <Button bg={'#d63031'} color={'white'} onClick={() => {
              deleteTask(selected?.id || '')
              onClose()
            }}>Delete</Button>
          </Box>
        }
      />
    </>
  )
}

export default Tablee